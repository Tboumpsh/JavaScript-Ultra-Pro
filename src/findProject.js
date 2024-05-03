import changeColorOrder from "../DiscoloredInOrder/DiscoloredOrder";
import temperatureConvert from "../convertCtoF/convert";
import createColors from "../createColor/createColor";
import changeColor from "../ChangeColor/changeColor";
import gameChallenge from "../gameChalleng/game";

function findChallenge() {
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

  function find(funcName) {
    array.forEach((item) => {
      if (item.name === funcName) {
        eval(item.name + "()");
      }
    });
  }
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
