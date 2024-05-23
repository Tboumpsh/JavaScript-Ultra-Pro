import domGenerator from "dom-generator";
import "./index.scss";

import cardGenerator from "./component/cardComponentWeathers/weathersCard";

function weathersWebApplication() {
  let weathers = domGenerator({
    tag: "div",
    attributes: { id: "weathersSection" },
    children: [
      {
        tag: "div",
        attributes: { id: "cardWeathersParent" },
        children: [
          {
            tag: "h1",
            properties: {
              textContent: "A week -long weather in Bushehr province",
            },
            attributes: { id: "titleWeathersCard" },
          },
          {
            tag: "div",
            attributes: { id: "gridWeathers" },
            children: [
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
              {
                tag: cardGenerator({
                  size: "extraLarge",
                  status: "primary",
                  upImage:
                    "../public/images/musicPlayer/danny-howe-bn-D2bCvpik-unsplash.jpg",
                  title: "pppp",
                  pgraph: "sdfcsfvwsarvgewage5grw",
                }),
              },
            ],
          },
        ],
      },
    ],
  });

  document.body.append(weathers);
}
export default weathersWebApplication;
