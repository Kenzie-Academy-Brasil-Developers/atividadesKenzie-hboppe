const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]

///////////////EXERCICIO 1////////////

// function inserirNovoElemento(num){
//     const autput=[]
//     autput.push(num)
//     if(num < 1 || num > 10){
//         alert(`Numero invalido`)
//     } else {
//         alert(`A lista atualizada é: ${autput}`)
//     }

//     alert(`A lista atualizada é: ${autput}`)
// }

// let numero = parseInt(prompt(`Digite um número de 1 a 10`))

///////////////EXERCICIO 2////////////

// function retornaTodosElementos(){
//     alert(listaDeElementos)
// }

// retornaTodosElementos()

///////////////EXERCICIO 3////////////

// function retornaValorEpecifico(num){
//     let value = listaDeElementos[num]
//     if (value){
//         return `O valor contido nesta posição é: ${value}".`
//     } else {
//         return `Valor invalido`
//     }
// }

// let numero = parseInt(prompt(`Digite um numero inteiro`))

// console.log(retornaValorEpecifico(numero))

///////////////EXERCICIO 4////////////

// function retornarTipoElemento(num){

//     let elem = listaDeElementos[num];
//     let tipo = typeof(elem);
    

//     if(tipo === 'number') {
//         alert(`O elemento ${elem}, é um elemento do tipo número`)
//     } else if (tipo == 'string'){
//         alert(`O elemento ${elem}, é um elemento do tipo string`)
//     }
    
// }

// let number = parseInt(prompt(`Digite um numero inteiro`))

// retornarTipoElemento(number)

////////////////////EXERCICIO 5/////////////////

// function removerElemento(num){

//     if (num > listaDeElementos.length){
//         return `Numero invalido`
//     } else {

//         let elemRemov = listaDeElementos.splice(num, 1);

//         return `O valor ${elemRemov}, foi removido da lista, a lista atualizado é: ${listaDeElementos}`
//     }

    
// }

// let number = parseInt(prompt(`Digite um numero inteiro`))

// console.log(removerElemento(number))


////////////////////EXERCICIO 6/////////////////

// function removeUltimoElementoString(){

//     let ultElem = listaDeElementos[listaDeElementos.length - 1]

//     if (typeof(ultElem) === 'string'){
//         listaDeElementos.pop()
//         return `Elemento deletado com sucesso`
//     } else {
//         return `Falha ao remover o elemento da lista`
//     }
// }

// console.log(removeUltimoElementoString())

////////////////////EXERCICIO 7/////////////////

// function consultaPosição(string){
//     let index = listaDeElementos.indexOf(string)

//     if (index != -1){
//         return `O valor procurado está na posiçao: ${index}`
//     } else {
//         return `Valor não encontrado`
//     }
// }

// console.log(consultaPosição(`19`))

////////////////////EXERCICIO 8/////////////////


