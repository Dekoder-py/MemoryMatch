const cards = document.querySelectorAll('.card');

var clicked = 0;
var firstClick = null;
var secondClick = null;

function resetCards() {
    setTimeout(() => {
        clicked = 0;
        cards.forEach(card => {
            card.textContent = '?';
        });
    }, 1000);

};

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (clicked < 2) {
            const value = card.getAttribute('data-card');
            console.log('Card clicked, value:', value)
            card.textContent = value;
            clicked += 1;
            if (clicked == 1)
                firstClick = value;
            else {
                secondClick = value
                if (firstClick == secondClick) {
                    console.log("+1 score");
                    clicked = 0;
                } else
                    resetCards();
            };
        };

    });
});