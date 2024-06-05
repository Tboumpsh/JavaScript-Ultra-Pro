import typeOfCars from "../data/objectInformationCars";

function createOptionsCarNames() {
  let select = document.querySelector(".selectOptionCarName .selectComponent");
  for (const key in typeOfCars) {
    const newOption = document.createElement("option");
    newOption.textContent = key;
    select.append(newOption);
  }
}

export default createOptionsCarNames;
