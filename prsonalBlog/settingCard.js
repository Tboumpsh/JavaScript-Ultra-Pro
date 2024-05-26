import domGenerator from "dom-generator";
import "./index.scss";

import BlogList from "./blogList";

function settingCards() {
  let isOpen = false;

  let cardSetting = domGenerator({
    tag: "section",
    attributes: { id: "blogSetting" },
    children: [
      {
        tag: "input",
        attributes: { id: "titleBlog" },
        properties: { placeholder: "blog:", type: "text" },
      },
      {
        tag: "textarea",
        attributes: { id: "descriptionArea" },
        properties: { placeholder: "blog:" },
      },
      {
        tag: "button",
        attributes: { id: "publish" },
        properties: { textContent: "publish" },
        eventListeners: { click: publishBlogs },
      },
      {
        tag: "button",
        attributes: { id: "close" },
        properties: { textContent: "❌" },
        eventListeners: { click: closeSetting },
      },
    ],
  });

  function publishBlogs() {
    let title = document.getElementById("titleBlog").value;
    let textArea = document.getElementById("descriptionArea").value;
    let getValue = new GetValue(title, textArea); // Added 'new' keyword
    getValue.fullBlog();
    closeSetting();
  }

  function GetValue(postTitle, postBody) {
    this.postBody = postBody;
    this.postTitle = postTitle;
    this.fullBlog = function () {
      BlogList(this.postTitle, this.postBody);
    };
  }

  function closeSetting() {
    const blogSetting = document.getElementById("blogSetting");
    if (blogSetting) {
      blogSetting.style.display = "none";
    }
    document.getElementById("titleBlog").value = '';
    document.getElementById("descriptionArea").value = '';
  }

  document.body.append(cardSetting);
}
export default settingCards;
