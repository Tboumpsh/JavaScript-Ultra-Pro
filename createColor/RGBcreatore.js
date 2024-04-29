function setRandomBackgroundColor() {
  /**
   * Generates a random integer between 0 and 255 for the red component of the RGB color.
   * @type {number}
   */
  const red = Math.floor(Math.random() * 256);
  /**
   * Generates a random integer between 0 and 255 for the green component of the RGB color.
   * @type {number}
   */
  const green = Math.floor(Math.random() * 256);
  /**
   * Generates a random integer between 0 and 255 for the blue component of the RGB color.
   * @type {number}
   */
  const blue = Math.floor(Math.random() * 256);
  /**
   * Sets the background color of the body using the generated RGB values.
   * @type {string}
   */
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

export default setRandomBackgroundColor;
/**
 * Sets a random background color for the body using RGB values.
 * @returns {void}
 */
