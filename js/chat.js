"use strict"


const chatList = $('.chatting-list');
const chatInput = $('#chat-input');

const socket = io();
   
chatInput.keypress(function(e){
    let nickname = $('.js-name').text().split('Hello')[1];
    const data = {
        name : nickname,
        msg : chatInput.val()
    }
    console.log(chatInput.val());
    console.log(data);
    if (e.keyCode == 13){
        socket.emit("chatting", data);
        chatInput.val("");
    }
    
});

console.log(socket);


socket.on("chatting", data =>{
    const li = document.createElement("li");
    const messageText = document.createElement("div");
    let nickname = $('.js-name').text().split('Hello')[1];

    if(data.name == nickname){
        li.className = "chat-msg self";//보낸거
        messageText.className = 'messageText self';
    } else {
        li.className = "chat-msg user";//받는거
        messageText.className = 'messageText user';
    }

    const resim = document.createElement("div");
    resim.className = "cm-msg-text"
    resim.innerText = data.name + ' : ' + data.msg;
    
    
    
    messageText.innerText = data.time;
    
    li.append(messageText)
    li.append(resim);
    
    chatList.append(li);
    
    $(".chat-logs").stop().animate({ 
        scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
});
