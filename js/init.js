document.addEventListener('keydown', function (event) {
    keyboard(event, true);
});

document.addEventListener('keyup', function (event) {
    keyboard(event, false);
    if (currentSpaceship == 0) {
        spaceship.image.src = 'gfx/spaceships/spaceship0.png';
    }
});

window.addEventListener('blur', function () {
    keys = {};
});

function init() {
    money = 10000;
    loadAll();
    document.getElementById("menuAudio").play();
    clickAudio = 0;
    laserAudio = 0;
    explosionAudio = 0;
    currentSpaceship = 0;
    currentBullet = 0;
    spaceship = new spaceship();
    pressedBullet = 0;
    v = canvasWidth;
    end = true;
    bulletSpeed = 1000;
    enemySpeed = 100;
    currentLevel = 0;
    levels = [{ nr: 0, name: "Back in black", gfx: "../gfx/levels/level0.jpg" }, { nr: 1, name: "Thunderstruck", gfx: "../gfx/levels/level1.jpg" }, { nr: 2, name: "This means war", gfx: "../gfx/levels/level2.jpg" }];
    spaceships = [{ nr: 0, name: "The Jack", gfx: "../gfx/spaceships/spaceship0.png", hp: 5, v: 1 },
                { nr: 1, name: "Bad Boy", gfx: "../gfx/spaceships/spaceship1.png", hp: 10, v: 0.5 },
                { nr: 2, name: "Ballbreaker", gfx: "../gfx/spaceships/spaceship2.png", hp: 7, v: 0.7 },
                { nr: 3, name: "Heatseeker", gfx: "../gfx/spaceships/spaceship3.png", hp: 3, v: 1.5 },
                { nr: 4, name: "Night Prowler", gfx: "../gfx/spaceships/spaceship4.png", hp: 4, v: 1.2 },
                { nr: 5, name: "Rocker", gfx: "../gfx/spaceships/spaceship5.png", hp: 8, v: 0.6 }];
    bullets = [{ nr: 0, gfx: "../gfx/weapons/weapon0.png", dmg: 1, width: 10, height: 68, v: 1 },
                { nr: 1, gfx: "../gfx/weapons/weapon1.png", dmg: 2, width: 10, height: 68, v: 1 },
                { nr: 2, gfx: "../gfx/weapons/weapon2.png", dmg: 3, width: 10, height: 68, v: 1 },
                { nr: 3, gfx: "../gfx/weapons/weapon3.png", dmg: 4, width: 10, height: 68, v: 1 },
                { nr: 4, gfx: "../gfx/weapons/weapon4.png", dmg: 5, width: 10, height: 68, v: 1 }];
    ammunition = [{ nr: 0, max: 0, ammo: 0, upgrade: false, money: 500 },
                { nr: 1, max: 200, ammo: 200, upgrade: false, money: 1000 },
                { nr: 2, max: 150, ammo: 150, upgrade: false, money: 1500 },
                { nr: 3, max: 100, ammo: 100, upgrade: false, money: 3000 },
                { nr: 4, max: 20, ammo: 20, upgrade: false, money: 6000 }];
    enemy = [{ nr: 0, name: "Little Lover", gfx: "../gfx/enemies/enemy0.png", hp: 5, v: 0.5, width: 70, height: 70 },
                { nr: 1, name: "Sandman", gfx: "../gfx/enemies/enemy1.png", hp: 7, v: 0.4, width: 90, height: 90 },
                { nr: 2, name: "War machine", gfx: "../gfx/enemies/enemy2.png", hp: 10, v: 0.3, width: 100, height: 80 },
                { nr: 3, name: "The Furor", gfx: "../gfx/enemies/enemy3.png", hp: 13, v: 0.2, width: 100, height: 160 }];
    planet = [{ nr: 0, gfx: "../gfx/planets/planet0.png", v: 0.1, width: 80, height: 80 },
                { nr: 1, gfx: "../gfx/planets/planet1.png", v: 0.1, width: 80, height: 80 },
                { nr: 2, gfx: "../gfx/planets/planet2.png", v: 0.1, width: 80, height: 80 },
                { nr: 3, gfx: "../gfx/planets/planet3.png", v: 0.1, width: 80, height: 80 },
                { nr: 4, gfx: "../gfx/planets/planet4.png", v: 0.1, width: 80, height: 80 },
                { nr: 5, gfx: "../gfx/planets/planet5.png", v: 0.1, width: 80, height: 80 }];
    building = [{ nr: 0, gfx: "../gfx/buildings/building0.png", v: 0.1, width: 90, height: 130 },
                { nr: 1, gfx: "../gfx/buildings/building1.png", v: 0.1, width: 140, height: 130 },
                { nr: 2, gfx: "../gfx/buildings/building2.png", v: 0.1, width: 90, height: 130 },
                { nr: 3, gfx: "../gfx/buildings/building3.png", v: 0.1, width: 120, height: 130 },
                { nr: 4, gfx: "../gfx/buildings/building4.png", v: 0.1, width: 90, height: 130 },
                { nr: 5, gfx: "../gfx/buildings/building5.png", v: 0.1, width: 140, height: 130 },
                { nr: 6, gfx: "../gfx/buildings/building6.png", v: 0.1, width: 90, height: 130 },
                { nr: 7, gfx: "../gfx/buildings/building7.png", v: 0.1, width: 120, height: 130 }];
                
    //var scoreEl = document.getElementById('score');
}

