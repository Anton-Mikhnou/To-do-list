import './style.css';
import dom from './components/dom';
import taskDom from './components/TaskDom';
import projectDom from './components/projectDom';
import addTaskFn from './components/addTask';
import deleteTask from './components/deleteTask';

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
const navbarElem = document.querySelector('#navbarElem');

let isProject;
let isChange = false;
let isHome = true;

addTask.addEventListener('click', () => {
    isChange = false;
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
    if(isChange) {
        changeTask(myTask, elemId, values);
        addProjectFn(myTask);
        const projectPage = JSON.parse(localStorage.getItem(myTask[elemId].project));
        if(isHome === true) {
            addTaskDom(myTask);
            console.log('work');
        } else {
            addTaskDom(projectPage)
        }
    } else{
        addTaskFn(myTask, values);
        addProjectFn(myTask);
        if(isHome) {
            addTaskDom(myTask);
        }
    }
    localStorage.setItem('myTask', JSON.stringify(myTask))
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

navbarElem.addEventListener('click', (event)=>{
    const target = event.target; 
    isChange = false;
    if(target.classList.contains('itemProject')){
        isHome = false;
        const val = JSON.parse(localStorage.getItem(target.textContent))
        addTaskDom(val);
        localStorage.setItem('myTask', JSON.stringify(myTask));
    }
})

dom.home.addEventListener('click', () => {
    isChange = false;
    isHome = true;
    addTaskDom(myTask);
    localStorage.setItem('myTask', JSON.stringify(myTask));
})

let elemId;

content.addEventListener('click', (event) => {
    const target = event.target;
    const task = target.closest('.task')
    const deleteBtn = target.closest('.button_task');

    if(deleteBtn) {
        myTask.some((element, index) => {
            for(let id in element) {
                if(element[id] === task.id) {
                    elemId = index;
                    isProject = element.project;
                }
            }
        }) 

        deleteTask(myTask, elemId)
        addProjectFn(myTask);
        if(isHome) {
            addTaskDom(myTask);
        } else if (isHome === false) {
            addTaskDom(JSON.parse(localStorage.getItem(isProject)))
        }

        localStorage.setItem('myTask', JSON.stringify(myTask));
    } else if (task) {
        isChange = true;
        let elemObj = {};
        myTask.some((element, index) => {
            for(let id in element) {
                if(element[id] === task.id) {
                    elemId = index;
                    isProject = element.project;
                    elemObj = element;
                }
            }
        })

        const valueFormBefore = new FormData(form);

        for(let key in elemObj) {
            if(key !== 'id') {
                valueFormBefore.set(key, elemObj[key]);
            }
        }

        for(const pair of valueFormBefore.entries()) {
            const [key, value] = pair;
            document.getElementById(key).value = value;
        }

        dialog.showModal()
    }
})

function changeTask(arr, taskId, newObj) {
    let changeObj = {...myTask[taskId], ...newObj}
    arr.splice(taskId, 1, changeObj);
}

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