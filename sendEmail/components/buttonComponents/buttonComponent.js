import domGenerator from "dom-generator";
import "./index.scss";

function buttonGenerator({
    content,
    size = "medium",
    statues = "primary",
    type = "button",
    className = "",
    anchorLink = "#",
    eventListeners = {},
    disabled,
    iconStart = "",
    iconEnd = "",
  }) {
    let button = domGenerator({
      tag: "div",
      attributes: {
        class: `buttonComponentWrapper  ${className}`,
      },
      dataAttributes: { size: size, status: statues },
      eventListeners,
      children: [
        {
          tag: "img",
          attributes: { src: iconStart },
        },
        {
          tag: "button",
          properties: { textContent: content },
          attributes: {
            class: `buttonComponent`,
            href: anchorLink,
          },
        },
        {
          tag: "img",
          attributes: { src: iconEnd },
        },
      ],
    });
  
    // Set the type of the button
    button.type = type ?? "button";
  
    if (disabled) {
      button.disabled = true;
    }
  
    return button;
  }
  
  export default buttonGenerator;