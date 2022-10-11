//Exercicio 1

let idade = 24;
let avaliarIdade = idade > 18 && idade < 25

if (avaliarIdade){
    console.log('A idade está entre 18 e 25')
}
else{
    console.log('A idade não está entre 18 e 25')
}


// Exercicio 2

// let carroNome = "Chevrolet";
// let carroAno = 2019
// let filtrarCarro = carroNome == "Chevrolet" && carroAno == 2019

// if (filtrarCarro){
//     console.log(`Carro encontrado`)
// }
// else {
//     console.log(`Carro não encontrado`)
// }


// Exercicio 3

let botaoMenu = false;
let avaliarClick = !botaoMenu;

if(avaliarClick){
    return "abrir menu";
} else {
    return "fechar menu";
}
