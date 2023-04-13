let buttons = document.querySelectorAll(".tecla");

function playAudio(audioID) {
  const element = document.querySelector(audioID);

  if (element != null && element.localName === "audio") {
    element.play();
  } else {
    console.log("Element not found");
  }
}

buttons.forEach((element, id) => {
  buttons[id].onclick = function () {
    audioID = `#som_` + element.classList[1];
    playAudio(audioID);
  };

  buttons[id].onkeydown = function (key) {
    if (key.code === "Enter" || key.code === "Space") {
      buttons[id].classList.add("ativa");
    }
    buttons[id].onkeyup = function () {
      buttons[id].classList.remove("ativa");
    };
  };
});
