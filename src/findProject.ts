import changeColorOrder from "../DiscoloredInOrder/DiscoloredOrder";
import sendEmailType from "../TypeScriptSendEmail/sendEmail";
import temperatureConvert from "../convertCtoF/convert";
import createColors from "../createColor/createColor";
import changeColor from "../ChangeColor/changeColor";
import gameChallenge from "../gameChalleng/game";
import sendEmail from "../sendEmail/sendEmail";

/**
 * Searches for and executes a JavaScript function based on the provided function name.
 * @returns {void}
 */
function findChallenge() {
  /**
   * An array containing objects with the names of JavaScript functions.
   * @type {Array<Object>}
   */
  let array = {
    changeColor: () => changeColor(),

    changeColorOrder: () => changeColorOrder(),

    createColors: () => createColors(),

    temperatureConvert: () => temperatureConvert(),

    gameChallenge: () => gameChallenge(),

    sendEmail: () => sendEmail(),

    sendEmailType: () => sendEmailType(),
  };
  /**
   * Iterates over the array of function names and executes the function if a match is found.
   * @param {string} funcName - The name of the function to search for and execute.
   * @returns {void}
   */
  function find(funcName) {
    if (Object.keys(array).includes(funcName)) {
      array[funcName]();
    } else {
      confirm("No function found with that name.");
    }
  }
  /**
   * Prompts the user to enter the name of the project they want to execute.
   * @type {string}
   */

  let promtString = "Which project do you want:(Enter the project name⚠️ \n";
  Object.keys(array).forEach((item) => {
    promtString += item + "\n";
  });
  let nameProject = prompt(promtString);

  if (nameProject) {
    find(nameProject);
  }
}

export default findChallenge;
