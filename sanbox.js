const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
    <li
          class="
            list list-group-item
            d-flex
            justify-content-between
            align-item-centre
          "
        >
          <span>${todo}</span>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </li>
    `;
  list.innerHTML += html;
};
//add todos

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  //prevent user to create a empty todo
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

//delete todo list

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa")) {
    e.target.parentElement.remove();
  }
});

//filter todos
const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
