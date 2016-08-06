const React = require('react');

const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

console.log(openWeatherMap.getTemp);
const Weather = React.createClass({
  getInitialState: function(){
    return {
      location: 'NYC',
      temp: '88'
    };
  },
  handleSearch: function(location){
    var that = this;
    openWeatherMap.getTemp(location)
    .then(function(temp){
      that.setState({
        location: location,
        temp: temp
      });
    })
    .catch(function(err){
      console.log(err);
    })
  },
  render: function(){
    let {temp, location} = this.state;

    return (
      <div>
        <h3> Weather </h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }

});

module.exports = Weather;
