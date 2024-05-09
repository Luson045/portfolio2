// script.js
const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('button');
const closeBtns = document.querySelectorAll('.close-btn');

function showCard(cardId) {
  cards.forEach(card => {
    if (card.id === cardId) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const cardId = `card${index + 1}`;
    showCard(cardId);
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cards.forEach(card => {
      card.style.display = 'none';
    });
  });
});