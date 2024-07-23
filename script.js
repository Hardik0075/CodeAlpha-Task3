// Sample data
const projects = [
    { id: '1', name: 'Project 1', description: 'Description of Project 1', imgSrc: 'img.webp' },
    { id: '2', name: 'Project 2', description: 'Description of Project 2', imgSrc: 'imh2.jpeg' },
    { id: '3', name: 'Project 3', description: 'Description of Project 3', imgSrc: 'img.webp' },
    { id: '4', name: 'Project 4', description: 'Description of Project 4', imgSrc: 'imh2.jpeg' },
    { id: '5', name: 'Project 5', description: 'Description of Project 5', imgSrc: 'img.webp' },
    { id: '6', name: 'Project 6', description: 'Description of Project 6', imgSrc: 'imh2.jpeg' },
    { id: '7', name: 'Project 7', description: 'Description of Project 7', imgSrc: 'img.webp' }
];

const tasks = [
    { id: '1', projectId: '1', name: 'Task 1', description: 'Description of Task 1', imgSrc: 'imh2.jpeg' },
    { id: '2', projectId: '2', name: 'Task 2', description: 'Description of Task 2', imgSrc: 'img.webp' },
    { id: '3', projectId: '3', name: 'Task 3', description: 'Description of Task 3', imgSrc: 'imh2.jpeg' },
    { id: '4', projectId: '4', name: 'Task 4', description: 'Description of Task 4', imgSrc: 'img.webp' },
    { id: '5', projectId: '5', name: 'Task 5', description: 'Description of Task 5', imgSrc: 'imh2.jpeg' },
    { id: '6', projectId: '6', name: 'Task 6', description: 'Description of Task 6', imgSrc: 'img.webp' },
    { id: '7', projectId: '7', name: 'Task 7', description: 'Description of Task 7', imgSrc: 'imh2.jpeg' }
];

const chatMessages = [
    { user: 'User1', message: 'Hi there!' },
    { user: 'User2', message: 'Hello!' }
];

// Load projects
function loadProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = projects.map(project => `
        <div class="project">
            <img src="${project.imgSrc}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `).join('');
}

// Load tasks
function loadTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `
        <div class="task">
            <img src="${task.imgSrc}" alt="${task.name}">
            <h4>${task.name}</h4>
            <p>${task.description}</p>
        </div>
    `).join('');
}

// Load chat messages
function loadChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = chatMessages.map(msg => `
        <div><strong>${msg.user}:</strong> ${msg.message}</div>
    `).join('');
}

// Create a new project (simulated)
function createProject() {
    const projectName = prompt('Enter project name:');
    const projectDescription = prompt('Enter project description:');
    const imgSrc = prompt('Enter image source URL:');
    if (projectName && projectDescription && imgSrc) {
        const newProject = {
            id: (projects.length + 1).toString(),
            name: projectName,
            description: projectDescription,
            imgSrc: imgSrc
        };
        projects.push(newProject);
        loadProjects();
    }
}

// Create a new task (simulated)
function createTask() {
    const taskName = prompt('Enter task name:');
    const taskDescription = prompt('Enter task description:');
    const projectId = prompt('Enter project ID for this task:');
    const imgSrc = prompt('Enter image source URL:');
    if (taskName && taskDescription && projectId && imgSrc) {
        const newTask = {
            id: (tasks.length + 1).toString(),
            projectId: projectId,
            name: taskName,
            description: taskDescription,
            imgSrc: imgSrc
        };
        tasks.push(newTask);
        loadTasks();
    }
}

// Send chat message (simulated)
function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value;
    if (message) {
        chatMessages.push({ user: 'User1', message });
        chatInput.value = '';
        loadChat();
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadTasks();
    loadChat();
});
