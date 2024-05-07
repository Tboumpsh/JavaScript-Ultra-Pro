function checkers(input) {
    let type = input.getAttribute("type");
  if (type === "email") {
    if (input.value !== "") {
      if (input.value.includes("@")) {
        input.setAttribute("data-status", "checkedInput");
      } else {
        input.setAttribute("data-status", "failedInput");
      }
    } else {
      input.setAttribute("data-status", "failedInput");
      alert("Please enter your email");
    }
  } else if (type === "text") {
    if (input.value !== "") {
      input.setAttribute("data-status", "checkedInput");
    } else {
      input.setAttribute("data-status", "failedInput");
      input.value = "undefined";
    }
  }
}

export default checkers;
