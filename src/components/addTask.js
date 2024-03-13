import createTask from './createTask';

export default function addTaskFn (list, obj) {
    const arr = [];
    
    for (let key in obj) {
        arr.push(obj[key]);
    }
    
    list.push(new createTask(...arr));
}