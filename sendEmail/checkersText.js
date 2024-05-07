function checkersText() {
  let inputSubject = document.querySelector(".inputStyles:nth-child(2)");
  let inputMessage = document.querySelector(".inputStyles:nth-child(3)");
  if (inputSubject.type == "text" && inputMessage == "text") {
    if (inputSubject.value !== "" && inputMessage.value !== "") {
      inputEmail.setAttribute("data-status", "checkedInput");
    } else {
      inputEmail.setAttribute("data-status", "failedInput");
      inputSubject.value = "undefined";
      inputMessage.value = "undefined";
    }
  }
}
export default checkersText;