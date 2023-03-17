var one_title = document.querySelector('.one_title');
var two_title = document.querySelector('.two_title')
var word = document.querySelector('.word');
var first = document.querySelector('.word_first');
var sceond = document.querySelector('.word_second')

one_title.addEventListener('click', function(){
  first.classList.toggle('show');
  sceond.classList.remove('word')
});
two_title.addEventListener('click', function(){
    sceond.classList.toggle('show');
    first.classList.remove('word')
});