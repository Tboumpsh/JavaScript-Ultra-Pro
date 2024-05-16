function emailValidation(input: any) :void{
  if (input.value.includes("@") && input.value.indexOf(".") !== -1) {
    console.log("yes");
  } else {
    console.log("no");
  }
}


export default emailValidation
