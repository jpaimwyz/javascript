function calcular(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNascimento = Number(prompt('Em que ano você nasceu?'))
    let resultado = document.querySelector('section.resultado')
    resultado.innerHTML = `<p>Quem nasceu em ${anoNascimento} vai completar <strong>${anoAtual - anoNascimento}</strong> anos em ${anoAtual}.</p>`
}