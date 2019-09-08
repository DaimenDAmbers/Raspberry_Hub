import requests
import base64

consumerKey = "dcbVy1h8Mrdd6ZhAX7KwYyx4a"
consumerSecret = "JJQJe2OrgAu0nYaJYVrKmt2iiyQCGij9H7xifZvjJyt4ZKeWrp"
accessToken = "1021945507516739584-pmEQangAGNfZC9hv2kIwBUR7Fy1sR0"
tokenSecret = "RlOM9DRMG0WRpthCd7XehFR5Cy3qJBYfoVpWJ7gS6vFzr"
basicAuth = "f1a0b8da-0c90-4a51-a26e-584d3bf9e6e8" #Not sure what this is anymore.

key_secret = '{}:{}'.format(consumerKey, consumerSecret).encode('ascii')
b64_encode_key = base64.b64encode(key_secret)
b64_encode_key = b64_encode_key.decode('ascii')

base_url = 'https://api.twitter.com/'
auth_url = '{}oauth2/token'.format(base_url)
auth_headers = {
    'Authorization': 'Basic {}'.format(b64_encode_key),
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }

auth_data = {
    'grant_type': 'client_credentials'
}

auth_resp = requests.post(auth_url, headers=auth_headers, data=auth_data)
access_token = auth_resp.json()['access_token']
# access_token = auth_resp.json()
print(accessToken)
print(auth_headers)
