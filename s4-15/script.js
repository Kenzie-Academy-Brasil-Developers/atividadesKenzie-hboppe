/////////////////////EXERCICIO 1 //////////////

// function novoElemento(){
//     const arr = []

//     while(arr.length < 10){
//         let elemento = prompt(`Digite um elemento`)
//         if (elemento.length < 8){
//             arr.push(elemento)
//             console.log(`Elemento inserido com sucesso, a lista agora é: ${arr}`)
//         } else {
//             console.log(`Não foi possível inserir este valor`)
//         }
//     }
// }

// novoElemento()

/////////////////////EXERCICIO 2 //////////////

// function recebPara(arrA){

//     if (arrA.length == 8) {
//         const arrB = []
//         for (let i = 0; i < arrA.length; i++){

//             if (typeof(arrA[i]) == 'number'){
//                 let novoElem = arrA[i] * 3;
//                 arrB.push(novoElem)
//             } else {
//                 let novoElem = ''
//                 for(let j = 0; j < 3; j++){
//                     novoElem += arrA[i]
//                 }
//                 arrB.push(novoElem)
//             }
            
//         }
    
//         return arrB;
//     } else {
//         return `Lista inválida`
//     }
    
// }

// const listaA = [5,'oi',3,1,'td','bem',2,4]
// console.log(recebPara(listaA))

/////////////////////EXERCICIO 3 /////////////////

function elevarAoQuad(listaA){

    const listaB = []
    if (listaA.length == 15){

        for(let i = 0; i < listaA.length; i++){

            if(listaA[i] == parseInt(listaA[i])){
                let quad = Math.pow(listaA[i], 2)
                listaB.push(quad);

            } else {
                return 'Lista nao conte apenas numeros inteiros'
            }
        }
        return listaB;
    } else {
        return `Lista com numeros de elementos diferente de 15`
    }
}

const matriz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(elevarAoQuad(matriz))




