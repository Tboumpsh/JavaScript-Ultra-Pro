function changeButton() {
    let send: any = document.getElementById("submit");
    send.innerText = `Loading... ⏳`;
    send.setAttribute("class", "load");
    setTimeout(() => {
      send.innerText = `sended 📩`;
      send.setAttribute("class", "send");
    }, 4000);
  }

  export default changeButton