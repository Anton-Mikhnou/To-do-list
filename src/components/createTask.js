import dom from './dom'

// const title = document.getElementById('title');
// const date = document.getElementById('deadline');
// const priopity = document.getElementById('priority');
// const project = document.getElementById('project')
// const descriptionForm = document.getElementById('descriptionForm');


export default class CreatTask {
    constructor (title, priority, deadline, project, descriptionForm, id) {
        this.title = title;
        this.priority = priority;
        this.deadline = deadline;
        this.project = project;
        this.descriptionForm = descriptionForm;
        this.id = id;
    }

}

