import "../styles.css";

class Item {
    constructor(title, description, dueDate, priority, status = "Todo", project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project;
    }

    completeItem() {
        this.status = "Done";
    }
}

class Project {
    constructor(title) {
        this.title = title;
        this.items = [];
    }

    createItem(title, description, dueDate, priority) {
        const item = new Item(title, description, dueDate, priority, this);
        this.items.push(item);
    }
}


const defaultProject = new Project("Default");
defaultProject.createItem("Example item 0", "This is an example item", "08/03/2026", "High");

defaultProject.items.forEach(item => {
    console.log(`${item.title} is due on ${item.dueDate} | Priority: ${item.priority} | Status: ${item.status}`);
});

const projects = [defaultProject];


const content = document.querySelector(".content");
projects.forEach(project => {
    const section = document.createElement("div");
    section.classList.add("card");
    section.textContent = `${project.title}`;
    content.appendChild(section);

    project.items.forEach(item => {
        const itemName = document.createElement("p");
        itemName.textContent = `${item.title}`;
        section.appendChild(itemName);  
    })
})

