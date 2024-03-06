import dom from './dom.js';

function addTaskFn (obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }

    let i = myTask.length;
    
    myTask.push(new createTask(...arr, i));
}