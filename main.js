let botoes = document.querySelectorAll(".tecla");

function playAudio(audioID) {
  document.querySelector(audioID).play();
}

botoes.forEach((element, id) => {
  botoes[id].onclick = function () {
    audioID = `#som_` + element.classList[1];
    playAudio(audioID);
  };
});
