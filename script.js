const musicBtn = document.getElementById('music-btn');
const backgroundMusic = document.getElementById('bg-music');
const container = document.querySelector('.container');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        backgroundMusic.play();
        musicBtn.textContent = "Music Off";
        container.classList.add('music-playing');
        isPlaying = true;
    } else {
        backgroundMusic.pause();
        musicBtn.textContent = "Music On";
        container.classList.remove('music-playing');
        isPlaying = false;
    }
});
