const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
    };
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location)
    .then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    })
    .catch(function(err){
      that.setState({isLoading: false, location: null, temp: null});
      console.log(err);
    })
  },
  render: function(){
    let {isLoading, temp, location} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3> Fetching weather... </h3>;
      } else if (temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center"> Get Weather </h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;
