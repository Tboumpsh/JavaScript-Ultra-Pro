import domGenerator from "dom-generator";
import "./silverBox.min.scss";
import "./game.scss";

import findNumber from "./guessNumber";

function gameChallenge() {
  let game = domGenerator({
    tag: "div",
    attributes: { id: "parentDiv" },
    children: [
      {
        tag: "div",
        attributes: { id: "gamePlace" },
        children: [
          {
            tag: "h1",
            attributes: { id: "title" },
            properties: { textContent: "Welcome in my Game" },
          },
          {
            tag: "p",
            attributes: { id: "paragraph" },
            properties: {
              textContent:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt provident tenetur, laboriosam soluta, dolorem magnam rerum quia distinctio dignissimos possimus corporis quos, quo quisquam? Id ducimus consequatur quas nobis iusto. ",
            },
          },
          {
            tag: "form",
            attributes: { id: "form" },
            children: [
              {
                tag: "label",
                properties: { textContent: "Enter your guess number:" },
              },
              {
                tag: "input",
                properties: { type: "number", placeholder: "input..." },
                attributes: { id: "input" },
              },
              {
                tag: "button",
                attributes: { id: "buttonCTA" },
                eventListeners: { click: guess },
                properties: { textContent: "Welcome in my Game" },
              },
            ],
          },
          {
            tag: "button",
            attributes: { id: "buttonP" },
            eventListeners: { click: action },
            properties: { textContent: "START" },
          },
        ],
      },
    ],
  });
  let number;
  function guess() {
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    let input = document.getElementById("input");
    findNumber(input, number);
  }
  function action() {
    number = Math.floor(Math.random() * 100);
    silverBox({
      timer: 2000,
      customIcon: "./images/gameChallenge/download (2).jpg",
      title: {
        text: "I chose the number.",
      },
      centerContent: true,
    });
  }

  document.body.append(game);
}
export default gameChallenge;
