function respawn(currentLevel) {
    if (currentLevel == 0) {

        enemy0Interval = setInterval(function () {
            if (!end) {
                enemies.push(
                    new newEnemy(0)
                );
            }
        }, 1487);
        
        planetInterval = setInterval(function () {
            if (!end) {
                planets.push(
                    new newPlanet()
                );
            }
        }, 14389);
        buildingInterval = setInterval(function () {
            if (!end) {
                buildings.push(
                    new newBuilding()
                );
            }
        }, 6847);
    }
}

function level30() {
    if (clock > 30) {
        enemy1Interval = setInterval(function () {
            if (!end) {
                enemies.push(
                    new newEnemy(1)
                );
            }
        }, 5879);
    }
}

function level45() {
    if (clock > 45) {
        enemy2Interval = setInterval(function () {
            if (!end) {
                enemies.push(
                    new newEnemy(2)
                );
            }
        }, 9452);
    }
}

function level60() {
    if (clock > 60) {
        enemy3Interval = setInterval(function () {
            if (!end) {
                enemies.push(
                    new newEnemy(3)
                );
            }
        }, 14201);
    }
}