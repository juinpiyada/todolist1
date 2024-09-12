document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTodo = todoInput.value.trim();

        if (newTodo) {
            addTodoItem(newTodo);
            todoInput.value = '';
        }
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const markCompleteBtn = document.createElement('button');
        markCompleteBtn.textContent = 'Mark as Done';
        markCompleteBtn.classList.add('edit');
        markCompleteBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
            markCompleteBtn.textContent = li.classList.contains('completed') ? 'Undo' : 'Mark as Done';
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(markCompleteBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});