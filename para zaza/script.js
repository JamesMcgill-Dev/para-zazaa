document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    revealButton.addEventListener('click', () => {
        hiddenMessage.classList.remove('hidden');
        revealButton.style.display = 'none'; // Hide the reveal button after click
        createHearts(10); // Create some hearts when the message is revealed
    });

    yesButton.addEventListener('click', () => {
        alert('Oba! Estou tão feliz! ❤️');
        // You can add more sophisticated animations or redirects here
        createHearts(50); // More hearts for a 'yes'!
        document.querySelector('.question').textContent = 'Obrigado(a) por me fazer tão feliz! ❤️';
        document.querySelector('.response-buttons').innerHTML = '<p style="font-size: 1.2em; color: #82e0aa; font-weight: bold;">Meu coração está cheio!</p>';
    });

    noButton.addEventListener('click', () => {
        alert('Ah, tudo bem. Eu entendo. 😊');
        // You can add more sophisticated animations or redirects here
        document.querySelector('.question').textContent = 'Tudo bem, eu entendo. Obrigado(a) por considerar. 😊';
        document.querySelector('.response-buttons').innerHTML = '<p style="font-size: 1.2em; color: #f1948a; font-weight: bold;">Sem problemas.</p>';
    });

    // Function to create floating hearts
    function createHearts(numHearts) {
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.width = `${Math.random() * 20 + 10}px`; // 10-30px
            heart.style.height = heart.style.width;
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10s
            heart.style.animationDelay = `${Math.random() * 5}s`; // 0-5s delay
            heart.style.opacity = 0;
            document.body.appendChild(heart);

            // Remove heart after animation to prevent DOM clutter
            heart.addEventListener('animationend', () => {
                heart.remove();
            });
        }
    }

    // Initial hearts for a welcoming effect
    createHearts(5);
});
