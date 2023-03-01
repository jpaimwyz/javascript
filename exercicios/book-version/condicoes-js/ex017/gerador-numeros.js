let resultado = document.querySelector('section.resultado')

function gerarValor(){
    let valorMinimo = 1
    let valorMaximo = 100
    let diferença = valorMaximo - valorMinimo
    let valorAleatorio = Math.random() 
    let valorFinal = valorMinimo + Math.trunc(diferença * valorAleatorio)
    resultado.innerHTML += `<p>
        Acabei de pensar no número <mark>${valorFinal}</mark>!</p>`
}

function limpar(){ // limpa toda a section
    resultado.innerHTML = null
}