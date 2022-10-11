let nome = prompt("Qual seu nome?")
let altura = parseFloat(prompt("Qual sua altura?"))
let peso = parseFloat(prompt("Qual seu peso?"))

let imc = peso/ (altura * altura)

alert(`O IMC da ${nome} é ${imc}`)