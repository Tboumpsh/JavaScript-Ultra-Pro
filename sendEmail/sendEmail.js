import domGenerator from "dom-generator";
import "./index.scss";

import inputGenerator from "./components/inputComponents/inputComponent";

function sendEmail() {
  let send = domGenerator({
    tag: "section",
    attributes: { id: "section" },
    children: [
      {
        tag: "div",
        attributes: { id: "parentDiv" },
        children:[
            {
                tag:'form',
                attributes:{id:'formValidation'},
                children:[
                    {
                        tag:'input',
                    }
                ]
            }
        ]
      },
    ],
  });

  document.body.append(send);
}
export default sendEmail;
