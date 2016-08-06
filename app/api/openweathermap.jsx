const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3aa07c78922b4e4f557f27f03fd0d08d&units=imperial';



function getTemp(location){
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl)
  .then(function(res){
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message);
    } else {
      return Math.floor(res.data.main.temp);
    }
  }, function(res){
    throw new Error(res.data.message);
  });

}

module.exports = {
  getTemp: getTemp
};
