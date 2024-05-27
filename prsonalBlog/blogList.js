import domGenerator from "dom-generator";
import "./index.scss";

/**
 * Creates a blog post and appends it to the card section.
 *
 * The function generates a blog post element with a title and body using a DOM generator and appends it
 * to an existing section in the document identified by `cardSection`.
 *
 * @function BlogList
 * @param {string} postTitle - The title of the blog post.
 * @param {string} postBody - The body content of the blog post.
 * @returns {void}
 * @example
 * // Call the function to create and append a blog post
 * BlogList("My First Post", "This is the content of my first post.");
 */
function BlogList(postTitle, postBody) {
  let lists = domGenerator({
    tag: "div",
    attributes: { id: "cardParent" },
    children: [
      {
        tag: "h2",
        attributes: { id: "titlePost" },
        properties: { textContent: postTitle },
      },
      {
        tag: "p",
        attributes: { id: "bodyPost" },
        properties: { textContent: postBody },
      },

    ],
  });

  cardSection.append(lists);
}
export default BlogList;
