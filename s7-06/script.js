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
let section = document.getElementById('tarefas');
let button = document.getElementById('add');
button.addEventListener('click', addTarefa)
let input = document.getElementById('tarefa')
let select = document.getElementById('select')




let urgent = tasks.filter(tk => tk.tipo == 'urgente');
let prio = tasks.filter((tk) => tk.tipo == 'prioritário');
let nor = tasks.filter((tk) => tk.tipo == 'normal');
let array = [...urgent, ...prio, ...nor]
console.log(array)

section.appendChild(ul);

function addLista(){
  for(let i = 0; i < array.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li)
    li.innerHTML = `${array[i].titulo}`
    li.classList.add(array[i].tipo)
  }
}

addLista()

function addTarefa(){
  let obj = {titulo: `${input.value}`, tipo: `${select.value}`}
  array.push(obj)
  addLista()
}




