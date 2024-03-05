import '../../src/';
import dom from './dom';
// import done from '../svg/done.svg'
// import { Parser } from 'webpack';
// import doneSvg from '../svg/done';

export default function taskDom(title, priority, deadline, project, descriptionForm) {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskInner = document.createElement('div');
    taskInner.classList.add('task_inner');

    const taskWrapper = document.createElement('div')
    taskWrapper.classList.add('task_wrapper');

    const indicator = document.createElement('div');
    if (priority === 'hight') {
        indicator.classList.add('indicator');
    } else if (priority === 'middle') {
        indicator.classList.remove('indicator');
        indicator.classList.add('middle');
    } else {
        indicator.classList.remove('indicator');
        indicator.classList.add('low');
    } 

    const description = document.createElement('div');
    description.classList.add('description');

    const descriptionUp = document.createElement('div');
    descriptionUp.classList.add('description_up');

    const projectElem = document.createElement('div');
    projectElem.classList.add('project');
    projectElem.textContent = `# ${project}:`;


    const titleEelemnt = document.createElement('div');
    titleEelemnt.textContent = title;
    titleEelemnt.classList.add('title');

    const text = document.createElement('div');
    text.textContent = descriptionForm;
    text.classList.add('text');

    const date = document.createElement('div');
    date.textContent = `Deadline: ${deadline}`; 
    date.classList.add('date'); 

    const buttonTask = document.createElement('div');
    buttonTask.classList.add('button_task');

    const remove = document.createElement('div');
    const svgRemove = '<svg width="30" height="30" fill="#FFDDD2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>'
    remove.innerHTML = svgRemove;
    remove.classList.add('remove');

    buttonTask.appendChild(remove);

    descriptionUp.appendChild(projectElem);
    descriptionUp.appendChild(titleEelemnt);

    description.appendChild(descriptionUp);
    description.appendChild(text);
    description.appendChild(date);

    taskWrapper.appendChild(indicator);
    taskWrapper.appendChild(description);

    taskInner.appendChild(taskWrapper);
    taskInner.appendChild(buttonTask);
    
    task.appendChild(taskInner);

    return task;
}