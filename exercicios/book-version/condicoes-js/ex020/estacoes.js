let mês
let resultado = document.querySelector('section.resultado')
let estação

function descobrirEstacaoAngola() {
    mês = prompt('Digite o mês em extenso (ex.: Julho)')
    switch(mês.toUpperCase()){
        case 'OUTUBRO': case'NOVEMBRO':  case 'DEZEMBRO': case 'JANEIRO': 
        case 'FEVEREIRO': case 'MARÇO': case 'ABRIL':  
            estação = 'das Chuvas'
        break
        case 'MAIO': case'JUNHO':  case 'JULHO': case 'AGOSTO': 
        case 'SETEMBRO':
            estação = 'Seca (Cacimbo)'
        break
        default:
            estação = 'INDEFINIDA'
    }
    resultado.innerHTML = `<p>Em Angola, no mês de ${mês}, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}

function descobrirEstacaoBrasil(){
    mês = prompt('Digite o mês em extenso (ex: Setembro)')
    
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'INVERNO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estação = 'PRIMAVERA'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estação = 'VERÃO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estação = 'OUTONO'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    resultado.innerHTML = `<p>No Brasil, no mês de ${mês}, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}