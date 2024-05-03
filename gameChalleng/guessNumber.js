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
  if (wrongAnswers < 5) {
    if (parseInt(input.value) === number) {
      silverBox({
        title: {
          text: "Success",
          alertIcon: "success",
        },
        text: "You guessed right.",
      });
      input.value = "";
    } else if (parseInt(input.value) > number) {
      silverBox({
        position: "top-right",
        alertIcon: "error",
        text: "Your guess number is large",
        centerContent: true,
        showCloseButton: true,
      });
    } else if (parseInt(input.value) < number) {
      silverBox({
        position: "top-right",
        alertIcon: "error",
        text: "Your guess number is small",
        centerContent: true,
        showCloseButton: true,
      });
    }
    wrongAnswers++;
  } else {
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
