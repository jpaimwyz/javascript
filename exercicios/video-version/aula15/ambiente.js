let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num.push(1)
num.sort() // Ordena em ordem crescente os valores da array.
console.log(`O vetor tem ${num.length} posições.`) //Quando queremos saber a quantidades de elementos/chaves de um vetor.
console.log(`O primeiro valor do vetor é ${num[0]}`) // Quando queremos apresentar um valor específico de acordo com a sua posição.

let pos = num.indexOf(8) //mostra a chave do valor. Se não existir, apresenta a chave -1.
console.log(`O valor 8 está na posição ${pos}`)


/* 
    a ordem do código influencia o resultado final.
    num.sort() e depois num.push(1) =! num.push(1) e depois num.sort().
*/
