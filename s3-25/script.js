//EXERCICIO 1

// let salMin = parseFloat(prompt(`Digite o valor do seu salario`))
// let kilow = parseInt(prompt(`Digite o valor de quilowatts`))
// let valorPorKilow = (salMin / 7) / 100;
// let conta = valorPorKilow * kilow;

// let desconto = conta * 0.9;

// alert(`O valor em reais por cada quilowatt é de R$ ${valorPorKilow}. O valor em reais a ser pago pela conta de energia é de R$ ${conta}. Valor da conta com 10% de desconto: R$ ${desconto} `)

// EXERCICIO 2

// let valorDoProduto = parseFloat(prompt(`Digite o valor do produto`));

// let desconto = valorDoProduto * 0.91;

// alert(`O novo valor do produto com desconto de 9% é de R$ ${desconto}`);

// EXERCICIO 3

// let a = prompt(`Digite uma frase/palavra`);
// let b = prompt(`Digite uma segunda frase/palavra`);

// let aux;

// aux = a;
// a = b;
// b = aux;

// alert(`O valor antigo de a e b eram respectivamente ${b} e ${a}. Os NOVOS valores sao, respectivamente ${a} e ${b}`)

// EXERCICIO 4

// let quantFitas = parseInt(prompt(`Digite a quantidade de fitas que a locadora possui`))
// let aluguel = parseFloat(prompt(`Digite o valor por cada aluguel`))

// let fitasAlugMes = parseInt(quantFitas/3);

// let fatAnual = fitasAlugMes * aluguel * 12;

// let multasPorMes = parseInt(fitasAlugMes/10) * (aluguel * 0.1);

// let quantFinalDeFitas = quantFitas - parseInt(quantFitas * 0.02) + parseInt(quantFitas * 0.1)

// alert(`Faturamento anual: R$ ${fatAnual}. Valor ganho com multas por mes: R$ ${multasPorMes}. Quantidade final de fitas apos uma ano: ${quantFinalDeFitas} fitas.`)

// EXERCICIO 5

// let num = parseInt(prompt(`Digite um número com 3 digitos`))

// let centena = Math.floor(num/100);

// let dezena = Math.floor((num - (centena * 100)) / 10)

// let unidade = num - ((`${centena}` + `${dezena}`) * 10)

// alert(`Centena: ${centena} - Dezena: ${dezena} - Unidade: ${unidade}`)

// EXERCICIO 6

// let num = parseInt(prompt(`Digite um numero de 3 digitos`));

// let num = parseInt(prompt(`Digite um número de 3 digitos`))

// let numInvertido = parseInt(num.toString().split('').reverse().join(''))

// // let invNum = `'${num[2]}'+ '${num[1]}'+ '${num[0]}'`;

// alert(`O numero ${num} invertido é ${numInvertido}`)

// EXERCICIO 7

// let numConta = parseInt(prompt(`Digite o numero da sua conta (com 3 digitos)`))

// let numInvertido = parseInt(numConta.toString().split('').reverse().join(''))

// let soma = numConta + numInvertido;

// soma = soma.toString().split('').reverse()

// let num1 = parseInt(soma[0]) 
// let num2 = parseInt(soma[1]) * 2
// let num3 = parseInt(soma[2]) * 3

// let somaDosNovosNum = (num1 + num2 + num3).toString()
// let ultimoDigito = somaDosNovosNum.length - 1
// alert(`O digito verificador da sua conta corrente é: ${somaDosNovosNum[ultimoDigito]}`)


