import domGenerator from "dom-generator";
import "./game.scss";

/**
 * Generates a button that changes the background color of the body in a cyclic order when clicked.
 * @returns {void}
 */
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
  let wrongAnswers = 0;
  function guess() {
    let form = document.getElementById("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    let input = document.getElementById("input");
    let i = 0;

    let loopComplete = false;
    while (i < 5 && wrongAnswers < 5) {
      if (parseInt(input.value) === number) {
        console.log("You win!");
        loopComplete = true;
        break;
      } else if (parseInt(input.value) > number) {
        console.log("Too large");
        wrongAnswers++;
        loopComplete = false;
        break;
      } else if (parseInt(input.value) < number) {
        console.log("Too small");
        wrongAnswers++;
        console.log(wrongAnswers);
        loopComplete = false;
        break;
      }

      // Exit the loop if the user has entered 5 wrong answers.
      if (wrongAnswers == 5) {
        loopComplete = true;
        break;
      }

      // Increment the i variable.
      i++;
    }

    if (loopComplete === true) {
      console.log("You lose!");
    }
  }
  function action() {
    number = Math.floor(Math.random() * 100);
    console.log(number);
  }

  document.body.append(game);
}
export default gameChallenge;
