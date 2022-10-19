///////////////// EXERCICIO 1 ////////////////

// function retArray(str){
//     const arr = [];

//     if (str.length < 5){
//         return(`Palavra inválida`)
//     } else {
//         arr.push(str);
//         return arr;
//     }

    
// }

// let palavra = prompt(`Digite uma palavra de no mínimo 5 caracteres`)

// console.log(retArray(palavra));

///////////////// EXERCICIO 2////////////////

// function encontreElemento(number){
//     let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
//     let elem = arr[number];
//     if (number > arr.length){
//         alert("Valor não encontrado") 
//     } else {
//         alert(`O elemento na posiçao ${number} é ${elem}`)
//     }
// }

// let num = parseInt(prompt(`Digite o numero referente a indexacao do elemento na array`))

// encontreElemento(num);

///////////////// EXERCICIO 3////////////////



// function parOuImpar(num){

//     let arr = [1,2,3,4,5,6,7,8,9,10];

//     let numEsc = arr[num];

//     if (numEsc % 2 == 0){
//         return "O valor encontrado nesta posição é par"
//     } else {
//         return "O valor encontrado nesta posição é ímpar"
//     }
// }

// let number = parseInt(prompt(`Digite um numero`))

// console.log(parOuImpar(number))

///////////////// EXERCICIO 4////////////////

// function maiorNome(arr){
//     let aMaior = ''
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > aMaior){
//             aMaior = arr[i]
//         }
//     }

//     return `O nome ${aMaior} é o maior da lista`
// }

// let nomes = ["Pedro", "Rafael", "José"];

// console.log(maiorNome(nomes))

///////////////// EXERCICIO 5////////////////

// function somaEMultiplo(num){
//     let ultimo = num[num.length - 1]
//     let ant = num[num.length - 2]

//     let soma = ultimo + ant

//     if(soma % 2 == 0){
//         return `A soma(${soma}) é um múltiplo de 2`
//     } else {
//         return `A soma(${soma}) não é um múltiplo de 2`
//     }
// }

// let numeros = [1,4,6,9,11,8]

// console.log(somaEMultiplo(numeros))

///////////////// EXERCICIO 6////////////////


// function somaEMultiplo5(num){
//     let prim = num[0]
//     let seg = num[1]

//     let soma = prim + seg

//     if(soma % 5 == 0){
//         return `A soma(${soma}) é um múltiplo de 5`
//     } else {
//         return `A soma(${soma}) não é um múltiplo de 5`
//     }
// }

// let numeros = [1,4,6,9,11,8]
// console.log(somaEMultiplo5(numeros))


///////////////// EXERCICIO 7////////////////

// let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];

// function nomeEPosicao(arr, nome, num){

//     let elem = arr[num];
//     if (nome.toLowerCase() === elem.toLowerCase()){
//         return "Acertei"
//     } else {
//         return "Não é quem eu pensava"
//     }

// }

// console.log(nomeEPosicao(nomes, 'carla', 3))

///////////////// EXERCICIO 8////////////////

// function maiorArray(arr1, arr2){
//     let arr1leng = arr1.length;
//     let arr2leng = arr2.length;

//     if (arr1leng > arr2leng) {
//         return `A maior lista é a lista cujo último número é: ${arr1[arr1leng-1]}`
//     } else {
//         return `A maior lista é a lista cujo último número é: ${arr2[arr2leng-1]}`
//     }
// }

// let numeros = [1,2,3,4,5,6,10]

// let outrosNumeros = [5,7,9,4,2,3,9]

// console.log(maiorArray(numeros, outrosNumeros))