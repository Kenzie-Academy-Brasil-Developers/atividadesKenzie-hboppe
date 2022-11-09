let tasks = [
    {
      titulo: "Comprar comida para o gato",
      tipo: "urgente"
    },
    {
      titulo: "Limpar o quarto",
      tipo: "urgente"
    },  
    {
      titulo: "Consertar Computador",
      tipo: "prioritário"
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: "urgente"
    },  
    {
      titulo: "Beber água",
      tipo: "prioritário"
    }    
]

let ul = document.createElement('ul');
let section = document.getElementById('tarefas')
section.appendChild(ul)

let button = document.getElementById('add');
let input = document.getElementById('tarefa');
let select = document.getElementById('select');


function rendLista(objLista){
  ul.innerHTML = '';
  let urgente = objLista.filter((elem) => elem.tipo === 'urgente');
  let prior = objLista.filter((elem) => elem.tipo === 'prioritário');
  let normal = objLista.filter((elem) => elem.tipo === 'normal');
 
  let novoArray = [...urgente, ...prior, ...normal];
  for(let i = 0; i < novoArray.length; i++){
    let li = document.createElement('li');
    li.classList.add(`list_${i}`)
    let p = document.createElement('p');
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('botaoRemover')
    buttonRemove.innerHTML = 'Remover'

    buttonRemove.addEventListener('click', function(event){
      console.log(event)
      let classLi = event.target.closest('li').getAttribute('class');
      let id = Number(classLi.substring(5))
      tasks.splice(id, 1)
      console.log(tasks); 
      rendLista(tasks)
    })
    ul.appendChild(li);
    li.append(p, buttonRemove);
    
    p.innerHTML = novoArray[i].titulo
  }

  
}

rendLista(tasks)

button.addEventListener('click', addTarefa)


function addTarefa(){
  let obj = {};
  
  obj.titulo = input.value;
  obj.tipo = select.value;
  tasks.push(obj);
  rendLista(tasks)
}

