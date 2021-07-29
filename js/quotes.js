const QUOTES_URL = 'https://api.adviceslip.com/advice';
const quotes_list = $('.quotos');
function getQuotes(){
    fetch(QUOTES_URL)
      .then(response => response.json())
      .then(json => {
        const quotes = json.slip.advice;
        quotes_list.text(quotes);
      })
}

getQuotes();