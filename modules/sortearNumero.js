const menorValor = 100
const maiorValor = 1000
const numeroSecreto = sortearNumero()

function sortearNumero() {
  return Math.floor(Math.random() * (maiorValor - menorValor + 1) + menorValor)
}

const elementoMenorValor = document.querySelector("#menor-valor")
const elementoMaiorValor = document.querySelector("#maior-valor")

elementoMenorValor.innerText = menorValor
elementoMaiorValor.innerText = maiorValor