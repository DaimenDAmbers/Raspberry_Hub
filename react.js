//Mock api https://4fce6549-08e0-4e54-b413-326bbce34ec7.mock.pstmn.io

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [0]
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users/2")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
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
          {items.map(data => (
            <li key={data.id}>
              {data.first_name} {data.last_name}
            </li>
          ))}
        </ul>
      );
    }
  }
}

ReactDOM.render(<MyComponent/>,document.getElementById('root'));
