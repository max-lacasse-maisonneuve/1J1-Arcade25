// Variables

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false;

let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let tailleTitre = 20;
let direction = 1;

let sEtat = "intro";
let victoire = false;

// imgs

let joueur = {
    ligne: 0,
    colonne: 0,
    image: new Image(),
    src: "assets/imgs/fish.png",
    taille: 0,
};

let bombes = {
    image: new Image(),
    src: "assets/imgs/seamine.webp",
    taille: 0,
};

joueur.image.src = joueur.src;
bombes.image.src = bombes.src;

let background = {
    x: 0,
    y: 0,
    largeur: nLargeur,
    hauteur: nHauteur,
    image: new Image(),
    src: "assets/imgs/waterbg.jpg",
};

background.image.src = background.src;

let nbColonnes = 5;
let nbLignes = 5;
let tailleTuile = nLargeur / nbColonnes;

bombes.taille = tailleTuile * 0.6;
joueur.taille = tailleTuile * 0.7;

let grille = [];

// sounds

let oSFX = {
    main: new Audio("assets/sounds/ost.mp3"),
    explode: new Audio("assets/sounds/explode.ogg"),
    victory: new Audio("assets/sounds/victory.mp3"),
    failure: new Audio("assets/sounds/nexttime.mp3"),
};

// game function

function initialiserGrille() {
    for (let i = 0; i < nbLignes; i++) {
        grille[i] = [];
        for (let j = 0; j < nbColonnes; j++) {
            grille[i][j] = 0;
        }
    }
    grille[0][0] = 2;
    grille[nbLignes - 1][nbColonnes - 1] = 3;
}

function genererBombes() {
    for (let i = 0; i < 5; i++) {
        let ligne = Math.floor(Math.random() * nbLignes);
        let colonne = Math.floor(Math.random() * nbColonnes);
        if (grille[ligne][colonne] == 0) {
            grille[ligne][colonne] = 1;
        } else {
            i--;
        }
    }
}

function dessinerGrille() {
    oContexte.strokeStyle = "black";
    oContexte.lineWidth = 2;

    for (let i = 0; i <= nbLignes; i++) {
        let y = i * tailleTuile;
        oContexte.strokeRect(0, y, nLargeur, 0);
    }

    for (let j = 0; j <= nbColonnes; j++) {
        let x = j * tailleTuile;
        oContexte.strokeRect(x, 0, 0, nHauteur);
    }
}

function afficherBombes() {
    for (let i = 0; i < nbLignes; i++) {
        for (let j = 0; j < nbColonnes; j++) {
            if (grille[i][j] == 1) {
                oContexte.drawImage(
                    bombes.image,
                    j * tailleTuile + (tailleTuile - bombes.taille) / 2,
                    i * tailleTuile + (tailleTuile - bombes.taille) / 2,
                    bombes.taille,
                    bombes.taille

                    // pas sure comment faire disparaitre les bombes apres quelque secondes
                );
            }
        }
    }
}

function dessinerJoueur() {
    oContexte.drawImage(
        joueur.image,
        joueur.colonne * tailleTuile + (tailleTuile - joueur.taille) / 2,
        joueur.ligne * tailleTuile + (tailleTuile - joueur.taille) / 2,
        joueur.taille,
        joueur.taille
    );
}

function dessinerTEST() {
    oContexte.font = "30px Arial";
    oContexte.fillStyle = "green";
    oContexte.fillText("DEBUT", 70, 40);
    oContexte.fillStyle = "red";
    oContexte.fillText("FIN", nLargeur - 90, nHauteur - 20);
}

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    window.addEventListener("keydown", clavier);
    initialiserGrille();
    genererBombes();
}

// movement

function clavier(evenement) {
    if (sEtat == "intro" && evenement.key == " ") {
        sEtat = "jeu";

        oSFX.main.play();
        oSFX.main.volume = 0.25;
    }

    if (sEtat == "jeu") {
        if ((evenement.key == "ArrowUp" || evenement.key == "w") && joueur.ligne > 0) joueur.ligne--;

        if ((evenement.key == "ArrowDown" || evenement.key == "s") && joueur.ligne < nbLignes - 1) joueur.ligne++;

        if ((evenement.key == "ArrowLeft" || evenement.key == "a") && joueur.colonne > 0) joueur.colonne--;

        if ((evenement.key == "ArrowRight" || evenement.key == "d") && joueur.colonne < nbColonnes - 1) joueur.colonne++;

        if (grille[joueur.ligne][joueur.colonne] == 1) {
            victoire = false;
            sEtat = "fin";

            oSFX.main.pause();
            oSFX.explode.play();

            setTimeout(() => {
                oSFX.failure.play();
            }, 1000);
        }

        if (grille[joueur.ligne][joueur.colonne] == 3) {
            victoire = true;
            sEtat = "fin";

            oSFX.main.pause();
            oSFX.victory.play();
            oSFX.victory.volume = 0.25;
        }
    }
}

function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeur, nHauteur);

    if (sEtat == "intro") afficherIntro();
    else if (sEtat == "jeu") afficherJeu();
    else if (sEtat == "fin") afficherFin();
}

// etat du jeu

function afficherIntro() {
    if (tailleTitre >= 30) direction = -1;
    else if (tailleTitre < 20) direction = 1;

    if (direction == 1) tailleTitre += 0.05;
    else tailleTitre -= 0.05;

    oContexte.font = `${tailleTitre}px Arial`;
    oContexte.textAlign = "center";
    oContexte.fillText(`Pressez ESPACE pour commencer`, nLargeur / 2, nHauteur / 2 - 20);
}

function afficherJeu() {
    oContexte.drawImage(background.image, background.x, background.y, background.largeur, background.hauteur);
    oContexte.fillStyle = "#00000017";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    dessinerGrille();
    afficherBombes();
    dessinerTEST();
    dessinerJoueur();
}

function afficherFin() {
    afficherJeu();

    oContexte.fillStyle = "rgba(0,0,0,0.45)";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.font = "40px Arial";
    oContexte.fillStyle = "white";
    oContexte.textAlign = "center";

    if (victoire) {
        oContexte.fillText("VOUS AVEZ GAGNÉ!", nLargeur / 2, nHauteur / 2);
    } else {
        oContexte.fillText("VOUS AVEZ PERDU!", nLargeur / 2, nHauteur / 2);
    }
}

window.addEventListener("load", initialiser);
