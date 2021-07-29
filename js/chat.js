"use strict"

const socket = io();

const nickname = $('#nickname');
const chatList = $('.chatting-list');
const chatInput = $('.chatting-input');
const sendButton = $('.send-button');

sendButton.on("click", () =>{
    const data = {
        name : nickname.val(),
        msg : chatInput.val()
    }
    console.log(data);
    socket.emit("chatting", data);

});

console.log(socket);


socket.on("chatting", data =>{
    const li = document.createElement("li");
    li.innerText = data.name + ' : ' + data.msg +"  " + data.time;
    chatList.append(li);
    console.log(data);
});