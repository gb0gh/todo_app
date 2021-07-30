"use strict"
const getLink = window.location.search;
const getUserName = getLink.split('=');
const nickname = decodeURI(getUserName[1]);
const chatList = $('.chatting-list');
const chatInput = $('.chatting-input');
const sendButton = $('.send-button');

const socket = io();

sendButton.on("click", () =>{
    const data = {
        name : nickname,
        msg : chatInput.val()
    }
    console.log(0);
    console.log(data);
    socket.emit("chatting", data);

});

console.log(socket);


socket.on("chatting", data =>{
    const li = document.createElement("li");
    if(data.name == nickname){
        li.className = "message sag mtLine";//보낸거
    } else {
        li.className = "message sol mtLine";//받는거
    }

    const resim = document.createElement("div");
    resim.className = "resim"
    resim.innerText = data.name + ' : ' + data.msg
    
    const messageText = document.createElement("div");
    messageText.className = 'messageText';
    messageText.setAttribute('data-Time', data.time);
    
    li.append(messageText)
    li.append(resim);
    
    chatList.append(li);
    
    console.log(1);
    console.log(data);
});
//sol이 받는거 sag가 보낸거