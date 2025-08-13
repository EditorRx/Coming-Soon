document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    let isPlaying = false;

    // Function to toggle music
    function toggleMusic() {
        if (!isPlaying) {
            backgroundMusic.play().catch(error => {
                console.log("Autoplay blocked. Tap the page to start music.", error);
            });
            musicToggle.textContent = "🔇 Pause Music";
            isPlaying = true;
        } else {
            backgroundMusic.pause();
            musicToggle.textContent = "🔊 Play Music";
            isPlaying = false;
        }
    }

    // Attempt to play music immediately
    backgroundMusic.play().then(() => {
        isPlaying = true;
        musicToggle.textContent = "🔇 Pause Music";
    }).catch(() => {
        // Autoplay blocked — wait for first click
        document.body.addEventListener('click', () => {
            if (!isPlaying) toggleMusic();
        }, { once: true });
    });

    // Toggle music on button click
    musicToggle.addEventListener('click', toggleMusic);

    // Ensure music loops
    backgroundMusic.addEventListener('ended', () => {
        backgroundMusic.currentTime = 0;
        if (isPlaying) backgroundMusic.play();
    });
});
