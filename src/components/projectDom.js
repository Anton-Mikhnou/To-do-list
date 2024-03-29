export default function projectDom (name) {
    const nav = document.getElementById('navbarElem');
    const project = document.createElement('div');
    project.classList.add('itemProject');

    const svgContainer = document.createElement('div');
    const projectSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFDDD2" viewBox="0 0 24 24" class="" style="color: var(--named-color-grey);"><path fill="currentColor" fill-rule="evenodd" d="M15.994 6.082a.5.5 0 1 0-.987-.164L14.493 9h-3.986l.486-2.918a.5.5 0 1 0-.986-.164L9.493 9H7a.5.5 0 1 0 0 1h2.326l-.666 4H6a.5.5 0 0 0 0 1h2.493l-.486 2.918a.5.5 0 1 0 .986.164L9.507 15h3.986l-.486 2.918a.5.5 0 1 0 .987.164L14.507 15H17a.5.5 0 1 0 0-1h-2.326l.667-4H18a.5.5 0 1 0 0-1h-2.493l.487-2.918ZM14.327 10H10.34l-.667 4h3.987l.667-4Z" clip-rule="evenodd"></path></svg>';
    
    svgContainer.innerHTML = projectSvg;
    const projectText = document.createElement('div');
    projectText.textContent = name
    
    project.appendChild(svgContainer);
    project.appendChild(projectText)
    nav.appendChild(project);
    
    return nav;
}
