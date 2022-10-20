//////////////////////EXERCICIO 1///////////////////

// function verificarEcriar(listaA, listaB){

//     const listaC =[];
//     if(listaA.length == 10 && listaB.length == 10){

//         for (let i = 0; i < 10; i++){
//             if (listaA[i] % 2 != 0 && listaA[i] % 3 != 0){
//                 return `Valores não permitidos encontrados`
//             }
//         }

//         for (let i = 0; i < 10; i++){
//             if (listaB[i] % 5 != 0){
//                 return `Valores não permitidos encontrados`
//             }
//         }

//         for (let k = 0; k < 10; k++){

//             listaC.push(listaA[k], listaB[k])

//         }
//     } else {
//         return "Lista fora dos padrões necessários"
//     }
//     return listaC;

// }

// const A = [6,12,18,24,30,36,42,48,54,60]

// const B = [5,10,15,20,25,30,35,40,45,50]

// console.log(verificarEcriar(A, B))

//////////////////////EXERCICIO 2///////////////////

// function verificarEcriar(listaA, listaB){

//     const listaC =[];
//     if(listaA.length == 12 && listaB.length == 12){

//         for (let i = 0; i < 12; i++){
//             if (listaA[i] % 2 != 0 && listaA[i] % 3 != 0){
//                 return `Valores não permitidos encontrados`
//             }
//         }

//         for (let i = 0; i < 12; i++){
//             if (listaB[i] % 5 == 0){
//                 return `Valores não permitidos encontrados`
//             }
//         }

//         for (let k = 0; k < 12; k++){

//             listaC.push(listaA[k], listaB[k])

//         }
//     } else {
//         return "Lista fora dos padrões necessários"
//     }
//     return listaC;

// }

// const A = [6,12,18,24,30,36,42,48,54,60,66,72]

// const B = [1,2,3,4,6,7,8,9,11,12,13,14]

// console.log(verificarEcriar(A, B))

///////////////////EXERCICIO 3////////////////////

// function numeroParEImpar(lista){

//     let par = 0;
//     let imp = 0;

//     if (lista.length == 30){
//         for(let i = 0; i < lista.length; i++){
//             if(lista[i] == parseInt(lista[i])){
//                 if (lista[i] % 2 == 0){
//                     par++
//                 } else {
//                     imp++
//                 }
//             } else {
//                 return `Lista com elementos invalidos`
//             }
//         }

//     } else {
//         return `Lista com tamanho inválido`
//     }

//     return `A lista recebida possui ${par} elementos pares e ${imp} elementos ímpares.`


    
// }

// const A = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]

// console.log(numeroParEImpar(A))

///////////////////EXERCICIO 4////////////////////

// function quadDaSoma(listaA, listaB){

//     const C = []

//     if (listaA.length == 10 && listaB.length == 10){
            
//         for(let i = 0; i < listaA.length; i++){

//             if(listaA[i] == parseInt(listaA[i]) && listaB[i] == parseInt(listaB[i])){
//                 let soma = listaA[i] + listaB[i];
//                 let quad = Math.pow(soma, 2)
//                 C.push(quad);

//             } else {
//                 return `Lista com elementos invalidos`
//             }
//         }

//     } else {
//         return `Lista com tamanho inválido`
//     }

//     return C;
// }

// const A = [1,2,3,4,5,6,7,8,9,10]

// const B = [11,12,13,14,15,16,17,18,19,20]

// console.log(quadDaSoma(A, B))

///////////////////EXERCICIO 5////////////////////

// function impEPerc(lista){

//     let imp = 0;
//     if (lista.length == 10){
            
//         for(let i = 0; i < lista.length; i++){

//             if(lista[i] == parseInt(lista[i])){
//                 if (lista[i] % 2 != 0){
//                     imp++
//                 }

//             } else {
//                 return `Lista com elementos invalidos`
//             }
//         }

//     } else {
//         return `Lista com tamanho inválido`
//     }

//     let perc = (imp/10) * 100;

//     return `O total de valores ímpares é ${imp} e corresponde a ${perc}% da lista`
    

    
// }

// const A = [6,12,18,24,30,36,42,44,52,59]

// console.log(impEPerc(A))