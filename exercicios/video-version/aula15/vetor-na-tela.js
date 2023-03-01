 let valores = [8, 1, 7, 4, 9, 10]

 //console.log(valores) - Mostra o array em si, a forma padrão.
 
 //Uma péssima prática, muito pouco intuitiva
 /*
 console.log(valores[0])
 console.log(valores[1])
 console.log(valores[2])
 console.log(valores[3])
 console.log(valores[4])
 console.log(valores[5]) 
 */

 //Usando estruturas de repeticão
 /* 
 for(let pos = 0; pos < valores.length; pos++){ //pos significa posição
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
 } 
 */

/* 
//Tentando com while e do...while
let pos = 0
while(pos < valores.length){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    pos ++
}

do{
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    pos ++
} while(pos < valores.length) 
*/

//Uma forma mais simplificada para arrays e objetos é o for/in ou para/em. SOMENTE VÁLIDO PARA VETORES E OBJETOS, e está nas versões mais recentes do ECMAScript.
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}