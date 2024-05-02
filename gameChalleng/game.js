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
  });



  document.body.append(game);
}
export default gameChallenge;