function spaceship() {
    this.hp = 5;
    this.maxhp = 5;
    this.v = 1
    this.width = canvasWidth / 10;
    this.height = canvasHeight / 7;
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height / 2 + this.height / 2;
    this.image = new Image();
    this.image.src = 'gfx/spaceships/spaceship' + currentSpaceship + '.png';
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function selectLevel() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("selectLevel").style.display = "block";
    txtLevel = document.getElementById("txtLevel");
    nextLevel = document.getElementById("next");
    previousLevel = document.getElementById("previous");
    imageLevel = document.getElementById("image");
}

function selectSpaceship() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("selectSpaceship").style.display = "block";
    infoship = document.getElementById("spaceshipInfo");
    nextship = document.getElementById("nextship");
    previousship = document.getElementById("previousship");
    imageship = document.getElementById("imageship");
}


function chooseSpaceship() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("selectSpaceship").style.display = "none";
    spaceship.image.src = spaceships[currentSpaceship].gfx;
    spaceship.maxhp = spaceships[currentSpaceship].hp;
    spaceship.hp = spaceships[currentSpaceship].hp;
    spaceship.v = spaceships[currentSpaceship].v;
    v = canvasWidth * spaceship.v;
}

function upgrade(e) {
    if (money >= ammunition[e].money) {
        if (e != 4) {
            ammunition[e].max *= 2;
        } else {
            ammunition[e].max *= 3;
        }
        bullets[e].dmg *= 1.5;
        ammunition[e].upgrade = true;
        bullets[e].gfx = "../gfx/weapons/weapon" + e + "U.png"
        money -= ammunition[e].money;
        for (i = 0; i < 5; i++) {
            if (ammunition[i].upgrade) {
                document.getElementById("ammunition" + i).getElementsByClassName("upgradeButton")[0].getElementsByClassName("buy")[0].innerHTML = "BOUGHT";
                document.getElementById("ammunition" + i).getElementsByClassName("upgradeButton")[0].getElementsByClassName("buy")[0].style.color = "#0DA9D9";
            }
        }
        document.getElementById("myMoney").innerHTML = money;
    }
}

function startGame() {
    if (end) {
        launchedBullets = [];
        planets = [];
        buildings = [];
        enemies = [];
        explosions = [];
        dodgedEnemies = 0;
        killedEnemies = 0;
        time = 0;
        score = 0;
        end = false;
        enemyKilled = false;
        bulletTime = Date.now();
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("game").style.display = "block";
        document.getElementById("bullets").style.display = "block";
        document.getElementById("bullets").style.top = canvasHeight - 10 + "px";
        document.getElementById("statistics").style.display = "block";
        document.getElementById("playerBar").style.display = "block";
        document.getElementById("playerBar").style.left = (innerWidth - 640) / 2 + "px";
        document.getElementById("hp").style.display = "block";
        document.getElementById("hp").style.left = (innerWidth - 640) / 2 + "px";
        spaceship.maxhp = spaceships[currentSpaceship].hp;
        spaceship.hp = spaceships[currentSpaceship].hp;
        spaceship.x = canvas.width / 2 - spaceship.width / 2;
        spaceship.y = canvas.height / 2 + spaceship.height / 2;
        document.getElementById("hp").innerHTML = spaceship.hp + "/" + spaceship.maxhp;
        document.getElementById("hpBar").style.display = "block";
        document.getElementById("hpBar").style.left = (innerWidth - 640) / 2 + "px";
        document.getElementById("hpBar").style.width = 370 + "px";
        clock = 0;        level30Bool = true;        level45Bool = true;        level60Bool = true;        timer = setInterval(function () {
            if (!end) {
                for (i = 0; i < explosions.length; i++) {
                    explosions[i].time += 1;
                }
                clock++;                if (clock > 30 && level30Bool) {
                    level30(currentLevel);
                    level30Bool = false;
                }                if (clock > 45 && level45Bool) {
                    level45(currentLevel);
                    level45Bool = false;
                }                if (clock > 60 && level60Bool) {
                    level60(currentLevel);
                    level60Bool = false;
                }                score += 2;                document.getElementById("score").innerHTML = "Points: " + score;                document.getElementById("time").innerHTML = "Time: " + clock + "s";
            }
        }, 1000);
        backgroundChange(currentLevel);
        respawn(currentLevel);
        lastTime = Date.now();
        for (i = 1; i < 5; i++) {
            ammunition[i].ammo = ammunition[i].max;
            document.getElementById("bullet" + i).getElementsByTagName("p")[0].innerHTML = ammunition[i].max;
        }
        main();
    }
}



function main() {
    if (!end) {
        var now = Date.now();
        var timeAfterLastUpdate = (now - lastTime) / 1000.0;

        update(timeAfterLastUpdate);
        render();

        lastTime = now;
        requestAnimationFrame(main);
    }
    
};

