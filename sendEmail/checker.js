function checkersEmail() {
  let inputEmail = document.querySelector(".inputStyles:first-of-type");
  if (inputEmail.type === "email") {
    if (inputEmail.value !== "") {
      if (inputEmail.value.includes("@")) {
        inputEmail.setAttribute("data-status", "checkedInput");
      } else {
        inputEmail.setAttribute("data-status", "failedInput");
      }
    } else {
      inputEmail.setAttribute("data-status", "failedInput");
      alert("Please enter your email");
    }
  }
}

export default checkersEmail;
