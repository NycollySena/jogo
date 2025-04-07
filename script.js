const cartas = [
  { name: ":(", img: ":(" },
  { name: ":(", img: ":(" },
  { name: "^0^", img: "^0^" },
  { name: "^0^", img: "^0^" },
  { name: ":)", img: ":)" },
  { name: ":)", img: ":)" },
  { name: ":D", img: ":D" },
  { name: ":D", img: ":D" }
]

// EMBARALHAR AS CARTAS
cartas.sort(() => 0.5 - Math.random())

// RENDERIZANDO AS CARTAS
const jogo = document.querySelector("#jogo")

// gerando as imagens iniciais das cartas
const cartasElements = cartas.map(carta => {
  const cartaElement = document.createElement("div")
  cartaElement.classList.add("carta")
  cartaElement.dataset.name = carta.name
  cartaElement.innerText = "?"
  return cartaElement
})

// adicionando os elementos no documento
cartasElements.forEach(cartaElement => {
  jogo.appendChild(cartaElement)
})

// FAZENDO O JOGO FUNCIONAR

// armazenando a situação do jogo
const estado = {
  primeiracarta: null,
  segundaCarta: null,
  cartaVirou: false,
  campoTrancado: false
}

// função para virar as cartas 
const virarCarta = (event) => {
  if (estado.campoTrancado) return

  const carta = event.currentTarget
  if (carta === estado.primeiracarta) return

  carta.classList.add("carta-virada")
  carta.innerText = carta.dataset.name

  if (!estado.cartaVirou) {
    estado.cartaVirou = true
    estado.primeiracarta = carta
  } else {
    estado.segundaCarta = carta
    saoIguais()
  }
}

// analisando se as cartas são iguais
const saoIguais = () => {
  if (estado.primeiracarta.dataset.name === estado.segundaCarta.dataset.name) {
    desabilitarCarta()
  } else {
    virarNovamente()
  }
}

// congelando as cartas que formam par
const desabilitarCarta = () => {
  estado.primeiracarta.removeEventListener("click", virarCarta)
  estado.segundaCarta.removeEventListener("click", virarCarta)
  resetCampo()
}

// virando as cartas de volta caso não formem par
const virarNovamente = () => {
  estado.campoTrancado = true
  setTimeout(() => {
    estado.primeiracarta.classList.remove("carta-virada")
    estado.segundaCarta.classList.remove("carta-virada")

    estado.primeiracarta.innerText = "?"
    estado.primeiracarta.style.transform = 'rotateY(0deg)'
    estado.segundaCarta.innerText = "?"
    estado.segundaCarta.style.transform = 'rotateY(0deg)'

    resetCampo()
  }, 1500)
}

