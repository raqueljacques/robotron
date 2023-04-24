const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const mudaCorElemento = document.getElementById("cor")
mudaCorElemento.addEventListener('click', () => {
    mudaCor()
})

const colors = [{
    id: 0,
    color: 'img/robotronBranco.png'
}, {
    id: 1,
    color: 'img/robotronPreto.png'
}, {
    id: 2,
    color: 'img/robotronAmarelo.png'
}, {
    id: 3,
    color: 'img/robotronRosa.png'
}, {
    id: 4,
    color: 'img/robotronVermelho.png'
}, {
    id: 5,
    color: 'img/robotronAzul.png'
},]

let indexColor = 0

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

function mudaCor() {
    const roboImage = document.querySelector('.robo')
    
    if (indexColor == 6) {
        indexColor = 0
    }
    roboImage.setAttribute('src', colors[indexColor].color)
    indexColor = indexColor + 1

}