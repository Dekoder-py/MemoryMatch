var clicked = 0;
var firstClick = null;
var secondClick = null;
var firstCard = null;
var secondCard = null;

var lockBoard = false;

function resetCards() {
    setTimeout(() => {
        clicked = 0;
        firstCard.textContent = '?';
        secondCard.textContent = '?';
        firstClick = null;
        secondClick = null;
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }, 1000);

};

function checkWin() {
    var win = true;
    cards.forEach(card => {
        if (card.textContent == '?') {
            win = false;
        }
    });
    if (win) {
        const winText = document.createElement('h2');
        winText.textContent = "You win!";

        document.body.appendChild(winText);
    }
};

const values = [];
const numOfPairs = 6;


for (i = 1; i <= numOfPairs; i++) {
    values.push(i);
    values.push(i);
};

// Fisher–Yates Shuffle
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const board = document.querySelector('.cards');

shuffle(values);
for (var i = 0; i < values.length; i++) {
    const card = document.createElement('button');
    card.className = 'card';
    card.setAttribute('data-card', values[i]);
    card.textContent = '?';
    board.appendChild(card);
};

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.textContent !== '?' || lockBoard) return;
        const value = card.getAttribute('data-card');
        card.textContent = value;
        clicked += 1;
        if (clicked == 1) {
            firstCard = card;
            firstClick = value;
        } else {
            secondCard = card;
            secondClick = value
            lockBoard = true;
            if (firstClick == secondClick) {
                checkWin();
                clicked = 0;
                firstClick = null;
                secondClick = null;
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            } else
                resetCards();
        };

    });
});