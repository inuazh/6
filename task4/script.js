const  text = document.querySelector('#text');
text.onclick = function() {
  // тело обработчика
  text.textContent = prompt(1);
  // конец тела обработчика
}


