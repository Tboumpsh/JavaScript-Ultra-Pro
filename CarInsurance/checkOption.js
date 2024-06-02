function checkOptions() {
  let select = document.querySelectorAll(".selectComponent");
  let option = document.querySelectorAll(".selectComponent option");

  //   for (let i = 0; i < select.length; i++) {
  //     let year = select[0];
  //     let name = select[1];

  //     year.setAttribute("data-year", "year");
  //     name.setAttribute("data-name", "name");
  //   }

  for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("click", optionsChecked);
  }

  function optionsChecked(e) {
    // if (e.target.getAttribute("data-year")) {
    let nowYear = new Date().getUTCFullYear();
    for (let j = 0; j < option.length; j++) {
      if (option[j].value.includes(nowYear)) {
        console.log(e.target.children[j].value);
      }
    }
    // } else if (e.target.getAttribute("data-name")) {
    // }
  }
}
export default checkOptions;
// function checkOptions() {
//     let select = document.querySelectorAll(".selectComponent");
//     let option = document.querySelectorAll(".selectComponent option");

//     for (let i = 0; i < select.length; i++) {
//       select[i].addEventListener("click", optionsChecked);
//     }

//     function optionsChecked(e) {
//       if (e.target.getAttribute("data-year")) {
//         let nowYear = new Date().getUTCFullYear();
//         console.log(e.target.children[j]);
//         for (let j = 0; j < e.target.children.length; j++) {

//           if (e.target.children[j] instanceof HTMLOptionElement) {
//             console.log(e.target.children[j].value);
//           }
//         }
//       } else if (e.target.getAttribute("data-name")) {
//         // code to handle name selection
//       }
//     }
//   }
//   export default checkOptions;
