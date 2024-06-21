// Selecting elements from the DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to create a new task item
const createTaskItem = (taskText) => {
    // Create list item
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    });

    // Create task text span
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);
};

// Event listener for form submit
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskItem(taskText);
        taskInput.value = ''; // Clear input field
    }
});
