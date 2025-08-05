const cards = document.querySelectorAll('.card');

var clicked = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (clicked < 2) {
            const value = card.getAttribute('data-card');
            console.log('Card clicked, value:', value)

            card.textContent = value;
            clicked += 1;
        } else {
            clicked = 0;
            cards.forEach(card => {
                card.textContent = '?';
            });
        };
    });
});