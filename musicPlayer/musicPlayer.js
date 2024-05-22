import domGenerator from "dom-generator";
import "./index.scss";

import buttonGenerator from "./component/buttonComponent/buttonComponent";
import cardGenerator from "./component/cardComponent/cardComponent";

function musicPlayerPlatform() {
  let musicPlayer = domGenerator({
    tag: "div",
    attributes: { id: "appPlayer" },
    children: [
      {
        tag: cardGenerator({
          size: "medium",
          status: "primary",
          className: "CardMusicPlayer",
          upImage:
            "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
        }),
        children: [
          {
            tag: "div",
            attributes: { id: "musicController" },
            children: [
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "medium",
                  statues: "primary",
                  // eventListeners: { click: sendEmails },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "large",
                  statues: "primary",
                  // eventListeners: { click: sendEmails },
                }),
              },
              {
                tag: buttonGenerator({
                  content: "play",
                  size: "medium",
                  statues: "primary",
                  // eventListeners: { click: sendEmails },
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  document.body.append(musicPlayer);
}
export default musicPlayerPlatform;
