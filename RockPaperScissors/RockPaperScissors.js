import domGenerator from "dom-generator";
import "./index.scss";

import buttonRockPaperScissorsComponent from "./component/buttonsComponent";

function rockPaperScissorsGame() {
  let rockPaperScissors = domGenerator({
    tag: "div",
    attributes: { id: "backgroundGame" },
    children: [
      {
        tag: "section",
        attributes: { id: "headerSection" },
        children: [
          {
            tag: "h1",
            properties: { textContent: "Scores:" },
            attributes: { id: "Scores" },
          },
        ],
      },
      {
        tag: "div",
        attributes: { id: "buttonsGroup" },
        children: [
          {
            tag: buttonRockPaperScissorsComponent({
              content: "play",
              size: "medium",
              statues: "possible",
              // eventListeners: { click: sendEmails },
            }),
          },
          {
            tag: buttonRockPaperScissorsComponent({
              content: "play",
              size: "medium",
              statues: "possible",
              // eventListeners: { click: sendEmails },
            }),
          },
          {
            tag: buttonRockPaperScissorsComponent({
              content: "play",
              size: "medium",
              statues: "possible",
              // eventListeners: { click: sendEmails },
            }),
          },
        ],
      },
    ],
  });
  let statusHand = [
    {
      id: 1,
      statues: "rock",
      image: "../public/images/RockPaperScissors/game.png",
    },
    {
      id: 2,
      statues: "paper",
      image: "../public/images/RockPaperScissors/game.png",
    },
    {
      id: 2,
      statues: "scissors",
      image: "../public/images/RockPaperScissors/game.png",
    },
  ];


  function HandGame() {
    
  }

  document.body.append(rockPaperScissors);
}
export default rockPaperScissorsGame;
