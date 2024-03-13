import './style.css';
import dom from './components/dom';
// import createTask from './components/createTask';
import taskDom from './components/TaskDom';
import projectDom from './components/projectDom';
import addTaskFn from './components/addTask';
import deleteTask from './components/deleteTask';
// let exceptionElem = '<div class="itemNav"><svg  width="20" height="20" fill="#FFDDD2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>clipboard-edit-outline</title><path d="M21.04 12.13C21.18 12.13 21.31 12.19 21.42 12.3L22.7 13.58C22.92 13.79 22.92 14.14 22.7 14.35L21.7 15.35L19.65 13.3L20.65 12.3C20.76 12.19 20.9 12.13 21.04 12.13M19.07 13.88L21.12 15.93L15.06 22H13V19.94L19.07 13.88M11 19L9 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H9.18C9.6 1.84 10.7 1 12 1C13.3 1 14.4 1.84 14.82 3H19C20.1 3 21 3.9 21 5V9L19 11V5H17V7H7V5H5V19H11M12 3C11.45 3 11 3.45 11 4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4C13 3.45 12.55 3 12 3Z" /></svg><span>Project</span></div>'

function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeAllLastdNodes (parent) {
    console.log(parent.childNodes.length);
    while (parent.childNodes.length > 2) {
        parent.removeChild(parent.lastChild);
    }
}

const content = document.querySelector('.content');
const addTask = document.querySelector('.addTask');
const dialog = document.querySelector('dialog');
const close = document.querySelector('.close');
const form = document.getElementById('form');
// const itemNav = document.querySelector('')
const navbarElem = document.querySelector('#navbarElem');
const butonTask = document.querySelectorAll('.button_task');
const task = document.querySelectorAll('.task');

let isChange = false;
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
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    if (isChange === false) {
        if(isHome) {
            addTaskFn(myTask, values);
            addTaskDom(myTask);
            addProjectFn(myTask);
            localStorage.setItem('myTask', JSON.stringify(myTask))
        }
    }

    dialog.close();
})

function addTaskDom(arr) {
    removeAllChildNodes(content);
    for (let i = 0; i < arr.length; i++) {
        let arrValue = Object.values(arr[i]);
        let taskElement = taskDom(...arrValue);
        taskElement.id = arr[i].id;
        content.appendChild(taskElement);
    } 
}

function addProjectFn(arr) {
    let projects = {};
    console.log(projects);
    
    Object.keys(localStorage).forEach(key => {
        if (key !== 'myTask') { 
            localStorage.removeItem(key);
        }
    });

    arr.forEach(task => {
        let projectName = task.project;
        if (!projects[projectName]) {
            projects[projectName] = [];
        }
        projects[projectName].push(task);
    });

    
    for (let projectName in projects) {
        localStorage.setItem(projectName, JSON.stringify(projects[projectName]));
    }
    addProjectDom(projects);
    
}

function addProjectDom(obj) {
    let arrKey = Object.keys(obj);
    removeAllLastdNodes(navbarElem);
    arrKey.forEach((elem) => {
        projectDom(elem);
    })
}



