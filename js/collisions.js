function detectCollisions() {
    for (i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];
        if (enemy == null) {
            continue;
        }
        if ((spaceship.x + spaceship.width > enemy.x && spaceship.x < enemy.x + enemy.width) && (spaceship.y + spaceship.height > enemy.y && spaceship.y < enemy.y + enemy.height)) {
            killMe(i);
        }
        
        if (!enemyKilled) {
            for (j = 0; j < launchedBullets.length; j++) {
                var bullet = launchedBullets[j];
                if (bullet && (bullet.x + bullet.width > enemy.x && bullet.x < enemy.x + enemy.width) && (bullet.y + bullet.height > enemy.y && bullet.y < enemy.y + enemy.height)) {
                    killEnemies(j, i);
                    j--;
                }
            }
        }
        enemyKilled = false;
    }
    for (i = 0; i < buildings.length; i++) {
        var building = buildings[i];
        if (building == null) {
            continue;
        }
        if ((spaceship.x + spaceship.width > building.x && spaceship.x < building.x + building.width) && (spaceship.y + spaceship.height > building.y && spaceship.y < building.y + building.height)) {
            killMeInstantly();
        }
    }
    for (i = 0; i < planets.length; i++) {
        var planet = planets[i];
        if (planet == null) {
            continue;
        }
        if ((spaceship.x + spaceship.width > planet.x && spaceship.x < planet.x + planet.width) && (spaceship.y + spaceship.height > planet.y && spaceship.y < planet.y + planet.height)) {
            killMeInstantly();
        }
    }
}

function killMe(k) {
    var x = enemies[k].x;
    var y = enemies[k].y;
    enemies.splice(k, 1);
    explosions.push(new newExplosion(5, x, y));
    var audio = document.getElementById("explosionAudio" + explosionAudio);
    audio.play();
    explosionAudio++;
    if (explosionAudio > 3) {
        explosionAudio = 0;
    }
    spaceship.hp -= 2;
    document.getElementById("hp").innerHTML = spaceship.hp + "/" + spaceship.maxhp;
    document.getElementById("hpBar").style.width = (spaceship.hp / spaceship.maxhp) * 370 + "px";
    if (spaceship.hp <= 0) {
        document.getElementById("hpBar").style.width = 0 + "px";
        gameOver();
    }
    enemyKilled = true;
    
}

function killEnemies(k, l) {
    launchedBullets.splice(k, 1);
    enemies[l].hp -= bullets[currentBullet].dmg;
    if (enemies[l].hp <= 0) {
        var x = enemies[k].x;
        var y = enemies[k].y;
        var e = enemies[k].nr;
        var point = enemies[k].point;
        score += point;
        killedEnemies++;
        enemies.splice(l, 1);
        explosions.push(new newExplosion(e, x, y));
        explosionAudioF();
    }
}

function killMeInstantly() {
    document.getElementById("hp").innerHTML = "0/" + spaceship.maxhp;
    document.getElementById("hpBar").style.width = 0 + "px";
    explosionAudioF();
    gameOver();
}

function gameOver() {
    end = true;
    document.getElementById("endPoints").innerHTML = "Points: <span class='endStatistics'>" + score + "</span>";
    document.getElementById("killedEnemies").innerHTML = "Killed enemies: <span class='endStatistics'>" + killedEnemies + "</span>";
    document.getElementById("endTime").innerHTML = "Time: <span class='endStatistics'>" + clock + "s</span>";
    document.getElementById("dodgedEnemies").innerHTML = "Ignored enmies: <span class='endStatistics'>" + dodgedEnemies + "</span>";
    document.getElementById("startscreen").style.display = "block";
    document.getElementById("selectLevel").style.display = "none";
    document.getElementById("gameOver").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("playerBar").style.display = "none";
    document.getElementById("hp").style.display = "none";
    document.getElementById("hpBar").style.display = "none";
    gameOverAudioBool = true;
    if (gameOverAudioBool) {
        var audio = document.getElementById("gameOverAudio");
        audio.play();
        gameOverAudioBool = false;
    }
    window.clearInterval(enemy0Interval);
    window.clearInterval(planetInterval);
    window.clearInterval(buildingInterval);
    window.clearInterval(timer);
    money = money + score + killedEnemies + dodgedEnemies;
    document.getElementById("myMoney").innerHTML = money;
    if (clock > 30) {
        window.clearInterval(enemy1Interval);
    }
    if (clock > 45) {
        window.clearInterval(enemy2Interval);
    }
    if (clock > 60) {
        window.clearInterval(enemy3Interval);
    }
   
    
    
}