const typeStart = () => {
  const typingElement = document.querySelector('.running-text');
  const sentences = data.about.typing;

  const letterWait = 80;
  const sentenceWait = 2000;

  const type = (sentence = -1, letter = -1, erasing) => {
    if (sentence === sentences.length) return type(0, letter, erasing);

    if (letter === -1) {
      setTimeout(() => type(sentence + 1, 0, false), letterWait);
    } else if (letter === sentences[sentence].length) {
      setTimeout(() => type(sentence, letter - 1, true), sentenceWait);
    } else if (erasing) {
      typingElement.innerText = typingElement.innerText.slice(0, letter);

      setTimeout(() => type(sentence, letter - 1, true), letterWait);
    } else {
      if(sentences[sentence][letter]=='.'){
        var temp = ' ' + sentences[sentence][letter+1];
        typingElement.innerText += temp;
        setTimeout(() => type(sentence, letter + 2, false), letterWait);
      }
      else{
        typingElement.innerText += sentences[sentence][letter];
        setTimeout(() => type(sentence, letter + 1, false), letterWait);
      }
    }
  };
  type();
};

typeStart();