setInterval(carregar)
function carregar(){
    let msg = document.querySelector('div#msg-box')
    let foto = document.querySelector('img#imagem-hora')
    const data = new Date()
    let hora = data.getHours()
    let relogio = data.toLocaleTimeString()
    msg.innerHTML = `<p>Agora são ${relogio} horas.</p>`
    if (hora >= 0 && hora < 12){
        foto.src = './img/manhã.png'
    msg.innerHTML += `<p>Bom dia!</p>`
    document.body.style.backgroundColor = "#CD9B18"
    }
    else if(hora >= 12 && hora < 18){
        foto.src = './img/tarde.png'
        msg.innerHTML += `<p>Boa tarde!</p>`
        document.body.style.backgroundColor = "#d74d0a"
    } else{
        foto.src = "./img/noite.png"
        msg.innerHTML += `<p>Boa noite!</p>`
        document.body.style.backgroundColor = "#142134"
    
    }

}