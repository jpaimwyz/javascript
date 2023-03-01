function efetuarCálculo(){
    let primeiroValor = Number(prompt('Primeiro valor: ')) 
    let segundoValor = Number(prompt('Segundo valor: ')) 
    let operação = Number(prompt(`Valores informados : ${primeiroValor} e ${segundoValor}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let resultado = document.querySelector('section.resultado')
    resultado.innerHTML = `<h2>Calculando...</h2>`
    switch(operação){
        case 1:
            resultado.innerHTML += `<p>${primeiroValor} + ${segundoValor} = <strong>${primeiroValor+segundoValor}</strong></p>`
            break
        case 2:
            resultado.innerHTML += `<p>${primeiroValor} - ${segundoValor} = <strong>${primeiroValor-segundoValor}</strong></p>`
            break
        case 3:
            resultado.innerHTML += `<p>${primeiroValor} x ${segundoValor} = <strong>${primeiroValor*segundoValor}</strong></p>`
            break
        case 4:
            resultado.innerHTML += `<p>${primeiroValor} / ${segundoValor} = <strong>${primeiroValor/segundoValor}</strong></p>`
            break
        default:
            resultado.innerHTML += `<p> OPÇÃO INVÁLIDA! Você digitou ${primeiroValor} e ${segundoValor}, mas não sei o que fazer com eles.</p>`
            break
    }
}