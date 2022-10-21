const carros = [
    {
    modelo:"Ka",
    marca:"Ford",
    ano:"2000",
    cor:"Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 'R$ 6.799,33'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 'R$ 12.199,13'
    },
    {
    modelo:"Palio",
    marca:"Fiat",
    ano:"1995",
    cor:"Verde",
    completo: false,
    acessorios: [],
    preco: 'R$ 11.099,11'
    },
    {
    modelo:"Monza",
    marca:"Chevrolet",
    ano:"1993",
    cor:"Vinho",
    completo: false,
    acessorios: [],
    preco: 'R$ 14.578,25'
    },
    {
    modelo:"Saveiro",
    marca:"VW",
    ano:"2013",
    cor:"Prata",
    completo: false,
    acessorios: [],
    preco: 'R$ 28.399,13'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"1996",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 14.350,45'
    },
    {
    modelo:"Gol",
    marca:"VW",
    ano:"2013",
    cor:"Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 'R$ 22.109,21'
    },
    {
    modelo:"Montana",
    marca:"Chevrolet",
    ano:"2011",
    cor:"Azul",
    completo: false,
    acessorios: [],
    preco: 'R$ 15.999,13'
    },
    {
    modelo:"Stilo",
    marca:"Fiat",
    ano:"2000",
    cor:"Preto",
    completo: false,
    acessorios: [],
    preco: 'R$ 17.251,36'
    }
]
  

////////////////EXERCICIO 1/////////////////

// function quantCarros(listaCarros){

//     let quantDeCarros = listaCarros.length;

//     return `Há ${quantDeCarros} carro(s) na concessionária`
// }

// console.log(quantCarros(carros))

////////////////EXERCICIO 2/////////////////

// function valorDoEstoque(listaDeCarros){

//     let valorTotal = 0;

//     for(let i = 0; i < listaDeCarros.length; i++){ // loop para numero de carros

//         let value = listaDeCarros[i].preco.substring(3) // para tirar R$ do numero
//         let valorForm = ''

//         for(let j = 0; j < value.length; j++){ // loop q vai percorrer string de valor do carro
//             if(value[j] == '.'){
                
//             } else if (value[j] == ','){
//                 valorForm += "."
//             } else {
//                 valorForm += value[j]
//             }
            
//         }
//         valorTotal += Number(valorForm)
//     }
//     return `A soma do preço de todos veículos é R$ ${valorTotal.toFixed(2)}`
    
// }

// console.log(valorDoEstoque(carros))

/////////////////EXERCICIO 3/////////////////

// function filtraPorMarca(listaDeCarros, marca){
//     let marcaForm = marca.substring(0,1).toUpperCase() + marca.substring(1).toLowerCase()
    
//     const listaDaMarca = [];

//     for(let i = 0; i < listaDeCarros.length; i++){
//         if(listaDeCarros[i].marca == marcaForm){
//             listaDaMarca.push(listaDeCarros[i])
//         }
//     }

//     return listaDaMarca;

// }

// console.log(filtraPorMarca(carros, "FIAT"))

/////////////////// EXERCICIO 4 /////////////////

// function filtraPorAcessorio(listaDeCarros, acess){

//     let acessForm = acess.substring(0,1).toUpperCase() + acess.substring(1).toLowerCase()

//     const carrosComAcess = [];

//     for(let i = 0; i < listaDeCarros.length; i++){ // loop tamanho da lista
//         for(let j = 0; j < listaDeCarros[i].acessorios.length; j++){

//             if(listaDeCarros[i].acessorios[j] == acessForm){
//                 carrosComAcess.push(listaDeCarros[i]);
//             }
//         }
//     }

//     return carrosComAcess;
// }

// console.log(filtraPorAcessorio(carros, 'trava'))


/////////////////EXERCICIO 5///////////////////

// function eCarroCompleto(listaCarros){

//     let carrosCompletos = []
//     for(let i = 0; i < listaCarros.length; i++){
//         if(listaCarros[i].completo == true){
//             carrosCompletos.push(listaCarros[i]);
//         }
//     }

//     return carrosCompletos
// }

// console.log(eCarroCompleto(carros))

/////////////////EXERCICIO 6///////////////////

// function adicionaCarro(){
//     let modelo = prompt(`Digite o modelo do carro`);
//     let marca = prompt(`Digite o nome da marca`);
//     let ano = prompt(`Digite o ano`);
//     let cor = prompt(`Digite a cor`);
//     let completo = prompt(`O carro é completo? (Valores aceitos: true ou false)`);
//     let acessorios = prompt(`Digite o acesorio`);
//     let preco = prompt(`Digite o preco`)

//     let newCar = {
//         modelo: modelo,
//         marca: marca,
//         ano: ano,
//         cor: cor,
//         completo: completo,
//         acessorios: [acessorios],
//         preco: preco,
//     }

//     if(newCar.completo == 'true'){

//         newCar.completo = true;
//     } else if (newCar.completo == 'false'){
//         newCar.completo = false;
//     }

//     carros.push(newCar);
//     console.log(carros);
    
// }

// adicionaCarro()

/////////////////EXERCICIO 7///////////////////

// function removeCarro(listaCarros, posicao){
    
//     listaCarros.splice(posicao, 1)

//     return listaCarros
// }

// console.log(removeCarro(carros, 2));

/////////////////EXERCICIO 8///////////////////
