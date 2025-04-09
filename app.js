var input =document.querySelector('#input');
var ol = document.querySelector('ol')

var arr = [];

function addtudo(){
    arr.push(input.value)
    renderTodo()
}




function renderTodo(){
    ol.innerHTML = "";
    for ( var i=0; i< arr.length; i++){
        ol.innerHTML += `<li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
}