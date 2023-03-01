//Exercícios de dar bom dia, boa tarde e boa noite. No momento, usando horas de forma manual, sem pegar de outro lugar.
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom dia!')
} else if(hora < 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}
  