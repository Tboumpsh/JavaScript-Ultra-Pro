function checkType(e) {
  let parentRadioSection = document.getElementById("radioSection");
  parentRadioSection.dataset.type = e.target.id;
  console.log(e.target.id);
}

export default checkType