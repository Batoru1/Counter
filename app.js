let count = 0;

const countDisplay = document.querySelector('.result');
const decreaseBtn = document.querySelector('#d');
const resetBtn = document.querySelector('#r');
const increaseBtn = document.querySelector('#i');

function changeNumba(e) {
  if (e.target.id === 'd') {
    count--;
  } else if (e.target.id === 'r') {
    count = 0;
  } else if (e.target.id === 'i') {
    count++;
  }

  if (count > 0) {
    countDisplay.style.color = 'green';
  } else if (count < 0) {
    countDisplay.style.color = 'red';
  } else {
    countDisplay.style.color = 'rgb(38, 38, 38)';
  }

  countDisplay.textContent = count;
}

decreaseBtn.addEventListener('click', changeNumba);
resetBtn.addEventListener('click', changeNumba);
increaseBtn.addEventListener('click', changeNumba);
