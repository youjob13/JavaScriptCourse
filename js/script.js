'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    p = document.querySelector('#hel');
const todoData = localStorage['todoData'] ? JSON.parse(localStorage['todoData']) : [];


const render = function () {
    todoList.textContent = '';
    todoCompleted.textContent = '';
   
    todoData.forEach(function (item,i) {
        
    //    item.value = localStorage.getItem(i);
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }


        const btnTodoCompleted = li.querySelector('.todo-complete');

        btnTodoCompleted.addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });


        const btnTodoDelete = li.querySelector('.todo-remove');

        btnTodoDelete.addEventListener('click', function () {
            todoData.pop(item);
            localStorage.removeItem('todoData');
            render();
        });
        console.log(todoData);
        localStorage.setItem('todoData', JSON.stringify(todoData));
    });
    
};
todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    if (headerInput.value.trim() !== '') {
        const newTodo = {
            value: headerInput.value,
            completed: false,
        };
        todoData.push(newTodo);
        headerInput.value = null;
        render();
    } else {
        alert('write');
        headerInput.value = null;
    }
});
render();
