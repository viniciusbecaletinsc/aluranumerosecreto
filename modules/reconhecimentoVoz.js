const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
const elementoChute = document.querySelector("#chute")

recognition.lang = "pt-Br"
recognition.start()

function exibirChuteTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}

recognition.onresult = (event) => {
  const speech = event.results[0][0].transcript
  exibirChuteTela(speech)
  validaChute(speech)
}

recognition.onend = () => {
  recognition.start()
}