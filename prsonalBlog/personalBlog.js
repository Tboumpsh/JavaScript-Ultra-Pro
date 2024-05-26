import domGenerator from "dom-generator";
import "./index.scss";

import settingCards from "./settingCard";

function personalBlog() {
  let blogs = domGenerator({
    tag: "div",
    attributes: { id: "blogBackground" },
    children: [
      {
        tag: "div",
        attributes: { id: "headerBlog" },
        children: [
          {
            tag: "div",
            attributes: { id: "profile" },
          },
          {
            tag: "h2",
            attributes: { id: "logoName" },
            properties: { textContent: "personal Blogs🌟" },
          },
        ],
      },
      {
        tag: "section",
        attributes: { id: "cardSection" },
      },
      {
        tag: "button",
        attributes: { id: "floatButtons" },
        properties: { textContent: "+" },
        eventListeners: { click: showSettingForm },
      },
    ],
  });

  function showSettingForm() {
    settingCards();
  }
  document.body.append(blogs);
}
export default personalBlog;
