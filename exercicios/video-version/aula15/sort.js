/* O método sort() é PROBLEMÁTICO tratando-se de NÚMEROS. Isto acontece pois ele VERIFICA a 1° CASA DECIMAL e, com base NESTE NÚMERO, ORGANIZA os ELEMENTOS de forma CRESCENTE. */
const numeros = [99, 25, 100]
console.log(numeros)
numeros.sort()
console.log(numeros)
/* Observe que, após a organização, o número 100 ficou ANTES do 25 porquê a sua 1° CASA DECIMAL é "1", e a do 25 é "2". E o 99, mesmo sendo MENOR que 100, ficou por último pois sua 1° CASA DECIMAL é "9", ou seja, maior que "1" e "2". */

console.log('')

/* para STRINGS funciona normalmente: */
const nomes = ['ambicioso','amparar', 'amplo', 'amamentar', 'amanhã']
console.log(nomes)
nomes.sort()
console.log(nomes)

