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

  // year

  // let typeOfCars = [
  //   {
  //     name: "Benz",
  //     ratio: 2.1,
  //   },
  //   {
  //     name: "Audi",
  //     ratio: 1.2,
  //   },
  //   {
  //     name: "Bentley",
  //     ratio: 3.1,
  //   },
  //   {
  //     name: "BMW",
  //     ratio: 1.3,
  //   },
  //   {
  //     name: "Ferrari",
  //     ratio: 1.8,
  //   },
  //   {
  //     name: "Bugatti",
  //     ratio: 1.5,
  //   },
  //   {
  //     name: "Jaguar",
  //     ratio: 1.9,
  //   },
  //   {
  //     name: "Lamborghini",
  //     ratio: 1.7,
  //   },
  //   {
  //     name: "LandRover",
  //     ratio: 2.2,
  //   },
  //   {
  //     name: "McLarne",
  //     ratio: 2.5,
  //   },
  //   {
  //     name: "MercedesBenz",
  //     ratio: 2.3,
  //   },
  //   {
  //     name: "MorrisMini-Minor",
  //     ratio: 2.4,
  //   },
  //   {
  //     name: "Porsche",
  //     ratio: 1.4,
  //   },
  //   {
  //     name: "Rolls-Royce",
  //     ratio: 4.1,
  //   },
  // ];

  // for (let i = 0; i < typeOfCars.length; i++) {
  //   const newOption = document.createElement("option");
  //   newOption.textContent = typeOfCars[i].name;
  //   selectName.append(newOption);
  // }
  // selectName.addEventListener("click", selectOption);
  // function selectOption(e) {
  //   console.log(e.target.tagName);
  //   if (e.target.tagName === "SELECT") {
      
  //   }
  // }
}
export default createOptionYear;
