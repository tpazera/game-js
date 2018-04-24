function loadFiles(name, src, onLoad) {
    name = new Image();
    name.onload = onLoad;
    name.src = src;
}

var spaceship0, spaceship0left, spaceship0right, spaceship1, spaceship2, spaceship3, spaceship4, spaceship5;
var planet0, planet1, planet2, planet3, planet4, planet5;
var building0, building1, building2, building3, building4, building5, building6, building7;
var enemy0, enemy1, enemy2, enemy3;
var background0, background1, background2, background3;

function loadAll() {
    document.getElementById("progresstxt").innerHTML = "Loading files";
    setTimeout(function () {
        loadFiles(spaceship0, 'gfx/spaceships/spaceship0.png', function () {
            console.log("LOADED");
        });
    }, 1000);
    setTimeout(function () {
        loadFiles(spaceship0left, 'gfx/spaceships/spaceship0-left.png', function () {
        });
    }, 1150);
    setTimeout(function () {
        loadFiles(spaceship0right, 'gfx/spaceships/spaceship0-right.png', function () {
        });
    }, 1300);
    setTimeout(function () {
        loadFiles(spaceship1, 'gfx/spaceships/spaceship1.png', function () {
        });
    }, 1600);
    setTimeout(function () {
        loadFiles(spaceship2, 'gfx/spaceships/spaceship2.png', function () {
        });
    }, 1750);
    setTimeout(function () {
        loadFiles(spaceship3, 'gfx/spaceships/spaceship3.png', function () {
        });
    }, 1900);
    setTimeout(function () {
        loadFiles(spaceship4, 'gfx/spaceships/spaceship4.png', function () {
        });
    }, 2050);
    setTimeout(function () {
        loadFiles(spaceship5, 'gfx/spaceships/spaceship5.png', function () {
            document.getElementById("progresstxt").innerHTML = "Spaceships loaded";
        });
    }, 2200);
    setTimeout(function () {
        loadFiles(planet0, 'gfx/planets/planet0.png', function () {
        });
        loadFiles(planet1, 'gfx/planets/planet1.png', function () {
        });
        loadFiles(planet2, 'gfx/planets/planet2.png', function () {
        });
        loadFiles(planet3, 'gfx/planets/planet3.png', function () {
        });
        loadFiles(planet4, 'gfx/planets/planet4.png', function () {
        });
        loadFiles(planet5, 'gfx/planets/planet5.png', function () {
            document.getElementById("progresstxt").innerHTML = "Planets loaded";
        });
    }, 4000);
    setTimeout(function () {
        loadFiles(building0, 'gfx/buildings/building0.png', function () {
        });
        loadFiles(building1, 'gfx/buildings/building1.png', function () {
        });
        loadFiles(building2, 'gfx/buildings/building2.png', function () {
        });
        loadFiles(building3, 'gfx/buildings/building3.png', function () {
        });
        loadFiles(building4, 'gfx/buildings/building4.png', function () {
        });
        loadFiles(building5, 'gfx/buildings/building5.png', function () {
        });
        loadFiles(building6, 'gfx/buildings/building6.png', function () {
        });
        loadFiles(building7, 'gfx/buildings/building7.png', function () {
            document.getElementById("progresstxt").innerHTML = "Buildings loaded";
        });
    }, 6000);
    setTimeout(function () {
        loadFiles(enemy0, 'gfx/enemies/enemy0.png', function () {
        });
        loadFiles(enemy1, 'gfx/enemies/enemy1.png', function () {
        });
        loadFiles(enemy2, 'gfx/enemies/enemy2.png', function () {
        });
        loadFiles(enemy3, 'gfx/enemies/enemy3.png', function () {
            document.getElementById("progresstxt").innerHTML = "Enemies loaded";
        });
    }, 7000);
    setTimeout(function () {
        loadFiles(background0, 'gfx/patterns/background0.gif', function () {
        });
        loadFiles(background1, 'gfx/patterns/background1.gif', function () {
        });
        loadFiles(background2, 'gfx/patterns/background2.gif', function () {
        });
        loadFiles(background3, 'gfx/patterns/background3.gif', function () {
            document.getElementById("progresstxt").innerHTML = "Backgrounds loaded";
        });
    }, 8000);
    setTimeout(function () {
        document.getElementById("progress").style.display = "none";
    }, 9000);
    setTimeout(function () {
        document.getElementById("menu").style.display = "block";
    }, 9500);
    setTimeout(function () {
        document.getElementById("menu").style.color = "#2DA1CF";
    }, 10000);
    setTimeout(function () {
        document.getElementById("menu").style.color = "#c6c6c6";
    }, 11000);
    
}