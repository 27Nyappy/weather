import axios from 'axios';

const key = process.env.WEATHER_KEY;

export default function getWeather(time, code) {

  switch(time) {
    case 'weather':
      return axios.get(`https://api.openweathermap.org/data/2.5/${time}?zip=${code},us&units=imperial&appid=${key}`)
        .then(res => {
          const date = Date(res.data.dt);
          const weatherObjDay = {
            mainTemp: res.data.main.temp,
            feelsLike: res.data.main.feels_like,
            maxTemp: res.data.main.temp_max,
            minTemp: res.data.main.temp_min,
            humidity: res.data.main.humidity,
            detail: res.data.weather[0].main,
            description: res.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
            date: date,
            city: res.data.name
          };
          return weatherObjDay;
        })
        .catch(err => {
          throw err;
        });
    case 'forecast':
      return axios.get(`https://api.openweathermap.org/data/2.5/${time}?zip=${code},us&units=imperial&appid=${key}`)
        .then(res => {
          return res.data.list.map(({ main, weather, dt_txt }) => {
            const dates = new Date(`${dt_txt}`).toString();
            const weatherObjDays = {
              mainTemp: main.temp,
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
        .catch(err => {
          throw err;
        });
  }
}