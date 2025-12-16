let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let musiqueBG = new Audio()
musiqueBG.src = "assets/audio/musiqueBG.mp3"
musiqueBG.loop = true;
musiqueBG.volume = 0.3;


let sEtatJeu = "intro";
let boutonAppuye = false;
let couleurCourante = "black";

let nPositionCurseurX = 0;
let nPositionCursuerY = 0;

let oImageBG = new Image()
oImageBG.src = "assets/images/salle_de_classeBG.jpg"

let oImageCrayon = new Image()
oImageCrayon.src = "assets/images/crayon.png"
let nPositionXCrayon = 100;
let nPositionYCrayon = 100;
let nVitesse = 10

let oImageA = new Image()
oImageA.src = "assets/images/lettreA.jpg"

let oImageB = new Image()
oImageB.src = "assets/images/lettreB.jpg"

let oImageC = new Image()
oImageC.src = "assets/images/lettreC.jpg"

let oImageD = new Image()
oImageD.src = "assets/images/lettreD.jpg"

let oImageE = new Image()
oImageE.src = "assets/images/lettreE.jpg"

let oImageF = new Image()
oImageF.src = "assets/images/lettreF.jpg"

let oImageG = new Image()
oImageG.src = "assets/images/lettreG.jpg"

let oImageH = new Image()
oImageH.src = "assets/images/lettreH.jpg"

let oImageI = new Image()
oImageI.src = "assets/images/lettreI.jpg"

let oImageJ = new Image()
oImageJ.src = "assets/images/lettreJ.jpg"


function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    oCanvasHTML.addEventListener("click", clicCanvas);
    oCanvasHTML.addEventListener("mousedown", appuyerBouton);
    oCanvasHTML.addEventListener("mouseup", relacherBouton);
    oCanvasHTML.addEventListener("mousemove", mouvementSouris);
    oCanvasHTML.addEventListener("dblclick", doubleClic);
    oCanvasHTML.addEventListener("keydown", flecheDroite);
    
}

function boucleJeu() {
    if (sEtatJeu == "intro") {
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
    oContexte.clearRect(0, 0, nLargeur, nHauteur)
}

function flecheDroite(evenement){
    let touche = evenement.key
    if(touche == "ArrowRight") {
        oContexte.drawImage(lettreAléatoire, 0, 0, nLargeur, nHauteur)
    }
}

function clicCanvas(evenement) {
    let nPositionCurseurX = evenement.offsetX;
    let nPositionCurseurY = evenement.offsetY;

    if (sEtatJeu == "intro") {
        oContexte.clearRect(0, 0, nLargeur, nHauteur);
        sEtatJeu = "jeu";
    } else if (sEtatJeu == "jeu") {
        let collision = false;
    }



}

function afficherIntro() {
    oContexte.drawImage(oImageBG, 0, 0, nLargeur, nHauteur);
    oContexte.textAlign = "center";
    oContexte.fillText(`LETTRE ET DESSIN`,400,350)
    oContexte.fillText(`CLICKER POUR DÉMMARRER`,400,150);
    oContexte.font = "bold 35px Arial"

     nPositionXCrayon += 1;
    if (nPositionXCrayon > nLargeur) {
        nPositionXCrayon = 0;
        nPositionYCrayon = Math.random() * (nHauteur-95);
    }
     oContexte.drawImage(oImageCrayon, nPositionXCrayon,nPositionYCrayon);
     
}

function afficherJeu() {
    if (boutonAppuye == true) {
        oContexte.fillRect(nPositionCurseurX, nPositionCursuerY, 5, 5)
    }
   let lettreAléatoire = Math.floor(Math.random() * 10) + 1;
if (lettreAléatoire === 1) {
    oContexte.drawImage(oImageA, 0,0, nHauteur,nHauteur);
} else if (lettreAléatoire === 2) {
    oContexte.drawImage(oImageB, 0,0, nLargeur,nHauteur)
}else if (lettreAléatoire === 3) {
    oContexte.drawImage(oImageC, 0,0, nHauteur,nHauteur);
} else if (lettreAléatoire === 4) {
    oContexte.drawImage(oImageD, 0,0, nLargeur,nHauteur)
} else if (lettreAléatoire === 5) {
    oContexte.drawImage(oImageE, 0,0, nHauteur,nHauteur);
} else if (lettreAléatoire === 6) {
    oContexte.drawImage(oImageF, 0,0, nLargeur,nHauteur)
} else if (lettreAléatoire === 7) {
    oContexte.drawImage(oImageG, 0,0, nHauteur,nHauteur);
} else if (lettreAléatoire === 8) {
    oContexte.drawImage(oImageH, 0,0, nLargeur,nHauteur)
} else if (lettreAléatoire === 9) {
    oContexte.drawImage(oImageI, 0,0, nHauteur,nHauteur);
} else {
    oContexte.drawImage(oImageJ, 0,0, nLargeur,nHauteur)
} 

}
window.addEventListener("load", initialiser);
