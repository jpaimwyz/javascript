function calcular(){
    let nomeAluno = prompt('Qual é o nome do aluno?')
    let primeiraNota = Number(prompt(`Qual é a primeira nota de ${nomeAluno}?`))
    let segundaNota = Number(prompt(`Para além de ${primeiraNota}, qual é a outra nota de ${nomeAluno}?`))
    let média = (primeiraNota + segundaNota) / 2
    let resultado = document.querySelector('section.resultado')
    let msg
    if(média <10){
        msg = 'Estude um pouco mais!'
    } else {
        msg = 'Meus parabéns!'
    }
    resultado.innerHTML = `<p>Calculando média final de <mark>${nomeAluno}</mark>.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será <mark>${média}</mark> valores!</p>`
    resultado.innerHTML += `<p>A mensagem que temos é: <strong style='color:red'>${msg}</strong></p>`
}