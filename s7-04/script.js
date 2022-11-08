let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
}



function criarElmentos(){
    let ul = document.createElement('ul')
    document.getElementsByTagName('body')[0].appendChild(ul);

    let li = document.createElement('li')
    ul.appendChild(li)

    for(prop in produto){

        let span = document.createElement('span')
        li.appendChild(span);

        span.classList.add(`${prop}`);
        span.innerText = `${produto[prop]}`

        if(prop == 'liquidacao'){
            span.innerText = 'Em liquidaçao'
            var p = document.createElement('p')
            span.after(p);
            p.innerText = `Hoje apenas: R$ ${produto.valor * 0.7}`
            p.classList.add('discount')
        } else if(prop == 'distribuidor'){
            span.innerText = `Fabricante: ${produto[prop]}`
        }
    }
    const spanLiq = document.getElementsByClassName('liquidacao')[0];

    spanLiq.addEventListener('click', function(){
    p.classList.toggle('discount');
})

}

criarElmentos()







