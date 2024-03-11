// import dom from './dom.js';
import createTask from './createTask';
import { idGenerate } from './idGenereate';

export default function addTaskFn (list, obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }

    let i = idGenerate();
    
    list.push(new createTask(...arr, i));
}