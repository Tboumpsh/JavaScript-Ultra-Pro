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
                properties: { type: "text", placeholder: "input..." },
                attributes: { id: "input" },
              },
              {
                tag: "button",
                attributes: { id: "buttonCTA" },
                eventListeners: { click: gust },
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

  function gust() {}
  function action() {}

  document.body.append(game);
}
export default gameChallenge;
