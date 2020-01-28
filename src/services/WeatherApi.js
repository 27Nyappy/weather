import axios from 'axios';

const key = process.env.WEATHER_KEY;

export default function getWeather(time, code) {
  switch(time) {
    case 'weather':
      axios.get(`http://api.openweathermap.org/data/2.5/${time}?zip=${code},us&units=imperial&appid=${key}`)
        .then(res => {
          const date = Date(res.data.dt);
          console.log(res.data);
          const weatherObjDay = {
            main: res.data.main.temp,
            feelsLike: res.data.main.feels_like,
            maxTemp: res.data.main.temp_max,
            minTemp: res.data.main.temp_min,
            humidity: res.data.main.humidity,
            detail: res.data.weather[0].main,
            description: res.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
            detailTwo: res.data.weather[1].main,
            descriptionTwo: res.data.weather[1].description,
            iconTwo: `http://openweathermap.org/img/wn/${res.data.weather[1].icon}@2x.png`,
            date: date,
            city: res.data.name
          };
          return weatherObjDay;
        })
        .catch(err => console.log(err));
      break;
    case 'forecast':
      axios.get(`http://api.openweathermap.org/data/2.5/${time}?zip=${code},us&units=imperial&appid=${key}`)
        .then(res => {
          res.data.list.map(({ main, weather, dt }) => { 
            const dates = Date(dt);
            const weatherObjDays = {
              main: main.temp,
              feelsLike: main.feels_like,
              maxTemp: main.temp_max,
              minTemp: main.temp_min,
              humidity: main.humidity,
              detail: weather[0].main,
              description: weather[0].description,
              icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
              date: dates,
              city: res.data.city.name
            };
            return weatherObjDays;
          }
          );})
        .catch(err => err);
      break;
  }
}