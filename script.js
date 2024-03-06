document.getElementById('addTodoBtn').addEventListener('click', function() {
    const inputText = document.getElementById('newTodoInput').value.trim();
    if (inputText !== '') {
        const todoList = document.getElementById('todoList');
        const newTodo = document.createElement('li');
        newTodo.textContent = inputText;
        todoList.appendChild(newTodo);
        document.getElementById('newTodoInput').value = '';
    }
});

