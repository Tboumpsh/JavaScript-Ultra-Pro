let wrongAnswers = 0;
/**
 * The number of wrong answers entered by the user.
 * @type {number}
 */
/**
 * Finds the number guessed by the user within 5 attempts.
 * @param {HTMLInputElement} input - The input element where the user enters their guess.
 * @param {number} number - The number to be guessed by the user.
 * @returns {void}
 */
function findNumber(input, number) {
  /**
   * The current iteration count.
   * @type {number}
   */
  let i = 0;
  /**
   * Indicates whether the loop has completed.
   * @type {boolean}
   */
  let loopComplete = false;
  while (i < 5 && wrongAnswers < 5) {
    if (parseInt(input.value) === number) {
      silverBox({
        title: {
          text: "Success",
          alertIcon: "success",
        },
        text: "You guessed right.",
      });
      // loopComplete = true;
      input.value = "";
      break;
    } else if (parseInt(input.value) > number) {
      silverBox({
        position: "top-right",
        alertIcon: "error",
        text: "Your guess number is large",
        centerContent: true,
        showCloseButton: true,
      });
      wrongAnswers++;
      loopComplete = false;
      break;
    } else if (parseInt(input.value) < number) {
      silverBox({
        position: "top-right",
        alertIcon: "error",
        text: "Your guess number is small",
        centerContent: true,
        showCloseButton: true,
      });
      wrongAnswers++;
      loopComplete = false;
      break;
    }

    // Exit the loop if the user has entered 5 wrong answers.
    if (wrongAnswers == 5) {
      loopComplete = true;
      break;
    }

    i++;
  }

  if (loopComplete === true) {
    silverBox({
      alertIcon: "error",
      text: "You lost but don't be sad and try again.",
      centerContent: true,
      cancelButton: {
        text: "OK",
      },
    });
  }
}

export default findNumber;
