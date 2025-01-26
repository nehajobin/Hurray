// Initialize the current date
const currentDate = new Date().toLocaleDateString();
document.getElementById('current-date').textContent = `Date: ${currentDate}`;

// Handle task submission
document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Clear the input
  }
});

// Add task to the task list
function addTask(taskText) {
  const taskList = document.getElementById('task-list');
  const listItem = document.createElement('li');
  listItem.classList.add('task-item');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  listItem.appendChild(taskContent);

  // Create a mark as completed button
  const completeButton = document.createElement('button');
  completeButton.textContent = '✔️';
  completeButton.classList.add('complete-btn');
  completeButton.addEventListener('click', function() {
    listItem.classList.toggle('completed');
    updateProgress();
  });
  listItem.appendChild(completeButton);

  // Create a delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
    updateProgress();
  });
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  updateProgress(); // Update progress bar after adding a new task
}

// Update progress bar as tasks are completed
function updateProgress() {
  const taskItems = document.querySelectorAll('.task-item');
  const completedTasks = document.querySelectorAll('.task-item.completed');
  const progressPercentage = (completedTasks.length / taskItems.length) * 100;

  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${progressPercentage}%`;
}
