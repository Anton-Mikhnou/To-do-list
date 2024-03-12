import dom from './dom'

export default class CreatTask {
    constructor (title, priority, deadline, project, descriptionForm, id) {
        this.title = title;
        this.priority = priority;
        this.deadline = deadline;
        this.project = project;
        this.descriptionForm = descriptionForm;
        this.id = Date.now().toString();
    }

}

