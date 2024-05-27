import domGenerator from "dom-generator";
import "./index.scss";

import settingCards from "./settingCard";

/**
 * Initializes and renders a personal blog page structure.
 *
 * This function uses a DOM generator to create the structure of a personal blog page, which includes a header with a profile section,
 * a logo, a card section for blog posts, and a floating button to add new posts. The floating button triggers the `showSettingForm`
 * function, which calls the `settingCards` function.
 *
 * @function personalBlog
 * @returns {void}
 * @example
 * // Call the function to initialize and render the personal blog
 * personalBlog();
 */
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
/**
   * Displays the settings form for creating a new blog post.
   *
   * This function is called when the floating button is clicked. It invokes the `settingCards` function to display
   * the form for adding a new blog post.
   *
   * @function showSettingForm
   * @returns {void}
   */
  function showSettingForm() {
    settingCards();
  }
  document.body.append(blogs);
}
export default personalBlog;
