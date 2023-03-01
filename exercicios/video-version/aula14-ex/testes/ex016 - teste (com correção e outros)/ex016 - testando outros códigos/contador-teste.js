//Para testar códigos de outras pessoas, para entender modos diferentes de fazer.
//código 01
/* function contar(){
    //Variáveis que pegam os valores em string.
    let inicio = document.querySelector('input#numinicio').value
    let fim = document.querySelector('input#numfim').value
    let passo  = document.querySelector('input#numpasso').value
    let resultado = document.querySelector('div.resultado')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        resultado.innerHTML =  `Opa, você esqueceu de digitar um valor. Tente novamente.`
    }else if(passo <= 0){
        resultado.innerHTML = `Opa... o passo não pode ser igual ou menor a 0. Tente novamente.`
    } else{
        //Converte para Number
        let inicioNumerico = Number(inicio)
        let fimNumerico = Number(fim)
        let passoNumerico = Number(passo)

        resultado.innerHTML = `Contando... <br>`
        if(inicioNumerico < fimNumerico){
            //Contagem crescente - Aqui tem a opção de não criar a variável 'contador', interessante
            for(inicioNumerico; inicioNumerico <= fimNumerico; inicioNumerico += passoNumerico){
                resultado.innerHTML += `${inicioNumerico} \u{1F449}`
            }
        } else{
            //Contagem Regressiva
            for(inicioNumerico; inicioNumerico >= fimNumerico; inicioNumerico -= passoNumerico){
                resultado.innerHTML += `${inicioNumerico} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
} 
*/

//código 02
/*function contar(){// No original é my_count(), mas mudamos por motivos óbvios (o nome da função no evento do botão no html).
    //Aqui já converte para os valores numéricos.
    let start = Number(document.querySelector('input#numinicio').value) //Equivale a 'inicio'
    let end  = Number(document.querySelector('input#numfim').value) // Equivale a 'fim'
    let iterator = Number(document.querySelector('input#numpasso').value) 
    let pCounting = document.querySelector('div.resultado') // Equivale ao 'resultado'

    if(iterator == 0){
        window.alert('O passo deve ser maior que zero! \nCorrija o passo e tente novamente.')
        //window.alert('Corrija o passo e tente novamente.') - Preferi usar um único alert, por questões de praticidade. 
    } else{
        pCounting.innerHTML = `<br>` //Para dar quebra de linha?? Talvez seja estética. 
        if(start < end){
            for(var i= start; i <= end; i += Math.abs(iterator)){ // vai fazer o passo ficar um valor absoluto. E a variável 'i' é declarada com var para poder ser global e ser acessada pelo bloco de if e o de else. Preferia let, mas para isso teria de declarar fora de toda a estrutura e eu só preciso dela nesses dois momentos.
                pCounting.innerHTML += `${i}`
                pCounting.innerHTML += (i != end)?' -> ':'.' // Um operador ternário, que pelo que eu entendi é: Se 'i' for diferenet de 'end', ele irá adicionar a setinha. Senão, ele coloca o ponto. 
            }
        } else{
            //A contagem regressiva.
            for(i= start; i >= end; i -= Math.abs(iterator)){
                pCounting.innerHTML += `${i}`
                pCounting.innerHTML += (i != end)?' -> ':'.'
            } 
        }
    }
}
*/

//código 03
/* function contar() {
    // Um código bemm menor, não faz as validações, mas eu gostei da simplicidade.
    let resultado = document.querySelector('div.resultado');
    resultado.innerHTML = ''; //Achei desnecessário.

    let fim = parseInt(document.getElementById('numfim').value)
    let ini = parseInt(document.getElementById('numinicio').value)
    let passo = parseInt(document.getElementById('numpasso').value)
    let res = 1 + passo; // Adiciona sempre a mais que o solicitado.
    if ( ini < fim) {
        //Contagem Crescente
    for (let cont = ini; cont <= fim ; cont = cont + res ) {
    
        resultado.innerHTML += `${cont} \u{1F449} `;
    }
    } else {
        //Contagem Regressiva
        for(let cont = ini; cont >= fim ; cont = cont - res) {
            resultado.innerHTML+= `${cont} \u{1F449}`
        }
    }
    resultado.innerHTML += `\u{1F3C1}`//Aparece mesmo se não tiver dado algum.
}  */

//Código 04
/* function contar(){
    var numi = Number(document.getElementById('numinicio').value)
    var numf = Number(document.getElementById('numfim').value)
    var passo = Number(document.getElementById('numpasso').value)
    var rg  = Math.abs(numf - numi);
    var rep = Math.floor(rg/Math.abs(passo));
    var msg = '  ';
     
    if(passo == 0){
        alert('Passo inválido. Considerando passo = 1')
        passo = 1; // essa parte do código estoura buffer do sistema e fica em looping. o que faz todo programa travar hard, deve ser pela mudança de Object para Number. 
    }
    if(numi == 0 || numf == 0){ //Por já converter em número, ele considera o zero como 'elemento vazio'. Nesse contexto, apenas aceita valores menores ou maiores que zero.
        alert('Campos em branco! Preencha-os e continue')
    }else{
        //Achei os alertas bem confusos, eu precisei ler mais de uma vez para entender. Pode se dar o caso de eu burra mesmo só.
        if(numf > numi && passo < 0){
            alert('Configuração inválida. Passo negativo para valor final maior que inicial'); 
        }else if(numf < numi && passo > 0){
            alert('Configuração inválida. Passo positivo para valor final menor que inicial');
        }else{
            for(var i = 0; i < rep; i++){
                msg += ` ${numi} &#10145`
                numi += passo;
            }        
            msg += `FIM`
            document.querySelector('div.resultado').innerHTML = msg;
        }
    }
    } */

    