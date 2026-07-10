// Assets/js/music.js

let slideIndex = 0;
let slideshowInterval;

function startMusic() {
    const hintText = document.getElementById('play-hint');
    const vinyl = document.getElementById('vinyl');
    const tonearm = document.getElementById('tonearm');
    const audio = document.getElementById('bg-music');

    // 1. Hide hint button
    hintText.classList.add('hidden');

    // 2. Roll vinyl onto platter
    vinyl.classList.add('roll-in');

    // Wait for the roll animation to finish (1.2 seconds)
    setTimeout(() => {
        // 3. Position the tonearm
        tonearm.classList.add('playing');

        // Wait for the arm drop animation (1 second)
        setTimeout(() => {
            // 4. Spin record & Play track
            vinyl.classList.remove('roll-in');
            vinyl.classList.add('spin');
            
            audio.play().catch(err => {
                console.log("Playback blocked or source missing: ", err);
            });

            // 5. Initialize the memory slideshow loops
            showSlides();
            slideshowInterval = setInterval(showSlides, 3500); // Transitions pictures every 3.5 seconds

        }, 1000);
    }, 1200);
}

// Slideshow Loop Mechanism
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    
    // First, hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }    
    
    // Display the current slide frame
    slides[slideIndex - 1].style.display = "block";  
}