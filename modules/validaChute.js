function validaChute(chute) {
  const numeroChutado = Number(chute)

  if (isNaN(numeroChutado)) {
    elementoChute.innerHTML += `
      <div>Não é um número</di>
    `
    return
  }

  if (numeroChutado < menorValor || numeroChutado > maiorValor) {
    elementoChute.innerHTML += `
      <div>Número inválido, o chute precisa estar entre ${menorValor} e ${maiorValor}</di>
    `
    return
  }

  if (numeroSecreto < numeroChutado) {
    elementoChute.innerHTML += `
      <div>
        O número secreto é menor
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </div>
    `
    return
  }

  if (numeroSecreto > numeroChutado) {
    elementoChute.innerHTML += `
      <div>
        O número secreto é maior
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    `
    return
  }

  if (numeroChutado === numeroChutado) {
    elementoChute.innerHTML += `
      <div>
        <h2>Você acertou!</h2>
        <p>O número secreto era ${numeroSecreto}</p>
        <button id="jogar-novamente" class="jogar-novamente">Jogar novamente</button>
      </div>
    `

    const botaoJogarNovamente = document.querySelector("#jogar-novamente")

    botaoJogarNovamente.addEventListener('click', () => {
      window.location.reload()
    })

    return
  }
}