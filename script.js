// მუსიკის კონტროლი
const musicButton = document.getElementById('musicButton');
const backgroundMusic = document.getElementById('backgroundMusic');

musicButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicButton.textContent = 'მუსიკის გათიშვა 🎵';
    } else {
        backgroundMusic.pause();
        musicButton.textContent = 'მუსიკის ჩართვა 🎵';
    }
});


