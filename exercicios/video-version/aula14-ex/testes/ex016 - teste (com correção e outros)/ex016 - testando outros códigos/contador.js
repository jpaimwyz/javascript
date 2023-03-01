//Código para separar accionar o botão pelo js. Uma prática para separar o html do js.
document.querySelector('button').addEventListener('click', superContador)
 // Eh, se matei bué para uma cena bem de leve só. Nadãm, yha. Esse é o código 'Original' do exercício.
function superContador(){
    let inicio = document.getElementById('numinicio').value
    let fim = document.getElementById('numfim').value
    let passo = document.getElementById('numpasso').value
    let resultado = document.querySelector('div.resultado')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO] Faltam Dados!')
        resultado.innerHTML = `<p>Impossível Contar!</p>`
    } else{
        resultado.innerHTML = `Contando: <br>`
        let valorInicio = Number(inicio)
        let valorFim = Number(fim)
        let valorPasso = Number(passo)

        if(valorPasso <= 0 || valorPasso > valorFim){
            alert('PASSO INVÁLIDO! \nConsiderando passo 1!')
            valorPasso = 1
            
        } // Para melhorar esta parte do código, para o caso do passo ser maior que o fim. Acredito que depende do caso, da preferência e afins.

        if(valorInicio < valorFim){
            //Contagem crescente
            for(let contador = valorInicio; contador <= valorFim; contador += valorPasso){
            resultado.innerHTML += `${contador} \u{1F449} ` // só funciona entre crases
        }
    } else if(valorInicio > valorFim){
        //contagem regressiva
        for(let contador = valorInicio; contador >= valorFim; contador -= valorPasso){
            resultado.innerHTML += `${contador} \u{1F449} ` 
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
       
    
    }
}