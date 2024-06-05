function createOptionYear() {
  let select = document.querySelector(".selectOptionCarYear .selectComponent");

  // name
  let year = new Date();
  // console.log(year.getUTCFullYear());
  let nowYear = year.getUTCFullYear();
  let options = [];
  for (let j = nowYear; j >= 2000; j--) {
    const newOption = document.createElement("option");
    newOption.textContent = j;
    select.append(newOption);
    options.push(j);
  }
 
}
export default createOptionYear;
