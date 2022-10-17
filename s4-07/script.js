/////////////////////EXERCICIO 1////////////////////

// let num = parseInt(prompt(`Digite um número de 0 a 10`))
// while (num < 0 || num > 10){
//     num = parseInt(prompt(`Digite um número de 0 a 10`))
// }

// alert('Obrigada!')

/////////////////////EXERCICIO 2////////////////////

// let nome = prompt(`Digite seu nome`)
// let usuario = prompt(`Digite seu usuario`)

// while (nome == usuario){
//     nome = prompt(`Digite seu nome`)
//     usuario = prompt(`Digite seu usuario`)

// }

// alert(`Obrigada!`)

/////////////////////EXERCICIO 3////////////////////

let numero = Number(prompt(`Digite um numero aqui`))
let soma = 0;
let cont = 0;

while(numero == parseInt(numero) && numero > 0 && numero < 10){
    soma += numero;
    cont++
}

let media = soma/ cont;

alert(`A soma dos numeros é ${soma} e a media deles é de ${media}`)


