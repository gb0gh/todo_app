$('.gotomap').click(function(){
    const gotomap = $('.gotomap').text();
    const word = gotomap.split(',');
    const place = word[0];
    
    if(gotomap != null){
    const tap = window.open('https://www.google.co.kr/maps/search/'+ place, '_blank');
    tap.focus();
    }
});