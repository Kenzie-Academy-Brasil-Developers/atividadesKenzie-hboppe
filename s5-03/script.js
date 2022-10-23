// const caixaDeSuprimentos = [[1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5]];
// const higiene = caixaDeSuprimentos[0];
// const alimentacao = caixaDeSuprimentos[1];
// const cuidadosMedicos = caixaDeSuprimentos[2];
// const lazer = caixaDeSuprimentos[3];

// function irAcampar(){
//     if(caixaDeSuprimentos.length == 4){
//         for(let i = 0; i < caixaDeSuprimentos.length; i++){

//             if(caixaDeSuprimentos[i].length < 5){
//                 if (caixaDeSuprimentos[i] == higiene){
//                     return `Precisamos de mais itens da seção Higiene.`
//                 } else if (caixaDeSuprimentos[i] == alimentacao){
//                     return `Precisamos de mais itens da seção Alimentacao.`
//                 } else if (caixaDeSuprimentos[i] == cuidadosMedicos){
//                     return `Precisamos de mais itens da seção Cuidados Medicos.`
//                 } else if(caixaDeSuprimentos[i] == lazer) {
//                     return `Precisamos de mais itens da seção Lazer.`
//                 }
//             } else if(caixaDeSuprimentos[i].length > 5){
//                 return `Tem itens demais, não precisamos de tantos.`
//             }
//         }

//         return `Podemos ir acampar`;

//     } else if(caixaDeSuprimentos.length < 4) {
//         return `Algum amigo ainda não retornou com os itens.`;
//     } else {
//         return `Acho que temos um intruso.`;
//     }
// }

// console.log(irAcampar())