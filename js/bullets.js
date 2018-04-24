function upgradeAmmunition() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("upgradeAmmunition").style.display = "block";
    for (i = 0; i < 5; i++) {
        if (ammunition[i].upgrade) {
            document.getElementById("ammunition" + i).getElementsByClassName("upgradeButton")[0].getElementsByClassName("buy")[0].innerHTML = "BOUGHT";
            document.getElementById("ammunition" + i).getElementsByClassName("upgradeButton")[0].getElementsByClassName("buy")[0].style.color = "#0DA9D9";
        }
    }
}

function fire(timeAfterLastUpdate) {
    launchedBullets.push(
        new newBullet()
    );
    var audio = document.getElementById("laserAudio" + laserAudio);
    audio.play();
    laserAudio++;
    if (laserAudio > 3) {
        laserAudio = 0;
    }
    lastFire = Date.now();
    if (currentBullet != 0) {
        if (ammunition[currentBullet].ammo > 0) {
            ammunition[currentBullet].ammo -= 1;
            document.getElementById("bullet" + currentBullet).getElementsByTagName("p")[0].innerHTML = ammunition[currentBullet].ammo;
        } else if (ammunition[currentBullet].ammo == 0) {
            pressedBullet = 0;
            currentBullet = 0;
            for (i = 0; i < 5; i++) {
                document.getElementById("bullet" + i).style.border = "none";
            }
            document.getElementById("bullet0").style.borderBottom = "3px solid #0DA9D9";
        }
    }
}
