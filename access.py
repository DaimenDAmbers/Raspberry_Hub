import requests
import base64

consumerKey = "Zi2YZlt5GrkFdnPDAQM840sYi"
consumerSecret = "WbeHhAF5utlGnJ4lY1ELIf4lnFKbDJmut8OPUsxiJNWi5G3mHS"
accessToken = "2200974972-xyb9647TzntMqtGseJPGJXs2cT5Ahv0YWwtRqkL"
tokenSecret = "tYHwDwLnl1AV56ENC13YkW7NDjllM5NcVmsCX6L4sy9E9"
basicAuth = "f1a0b8da-0c90-4a51-a26e-584d3bf9e6e8"

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
