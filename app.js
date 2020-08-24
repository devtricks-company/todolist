const todoInput = document.querySelector("#todo-input");
const buttonInput = document.querySelector(".btn-input");
const todoList = document.querySelector(".todo-list");
const listTodo = [];
// event listener
buttonInput.addEventListener("click", addTodoList);




//function

function addTodoList(event) {
  event.preventDefault();
  const todo = {
    id: listTodo.length + 1,
    name: todoInput.value,
    complete: false,
    toggle:false
  };

  listTodo.push(todo);
  displayList();
  
  clearInput();
  addAnimation();
  const trashes = document.querySelectorAll('.trash').forEach(trash => {
    trash.addEventListener('click', (e) =>{
        console.log(e.target);
    })
})
}

function displayList() {
  let li = "";
  listTodo.forEach((todo,index) => {
      
    li += `<li class="todo mt-3 ${!todo.toggle ? '' : 'fade-in'}">
                   
         <div>${todo.id}</div>
         <h4>${todo.name}</h4>
         <div>
             <input type="checkbox" name="complete" />
                 
             
             <button class='trash'>
                 <i class="fas fa-trash"></i>
             </button>
         </div>
 
 </li>`;
    todo.toggle = true;
 
  });
  todoList.innerHTML = li;

 
  
  
}

function clearInput(){
    todoInput.value = '';
}

function addAnimation(){
    const todo = document.querySelectorAll('.todo').forEach(to => {
        to.classList.add('fade-in')
    });
   
          

    
}


