var ApiKey = {
  weatherApiKey: "n8em4PiW9Y2YzNg1j6eLkmGbZbTAGub2",
  consumerApiKey: "Zi2YZlt5GrkFdnPDAQM840sYi",
  consumerApiSecretKey: "WbeHhAF5utlGnJ4lY1ELIf4lnFKbDJmut8OPUsxiJNWi5G3mHS",
  accessToken: "2200974972-xyb9647TzntMqtGseJPGJXs2cT5Ahv0YWwtRqkL",
  accessTokenSecret: "tYHwDwLnl1AV56ENC13YkW7NDjllM5NcVmsCX6L4sy9E9"
};

function auth() {
  this.consumerApiKey = ApiKey.consumerApiKey;
  this.consumerApiSecretKey = ApiKey.consumerApiSecretKey;
  this.accessToken = ApiKey.accessToken;
  this.accessTokenSecret = ApiKey.accessTokenSecret;
}
