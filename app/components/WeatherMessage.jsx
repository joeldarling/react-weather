const React = require('react');

const WeatherMessage = ({ temp, location }) => {  
  return (
    <h4 className='text-center'> It is {temp} degrees in {location} </h4>
  );
}

module.exports = WeatherMessage;
