//Mock api https://4fce6549-08e0-4e54-b413-326bbce34ec7.mock.pstmn.io

class Test extends React.Component {
  constructor() {
    super();
    this.state = { data: []};
  }

componentDidMount() {
  fetch('https://reqres.in/api/users/2')
    .then(response => response.json())
    .then(items => this.setState({items}));

  }

  render() {
    return (
      <ul>
        {this.state.data.map(item=><li key={item.data.id}>{item.data.first_name}</li>)}
      </ul>
    );
  }

}

ReactDOM.render(<Test/>,document.getElementById('root'));
