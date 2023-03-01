function verificar(){
    let data = new Date()
    let anoAtual = data.getFullYear()// o .getFullYear() vai pegar os 4 dígitos, nesse caso vai ser 2022 e não só 22.
    let formAno = document.getElementById('txtano')
    let resultado = document.getElementById('saida') // pode usar o .querySelector()
    //Se o valor do formulário for nulo ou maior, ele dará a mensagem abaixo
    if(formAno.value.length == 0 || Number(formAno.value) > anoAtual){
        alert('[ERRO]: Ano Inválido. \nVerifique os dados e tente novamente!')
    } // Usar o .length e o Number() para formAno.value, dá no mesmo.
    else{
        let formSex = document.getElementsByName('radsex')
        let idade = anoAtual - Number(formAno.value)
        let género
        let imagem = document.createElement('img') //método DOM para criar um elemento html, nesse caso, uma tag <img>
        imagem.setAttribute('id', 'foto' ) // Criará um atributo para o elemento, onde ('atributo', 'valor do atributo')
        if(formSex[0].checked){
            género = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                imagem.setAttribute('src', `./img/foto-bebe-m.png`)
            } else if(idade < 21){
                //Jovem
                imagem.setAttribute('src', `./img/foto-jovem-m.png`)
            } else if(idade < 50){
                //Adulto
                imagem.setAttribute('src', `./img/foto-adulto-m.png`)
            } else{
                //Idoso
                imagem.setAttribute('src', `./img/foto-idoso-m.png`)
            }
            
        } else/*  if(formSex[1].checked) - essa parte é opcional*/{ 
            género = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                imagem.setAttribute('src', `./img/foto-bebe-f.png`)
            } else if(idade < 21){
                //Jovem
                imagem.setAttribute('src', `./img/foto-jovem-f.png`)
            } else if(idade < 50){
                //Adulto
                imagem.setAttribute('src', `./img/foto-adulto-f.png`)
            } else{
                //Idoso
                imagem.setAttribute('src', `./img/foto-idoso-f.png`)
            }
        }
        resultado.style.textAlign = 'center' //aplica estilo diretamento pelo css.
        resultado.innerHTML = `<p>Detectamos ${género} com ${idade} anos.</p>`
        resultado.appendChild(imagem) //Adiciona um elemento, a partir de uma variável declarada.
    }


}
