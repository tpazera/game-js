function backToMenuShop() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("upgradeAmmunition").style.display = "none";
}

function backToMenuLevel() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("selectLevel").style.display = "none";
}

function backToMenuOver() {
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("menu").style.display = "block";
    
}


function backToMenuInf() {
    document.getElementById("information").style.display = "none";
    document.getElementById("menu").style.display = "block";

}

function next() {
    if (currentLevel < levels.length - 1) {
        currentLevel = levels[currentLevel + 1].nr;
        changeLevel();
    }
}

function previous() {
    if (currentLevel > 0) {
        currentLevel = levels[currentLevel - 1].nr;
        changeLevel();
    }
}

function nextSpaceship() {
    if (currentSpaceship < spaceships.length - 1) {
        currentSpaceship = spaceships[currentSpaceship + 1].nr;
        changeSpaceship();
    }
}

function previousSpaceship() {
    if (currentSpaceship > 0) {
        currentSpaceship = spaceships[currentSpaceship - 1].nr;
        changeSpaceship();
    }
}

function information() {
    document.getElementById("information").style.display = "block";
    document.getElementById("menu").style.display = "none";
}


function changeLevel() {
    current = levels[currentLevel];
    txtLevel.innerHTML = current.name;
    imageLevel.style.backgroundImage = "url('" + current.gfx + "')";
    if (currentLevel == levels.length - 1) {
        nextLevel.style.backgroundImage = "url('../gfx/levels/no-next.png')";
    } else if (currentLevel == 0) {
        previousLevel.style.backgroundImage = "url('../gfx/levels/no-previous.png')";
    } else {
        nextLevel.style.backgroundImage = "url('../gfx/levels/next.png')";
        previousLevel.style.backgroundImage = "url('../gfx/levels/previous.png')";
    }
}

function changeSpaceship() {
    current = spaceships[currentSpaceship];
    spaceshipInfo.innerHTML = "Name: " + current.name + "<br />HP: " + current.hp + "<br />Speed: " + current.v;
    imageship.style.backgroundImage = "url('" + current.gfx + "')";
    if (currentSpaceship == spaceships.length - 1) {
        nextship.style.backgroundImage = "url('../gfx/levels/no-next.png')";
    } else if (currentSpaceship == 0) {
        previousship.style.backgroundImage = "url('../gfx/levels/no-previous.png')";
    } else {
        nextship.style.backgroundImage = "url('../gfx/levels/next.png')";
        previousship.style.backgroundImage = "url('../gfx/levels/previous.png')";
    }
}


function backgroundChange(e) {
    background = document.getElementById("canvas");
    background.style.backgroundImage = "url('../gfx/patterns/background" + e + ".gif')";
    background.style.backgroundSize = "100% 100%";

}