document.getElementById('btngerar').addEventListener('click', gerarTabuada)
document.getElementById('btnlimpar').addEventListener('click', limpar)

let tabuada = document.getElementById('seltabuada')
function gerarTabuada(){
    let número = document.getElementById('txtnum')
    if(número.value.length == 0){
        alert('Por favor, digite um número!')
    } else{
        let valorDoNúmero = Number(número.value)
        let contador  = 1 
        tabuada.innerHTML = '' //Para 'limpar' a tabuada.
        //Pode fazer a estrutura com for ou while, vou utilizar o for (no vídeo foi usado o while.)
        for(contador; contador <= 10; contador++){
            let item = document.createElement('option')
            item.setAttribute('value', `tab${contador}`)
            item.text = `${valorDoNúmero} x ${contador} = ${valorDoNúmero * contador}`
            tabuada.appendChild(item)
        }
    }
}
function limpar(){
    if(document.getElementById('txtnum').value.length == 0){
         alert('Não tem nada para limpar!')
        }else{
            tabuada.innerHTML = `<option>Digite um valor acima.</option>`
         document.getElementById('txtnum').value = ''
        }
}