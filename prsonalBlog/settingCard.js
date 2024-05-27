import domGenerator from "dom-generator";
import "./index.scss";

import BlogList from "./blogList";

/**
 * Creates and manages the settings interface for adding new blog posts.
 *
 * This function generates a settings interface that allows users to input a blog title and description,
 * and includes buttons for publishing the blog post and closing the settings interface. When the publish
 * button is clicked, the blog post is added to the blog list and the settings interface is closed.
 *
 * @function settingCards
 * @returns {void}
 * @example
 * // Call the function to initialize and render the settings interface for blog posts
 * settingCards();
 */
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
/**
   * Publishes the blog post by extracting values from the input fields and adding them to the blog list.
   *
   * This function retrieves the title and description from the input fields, creates a new `GetValue`
   * instance to encapsulate the blog post data, and calls its `fullBlog` method to add the post to the
   * blog list. It also closes the settings interface after publishing.
   *
   * @function publishBlogs
   * @returns {void}
   */
  function publishBlogs() {
    let title = document.getElementById("titleBlog").value;
    let textArea = document.getElementById("descriptionArea").value;
    let getValue = new GetValue(title, textArea); // Added 'new' keyword
    getValue.fullBlog();
    closeSetting();
  }
 /**
   * Constructor function to encapsulate the blog post data.
   *
   * This constructor function creates an object with the blog post title and body, and provides a method
   * to add the blog post to the blog list.
   *
   * @constructor GetValue
   * @param {string} postTitle - The title of the blog post.
   * @param {string} postBody - The body content of the blog post.
   */
  function GetValue(postTitle, postBody) {
    this.postBody = postBody;
    this.postTitle = postTitle;
    
    /**
     * Adds the blog post to the blog list.
     *
     * This method calls the `BlogList` function to add the blog post with the stored title and body content
     * to the blog list.
     *
     * @method fullBlog
     * @returns {void}
     */
    this.fullBlog = function () {
      BlogList(this.postTitle, this.postBody);
    };
  }
/**
   * Closes the settings interface and clears the input fields.
   *
   * This function hides the settings interface by setting its display style to 'none' and clears the
   * values of the input fields.
   *
   * @function closeSetting
   * @returns {void}
   */
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
