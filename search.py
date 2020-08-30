# from access import access_token as access_token, requests, base_url
from access import TwitterAccess
import requests

def main():
    instance = TwitterAccess()
    search_headers = {
        'Authorization': 'Bearer {}'.format(instance.bearer_token())
    }

    search_params = {
        'q': 'General Election',
        'result_type': 'recent',
        'count': 2
    }

    search_url = '{}1.1/search/tweets.json'.format(instance.base_url)

    search_resp = requests.get(search_url, headers=search_headers, params=search_params, verify=False)
    print(search_resp.status_code)
    tweet_data = search_resp.json()['statuses']

    for x in range(0, (search_params['count'])):
        print(x)
        print(tweet_data[x]['text'] + '\n')

if __name__ == '__main__':
    main()
