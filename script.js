const para = document.querySelector('h3 button');

para.addEventListener('click', myFunction);

function myFunction() {
  let name = prompt('Write your note');
  para.textContent = 'Add a new note';
}

// To count note
const btn = document.querySelector('.name');
btn.onclick = Counter;
const clicks = document.querySelector('.note');
clicks.id = document.querySelector('note');

var span =  2

function Counter() {
    span += 1;
    clicks.innerHTML = span;
}