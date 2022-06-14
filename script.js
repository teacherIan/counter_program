const score = document.getElementById('score');
const scoreContainer = document.getElementById('score-container');
const addContainer = document.getElementById('add-container');
const subtractContainer = document.getElementById('subtract-container');

// console.log(score);
// console.log(scoreContainer);
// console.log(addContainer);
// console.log(subtractContainer);

let counter = 0;

scoreContainer.addEventListener('click', () => {
  counter = 0;
  updateScore();
});

addContainer.addEventListener('click', () => {
  counter += 1;
  updateScore();
});

subtractContainer.addEventListener('click', () => {
  counter -= 1;
  updateScore();
});

function updateScore() {
  score.innerHTML = counter;
}
