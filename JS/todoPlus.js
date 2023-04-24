const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const delButton = document.createElement("button");
    const DonButton = document.createElement("button");
    li.appendChild(span);
    li.appendChild(DonButton);
    li.appendChild(delButton);
    span.innerText = newTodo.text;
    delButton.innerText = "Delete";
    DonButton.innerText = "Done";
    delButton.addEventListener("click", deleteToDo);
    DonButton.addEventListener("click", doneToDo);
    toDoList.appendChild(li)
    if(newTodo.done === true){
        span.classList.add("done");
    }
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    li.remove();
    saveToDos()
}

function doneToDo(event) {
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    span.classList.add("done");
    toDos.forEach((toDo) => {
        if (toDo.id === parseInt(li.id)){
            if (toDo.done === true){
                toDo.done = false;
                span.classList.remove("done");
            } else{
                toDo.done = true;
                span.classList.add("done");
            }
        }
    });
    console.log(toDos)
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function handleToDoSubmit(event) {
    event.preventDefault();
    if (toDoInput.value !== ""){
        const newTodo = {
            id : Date.now(),
            text : toDoInput.value,
            done : false
        };
        toDos.push(newTodo);
        saveToDos()
        paintToDo(newTodo);
        toDoInput.value = "";
    } else {
        alert("Write the todo form")
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedTodos = JSON.parse(savedToDos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}