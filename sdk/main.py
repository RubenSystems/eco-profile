from datetime import datetime
import pandas as pd
import requests as re
import time
import random
import argparse

parser = argparse.ArgumentParser(
                    prog = 'Main',
                    description = 'Generates Data',
                    epilog = 'good luck!')

parser.add_argument('--username', required=False)
parser.add_argument('--hostname', required=False)
parser.add_argument('--cluster_id', required=False)

args = parser.parse_args()


ENDPOINT_URL = "http://localhost:8000/metrics"

def load_data(filename: str): 
	dataset = pd.read_csv(filename)
	return dataset[dataset.columns[1:]]


def get_data_at_row(dataset, row):
	return dataset.iloc[row].values[0]


def upload_data(dataset, username, hostname, cluster_id):
	for row in range(len(dataset)):
		value = get_data_at_row(dataset, row)

		json_data = {
			"powerUsage": value / 1000.0,
			"cpuLoad": random.randint(20, 85),
			"timestamp": datetime.now().isoformat(),
			"username": username,
			"hostId": hostname,
			"clusterId": cluster_id
		}

		re.post(ENDPOINT_URL, json=json_data)
		print(json_data)

		time.sleep(0.2)


# "datasets/AEP_hourly.csv"
filename = "dataset.csv"

if args.username is None or args.hostname is None or args.cluster_id is None: 
	username, hostname, cid = get_info()
else:
	username, hostname, cid = args.username, args.hostname, args.cluster_id

print(username, hostname, cid)
ds = load_data(filename)

upload_data = upload_data(ds, username, hostname, cid)




