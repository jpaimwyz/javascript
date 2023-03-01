
function interagir(){
    let data = new Date()
    let resultado = document.querySelector('section.resultado')
    resultado.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}
