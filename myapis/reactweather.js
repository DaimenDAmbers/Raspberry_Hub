class WeatherComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch('http://dataservice.accuweather.com/currentconditions/v1/30318?apikey='+ApiKey.weatherApiKey)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
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
      return <div>Loading weather...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li>
              Weather Conditions {item[0].Temperature.Imperial.Value}
              Date{item[0].LocalObservationDateTime}
            </li>
          ))}
        </ul>
      );
    }
  }
}

ReactDOM.render(<WeatherComp />, document.getElementById('weather'));
