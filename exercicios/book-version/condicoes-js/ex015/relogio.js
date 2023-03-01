function analisarDataDoSistema(){
    //(14.11.2022) - Uma Array me parece um objecto. Nesse contexto, estamos a criar as strings para que vão aparecer ao invés do números do método/objeto Date(), pesquisar mais sobre
    let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
    let diasDaSemana = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    let data = new Date()
    let resultado = document.querySelector('section.resultado')
    let dia = data.getDate()
    let mês = data.getMonth()
    let semana = data.getDay()
    let ano = data.getFullYear()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    resultado.innerHTML = `<p>Dia: <mark>${dia}</mark>.</p>`
    resultado.innerHTML += `<p>Mês: <mark>${meses[mês]}</mark>.</p>`
    resultado.innerHTML += `<p>Ano: <mark>${ano}</mark>.</p>`
    resultado.innerHTML += `<p>Dia da semana: <mark>${diasDaSemana[semana]}</mark>.</p>`
    resultado.innerHTML += `<p>Hora: <mark>${hora}</mark>.</p>`
    resultado.innerHTML += `<p>Minutos: <mark>${minutos}</mark>.</p>`
    resultado.innerHTML += `<p>Segundos: <mark>${segundos}</mark>.</p>`
}