let tasks = [
    {
      titulo: "Buy cat's food",
      tipo: "urgent"
    },
    {
      titulo: "Clean my bedroom",
      tipo: "urgent"
    },  
    {
      titulo: "Fix my computer",
      tipo: "priority"
    },  
    {
      titulo: "Save money for the snaks",
      tipo: "urgent"
    },  
    {
      titulo: "Drink water",
      tipo: "priority"
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
  let urgente = objLista.filter((elem) => elem.tipo === 'urgent');
  let prior = objLista.filter((elem) => elem.tipo === 'priority');
  let normal = objLista.filter((elem) => elem.tipo === 'normal');
 
  let novoArray = [...urgente, ...prior, ...normal];
  for(let i = 0; i < novoArray.length; i++){
    
    let li = document.createElement('li');
    li.classList.add(`list_${i}`)
    let p = document.createElement('p');
    let buttonRemove = document.createElement('button');
    buttonRemove.classList.add('botaoRemover')
    buttonRemove.innerHTML = 'Mark as done'

    buttonRemove.addEventListener('click', function(event){
      let classLi = event.target.closest('li').getAttribute('class');
      let id = Number(classLi.substring(5))
      tasks.splice(id, 1)
      rendLista(tasks)

      if(objLista.length == 0){
        console.log(objLista)
        let liAviso = document.createElement('li');
        liAviso.classList.add('aviso');
        ul.appendChild(liAviso);
        let aviso = document.createElement('p');
        liAviso.appendChild(aviso);
    
        aviso.innerText = 'Congrats! You got all your tasks done :)'
    
        console.log(ul)
        return;
      }
      
    })
    ul.appendChild(li);
    li.append(p, buttonRemove);
    
    p.innerHTML = novoArray[i].titulo
  }

  
}

rendLista(tasks)

button.addEventListener('click', addTarefa)


function addTarefa(){
  if(input.value == "" || select.value == ""){
    alert('Please fill out/select the required fields')
    return;
  }

  let obj = {};
  
  obj.titulo = input.value;
  obj.tipo = select.value;
  tasks.push(obj);
  rendLista(tasks)
  input.value = ''
  select.value = ''
  
}

