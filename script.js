const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const addContainer = document.getElementById('add-container');
const subtractContainer = document.getElementById('subtract-container');

let counter = 0;

fetch('https://counter-backend.herokuapp.com/get').then((response) => {
  response.json().then((data) => {
    counter = data.counter;
    updateScore();
  });
});

scoreContainer.addEventListener('click', () => {
  counter = 0;
  fetch('https://counter-backend.herokuapp.com/reset', { method: 'POST' });
  updateScore();
});

addContainer.addEventListener('click', () => {
  counter += 1;
  fetch('https://counter-backend.herokuapp.com/add', { method: 'POST' });
  updateScore();
});

subtractContainer.addEventListener('click', () => {
  counter -= 1;
  fetch('https://counter-backend.herokuapp.com/subtract', { method: 'POST' });
  updateScore();
});

function updateScore() {
  score.innerHTML = counter;
}
