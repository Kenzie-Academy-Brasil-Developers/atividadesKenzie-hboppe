// ///////////////EXERCICIO 1 //////////////

// const Pessoa = {
//     nome: 'Hanna',
//     anoDeNascimento: 1995,
//     cpf: '023.266.559-55',
//     cidade: 'Winchester',
//     estado: 'Virginia',
//     logradouro: 'Valley Road',
// }

// ///////////////EXERCICIO 2 //////////////

// const Escola = {
//     nome: 'John Wood Highschool',
//     cnpj: '33.200.056/0001-49',
//     areaDeAtuacao: 'Ensino medio',
//     cidade: 'Winchester',
//     estado: 'Virginia',
//     logradouro: 'Pleasant Valley',
//     curso: 'Matematica',
// }

// ///////////////EXERCICIO 3 //////////////


// const Curso = {
//     nome: 'Matematica',
//     duracaoEmAnos: 4,
//     turma: 1,
//     modulos: 5,

// }

// ///////////////EXERCICIO 4 //////////////


// const Endereco = {
//     cidade: 'Winchester',
//     estado: 'Virginia',
//     logradouro: 'Rua da compadecida',
//     cep: '60.822-770',
// }

// ///////////////EXERCICIO 5 //////////////


// const Turma = {
//     professores:['Thiago', 'Hudson', 'Marcos'],
//     alunos:['Julia', 'Kevin', 'Gabs'],
//     dataDeInicio: '15/09/2022',
//     dataPrevistaDeFormatura: '15/09/2023',
// }

// ---------------MANIPULACAO --------------------


const figure = {  
    name: "Carl",   
    classes: ["Warrior"],  
    leader_trend: true,
    power: 6, 
    allied: true  
}

///////////EXERCICIO 1/////////

// function returnName(){
//     return figure.name;
// }

// console.log(returnName())

///////////EXERCICIO 2/////////

// function verifyClasses(){
//     if (figure.classes.length > 1){
//         return figure.classes
//     } else {
//         return figure.classes[0];
//     }
// }

// console.log(verifyClasses())

///////////////////EXERCICIO 3///////////////

// function realPower(){
//     if(figure.leader_trend === true){
//         let pow = figure.power;
//         return Math.pow(pow, 2)
//     } else {
//         return figure.power;
//     }
// }

// console.log(realPower())

///////////////////EXERCICIO 4//////////////////

// function inserNewClass(str){
//     const classesPermi = ["Warrior", "Barbarious", "Arch", "Hunter", "Survivor"]

//     let novaClasse = str.toLowerCase();

//     if (figure.classes.length < 3){
//         for (let i = 0; i < figure.classes.length; i++){
//             if(figure.classes[i].toLocaleLowerCase == novaClasse){
//                 return `O personagem já pertence a classe ${figure.classes[i]}`
//             } else {
//                 let novoForm = novaClasse.substring(0,1).toUpperCase() + novaClasse.substring(1)
//                 figure.classes.push(novoForm)

//                 return `Classe ${novoForm}, inserida com sucesso`
//             }
//         }

//     } else {
//         return `Este personagem não pode estar em mais classes`;
//     }
// }

// console.log(inserNewClass("Barbarious"))


///////////////////EXERCICIO 5//////////////////

// function noMoreBarbarious(){
    
//     if (figure.leader_trend === true){
        
//         for(let i = 0; i < figure.classes.length; i++){
//             if(figure.classes[i] == "Barbarious"){

//                 figure.leader_trend = false;

//                 return `O ${figure.name}, agora é um inimigo`
//             }
//         }
//         return `Barbarious nao está incluso na classe`

//     } else {
//         return `O leader trend é falso`
//     }
// }

// console.log(noMoreBarbarious())

