document.querySelector('button.adicionar').addEventListener('click', adicionarValores) //evento para disparar a primeira função
let arrayRecebeValores = []  //O nome já é autoexplicativo

function adicionarValores(){
    let num = document.querySelector('#txtnumero')
    if(num.value.length == 0){
        alert('[ERRO] Dados Inválidos \nNão é possível adicionar um input vazio.')
    } else  if(num.value < 1 || num.value > 100){
        alert('[ERRO] Dados Inválidos \nValor não pertence ao intervalo de 1 a 100.')
        num.value = ''
    } else{
        let valor = Number(num.value)
        let dadosRegistados = document.querySelector('#selres')
        if(arrayRecebeValores.length == 0){
            dadosRegistados.innerHTML = ''
            arrayRecebeValores.push(valor)
            dadosRegistados.innerHTML += `<option value="${valor}">O valor ${valor} foi adicionado.</option>`
            num.value = ''
        } else if (arrayRecebeValores.indexOf(valor) > -1){
            alert(`[ERRO] Dados Inválidos \nO valor ${valor} já foi adicionado`)
            num.value = ''
        } else{
            arrayRecebeValores.push(valor)
            dadosRegistados.innerHTML += `<option value="${valor}">O valor ${valor} foi adicionado.</option>`
            num.value = ''
        }
    }
}

//A partir daqui irá fazer a finalizar e mostrar os resultados como soma, média, maior num, menor num, 
document.querySelector('.finalizar').addEventListener('click', finalizar)
function finalizar(){
    if(arrayRecebeValores.length == 0){
        alert('[ERRO] Dados Inválidos \nNão é possível finalizar sem valores. Adicione valores e tente novamente.')
    } else {
        let resultado = document.querySelector('.saida')
        let soma = 0
        let maiorValor = Math.max.apply(null, arrayRecebeValores)
        let menorValor = Math.min.apply(null, arrayRecebeValores)
        for(let index in arrayRecebeValores){
            soma += arrayRecebeValores[index]
        }
        let média = soma / arrayRecebeValores.length
        
        resultado.innerHTML = '<h2>Apresentando alguns resultados...</h2>'
        resultado.innerHTML += `<p>Quantidade de números cadastrados: ${arrayRecebeValores.length}</p>`
        resultado.innerHTML += `<p>O maior valor é: ${maiorValor}</p>`
        resultado.innerHTML += `<p>O menor valor é: ${menorValor}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores cadastrados é: ${soma}</p>`
        resultado.innerHTML += `<p>A sua média é: ${média}</p>`
    }

}