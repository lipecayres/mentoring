/**
 *  Project Highlights to fix:
 *  - User has to double click on edit/delete button when first attempt using
 *  - Edit didn't update on screen the new title
 *  - Checkbox doesn't make the title striketrought.
 *
 */

const container = document.querySelector(".container");
const input = document.getElementById("user-input");
const taskBox = document.querySelector(".item-box");

/* buttons*/
const addButton = document.querySelector(".add-item-button");

/* button actions */
addButton.addEventListener("click", addToDo);

/**add task function */
function addToDo() {
  let taskTitle = input.value.trim();
  if (taskTitle === "") return;

  let addItem = `
          <div class="item">
            <div class="title-spacing">
              <input class="checkbox" type="checkbox" onclick=toggleCheck() />
              <p class="item-title">${taskTitle}</p>
            </div>
            <div class="button-spacing">
              <button class="edit edit-button" onclick=editToDo()>Edit</button>
              <button class="delete delete-button" onclick= deleteToDo()>Delete</button>
            </div>
          </div>
        `;

  taskBox.insertAdjacentHTML("beforeend", addItem);
  input.value = "";
}

// Event delegation for edit and delete buttons
taskBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-button")) {
    const taskTitle = e.target.closest(".item").querySelector(".item-title");
    const newTitle = prompt("Edit task title:", taskTitle.textContent);
    if (newTitle) taskTitle.textContent = newTitle;
  }

  if (e.target.classList.contains("delete-button")) {
    e.target.closest(".item").remove();
  }

  if (e.target.classList.contains("checkbox")) {
    const itemTitle = e.target.closest(".title-spacing").querySelector(".item-title");
    itemTitle.classList.toggle("active");
  }
});

/** checkbox function */
function toggleCheck() {
  const allCheckbox = document.querySelectorAll(".checkbox");

  allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      // Attempt - didn't work
      // e.target.closest(".item-title").classList.add("active");
    });
  });
}

/*
*  Content I got on StackOverflow
*

1. Method insertAdjacentHTML (line 31 - taskBox.insertAdjacentHTML("beforeend", addItem); )

2. Repeated buttons -> how to select all delete/edit buttons 
  - for loop to get all elements
  - functions: target, closest and remove.

3. Checked old project to remember how to toggle class in element:
    - element.classList.toggle('active')
  */
