function verificar(){
    let valorDigitado = Number(prompt('Digite um número'))
    let resultado = document.querySelector('section.resultado')
    let mensagem
    if(valorDigitado % 2 == 0){
        mensagem = 'PAR'
    } else{
        mensagem = 'ÍMPAR'
    }
    resultado.innerHTML = `<p>O número ${valorDigitado} que foi digitado é <strong>${mensagem}!</strong></p>`
}