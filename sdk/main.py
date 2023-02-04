from datetime import datetime
import pandas as pd
import requests as re
import time
import random

ENDPOINT_URL = "https:///sdlkfjsdlfdslfjsldk/.com"


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

		# re.post(ENDPOINT_URL, json=json_data)
		print(json_data)

		time.sleep(0.5)


def get_info():
	username = 		input("username: ")
	hostname = 		input("hostname: ")
	cluster_id = 	input("cluster id: ")
	filename = 		input("filename: ")

	return filename, username, hostname, cluster_id


# "datasets/AEP_hourly.csv"
filename, username, hostname, cid = get_info()
ds = load_data(filename)

upload_data = upload_data(ds, username, hostname, cid)




