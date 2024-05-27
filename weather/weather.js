import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import cardGenerator from "./component/cardComponentWeathers/weathersCard";

/**
 * Holds weather data fetched from the API.
 *
 * @type {any}
 */

let weathersData;

/**
 * Fetches weather data for a specified city in Iran and updates the DOM.
 *
 * This asynchronous function prompts the user to enter the name of a city in Iran, 
 * fetches weather data for the specified city from the OpenWeatherMap API, 
 * and updates the DOM to display the temperature information. If an error occurs 
 * during the API request, an alert is shown with the error message.
 *
 * @function weathersWebApplication
 * @returns {Promise<void>}
 * @example
 * // Call the function to start the weather data fetching process
 * weathersWebApplication();
 */
async function weathersWebApplication() {
  let question = prompt("Type the name of your desired city in Iran.");
  try {
    weathersData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${question}&appid=ebe61a099aba6dca4efcb2c23c229df9&units=metric`
    );
  } catch (error) {
    alert(error);
  }
  let weathers = domGenerator({
    tag: "div",
    attributes: { id: "weathersSection" },
    children: [
      {
        tag: "div",
        attributes: { id: "cardWeathersParent" },
        children: [
          {
            tag: "h1",
            properties: {
              textContent: "Temperature of Iranian cities",
            },
            attributes: { id: "titleWeathersCard" },
          },
          {
            tag: "div",
            attributes: { id: "gridWeathers" },
            children: [
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/weathers/jr-korpa-YXQew2KZjzY-unsplash.jpg",
                  title: weathersData.data.name,
                  pgraph: weathersData.data.main.temp,
                  //   weathersData.data.main.temp
                  // weathersData.data.name
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  document.body.append(weathers);
}
export default weathersWebApplication;
