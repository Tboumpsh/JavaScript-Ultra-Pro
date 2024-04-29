import changeColorOrder from "./DiscoloredInOrder/DiscoloredOrder";
import createColors from "./createColor/createColor";
import changeColor from "./ChangeColor/changeColor";

/**
 * Prompts the user to choose a project and executes the corresponding function based on the choice.
 * @returns {void}
 */
let nameProject = prompt(`Which one project choose:
1. Change the color of the plate between two specific colors
2. Display the color with a special arrangement
3. Construction of color with RGB
`);

if (Number(nameProject) === 1) {
  changeColor();
} else if (Number(nameProject) === 2) {
  changeColorOrder();
} else if (Number(nameProject) === 3) {
  createColors();
}
