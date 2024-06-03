function checkOptions() {
  let base_price = 2_500_000;
  let selects = document.querySelectorAll(".selectComponent");

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

  selects.forEach((select) => {
    select.addEventListener("change", optionsChecked);
  });

  function optionsChecked(e) {
    let selectedOption = e.target.options[e.target.selectedIndex];
    
    //  get value
    let value = selectedOption.value;

    console.log(`Selected value: ${value}`);
    // now year
    for (let i = 0; i < typeOfCars.length; i++) {
      // typeOfCars[i].ratio;
      if (value.includes(typeOfCars[i].name)) {
      //  console.log(typeOfCars[i].ratio);
       base_price *= typeOfCars[i].ratio;
       console.log(base_price);
      }
    }
    let nowYear = new Date().getUTCFullYear();
    // rato year

    if (Number(value) < nowYear) {
      let result = nowYear - Number(value);
      console.log(result);
      let ratoYear = result * 1.2;
      base_price *= ratoYear;
      console.log(base_price);
    }

    if (value.includes(nowYear.toString())) {
      console.log(`The value "${value}" includes the current year ${nowYear}.`);
    } else {
      console.log(
        `The value "${value}" does not include the current year or the word "car".`
      );
    }
  }
}

export default checkOptions;
