import './style.css';
import dom from './components/dom';
import createTask from './components/createTask';
import taskDom from './components/TaskDom';
import projectDom from './components/projectDom';

function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const dialog = document.querySelector('dialog');
const close = document.querySelector('.close');
const form = document.getElementById('form');
const navbarElem = document.querySelector('#navbarElem');
// const task = document.querySelectorAll('.task'); 

let isHome = true;

addTask.addEventListener('click', () => {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

let myTask = JSON.parse(localStorage.getItem('myTask')) || [];

localStorage.setItem('myTask', JSON.stringify(myTask))

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let i = myTask.length;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    addTaskFn(values);
    if(isHome === true) {
        addTaskDom(myTask);
    }
    addProject(values, values.project);
    updateLocalStorage();

    dialog.close();
})

function addTaskFn (obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }

    let i = myTask.length;
    
    myTask.push(new createTask(...arr, i));
}

function addTaskDom (obj) {

    removeAllChildNodes(dom.content);
    for (let i = 0; i < obj.length; i++) {
        let arrValue = Object.values(obj[i]);
        // dom.content.appendChild(taskDom(...arrValue))
        let taskElement = taskDom(...arrValue);
        taskElement.id = i;
        dom.content.appendChild(taskElement);
    }
}

function addProject (value, projectValue) {
    checkAndAddProject(projectValue);
    let project = JSON.parse(localStorage.getItem(projectValue)) || [];
    let taskId = myTask.length -1; 
    project.push({...value, id: taskId}); 
    localStorage.setItem(projectValue, JSON.stringify(project));
}

function checkAndAddProject (projectName) {
    if( localStorage.getItem(projectName)) {
        return;
    } else {
        projectDom(projectName);
    }
}   

function updateLocalStorage () {
    localStorage.setItem('myTask', JSON.stringify(myTask));
} 

navbarElem.addEventListener('click', (event) => {
    const target = event.target
    if(target.classList.contains('itemProject')) {
        isHome = false;
        const val = JSON.parse(localStorage.getItem(target.textContent))
        addTaskDom(val);
        updateLocalStorage();
    }
})

dom.home.addEventListener('click', () => {
    isHome = true;
    addTaskDom(myTask);
    updateLocalStorage();
}) 

window.addEventListener('load', () => {
    myTask = JSON.parse(localStorage.getItem('myTask'));

    let project = [];

    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'myTask') {
            project.push(localStorage.key(i));
        }
    }

    for (let j = 0; j < project.length; j++) {
        projectDom(project[j]);
    }
    addTaskDom(myTask);
})