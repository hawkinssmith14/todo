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
    return item;
  }
}

const defaultProject = new Project("Default Project");
defaultProject.createItem(
  "Example item 0",
  "This is an example item",
  "08/03/2026",
  "High"
);

defaultProject.items.forEach((item) => {
  console.log(
    `${item.title} is due on ${item.dueDate} | Priority: ${item.priority} | Status: ${item.status}`
  );
});

const projects = [defaultProject];

const content = document.querySelector(".content");
projects.forEach((project) => {
  renderProject(project);
});

// Project creation button & modal

const createProjectBtn = document.querySelector(".create-project-btn");
createProjectBtn.addEventListener("click", () => {
  const projectCreationModal = document.createElement("div");
  projectCreationModal.classList.add("project-creation-modal");
  const projectNameInput = document.createElement("input");
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  projectCreationModal.appendChild(projectNameInput);
  projectCreationModal.appendChild(doneBtn);
  projectCreationModal.appendChild(cancelBtn);
  content.appendChild(projectCreationModal);

  doneBtn.addEventListener("click", () => {
    const project = new Project(projectNameInput.value);
    projects.push(project);
    renderProject(project);
    projectCreationModal.remove();
  });

  cancelBtn.addEventListener("click", () => {
    projectCreationModal.remove();
  });
});

function renderProject(project) {
  const section = document.createElement("div");
  const itemContainer = document.createElement("div");
  const projectTitle = document.createElement("h3");
  projectTitle.textContent = `${project.title}`;
  section.classList.add("card");
  section.appendChild(projectTitle);
  content.appendChild(section);
  section.appendChild(itemContainer);

  project.items.forEach((item) => {
    renderItem(item, itemContainer);
  });

  const createItemBtn = document.createElement("button");
  createItemBtn.textContent = `Create Item`;
  section.appendChild(createItemBtn);

  createItemBtn.addEventListener("click", () => {
    const itemCreationModal = document.createElement("div");
    const itemNameInput = document.createElement("input");
    const doneBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    cancelBtn.textContent = "Cancel";
    section.appendChild(itemCreationModal);
    itemCreationModal.appendChild(itemNameInput);
    itemCreationModal.appendChild(doneBtn);
    itemCreationModal.appendChild(cancelBtn);

    doneBtn.addEventListener("click", () => {
      const newItem = project.createItem(itemNameInput.value, project);
      renderItem(newItem, itemContainer);
      itemCreationModal.remove();
    });
  });
}

function renderItem(item, itemContainer) {
  const itemName = document.createElement("p");
  itemName.textContent = `${item.title}`;
  itemContainer.appendChild(itemName);
}
