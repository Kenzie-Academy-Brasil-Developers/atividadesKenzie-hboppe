const listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [6, 8, 10, 8]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    },
    
]

////////////////////////////////EXERCICIO 1////////////////////////////

function calculaMedia(nomeDoAluno){
    let find = listaAlunos.find((aluno) => aluno.nome == nomeDoAluno);
    
    let teste = find.materias.map(
        mat => {
            const soma = mat.avaliacoes.reduce((a,b) => a + b, 0)
            const media = soma / mat.avaliacoes.length;
            

            if(media >= find.mediaCorte){
                mat.media = media;
                mat.status = true;
            } else {
                mat.media = media;
                mat.status = false;
            }
    })

    

    return find;

}

//calculaMedia('João')

////////////////////////////////EXERCICIO 2////////////////////////////

function verificandoAprovacao(objAluno){

    // let find = listaAlunos.find((aluno) => aluno.nome == nomeDoAluno);
    objAluno.quantidadeAprovacoes = 0;
    objAluno.status = true;
    const aprovacoes = objAluno.materias.map(mat => {
        if(mat.status === true){
            objAluno.quantidadeAprovacoes += 1
        }
         
    })
    let aprovacoesPorc = objAluno.quantidadeAprovacoes/ objAluno.materias.length;

    if(aprovacoesPorc >= 0.7){
        objAluno.status = true;
    } else {
        objAluno.status = false;
    }

    return objAluno;


}

//verificandoAprovacao(`Joao`)

////////////////////////////////EXERCICIO 3////////////////////////////

const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
        'São Paulo-SP',
        'Campinas-SP',
        'São José dos Campos-SP',
        'Volta Redonda-RJ'
    ],
    passageiros: [
        {
            nome: 'Luis da Silva',
            rg: '1234567890',
            bilhete: {
                origem: 'Curitiba-PR',
                destino: 'São José dos Campos-SP',
                poltrona: 15,
            }
        },
        {
            nome: 'João da Silva',
            rg: '1234567891',
            bilhete: {
                origem: 'São Paulo-SP',
                destino: 'Rio de Janeiro-RJ',
                poltrona: 16,
            }
        },
        
        
    ]
}

/////////////////////EXERCICIO 1///////////////////

function verificarDestino(parada){
    const find = onibus.paradas.find((par) => par == parada);
    if(find != undefined || onibus.destino == parada){ // ver se a parada existe/ é valida
        const passageirosPar = [];
        const encontrarPass = onibus.passageiros.map((pas) => {

            if(pas.bilhete.destino == parada){
                passageirosPar.push(pas)
                pas.viagemConcluida = true;
            }
            
        })
        return passageirosPar;

    } else {
        return `Parada nao encontrada`
    }
}

/////////////////////EXERCICIO 2///////////////////
