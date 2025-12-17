let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let musiqueBG = new Audio();
musiqueBG.src = "assets/audio/musiqueBG.mp3";
musiqueBG.loop = true;
musiqueBG.volume = 0.3;

let sEtatJeu = "intro";
let boutonAppuye = false;
let couleurCourante = "black";

let nPositionCurseurX = 0;
let nPositionCursuerY = 0;

let oImageBG = new Image();
oImageBG.src = "assets/images/salle_de_classeBG.jpg";

let oImageCrayon = new Image();
oImageCrayon.src = "assets/images/crayon.png";
let nPositionXCrayon = 100;
let nPositionYCrayon = 100;
let nVitesse = 10;

let oImageA = new Image();
oImageA.src = "assets/images/lettreA.jpg";

let oImageB = new Image();
oImageB.src = "assets/images/lettreB.jpg";

let oImageC = new Image();
oImageC.src = "assets/images/lettreC.jpg";

let oImageD = new Image();
oImageD.src = "assets/images/lettreD.jpg";

let oImageE = new Image();
oImageE.src = "assets/images/lettreE.jpg";

let oImageF = new Image();
oImageF.src = "assets/images/lettreF.jpg";

let oImageG = new Image();
oImageG.src = "assets/images/lettreG.jpg";

let oImageH = new Image();
oImageH.src = "assets/images/lettreH.jpg";

let oImageI = new Image();
oImageI.src = "assets/images/lettreI.jpg";

let oImageJ = new Image();
oImageJ.src = "assets/images/lettreJ.jpg";
let lettreAléatoire;

function initialiser() {
    setInterval(boucleJeu, 1000 / 120);
    oCanvasHTML.addEventListener("click", clicCanvas);
    oCanvasHTML.addEventListener("mousedown", appuyerBouton);
    oCanvasHTML.addEventListener("mouseup", relacherBouton);
    oCanvasHTML.addEventListener("mousemove", mouvementSouris);
    oCanvasHTML.addEventListener("dblclick", doubleClic);
    window.addEventListener("keyup", flecheDroite);
}

function boucleJeu() {
    if (sEtatJeu == "intro") {
        oContexte.clearRect(0, 0, nLargeur, nHauteur);
        afficherIntro();
    } else if (sEtatJeu == "jeu") {
        afficherJeu();
    }
    musiqueBG.play();
}

function appuyerBouton(evenement) {
    boutonAppuye = true;
}

function relacherBouton(evenement) {
    boutonAppuye = false;
}

function mouvementSouris(evenement) {
    nPositionCurseurX = evenement.offsetX;
    nPositionCursuerY = evenement.offsetY;
}

function doubleClic() {
    oContexte.clearRect(0, 0, nLargeur, nHauteur);
    dessinerLettre();
}

function flecheDroite(evenement) {
    let touche = evenement.key;
    console.log(touche);

    if (touche == "ArrowRight") {
        choisirLettre();
    }
}

function choisirLettre() {
    oContexte.clearRect(0, 0, nLargeur, nHauteur);

    lettreAléatoire = Math.floor(Math.random() * 10) + 1;
    dessinerLettre();
}

function dessinerLettre() {
    if (lettreAléatoire === 1) {
        oContexte.drawImage(oImageA, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 2) {
        oContexte.drawImage(oImageB, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 3) {
        oContexte.drawImage(oImageC, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 4) {
        oContexte.drawImage(oImageD, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 5) {
        oContexte.drawImage(oImageE, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 6) {
        oContexte.drawImage(oImageF, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 7) {
        oContexte.drawImage(oImageG, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 8) {
        oContexte.drawImage(oImageH, 0, 0, nLargeur, nHauteur);
    } else if (lettreAléatoire === 9) {
        oContexte.drawImage(oImageI, 0, 0, nLargeur, nHauteur);
    } else {
        oContexte.drawImage(oImageJ, 0, 0, nLargeur, nHauteur);
    }
}

function clicCanvas(evenement) {
    let nPositionCurseurX = evenement.offsetX;
    let nPositionCurseurY = evenement.offsetY;

    if (sEtatJeu == "intro") {
        sEtatJeu = "jeu";
        choisirLettre();
    } else if (sEtatJeu == "jeu") {
    }
}

function afficherIntro() {
    oContexte.drawImage(oImageBG, 0, 0, nLargeur, nHauteur);
    oContexte.font = "bold 35px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(`LETTRE ET DESSIN`, 400, 125);
    oContexte.font = "bold 15px Arial";
    oContexte.fillText(`CLIQUER POUR DÉMARRER`, 400, 175);
    oContexte.fillText(`Appuyer sur la flèche de droite pour changer de lettre`, 400, 200);
    oContexte.fillText(`Double-cliquer pour effacer`, 400, 225);

    nPositionXCrayon += 1;
    if (nPositionXCrayon > nLargeur) {
        nPositionXCrayon = 0;
        nPositionYCrayon = Math.random() * (nHauteur - 95);
    }
    oContexte.drawImage(oImageCrayon, nPositionXCrayon, nPositionYCrayon);
}

function afficherJeu() {
    if (boutonAppuye == true) {
        oContexte.fillStyle = "blue";
        oContexte.fillRect(nPositionCurseurX, nPositionCursuerY, 15, 15);
    }
}
window.addEventListener("load", initialiser);
