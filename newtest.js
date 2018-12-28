var Twit = require('twit')

var T = new Twit({
  consumer_key:         'Zi2YZlt5GrkFdnPDAQM840sYi ',
  consumer_secret:      'WbeHhAF5utlGnJ4lY1ELIf4lnFKbDJmut8OPUsxiJNWi5G3mHS',
  access_token:         '2200974972-xyb9647TzntMqtGseJPGJXs2cT5Ahv0YWwtRqkL',
  access_token_secret:  'tYHwDwLnl1AV56ENC13YkW7NDjllM5NcVmsCX6L4sy9E9 ',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
