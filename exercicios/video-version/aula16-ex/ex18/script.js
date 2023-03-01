//Os parametros n e l significam, respectivamente: número e  lista.
let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

//Verifica se o valor digitado no input está no intervalo de 1 a 100.
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}
//Verifica se o número já está no array ou não.
function inLista(n, l){  
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,  valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor Inválido ou Já encontrado na lista')
    }
    num.value = ''
    num.focus() //Foca no objeto, comose estivesse lá com mouse.
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //total de elementos no arrays.
        let maior = valores[0] 
        let menor = valores[0]//Aqui a lógica é: até um dado momento, o valor na primeira posição é o maior e ou o menor número existente. Por isso, as variáveis maior e menor recebem o valor que estiver na posição da array.
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${Math.round(media)}.</p>`
        
    }
}









/* 
// Pra quem quiser adicionar o número a lista apertando a tecla Enter  ;)
num.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    // colocas aqui a tua função a rodar ///// Ao pressionar botão enter, acionar função adicionar()
    adicionar()
  }
});
*/