//Mock api https://4fce6549-08e0-4e54-b413-326bbce34ec7.mock.pstmn.io
import React, { Component } from 'react';
const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?count=10&screen_name=twitterapi";
const bearer_token = "AAAAAAAAAAAAAAAAAAAAAHW29AAAAAAARLPJcS6XWkz1YZSdP%2Bkn1hOoWwA%3D8ppsERuJu6kv5ZkO40rsynEMktFSrfI95kp5s1D36tk4Q8LvzW";
const bearer = 'Bearer ' + bearer_token;

export class MyTwitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(url, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        "Authorization": bearer,
        "Content-Type": 'application/json',
        //"Origin": "http://localhost:3000",
        "Access-Control-Allow-Origin" : "http://127.0.0.1:3000",
        "Access-Control-Allow-Headers" : 'origin, content-type, accept, authorization',
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS, HEAD",
        "Access-Control-Max-Age" : 1209600,
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result //this.state.items where items = can be mapped to this.state later
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              Text: {item.text} <br/>
              Created at: {item.created_at}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyTwitter;
//ReactDOM.render(<MyTwitter/>,document.getElementById('app'));
