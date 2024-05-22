import domGenerator from "dom-generator";
import "./index.scss";

function RockPaperScissorsGame() {
  let RockPaperScissors = domGenerator({
    tag: "div",
    attributes: { id: "appPlayer" },
    children: [],
  });

  document.body.append(RockPaperScissors);
}
export default RockPaperScissorsGame;
