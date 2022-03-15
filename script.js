const typeStart = () => {
  const typingElement = document.querySelector('.running-text');
  const sentences = data.about.typing;

  const letterWait = 80;
  const sentenceWait = 2000;

  const type = (sentence = -1, letter = -1, erasing) => {
    if (sentence === sentences.length) return type(0, letter, erasing);

    if (letter === -1) {
      var cur = document.querySelector('.cursor')
      cur.innerText = '';
      setTimeout(() => type(sentence + 1, 0, false), sentenceWait / 2);
    } else if (letter === sentences[sentence].length) {
      var cur = document.querySelector('.cursor')
      cur.innerText = '';
      setTimeout(() => type(sentence, letter - 1, true), sentenceWait);
    } else if (erasing) {
      var cur = document.querySelector('.cursor')
      cur.innerText = '|';
      typingElement.innerText = typingElement.innerText.slice(0, letter);
      setTimeout(() => type(sentence, letter - 1, true), letterWait);
    } else {
      var cur = document.querySelector('.cursor')
      cur.innerText = '_';
      if (sentences[sentence][letter] == '.') {
        var temp = ' ' + sentences[sentence][letter + 1];
        typingElement.innerText += temp;
        setTimeout(() => type(sentence, letter + 2, false), letterWait);
      }
      else {
        typingElement.innerText += sentences[sentence][letter];
        setTimeout(() => type(sentence, letter + 1, false), letterWait);
      }
    }
  };
  type();
};

typeStart();

/*const carl = (){
    if()
}*/

const timer = ms => new Promise(res => setTimeout(res, ms));

var contin = true;
async function carlstart(pos = 0) {
  
  const timeint = 1000;
  const img = document.getElementsByClassName('image')[0];
  const lst = document.getElementsByClassName('list');
  const n = 3;
  while (contin) {
    img.style.opacity = 0;
    
    lst[pos].style.width = '20%';
    lst[(pos+1) % 3].style.width = '10%';
    lst[(pos + 2) % 3].style.width = '10%';
    setTimeout(function () {
      img.src = data.images.sources[pos % 3];
      img.style.opacity = 100;
      pos++;
      pos = pos % 3;
    }, 500);
    await timer(5000);
  }
  
  //setTimeout(carlstart(pos+1),5000);
}

const slideto = (pos) => {
  var temp = pos;
  
  contin = false;
  setTimeout(function(){
    contin=true;
    carlstart(pos%3);
  },5000);
  var img = document.getElementsByClassName('image')[0];
  img.style.opacity = 0;
  const lst = document.getElementsByClassName('list');
  setTimeout(function () {
    img.src = data.images.sources[pos - 1];
    img.style.opacity = 100;
  }, 500);
  lst[pos - 1].style.width = '20%';
  lst[pos % 3].style.width = '10%';
  lst[(pos + 1) % 3].style.width = '10%';
}

slideto(1);