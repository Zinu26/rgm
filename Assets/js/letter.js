// Assets/js/letter.js

// 1. Handles opening and closing the letter
function openEnvelope(envelopeElement) {
    envelopeElement.classList.toggle('open');
}

// 2. Popping Hearts Particle Generator
const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Distribute randomly along the width of the viewport
    heart.style.left = Math.random() * 100 + 'vw';

    // Spawn just under the viewport line
    heart.style.top = '105vh';

    // Randomize the size variations (15px to 32px)
    const size = Math.random() * 17 + 15;
    heart.style.fontSize = size + 'px';

    // Randomize the duration of ascension for variations (3s to 6s)
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';

    // Randomize slight transparencies
    heart.style.opacity = Math.random() * 0.4 + 0.6;

    heartsContainer.appendChild(heart);

    // Garbage collector: clean up generated node once it goes off-screen
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Spawn a continuous flow of popping hearts every 350ms
setInterval(createHeart, 350);

const audio = document.getElementById("audio");

audio.volume = 0.2; // 20% volume
audio.loop = true;  // Repeat forever

window.addEventListener("load", () => {
    audio.play().catch(() => {
        console.log("Autoplay blocked by browser. Waiting for user interaction.");
    });
});