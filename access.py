import requests
import base64
import urllib
import twitter_sign
import json
from tokens import Tokens


class TwitterAccess:
    def __init__(self):
        self.oauth_callback = 'https://daimenambersapp.com/callback'
        # self.url_encode_callback = urllib.parse.quote(self.oauth_callback)
        ### Tokens go here ###
        self.tokens = Tokens()

        self.key_secret = '{}:{}'.format(self.tokens.consumerKey, self.tokens.consumerSecret).encode('ascii')
        self.b64_encode_key = base64.b64encode(self.key_secret)
        self.b64_decode_key = self.b64_encode_key.decode('ascii')

        self.base_url = 'https://api.twitter.com/'

    def authorizeToken(self): # Definition to return the bearer token
        url = '{}oauth2/token'.format(self.base_url)
        auth_headers = {
            'Authorization': 'Basic {}'.format(self.b64_decode_key),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }

        auth_data = {
            'grant_type': 'client_credentials'
        }

        auth_resp = requests.post(url, headers=auth_headers, data=auth_data, verify=False)
        bearer_token = auth_resp.json()['access_token']
        return bearer_token

    def oauthRequest(self): #Not needed at the moment
        method = "post"
        url = '{}oauth/request_token'.format(self.base_url)
        oauth_parameters = twitter_sign.get_oauth_parameters(self.consumerKey, self.accessToken)
        url_parameters = {
            'oauth_callback': self.url_encode_callback
        }
        oauth_parameters['oauth_signature'] = twitter_sign.generate_signature(method, url, url_parameters, oauth_parameters, self.consumerKey, self.consumerSecret, self.tokenSecret)
        oauth_headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': twitter_sign.create_auth_header(oauth_parameters)}

        oauth_params = {
            'oauth_callback': self.url_encode_callback
        }
        print(oauth_headers)
        oauth_resp = requests.post(url, headers=oauth_headers, params=oauth_params)
        print(oauth_resp.status_code)

    def newTweet(self):
        method = "post"
        url = '{}1.1/statuses/update.json'.format(self.base_url)
        url_parameters = {
            'status': raw_input('Tweet-> ')
        }
        oauth_parameters = twitter_sign.get_oauth_parameters(self.consumerKey, self.accessToken)
        oauth_parameters['oauth_signature'] = twitter_sign.generate_signature(method, url, url_parameters, oauth_parameters, self.consumerKey, self.consumerSecret, self.tokenSecret)
        headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': twitter_sign.create_auth_header(oauth_parameters)
                }
        response = requests.post(url, headers=headers, params=url_parameters)
        print(response.status_code)

    def curateStory(self):
        method = "post"
        url = '{}1.1/collections/create.json'.format(self.base_url)
        url_parameters = {
            'Name': raw_input('Description-> '),
            'name': raw_input('Name of Collection-> '),
            'description': raw_input('Description of Collection-> ')
        }
        oauth_parameters = twitter_sign.get_oauth_parameters(self.consumerKey, self.accessToken)
        oauth_parameters['oauth_signature'] = twitter_sign.generate_signature(method, url, url_parameters, oauth_parameters, self.consumerKey, self.consumerSecret, self.tokenSecret)
        headers = {'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': twitter_sign.create_auth_header(oauth_parameters)}
        response = requests.post(url, headers=headers, params=url_parameters)
        print(response.status_code)
        print(response.json()['response']['timeline_id'])
        timeline_id = response.json()['response']['timeline_id']
        return(timeline_id)

    def getCollection(self):
        method = "get"
        url = '{}1.1/collections/show.json'.format(self.base_url)
        url_parameters = {
            'Name': "C",
            'id': 'custom-1170876786781097984'
        }
        oauth_parameters = twitter_sign.get_oauth_parameters(self.consumerKey, self.accessToken)
        oauth_parameters['oauth_signature'] = twitter_sign.generate_signature(method, url, url_parameters, oauth_parameters, self.consumerKey, self.consumerSecret, self.tokenSecret)
        headers = {'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': twitter_sign.create_auth_header(oauth_parameters)}
        response = requests.get(url, headers=headers, params=url_parameters)
        print(response.status_code)
        print(response.json()['response']['timeline_id'])

    def getHomeTimeLine(self):
        method = "get"
        url = '{}1.1/statuses/home_timeline.json'.format(self.base_url)
        url_parameters = {
            'Name': "C",
            'count': 10,
            'exclude_replies': True
        }
        oauth_parameters = twitter_sign.get_oauth_parameters(self.tokens.consumerKey, self.tokens.accessToken)
        oauth_parameters['oauth_signature'] = twitter_sign.generate_signature(method, url, url_parameters, oauth_parameters, self.tokens.consumerKey, self.tokens.consumerSecret, self.tokens.accessSecret)
        headers = {'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': twitter_sign.create_auth_header(oauth_parameters)}
        response = requests.get(url, headers=headers, params=url_parameters)
        print(response.status_code)
        for i in range(url_parameters['count']):
            print(i)
            print(response.json()[i]['text'] + '\n')


def main():
    newAuth = TwitterAccess()
    # token = newAuth.authorizeToken()
    # print(token)
    newAuth.getHomeTimeLine()
    # print(newAuth.authorizeToken())

if __name__ == '__main__':
    main()
