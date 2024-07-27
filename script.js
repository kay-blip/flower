document.addEventListener('DOMContentLoaded', function() {
    const tulipImg = document.getElementById('tulip-img');
    const tulipVideo = document.getElementById('tulip-video');

    tulipImg.addEventListener('click', function() {
        if (tulipVideo.style.display === 'none') {
            tulipVideo.style.display = 'block';
            tulipVideo.play();
        } else {
            tulipVideo.style.display = 'none';
            tulipVideo.pause();
            tulipVideo.currentTime = 0;
        }
    });
});