function render() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (!end) {
        ctx.save();
        ctx.translate(spaceship.x, spaceship.y);
        ctx.restore();
    }
    for (var i = 0; i < launchedBullets.length; i++) {
        var bullet = launchedBullets[i];
        bullet.draw();
    }
    spaceship.draw();
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
    for (var i = 0; i < planets.length; i++) {
        planets[i].draw();
    }
    for (var i = 0; i < buildings.length; i++) {
        buildings[i].draw();
    }
    for (var i = 0; i < explosions.length; i++) {
        explosions[i].draw();
    }
}

function update(timeAfterLastUpdate) {
        time += timeAfterLastUpdate;
        for (var i = 0; i < launchedBullets.length; i++) {
            var bullet = launchedBullets[i];
            bullet.y -= 1000 * bullets[currentBullet].v * timeAfterLastUpdate;
            if (bullet.y < 0 || bullet.y > canvasHeight) {
                launchedBullets.splice(i, 1);

                i--;
            }
        }
        for (var i = 0; i < enemies.length; i++) {
            if (enemies[i].nr == 0) {
                enemies[i].y += 1000 * enemies[i].v * timeAfterLastUpdate;
                if (enemies[i].direction == "left") {
                    enemies[i].x -= 200 * enemies[i].v * timeAfterLastUpdate;
                    if (enemies[i].startx - enemies[i].x >= 60) {
                        enemies[i].direction = "right";
                        
                    }
                    
                } else if (enemies[i].direction == "right") {
                    enemies[i].x += 200 * enemies[i].v * timeAfterLastUpdate;
                    if (enemies[i].startx - enemies[i].x <= -60) {
                        enemies[i].direction = "left";
                    }
                }
                
            } else {
                enemies[i].y += 1000 * enemies[i].v * timeAfterLastUpdate;
            }
            if (enemies[i].y > canvasHeight) {
                enemies.splice(i, 1);
                dodgedEnemies++;
                i--;
            }
        }
        for (var i = 0; i < planets.length; i++) {
            planets[i].y += 1000 * planet[i].v * timeAfterLastUpdate;
            if (planets[i].y > canvasHeight) {
                planets.splice(i, 1);
                i--;
                dodgedEnemies++;
            }
        }
        for (var i = 0; i < buildings.length; i++) {
            buildings[i].y += 1000 * building[i].v * timeAfterLastUpdate;
            if (buildings[i].y > canvasHeight) {
                buildings.splice(i, 1);
                dodgedEnemies++;
                i--;
            }
        }
        for (var i = 0; i < explosions.length; i++) {
            if (explosions[i].time > 1) {
                explosions.splice(i, 1);
                i--;
            }
        }
        control(timeAfterLastUpdate);
        detectCollisions(); 
}

function newEnemy(e) {
    this.width = enemy[e].width;
    this.height = enemy[e].height;
    var x = Math.floor((Math.random() * (canvasWidth - 50 - enemy[e].width)) + 50);
    var y = -enemy[e].height;
    this.hp = enemy[e].hp;
    this.nr = e;
    this.point = (e + 1) * 3;
    this.x = x;
    this.startx = x;
    this.y = y;
    this.direction = "left";
    this.v = enemy[e].v;
    this.image = new Image();
    this.image.src = '../gfx/enemies/enemy' + e + '.png';
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function newExplosion(e, x, y) {
    this.width = 90;
    this.height = 90;
    this.time = 0;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = '../gfx/points/point' + e + '.png';
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function newBullet() {
    this.width = bullets[currentBullet].width;
    this.height = bullets[currentBullet].height;
    var x = spaceship.x + spaceship.width / 2 - (bullets[currentBullet].width / 2);
    var y = spaceship.y - (bullets[currentBullet].height / 2);
    this.x = x;
    this.y = y;
    this.image = new Image();
    if (ammunition[currentBullet].upgrade) {
        this.image.src = '../gfx/weapons/weapon' + currentBullet + 'U.png';
    } else {
        this.image.src = '../gfx/weapons/weapon' + currentBullet + '.png';
    }
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function newPlanet() {
    e = Math.floor((Math.random() * 6));
    this.width = planet[e].width;
    this.height = planet[e].height;
    var x = Math.floor((Math.random() * (canvasWidth - 50 - planet[e].width)) + 50);
    var y = -80;
    this.x = x;
    this.y = y;
    this.v = planet[e].v;
    this.image = new Image();
    this.image.src = '../gfx/planets/planet' + e + '.png';
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

function newBuilding() {
    e = Math.floor((Math.random() * 8));
    if (e <= 3) {
        x = 0;
    } else if (e >= 4) {
        x = canvasWidth - building[e].width;
    }
    this.width = building[e].width;
    this.height = building[e].height;
    var y = -building[e].height;
    this.x = x;
    this.y = y;
    this.v = building[e].v;
    this.image = new Image();
    this.image.src = '../gfx/buildings/building' + e + '.png';
    this.draw = function () {
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
