import changeColorOrder from "./DiscoloredInOrder/DiscoloredOrder";
import changeColor from "./ChangeColor/changeColor";

/**
 * Prompts the user to choose a project and executes the corresponding function based on the choice.
 * @returns {void}
 */
let nameProject = prompt(`Which one project choose:
1. DiscoloredInOrder
2. createColor
3. ChangeColor
`);

if (Number(nameProject) === 1) {
  changeColor();
} else if (Number(nameProject) === 2) {
  changeColorOrder();
}
