// Import the core modules
import 'core-js';
import 'regenerator-runtime';

// Importing functionality from other modules
import { weatherData } from './model.js';
import { app } from './views/cardView.js';

// Get the current position of the person
navigator.geolocation.getCurrentPosition(
  async function (position) {
    // Get the latitude and longitude of the current location
    const { latitude: lat, longitude: lng } = position.coords;
    try {
      // Consume the returned data
      const apiData = await weatherData(lat, lng);

      // Display the data to the UI
      app.displayCard(apiData);
    } catch (err) {
      // Handle the error from the other module
      console.error(err.message);
    }
  },
  function (err) {
    // Throw an error incase their is no location
    console.error(err.message);
  }
);
