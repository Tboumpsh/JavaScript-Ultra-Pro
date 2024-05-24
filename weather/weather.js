import domGenerator from "dom-generator";
import axios from "axios";
import "./index.scss";

import cardGenerator from "./component/cardComponentWeathers/weathersCard";

let weathersData;
async function weathersWebApplication() {
  let question = prompt("which city?");
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
              textContent: "A week -long weather in Cites province",
            },
            attributes: { id: "titleWeathersCard" },
          },
          {
            tag: "div",
            attributes: { id: "gridWeathers" },
            children: [
              {
                tag:   cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage: "https://unsplash.com/photos/multicolored-painting-YXQew2KZjzY?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
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
