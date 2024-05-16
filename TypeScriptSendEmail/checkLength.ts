// check length
function checkLength(input: any): void{
    if (input.value.length > 0) {
      input.style.border = "3px solid green";
    } else {
      input.style.border = "3px solid red";
    }
  }
  
  
  export default checkLength