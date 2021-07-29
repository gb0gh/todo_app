const gotomap = $('.gotomap').text();
const word = gotomap.split(',');
const search_word = (word.join('+'));

$('.gotomap').click(function(){
    const tap = window.open('https://www.google.co.kr/maps/place/'+search_word, '_blank');
    tap.focus();
});