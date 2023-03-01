//Considerando que se deseja repetir o console, mas com uma estrutura de repetição.
// Esse tipo de laço é o mais simples.
let contador = 1 //O contador que começa com 1, nesse exemplo

/* while(contador <= 200){
    console.log(`Passo ${contador}`)
    contador++ //vai incrementar, é a mesma coisa que c = c + 1 ou c += 1.
}  Estrutura de repetição com teste no ínicio.
 */  

do{
    console.log(`Passo ${contador}`)
    contador++
}while(contador <= 3) // Estrutura de repetição com teste no fim.



/*  Considerando que se desejaria repetir esse console +6 vezes com uma estrutura sequencial. Se o número de repetições aumentasse, nesse caso, por uma 500 vezes, ficaria um código desncessariamente extenso e díficil de trabalhar/refatorar.
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?') 
*/
