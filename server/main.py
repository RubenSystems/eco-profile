from datetime import datetime, timedelta
from typing import Union

import pymongo
<<<<<<< Updated upstream
=======
from dateutil import parser
>>>>>>> Stashed changes
from fastapi import FastAPI, Header
from pydantic import BaseModel
import motor.motor_asyncio
from dateutil import parser

from machine_learning import model_loader
<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
import numpy as np

class Metric(BaseModel):
    timestamp: str
    username: str
    clusterId: str
    hostId: str
    powerUsage: float
    cpuLoad: float


app = FastAPI()


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')
db = client['ecoprofiler']
metricsCollection = db['metrics']


def transform(e):
    if '_id' in e:
        e['_id'] = str(e['_id'])

    e["predicted"] = False
    return e


loader = model_loader()
anomaly = loader.load("models/anomaly/my_model")
predict = loader.load("models/predict/my_model")


@app.get("/")
async def root(username: Union[str, None] = Header(default=None)):
    now = datetime.now()
    now.replace(tzinfo=None)
    ago = now - timedelta(hours=5)
    # print(ago.isoformat())

    pipeline = [
        {
            "$match": {
                "username": username or "ai start up",
                "timestamp": {
                    "$gt": ago.isoformat()
                }
            }
        },
        {
            "$sort": {
                "timestamp": 1
            }
        },
        {
            "$group": {
                "_id": "$clusterId",
                "data": {
                    "$push": {
                        "timestamp": "$timestamp",
                        "powerUsage": "$powerUsage",
                        "cpuLoad": "$cpuLoad"
                    }
                }
            }
        },
        {
            "$project": {
                "_id": 0,
                "clusterId": "$_id",
                "data": 1
            }
        }
    ]

    result = await metricsCollection.aggregate(pipeline).to_list(length=None)

    print(result)

    for cluster_idx in range(len(result)):
        m = dict()
        for d in result[cluster_idx]['data']:
            if d['timestamp'] not in m:
                m[d['timestamp']] = {}
                m[d['timestamp']]['timestamp'] = d['timestamp']
                m[d['timestamp']]['powerUsage'] = 0
                m[d['timestamp']]['cpuLoad'] = 0

            m[d['timestamp']]['powerUsage'] += d['powerUsage']
            m[d['timestamp']]['cpuLoad'] += d['cpuLoad']

        result[cluster_idx]['data'] = list(m.values())

    return list(map(transform, result))


@app.get("/cluster/{clusterId}")
async def getClusters(clusterId: str, username: Union[str, None] = Header(default=None)):
    now = datetime.now()
    now.replace(tzinfo=None)
    ago = now - timedelta(hours=3)
    # print(ago.isoformat())

    pipeline = [
        {
            "$match": {
                "username": username or "ai start up",
                "clusterId": clusterId,
                "timestamp": {
                    "$gt": ago.isoformat()
                }
            }
        },
        {
            "$sort": {
                "timestamp": 1
            }
        },
        {
            "$group": {
                "_id": "$hostId",
                "data": {
                    "$push": {
                        "timestamp": "$timestamp",
                        "powerUsage": "$powerUsage",
                        "cpuLoad": "$cpuLoad"
                    }
                }
            }
        },
        {
            "$project": {
                "_id": 0,
                "hostId": "$_id",
                "data": 1
            }
        }
    ]

    result = await metricsCollection.aggregate(pipeline).to_list(length=None)
    return list(map(transform, result))


@app.get("/cluster/{clusterId}/host/{hostId}")
async def getHost(clusterId: str, hostId: str, username: Union[str, None] = Header(default=None)):
    pipeline = [
        {
            "$match": {
                "username": username or "ai start up",
                "clusterId": clusterId,
                "hostId": hostId
            }
        },
        {
            "$sort": {
                "timestamp": 1
            }
        },
    ]

    result = await metricsCollection.aggregate(pipeline).to_list(length=None)
    activeSince = None
    currentCpuLoad = None

    if len(result) > 0:
        activeSince = result[0]['timestamp']
        currentCpuLoad = result[-1]['cpuLoad']

    pipeline = [
        {
            "$match": {
                "username": username or "ai start up",
                "clusterId": clusterId,
                "hostId": hostId
            }
        },
        {
            "$group": {
                "_id": hostId,
                "totalPowerUsage": {
                    "$sum": "$powerUsage"
                }
            }
        },
    ]

    result = await metricsCollection.aggregate(pipeline).to_list(length=None)

    print(result)

    return {
        "activeSince": activeSince,
        "currentCpuLoad": currentCpuLoad,
        "esgScore": 96,
        "totalPowerUsage": result[0]['totalPowerUsage']
    }



