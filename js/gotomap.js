const gotomap = $('.gotomap').text();
const word = gotomap.split(',');
const place = word[0];

$('.gotomap').click(function(){
    const tap = window.open('https://www.google.co.kr/maps/search/'+ place, '_blank');
    tap.focus();
});