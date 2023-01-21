//Fetch the api key from the config file
import { API_KEY } from './config.js';

// Fetches data from the open weather api
export const weatherData = async function (lat, lng) {
  try {
    // Fetch data from the api
    // prettier-ignore
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);

    // Throw an error
    if (!response.ok) throw new Error('Please check your internet connection');

    // Convert the data to json format
    const result = await response.json();
    const data = result.daily;

    // Return the data
    return data;
  } catch (err) {
    // Handle the error by rethrowing it again
    throw new Error(err.message);
  }
};
