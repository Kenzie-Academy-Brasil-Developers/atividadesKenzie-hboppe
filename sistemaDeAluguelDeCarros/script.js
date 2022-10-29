console.log(`Funções disponiveis \n - cadastrarUsuario() \n - buscarCarro(idCarro) \n - listarCarros() \n - listarCarrosDisponiveis() \n - verificarDisponibilidade(idCarro)`);
console.log(`Metodos disponiveis para um usuário \n - alugar() \n - orçamento() \n - devolver()`);

let carros = [
    {
        id: 1,
        marca: "Toyota",
        modelo: "Supra",
        ano: 1998,
        cor: "Vermelho",
        placa: "TXW-1322",
        diaria: 220.00
    },
    {
        id: 2,
        marca: "Nissan",
        modelo: "Skyline",
        ano: 2001,
        cor: "Azul",
        placa: "SKY-2012",
        diaria: 215.50
    },
    {
        id: 3,
        marca: "Mitsubish",
        modelo: "Lancer",
        ano: 2008,
        cor: "Branco",
        placa: "LCR-1515",
        diaria: 190.00
    },
    {
        id: 4,
        marca: "Subaru",
        modelo: "Impreza",
        ano: 1999,
        cor: "Azul",
        placa: "IMP-0129",
        diaria: 152.00
    }
];

let user = {
    id: 0,
    nome: "",
    anoDeNascimento: 0,
    cnh: 0,
    alugar: function(){
        
        let idCarro = parseInt(prompt(`Digite o ID do carro`))

        for(let i = 0; i < alugueis.length; i++){
            if(idCarro == alugueis[i].carroId){
                alert(`Este carro nao esta disponivel pois ja foi alugado`)
                return;
            }
        }

        let aluguel = {
            carroId: idCarro,
            usuarioId: this.id,
            usuarioName: this.nome,
        }

        alugueis.push(aluguel)
        alert(`Aluguel concluido com sucesso`)


    },
    orcamento: function(){
        let idCarro = parseInt(prompt(`Digite o Id do carro para fazer o orcamento`))
        let dias = parseInt(prompt(`Por quantos dias voce quer alugar o carro?`))

        let carroOrc = carros.find(car => car.id == idCarro)

        if(carroOrc){
            alert(`O aluguel total do carro ${carroOrc.marca} ${carroOrc.modelo} por ${dias} dias é de R$ ${(carroOrc.diaria * dias).toFixed(2)}`)

        } else {
            alert(`Carro nao encontrado. Informe uma ID válida`)
        }
    },
    devolver: function(){
        let idCarro = parseInt(prompt(`Digite o Id do carro para fazer a devolucao`))
        

    }

}

let countId = 1;
const listaDeClientes = []
const alugueis = []

function cadastrarUsuario(){
    let nome = prompt(`Digite o seu nome`);
    let anoDeNasc = parseInt(prompt(`Digite o seu ano de nascimento`));
    let data = new Date()
    let anoDeCadastro = data.getFullYear();

    if(anoDeCadastro - anoDeNasc < 18){
        alert(`Nao foi possivel realizar o seu cadastro. É necessario ter a partir de 18 anos.`);
        return;
    }
    let cnh = parseInt(prompt(`Digite o numero da sua CNH`));

    const cliente = {...user}
    cliente.id = countId++;
    cliente.nome = nome;
    cliente.anoDeNascimento = anoDeNasc;
    cliente.cnh = cnh;
    listaDeClientes.push(cliente);

    alert(`Cadastro realizado com sucesso!`)

    return cliente;

}

function buscarCarro(idCarro){

    for (let i = 0; i < carros.length; i++){
        if(carros[i].id == idCarro){
            return carros[i];
        }
    }
    alert(`Carro nao encontrado. Informe uma ID válida`)
    return;
}

function listarCarros(){
    console.log(`===== VEICULOS DA EMPRESA =====`)
    for(let i = 0; i < carros.length; i++){
        console.log(`${carros[i].id} - ${carros[i].marca} ${carros[i].modelo} - ${carros[i].ano}`)
    }
}

function listarCarrosDisponiveis() {

}
