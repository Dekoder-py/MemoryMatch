const cards = document.querySelectorAll('.card');

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

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.textContent !== '?' || lockBoard) return;
        const value = card.getAttribute('data-card');
        console.log('Card clicked, value:', value)
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
                console.log("+1 score");
                clicked = 0;
                firstClick = null;
                secondClick = null;
                firstCard = null;
                secondCard = null;
            } else
                resetCards();
        };

    });
});