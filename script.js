
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


const createTaskItem = (taskText) => {
    
    const li = document.createElement('li');

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

   
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });


    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);
};


taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskItem(taskText);
        taskInput.value = ''; 
    }
});
