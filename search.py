from access import access_token, requests, base_url

search_headers = {
    'Authorization': 'Bearer {}'.format(access_token)
}

search_params = {
    'q': 'General Election',
    'result_type': 'recent',
    'count': 2
}

search_url = '{}1.1/search/tweets.json'.format(base_url)

search_resp = requests.get(search_url, headers=search_headers, params=search_params)
print(search_resp.status_code)
tweet_data = search_resp.json()
for x in tweet_data['statuses']:
    print(x['text'] + '\n')