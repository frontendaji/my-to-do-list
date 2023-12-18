const todo = document.getElementById('inputTodo');
let arrayTodo = [];
const maxTodo = 5

function showTodo(){

    let index = arrayTodo.indexOf(arrayTodo[arrayTodo.length - 1]);
    let number = index + 1;
    const listTodo = document.createElement('p');
    listTodo.textContent = number + "." + " " +arrayTodo[arrayTodo.length - 1]
    const list = document.getElementById('list');
    list.appendChild(listTodo);
}

function addTodo() {
    const newTodo = todo.value.trim();

    if (arrayTodo.length >= maxTodo) {
        alert('Todo Sudah Penuh, harap hapus salah satu');
        return;
    }

    if (arrayTodo.includes(newTodo)) {
        alert('Todo sudah ada.');
        return;
    }

    arrayTodo.push(newTodo);
    console.table(arrayTodo);
    showTodo();

    todo.value = "";
}

