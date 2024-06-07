function createOptionYear() {
  let select = document.querySelector(".selectOptionCarYear .selectComponent");

  // name
  let year = new Date();
  let nowYear = year.getUTCFullYear();
  let options = [];

  for (let j = nowYear; j >= nowYear - 20; j--) {
    const newOption = document.createElement("option");
    newOption.textContent = j;
    select.append(newOption);
    options.push(j);
  }
}
export default createOptionYear;
