const React = require('react');

const WeatherMessage = React.createClass({
  render: function(){
    let {temp, location} = this.props;

    return (
      <h3> It is {temp} in {location} </h3>
    );
  }

});

module.exports = WeatherMessage;
