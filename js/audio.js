function menuClick() {
    var audio = document.getElementById("clickAudio" + clickAudio);
    audio.play();
    clickAudio++;
    if (clickAudio > 3) {
        clickAudio = 0;
    }
}

function explosionAudioF() {
    var audio = document.getElementById("explosionAudio" + explosionAudio);
    audio.play();
    explosionAudio++;
    if (explosionAudio > 3) {
        explosionAudio = 0;
    }
}