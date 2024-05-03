import changeColorOrder from "../DiscoloredInOrder/DiscoloredOrder";
import temperatureConvert from "../convertCtoF/convert";
import createColors from "../createColor/createColor";
import changeColor from "../ChangeColor/changeColor";
import gameChallenge from "../gameChalleng/game";

/**
 * Searches for and executes a JavaScript function based on the provided function name.
 * @returns {void}
 */
function findChallenge() {
  /**
   * An array containing objects with the names of JavaScript functions.
   * @type {Array<Object>}
   */
  let array = [
    {
      name: "changeColor",
    },
    {
      name: "changeColorOrder",
    },
    {
      name: "createColors",
    },
    {
      name: "temperatureConvert",
    },
    {
      name: "gameChallenge",
    },
  ];
  /**
   * Iterates over the array of function names and executes the function if a match is found.
   * @param {string} funcName - The name of the function to search for and execute.
   * @returns {void}
   */
  function find(funcName) {
    array.forEach((item) => {
      if (item.name === funcName) {
        eval(item.name + "()");
      }
    });
  }
  /**
   * Prompts the user to enter the name of the project they want to execute.
   * @type {string}
   */
  let nameProject = prompt(`Which project do you want:(Enter the project name⚠️)
            changeColor🎨
            changeColorOrder🎭
            createColors🖌️
            temperatureConvert🌡️
            gameChallenge🎮
            `);

  if (nameProject) {
    find(nameProject);
  }
}

export default findChallenge;
