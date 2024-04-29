let variable = 0;
function fixedColor(colorStart, colorEnd) {
  variable = (variable + 1) % 2;
  if (variable == 0) {
    document.body.style.backgroundColor = colorStart;
  } else if (variable == 1) {
    document.body.style.backgroundColor = colorEnd;
  }
}


export default fixedColor