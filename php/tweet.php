<?php
  //keys and tokens
  $consumer_key = 'Zi2YZlt5GrkFdnPDAQM840sYi';
  $consumer_secret = 'WbeHhAF5utlGnJ4lY1ELIf4lnFKbDJmut8OPUsxiJNWi5G3mHS';
  $access_token = '2200974972-xyb9647TzntMqtGseJPGJXs2cT5Ahv0YWwtRqkL';
  $access_token_secret = 'tYHwDwLnl1AV56ENC13YkW7NDjllM5NcVmsCX6L4sy9E9';

  //Include library
  require "../twitteroauth/autoload.php";
  //require "../twitteroauth/autoload.php";
  use Abraham\TwitterOAuth\TwitterOAuth;
  // Connect to APIs
  $conn = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);
  $content = $conn->get("account/verify_credentials");

  //$new_status = $conn->post("statuses/update", ["status" => "This tweet sent via the Twitter API. Don't mind me just breaking things."]);

  // Get tweets
  $statuses = $conn->get("statuses/home_timeline", ["name" => 'Kings', "count" => 2, "exclude_replies" => true]);

  print_r($statuses);
