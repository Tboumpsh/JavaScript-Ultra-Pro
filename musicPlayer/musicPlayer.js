import domGenerator from "dom-generator";
import "./index.scss";

function musicPlayerPlatform() {
  let musicPlayer = domGenerator({
    tag: "div",
    attributes: { id: "appPlayer" },
    children: [
      
      {
        tag: "div",
        attributes: { id: "CardMusicPlayer" },
        children: [
          {
            tag: "div",
            attributes: { id: "musicImage" },
          },
          {
            tag: "div",
            attributes: { id: "musicController" },
            children: [
              {
                tag: "button",
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
