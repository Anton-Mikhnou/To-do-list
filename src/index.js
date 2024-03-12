import './style.css';
import dom from './components/dom';
// import createTask from './components/createTask';
import taskDom from './components/TaskDom';
import projectDom from './components/projectDom';
import addTaskFn from './components/addTask';
import deleteTask from './components/deleteTask';
import { idGenerate } from './components/idGenereate';

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
            addProjectFn(myTask, values);
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

// function addProjectFn (arr, value) {
//     let projectName = value.project;
//     let project = JSON.parse(localStorage.getItem(projectName)) || [];
    
//     let projectObj = arr.find((elem) => {
//         for (let key in elem) {
//             if(elem[key] === projectName) {
//                 localStorage.setItem(projectName, )
//                 project.push(elem);
//                 // return elem;
//             }
//         }
//     })
//     localStorage.setItem(projectName, JSON.stringify(project))
//     // console.log(projectObj);
//     // project.push(projectObj);
//     // console.log(projectName);
// }

function addProjectFn(arr) {
    let projects = {};

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
}
