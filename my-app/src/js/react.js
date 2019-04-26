//Mock api https://4fce6549-08e0-4e54-b413-326bbce34ec7.mock.pstmn.io
import React, { Component } from 'react';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://5c3626bb6fc11c0014d3300a.mockapi.io/api/v1/users")
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
              Customer: {item.name} <br/>
              blog: {item.blog[0].Text}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MyComponent;
//ReactDOM.render(<MyComponent/>,document.getElementById('app'));
