console.log(location.href);
  

$('.open_Chat').click(function(){
  const nickname = $('.js-name').text().split('Hello')[1];
if(!nickname){

}else{
  //여기에 open
  window.open("chat.html?name="+nickname, "Chat","toolbar=no, menubar=no, resizable=no");

}
});