//Variáveis globais do programa
let resultado = document.querySelector('section.resultado')
let palpiteComputador = 0
let palpiteJogador = 0


function sortear(){
    let minValue = 1
    let maxValue = 100
    let diferença = maxValue - minValue
    let randomValue = Math.random()
    palpiteComputador = minValue + Math.trunc(diferença*randomValue)
}

function jogar(){
    palpiteJogador = Number(prompt('Qual é o seu palpite?'))
    if(palpiteComputador > palpiteJogador){
        resultado.innerHTML += `<p>Você falou ${palpiteJogador}. Meu número é <strong>MAIOR</strong>.</p>`
    } else if (palpiteComputador < palpiteJogador){
        resultado.innerHTML += `<p>Você falou ${palpiteJogador}. Meu número é <strong>MENOR</strong>.</p>`
    }
    else if(palpiteComputador == palpiteJogador){
        resultado.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${palpiteComputador}.</p>`
        document.getElementsByTagName('button')[0].style.visibility = 'hidden'
    }
}