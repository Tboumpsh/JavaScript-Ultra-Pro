function createOptionsCarNames() {
  let typeOfCars = [
    {
      name: "Benz",
      ratio: 2.1,
    },
    {
      name: "Audi",
      ratio: 1.2,
    },
    {
      name: "Bentley",
      ratio: 3.1,
    },
    {
      name: "BMW",
      ratio: 1.3,
    },
    {
      name: "Ferrari",
      ratio: 1.8,
    },
    {
      name: "Bugatti",
      ratio: 1.5,
    },
    {
      name: "Jaguar",
      ratio: 1.9,
    },
    {
      name: "Lamborghini",
      ratio: 1.7,
    },
    {
      name: "LandRover",
      ratio: 2.2,
    },
    {
      name: "McLarne",
      ratio: 2.5,
    },
    {
      name: "MercedesBenz",
      ratio: 2.3,
    },
    {
      name: "MorrisMini-Minor",
      ratio: 2.4,
    },
    {
      name: "Porsche",
      ratio: 1.4,
    },
    {
      name: "Rolls-Royce",
      ratio: 4.1,
    },
  ];

  let select = document.querySelector(".selectOptionCarName .selectComponent");
  for (let i = 0; i < typeOfCars.length; i++) {
    const newOption = document.createElement("option");
    newOption.textContent = typeOfCars[i].name;
    select.append(newOption);
  }
}

export default createOptionsCarNames;
