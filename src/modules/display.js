// Need to loop through the project items to display them
const content = document.querySelector(".content");
defaultProject.items.forEach(item => {
    const section = projectName.createElement("h3");
    content.appendChild(section);
    projectName.textContent = `${item.title}`;
})