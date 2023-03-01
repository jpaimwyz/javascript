function analisarMaiorValor(){
    let valor1 = Number(prompt('Digite um número:'))
    let valor2 = Number(prompt('Digite outro número:'))
    let resultado = document.querySelector('section.resultado')
    let mensagem
    if(valor1 > valor2){
        mensagem = `o maior valor é: <strong>${valor1}</strong>`
    } else if( valor1 == valor2)
    {
        mensagem = `ambos são <strong>IGUAIS</strong>`
    } else{
        mensagem = `o maior valor é: <strong>${valor2}</strong>`
    }
    resultado.innerHTML = `<p>Analisando os valores <mark>${valor1}</mark> e <mark>${valor2}</mark>, ${mensagem}.</p>`
}