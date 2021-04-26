const text = ['It’s nice to meet you.', 'It’s a pleasure to meet you.', 'It’s good to see you.', 'What’s happening'];
let count = 0;
let index = 0;
let currenttext = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }

    currenttext = text[count];
    letter = currenttext.slice(0, ++index);

  
    document.querySelector('.show').textContent = letter;

    if(letter.length === currenttext.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();



function myFunction() {
    return "";
  }