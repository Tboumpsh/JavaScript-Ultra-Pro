/**
 * Updates the text and class of a submit button to indicate loading and then success.
 *
 * This function performs the following actions:
 * 1. Retrieves the button element with the id "submit".
 * 2. Changes the button's inner text to "Loading... ⏳" and sets its class to "load".
 * 3. After a delay of 4 seconds, changes the button's inner text to "sended 📩" and sets its class to "send".
 *
 * @function changeButton
 * @returns {void}
 */
function changeButton() {
    let send: any = document.getElementById("submit");
    send.innerText = `Loading... ⏳`;
    send.setAttribute("class", "load");
    setTimeout(() => {
      send.innerText = `sended 📩`;
      send.setAttribute("class", "send");
    }, 4000);
  }

  export default changeButton