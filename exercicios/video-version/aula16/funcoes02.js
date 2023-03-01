//Função com dois parâmetros simples.
function soma(n1 = 0, n2  = 0){
    return n1 + n2
}

console.log(soma())
//Se por acaso eu não atribuir um valor a um dos parâmetros, na maioria dos casos, em js, irei receber o resultado de 'NaN ou Not a Number', já que um dos valores será undefined. Nesse contexto, Number  + undefined retorna NaN. 
//Para resolver esse problema, existem os parâmentros já pré-definidos, ou opcionais. Irei atribuir 0 a ambos os parâmetros para o caso de, se não um ou nenhum deles for passado, significará que seu valor é zero.