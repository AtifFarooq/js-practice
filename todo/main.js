

function addToDo() {
    var todoList = document.getElementById('todoList');
    var todoInput = document.getElementById('todoInput');
    var newListItem = document.createElement('li');
    var textNode = document.createTextNode(todoInput.value);
    // clear input field's placeholder
    todoInput.value = "";
    newListItem.appendChild(textNode);
    todoList.appendChild(newListItem);
}