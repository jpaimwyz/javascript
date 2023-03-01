var idade = 68
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade > 65){
        console.log('Voto opcional')
    }
    else{
        console.log('Vota obrigatório')
    }


/*Neste exemplo, usamos a idade legal para votar no Brasil, que no caso, a partir dos 16 anos, é possível votar, mas é voto opcional até aos 18, depois disso, o voto passa a ser obrigatório até os 65 anos. Depois do 65, o voto volta a ser opcional.*/