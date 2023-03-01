document.querySelector('button').addEventListener('click', tabuada)
let saída = document.getElementById('selNum')
function tabuada(){
    let contador = 0
    let numero = Number(document.getElementById('txtnumero').value)

   if (document.getElementById('txtnumero').value == ''){ 
    alert('Digite um valor válido!')
   } else{
    while(contador<=12){
        saída.innerHTML += `<option value="#">${numero} x ${contador} = ${numero*contador}</option>`
        contador++
    }
   }
}