@app.get("/cluster/{clusterId}/host/{hostId}/live")
async def getHost(clusterId: str, hostId: str, username: Union[str, None] = Header(default=None)):



    now = datetime.now()
    now.replace(tzinfo=None)
    ago = now - timedelta(hours=3)

    pipeline = [
        {
            "$match": {
                "username": username or "ai start up",
                "clusterId": clusterId,
                "hostId": hostId,
                "timestamp": {
                    "$gt": ago.isoformat()
                }
            }
        },
        {
            "$sort": {
                "timestamp": 1
            }
        }
    ]






    result = await metricsCollection.aggregate(pipeline).to_list(length=None)
<<<<<<< Updated upstream
    print(result)

    tsm1 = parser.parse(result[-1]["timestamp"])
    time_delta = tsm1 - parser.parse(result[-2]["timestamp"])


    data = np.array([x["powerUsage"] for x in result])
    predictions = predict.predict((np.array([x * 1000.0 for x in data[:200]])).reshape(1, 200, 1))
    augmented_data = []
    base_timestamp = tsm1
    for prediction in predictions[0]: 

        augmented_data.append({
            "_id":str(result[-1]["_id"]),
            "timestamp":base_timestamp.isoformat(),
            "username":result[-1]["username"],
            "clusterId":result[-1]["clusterId"],
            "hostId":result[-1]["hostId"],
            "powerUsage": round(float(prediction) / 1000.0, 3),
            "predicted":True
        })

        base_timestamp += time_delta
        
    db_data = list(map(transform, result))

    db_data += augmented_data
=======
    db_data = list(map(transform, result))

    return db_data

@app.get("/cluster/{clusterId}/host/{hostId}/predict")
async def getPredict(clusterId: str, hostId: str, username: Union[str, None] = Header(default=None)):
    now = datetime.now()
    now.replace(tzinfo=None)
    ago = now - timedelta(minutes=mins)

    pipeline = [
        {
            "$match": {
                "username": username or "scale ai",
                "clusterId": clusterId,
                "hostId": hostId,
                "timestamp": {
                    "$gt": ago.isoformat()
                }
            }
        },
        {
            "$sort": {
                "timestamp": 1
            }
        }
    ]

    result = await metricsCollection.aggregate(pipeline).to_list(length=None)
    db_data = []

    if len(result) > 200:
        tsm1 = parser.parse(result[-1]["timestamp"])
        time_delta = tsm1 - parser.parse(result[-2]["timestamp"])

        data = np.array([x["powerUsage"] for x in result])
        predictions = predict.predict((np.array([x * 1000.0 for x in data[:200]])).reshape(1, 200, 1))
        augmented_data = []
        base_timestamp = tsm1
        for prediction in predictions[0]:
            augmented_data.append({
                "_id":str(result[-1]["_id"]),
                "timestamp":base_timestamp.isoformat(),
                "username":result[-1]["username"],
                "clusterId":result[-1]["clusterId"],
                "hostId":result[-1]["hostId"],
                "powerUsage": round(float(prediction) / 1000.0, 3),
                "predicted":True
            })
        
            base_timestamp += time_delta
   
        db_data += augmented_data
>>>>>>> Stashed changes

    return db_data



@app.post("/metrics")
async def postMetrics(metric: Metric):
    def ceil_dt(dt, delta):
        dt = dt.replace(tzinfo=None)
        return dt + (datetime.min - dt) % delta

    date = datetime.fromisoformat(metric.timestamp)
    metric.timestamp = ceil_dt(date, timedelta(seconds=1)).isoformat()

    query = {
        "username": metric.username,
        "clusterId": metric.clusterId,
        "hostId": metric.hostId,
        "timestamp": metric.timestamp
    }

    result = await metricsCollection.find_one(query)
    if result:
        updateData = {
            '$set': {
<<<<<<< Updated upstream
                # TODO: - ASK WHY ADD!!!!!
=======
>>>>>>> Stashed changes
                # 'powerUsage': result['powerUsage'] + metric.powerUsage,
                # 'cpuLoad': result['cpuLoad'] + metric.cpuLoad
                'powerUsage': metric.powerUsage,
                'cpuLoad': metric.cpuLoad
            }
        }

        updateResult = await metricsCollection.update_one(query, updateData)
        return {
            "updatedId": str(result['_id'])
        }

    # print(metric.dict())
    result = await metricsCollection.insert_one(metric.dict())
    return {"insertedId": str(result.inserted_id)}


