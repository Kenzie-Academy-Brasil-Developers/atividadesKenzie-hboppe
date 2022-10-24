const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  

function buscaCortePorId(id) {

    for(let i = 0; i < barbearia.cortes.length; i++){
        if (barbearia.cortes[i].id == id){
            return barbearia.cortes[i].tipo;
        }

        
    }
    return `Corte não encontrado.`
}

// console.log(buscaCortePorId(6))


  
function buscaBarbaPorId(id) {
    for(let i = 0; i < barbearia.barbas.length; i++){
        if (barbearia.barbas[i].id == id){
            return barbearia.barbas[i].tipo;
        }

        
    }
    return `Barba não encontrada.`
}

// console.log(buscaCortePorId(4))
  
// function verificaStatusBarbearia() {
//     if (barbearia.estaAberto === true){
//         return "Estamos abertos"
//     } else {
//         return "Estamos fechados"
//     }
// }

// console.log(verificaStatusBarbearia())
  
// function retornaTodosCortes() {
//     return barbearia.cortes;
// }

// console.log(retornaTodosCortes());

  
// function retornaTodasBarbas() {
//     return barbearia.barbas;
// }

// console.log(retornaTodasBarbas())
  
// function criaPedido(nomeCliente, corteId, barbaId) {

//     let corte = buscaCortePorId(corteId); 
//     let barba = buscaBarbaPorId(barbaId);
//     let cortePreco = barbearia.cortes.find(
//         function (c){
//             return c.tipo == corte
//         }
//     ).valor;
//     let barbaPreco = barbearia.barbas.find(
//         (precoDaBarba) => (precoDaBarba.tipo == barba)
//     ).valor



//     const pedido = {
//         nome: nomeCliente,
//         pedidoCorte: corte,
//         pedidoCortePreco: cortePreco,
//         pedidoBarba: barba,
//         pedidoBarbaPreco: barbaPreco,
//     }

//     return pedido;
// }

// console.log(criaPedido('Hanna', 1, 5))
  
function atualizaPedido(id, preco, tipo) {
    
}
  
// const pedido = {
//     nome: 'Hanna',
//     pedidoCorte: "Militar",
//     pedidoCortePreco: 20,
//     pedidoBarba: 'Caveira',
//     pedidoBarbaPreco: 15,
// }

// function calculaTotal(pedido) {
//     if(pedido.pedidoCortePreco !== undefined && pedido.pedidoBarbaPreco !== undefined){
//         return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
//     } else if (pedido.pedidoCortePreco == undefined){
//         return pedido.pedidoBarbaPreco;
//     } else {
//         return pedido.pedidoCortePreco;
//     }
// }

// console.log(calculaTotal(pedido))
  
  