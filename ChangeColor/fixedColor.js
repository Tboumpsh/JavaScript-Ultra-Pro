let variable = 0;

/**
 * Toggles the background color of the body between two specified colors.
 * @param {string} colorStart - The first color to set as the background color.
 * @param {string} colorEnd - The second color to set as the background color.
 * @returns {void}
 */

function fixedColor(colorStart, colorEnd) {
  /**
   * Variable to track the current state for toggling between colors.
   * @type {number}
   */
  variable = (variable + 1) % 2;
  if (variable == 0) {
    document.body.style.backgroundColor = colorStart;
  } else if (variable == 1) {
    document.body.style.backgroundColor = colorEnd;
  }
}

export default fixedColor;
