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
// const remove = document.querySelectorAll('.remove');
const butonTask = document.querySelectorAll('.button_task');
const task = document.querySelectorAll('.task')

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
        addTaskFn(myTask, values);
        if(isHome === true) {
            addTaskDom(myTask);
        }
        addProject(values, values.project);
    }
    updateLocalStorage();

    dialog.close();
})

function addTaskDom (obj) {

    removeAllChildNodes(dom.content);
    for (let i = 0; i < obj.length; i++) {
        let arrValue = Object.values(obj[i]);
        let taskElement = taskDom(...arrValue);
        // taskElement.id = i;
        taskElement.id = idGenerate();
        // taskElement.dataset.taskId = obj[i].id;
        dom.content.appendChild(taskElement);
    }
}

function addProject (value, projectValue) {
    checkAndAddProject(projectValue);
    let project = JSON.parse(localStorage.getItem(projectValue)) || [];
    // let taskId = myTask.length -1; 
    let taskId = idGenerate();
    project.push({...value, id: taskId}); 
    localStorage.setItem(projectValue, JSON.stringify(project));
}



function checkAndAddProject (projectName) {
    if (localStorage.getItem(projectName)) {
        return;
    } else {
        projectDom(projectName);
    }
}   
//====================================================-=-=-=-=--=====================================================
content.addEventListener('click', (event) => {
    const target = event.target
    let taskElement = target.closest('.task');
    const taskBtn = target.closest('.button_task'); 
    if (taskElement && !taskBtn) {
        console.log('task');
    } else if (taskBtn) {
        let i = +taskElement.id;
        let projectName;
        for (let j = 0; j < myTask.length; j++) {
            if(myTask[j].id === i) {
                projectName = myTask[j].project;
            }
        }
        console.log(projectName);
        deleteTask(myTask, i);
        updateLocalStorage();
        addTaskDom(myTask);
        
    }

    // if (taskElement && !taskBtn) {
    //     console.log('task');
    // } else if (taskBtn) {
    //     let taskId = +taskElement.id; // Получаем ID задачи
    //     // Находим проект, к которому принадлежит задача
    //     let projectName = myTask[taskId].project;
    //     // Удаляем задачу из массива myTask
    //     myTask = myTask.filter((task, index) => index !== taskId);
    //     // Обновляем локальное хранилище для myTask
    //     updateLocalStorage();
    //     // Удаляем задачу из соответствующего проекта
    //     if (projectName) {
    //         let projectTasks = JSON.parse(localStorage.getItem(projectName)) || [];
    //         projectTasks = projectTasks.filter(task => task.id !== taskId);
    //         localStorage.setItem(projectName, JSON.stringify(projectTasks));
    //     }
    //     // Обновляем DOM
    //     addTaskDom(myTask);
    // }
   
})

// content.addEventListener('click', (event) => {
//     const target = event.target;
//     let taskElement = target.closest('.task');
//     const taskBtn = target.closest('.button_task');
//     if (taskElement && !taskBtn) {
//         console.log('task');
//     } else if (taskBtn) {
//         let taskId = +taskElement.id; // Получаем ID задачи
//         // Сначала находим проект, к которому принадлежит задача, до её удаления
//         let projectName;
//         for (let task of myTask) {
//             if (task.id === taskId) {
//                 projectName = task.project;
//                 break;
//             }
//         }

//         // Удаляем задачу из массива myTask
//         myTask = myTask.filter((task, index) => index !== taskId);
//         // Обновляем локальное хранилище для myTask
//         updateLocalStorage();

//         // Удаляем задачу из соответствующего проекта
//         if (projectName) {
//             let projectTasks = JSON.parse(localStorage.getItem(projectName)) || [];
//             projectTasks = projectTasks.filter(task => task.id !== taskId);
//             if (projectTasks.length > 0) {
//                 // Сохраняем обновленный массив задач проекта, если он не пуст
//                 localStorage.setItem(projectName, JSON.stringify(projectTasks));
//             } else {
//                 // Если это была последняя задача в проекте, удаляем ключ проекта из локального хранилища
//                 console.log(`Удаляем проект: ${projectName}`);
//                 localStorage.removeItem(projectName);
//             }
//         }
//         // Обновляем DOM
//         addTaskDom(myTask);
//     }
// });

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