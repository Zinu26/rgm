const audio = document.getElementById("audio");
const group = document.querySelector(".group");
const artistnalbumname = document.querySelector(".arstistnalbumname");
const music = document.querySelectorAll(".music span");

function setAnimationState(state) {
    group.style.animationPlayState = state;
    artistnalbumname.classList.toggle("paused", state === "paused");
    music.forEach(each => { each.style.animationPlayState = state; });
}

document.addEventListener("DOMContentLoaded", () => {
    setAnimationState("paused");
})

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        setAnimationState("running");
    } else {
        audio.pause();
        setAnimationState("paused");
    }
}

function forwardAudio10Seconds() {
    if (audio) {
        audio.currentTime = Math.min(audio.ondurationchange, audio.currentTime + 10);
    }
}

function rewindAudio10Seconds() {
    if (audio) {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    }
}

audio.addEventListener("ended", () => {
    setAnimationState("paused");
    audio.currentTime - 0;
})
