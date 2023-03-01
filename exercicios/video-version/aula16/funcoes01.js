function parimp(n){
    if(n%2 == 0){
        return 'Par!'
    } else{
        return 'Ímpar!'
    }
}

//parimp(4) - Nada acontece pois o resultado 'não tem para onde ir'
//Para mostrar o resultado podemos atribuir uma variável à funcão e depois mostrar na tela com console.log()
let resultado = parimp(1)
console.log(resultado)

//Também pode ser feito diretamente assim:
console.log(parimp(10))
