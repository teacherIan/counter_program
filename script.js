const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const addContainer = document.getElementById('add-container');
const subtractContainer = document.getElementById('subtract-container');

let counter = 0;

fetch('http://127.0.0.1:9999/get').then((response) => {
  response.json().then((data) => {
    counter = data.counter;
    updateScore();
  });
});

scoreContainer.addEventListener('click', () => {
  counter = 0;
  fetch('http://127.0.0.1:9999/reset', { method: 'POST' });
  updateScore();
});

addContainer.addEventListener('click', () => {
  counter += 1;
  fetch('http://127.0.0.1:9999/add', { method: 'POST' });
  updateScore();
});

subtractContainer.addEventListener('click', () => {
  counter -= 1;
  fetch('http://127.0.0.1:9999/subtract', { method: 'POST' });
  updateScore();
});

function updateScore() {
  score.innerHTML = counter;
}
