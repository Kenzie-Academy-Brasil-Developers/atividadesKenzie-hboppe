const obj = {
    nome: "",
    anoDeNascimento: 0,
    cidade: "",
}

function criarPessoa(nome, ano, cidade){
    const pessoa = {...obj};
    pessoa.nome = nome;
    pessoa.anoDeNascimento = ano;
    pessoa.cidade = cidade;

    return pessoa;
}

let hanna = criarPessoa("Hanna", 1995, 'Fortaleza');

function apresentar(pessoa){

    let date = new Date();
    let anoAtual = date.getFullYear();
    let idade = anoAtual - pessoa.idade;

    return `${pessoa.nome} possui ${idade} anos de idade e atualmente está morando em ${pessoa.cidade}.`

}

const Elevador = {
    andarAtual: 2,
    totalDeAndares: 10,
    capacidadeDoElevador: 12,
    ocupacaoAtual: 11,
}

function entrar(elevador){
    elevador.ocupacaoAtual++;

    if(elevador.ocupacaoAtual >= elevador.capacidadeDoElevador){
        return `Elevador lotado`
    } else {
        return `Ocupacao atual em: ${elevador.ocupacaoAtual}`
    }

}

// console.log(entrar(Elevador))

function sair(elevador){
    elevador.ocupacaoAtual--;

    return `Ocupacao atual em: ${elevador.ocupacaoAtual}`
}

// console.log(sair(Elevador))

function subir(elevador){
    elevador.andarAtual++;

    if(elevador.andarAtual >= elevador.totalDeAndares){
        return `O elevador já se encontra no último andar`;
    } else {
        return `Estamos no andar: ${elevador.andarAtual}`
    }
}

// console.log(subir(Elevador))

function descer(elevador){
    elevador.andarAtual--;

    if(elevador.andarAtual == 0){
        return `O elevador já se encontra no térreo`
    } else {
        return `Estamos no andar: ${elevador.andarAtual}`
    }
}

// console.log(descer(Elevador))

const Televisao = {
    canalAtual: 10,
    volume: 2,
}

function aumentarVolume(televisao){
    televisao.volume++;
    if (televisao.volume >= 10){
        return `Volume no máximo`;
    } else {
        return `Volume esta em: ${televisao.volume}`
    }
}

// console.log(aumentarVolume(Televisao))

function diminuirVolume(televisao){
    televisao.volume--;

    if(televisao.volume <= 0){
        return `Volume no mínimo"`
    } else {
        return `Volume esta em: ${televisao.volume}`
    }
}

// console.log(diminuirVolume(Televisao))

function mudarCanalParaCima(televisao){
    televisao.canalAtual++;
    if (televisao.canalAtual >= 100){
        return `Este já é o último canal`;
    } else {
        return `O canal atual é: ${televisao.canalAtual}`
    }
}

// console.log(mudarCanalParaCima(Televisao))


