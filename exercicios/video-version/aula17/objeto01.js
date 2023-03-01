//Em js, um array é um objeto e um objeto é um objeto. São estruturas da mesma classe, vieram de uma mesma origem.
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p = 0){
    this.peso +=p //this é uma autorreferência ao objecto.
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
