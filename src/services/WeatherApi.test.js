import mockAxios from 'axios';
import getWeather from './WeatherApi';


describe('Gets Data', () => {
  it('Gets Data Successfully From an API', async() => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {
      main: {
        temp: 50.13,
        feels_like: 43.68,
        temp_max: 53.6,
        temp_min: 46,
        humidity: 81
      },
      weather: [{
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n'
      }],
      date: 1580205765227,
      name: 'Portland'
    }
    }));
    const search = await getWeather('weather', 97230);
    expect(search).toEqual({
      mainTemp: 50.13,
      feelsLike: 43.68,
      maxTemp: 53.6,
      minTemp: 46,
      humidity: 81,
      detail: 'Rain',
      description: 'moderate rain',
      icon: 'http://openweathermap.org/img/wn/10n@2x.png',
      date: Date(1580205765227),
      city: 'Portland'
    });
  });
});