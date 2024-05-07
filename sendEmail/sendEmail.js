import domGenerator from "dom-generator";
import "./index.scss";

function sendEmail() {
  let send = domGenerator({
    tag: "div",
    attributes: { id: "parentDiv" },
    // children: [{}],
  });


  document.body.append(send)
}
export default sendEmail;