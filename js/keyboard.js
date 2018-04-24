keys = {};
function keyboard(event, bool) {
    var code = event.keyCode;
    var key;

    switch (code) {
        case 37:
            key = 'left';
            break;
        case 38:
            key = 'up';
            break;
        case 39:
            key = 'right';
            break;
        case 40:
            key = 'down';
            break;
        case 32:
            key = 'space';
            break;
        case 27:
            key = 'escape';
            break;
        case 49:
            key = '0';
            break;
        case 50:
            key = '1';
            break;
        case 51:
            key = "2";
            break;
        case 52:
            key = "3";
            break;
        case 53:
            key = "4";
            break;
        default:
            noPressed = true;
    }

    keys[key] = bool;
}

pressed = {
    Key: function (key) {
        return keys[key];
    }
};

function control(timeAfterLastUpdate) {
    if (pressed.Key('down') && spaceship.y < canvasHeight - spaceship.height - 10) {
        spaceship.y += v * timeAfterLastUpdate;
        spaceship.image.src = 'gfx/spaceships/spaceship' +  + currentSpaceship + '.png';
    }

    if (pressed.Key('up') && spaceship.y > 10) {
        spaceship.y -= v * timeAfterLastUpdate;
        spaceship.image.src = 'gfx/spaceships/spaceship' + currentSpaceship + '.png';
    }

    if (pressed.Key('left') && spaceship.x > 10) {
        spaceship.x -= v * timeAfterLastUpdate;
        if (currentSpaceship == 0) {
            spaceship.image.src = 'gfx/spaceships/spaceship0-left.png';
        }
    }

    if (pressed.Key('right') && spaceship.x < canvasWidth - spaceship.width - 10) {
        spaceship.x += v * timeAfterLastUpdate;
        if (currentSpaceship == 0) {
            spaceship.image.src = 'gfx/spaceships/spaceship0-right.png';
        }
    }

    if (pressed.Key('space') && !end && Date.now() - bulletTime > 200) {
        fire(timeAfterLastUpdate);
        bulletTime = Date.now();
    }
    if (pressed.Key('0')) {
        pressedBullet = 0;
        currentBullet = 0;
        bulletSpeed = 1000 * bullets[currentBullet].v;
        for (i = 0; i < 5; i++) {
            document.getElementById("bullet" + i).style.border = "none";
        }
        document.getElementById("bullet0").style.borderBottom = "3px solid #0DA9D9";
    }
    if (pressed.Key('1')) {
        pressedBullet = 1;
        if (ammunition[pressedBullet].ammo > 0) {
            currentBullet = 1;
            bulletSpeed = 1000 * bullets[currentBullet].v;
            for (i = 0; i < 5; i++) {
                document.getElementById("bullet" + i).style.border = "none";
            }
            document.getElementById("bullet1").style.borderBottom = "3px solid #0DA9D9";
        }
    }
    if (pressed.Key('2')) {
        pressedBullet = 2;
        if (ammunition[pressedBullet].ammo > 0) {
            currentBullet = 2;
            bulletSpeed = 1000 * bullets[currentBullet].v;
            for (i = 0; i < 5; i++) {
                document.getElementById("bullet" + i).style.border = "none";
            }
            document.getElementById("bullet2").style.borderBottom = "3px solid #0DA9D9";
        }
    }
    if (pressed.Key('3')) {
        pressedBullet = 3;
        if (ammunition[pressedBullet].ammo > 0) {
            currentBullet = 3;
            bulletSpeed = 1000 * bullets[currentBullet].v;
            for (i = 0; i < 5; i++) {
                document.getElementById("bullet" + i).style.border = "none";
            }
            document.getElementById("bullet3").style.borderBottom = "3px solid #0DA9D9";
        }
    }
    if (pressed.Key('4')) {
        pressedBullet = 4;
        if (ammunition[pressedBullet].ammo > 0) {
            currentBullet = 4;
            bulletSpeed = 1000 * bullets[currentBullet].v;
            for (i = 0; i < 5; i++) {
                document.getElementById("bullet" + i).style.border = "none";
            }
            document.getElementById("bullet4").style.borderBottom = "3px solid #0DA9D9";
        }
    }
}