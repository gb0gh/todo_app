const x = '❌ all Delete';


function addDeleteBtn(){
  const btn = document.createElement("span");
  btn.className = 'x';
  btn.innerHTML = x;
  $('.xbtn').append(btn);
  btn.addEventListener("click", allDelete);
}

function allDelete(){
  alert("경고문");
    $('.toDo').remove();
    persistDelete();
}

function initDeleteBtn(){
  addDeleteBtn();
}

function persistDelete() {
  const stringToDo = JSON.stringify(toDos);
  alert(stringToDo);
  localStorage.setItem("toDos", "");
}

initDeleteBtn();