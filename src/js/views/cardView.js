// Import the npm modules
import moment from 'moment';

//Importing functionality from other modules
import { weather } from '../dom';

// Initialize a class
class App {
  constructor() {}

  // Method to display data to the UI
  // Method has been made public do that it can be accessed by other modules
  displayCard(data) {
    // Loop over the data passed in the nethod
    data.forEach(function (result, index, array) {
      // Create a string
      const html = `
        <div class="weather-div">
          <p class="day">${moment(result.dt * 1000).format('ddd, Do MMM')}</p>
          <p class="sunrise">sunrise: <span>${moment(
            result.sunset * 1000
          ).format('hh:mm a')}</span></p>
          <p class="sunrise">sunset: <span>${moment(
            result.sunrise * 1000
          ).format('hh:mm a')}</span></p>          
          <p class="humidity">humidity: <span>${result.humidity}</span></p>
          <p class="temperature">temperature: <span>${
            result.temp.day
          }</span></p>
        </div>
      `;

      // Insert the data to the UI
      weather.insertAdjacentHTML('beforeend', html);
    });
  }
}

// Export the class
export const app = new App();
