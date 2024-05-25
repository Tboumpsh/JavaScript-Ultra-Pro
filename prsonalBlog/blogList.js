import domGenerator from "dom-generator";
import "./index.scss";

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

  blogBackground.append(lists);
}
export default BlogList;
