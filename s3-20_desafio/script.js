let nome = prompt("Qual seu nome?")
let idade = parseInt(prompt('Qual sua idade?'))
let estaAcompanhado = prompt('Está acompanhado? Digite s para sim e n para nao')

if (estaAcompanhado == 's'){
    estaAcompanhado = true
} else if (estaAcompanhado == 'n'){
    estaAcompanhado = false
} 


if (idade < 18) {
    alert(`Entrada não está permitida para ${nome} : Menor de idade`)
}
else if (idade >= 18){
    if (estaAcompanhado){
        alert(`Entrada permitida para ${nome}: Conceder desconto`)
    } else {
        alert(`Entrada permitida para ${nome}: Valor integral.`)
    }
} 