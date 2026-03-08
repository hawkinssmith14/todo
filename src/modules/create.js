import "../styles.css";

class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project {
    constructor(title) {
        this.title = title;
        this.items = [];
    }

    addItemToProject(item) {
        this.items.push(item);
    }
}

const defaultProject = new Project("Default");
const example1 = new Item("Example item 1", "This is an example item", "08/03/2026", "High");
const example2 = new Item("Example item 2", "This is an example item", "08/03/2026", "High");
const example3 = new Item("Example item 3", "This is an example item", "08/03/2026", "High");
defaultProject.addItemToProject(example1);
defaultProject.addItemToProject(example2);
defaultProject.addItemToProject(example3);

console.log(defaultProject.items);