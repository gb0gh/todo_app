const nameContainer = $(".js-name");
function paintName(name) {
  nameContainer.text("");
  const title = document.createElement("span");
  title.className = "name__text";
  title.innerHTML = `Hello ${name}`;
  nameContainer.append(title);
  // open chat
  if(!name){
    }else{
      const log = `Hello ${name}`;
      console.log(log);
      $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
      $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.querySelector("input");
  const value = input.value;
  localStorage.setItem("username", value);
  paintName(value);
}

function paintInput() {
  const input = document.createElement("input");
  input.placeholder = "Type your name here";
  input.type = "text";
  input.className = "name__input";
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.appendChild(input);
  nameContainer.append(form);
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name === null) {
    paintInput();
  } else {
    paintName(name);
  }
}

function initName() {
  loadName();
}

initName();

