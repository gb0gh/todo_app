const form = $(".js-to-do"),
  input = $(".js-add-to-do"),
  list = $(".js-list");

let toDos = [];

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem("toDos", stringToDo);
}

function saveToDo(text) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text
  };
  toDos.push(toDoObject);
  persistToDos();
}

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChild(li);
  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });
  persistToDos();
}

function addToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = toDos.length + 1;
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "toDo__button";
  deleteBtn.addEventListener("click", handleDelete);
  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.append(deleteBtn);
  toDo.append(label);
  list.append(toDo);
  saveToDo(text);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem("toDos");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addToDo(toDo.value);
    });
  } else {
    //todo리스트가 없는경우
    //console창의 에러가 뜸 그걸 방지용
  };
  return;
}

function init() {
  loadToDos();
}

form.on("submit", function(e) {
  e.preventDefault();
  addToDo( $('#add_todo').val());
  $('#add_todo').val("");
});

init();
