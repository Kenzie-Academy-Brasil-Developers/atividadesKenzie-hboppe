let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

/////////////////////////EXERCICIO 1///////////////////////////

function qualIdade(objPessoa){
    let currentYear = new Date().getFullYear();
    let age = currentYear - objPessoa.anoNascimento;

    return `${objPessoa.nome} tem ${age} anos`
}

/////////////////////////EXERCICIO 2///////////////////////////

function normalizaDado(objPessoa){
    let name = objPessoa.nome[0].toUpperCase() + objPessoa.nome.substring(1);
    return name;
}

/////////////////////////EXERCICIO 3///////////////////////////

function criandoListaDeUsuarios(objPessoa){

    const listaDeUsuarios = []
    objPessoa.nomeDeUsuario = objPessoa.nomeDeUsuario.toLowerCase();
    listaDeUsuarios.push(objPessoa);

    return listaDeUsuarios;
}

/////////////////////////EXERCICIO 4///////////////////////////

function calculaVale(objPessoa){
    if(objPessoa.temCarro === true){
        let regex = /[0-9]/g
        let dist = objPessoa.distanciaDoTrabalho.match(regex).join("")
        let valeCombustivel = (Number(dist) * 6.99) * 0.7;
        objPessoa.valeCombustivel = `R$ ${valeCombustivel.toFixed(2)}`

        return objPessoa.valeCombustivel;
    }else {
        return `Nao tem direito a Vale combustivel`
    }
}

////////////////////////////EXERCICIO 5///////////////////////////

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo:[]
}
  
function adicionarTipo(objEndereco){
    objEndereco.tipo.push('Casa')

    return objEndereco;
}

////////////////////////////EXERCICIO 6///////////////////////////

function adicionarEnderecoEmPessoa(objPessoa, objEndereco){
    objPessoa.endereco.push(objEndereco);
    return objPessoa;
}
    
    
