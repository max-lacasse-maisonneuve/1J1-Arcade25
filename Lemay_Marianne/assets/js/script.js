let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let tempsPasse = 0;
let minuterie = 10;

//------------------------------------------INGRÉDIENTS--------------------------------------
let nPositionBeurreX = Math.random() * nLargeurCanvas - 100;
let nPositionBeurreY = Math.random() * 600 - 600;
let nBeurreVitesse = 1;

let nPositionOeufsX = Math.random() * nLargeurCanvas - 100;
let nPositionOeufsY = Math.random() * 600 - 600;
let nOeufsVitesse = 1.5;

let nPositionFarineX = Math.random() * nLargeurCanvas - 100;
let nPositionFarineY = Math.random() * 600 - 600;
let nFarineVitesse = 2;

let nPositionSucreX = Math.random() * nLargeurCanvas - 100;
let nPositionSucreY = Math.random() * 600 - 600;
let nSucreVitesse = 1.7;

let nPositionLaitX = Math.random() * nLargeurCanvas - 100;
let nPositionLaitY = Math.random() * 600 - 600;
let nLaitVitesse = 1;

//listes

let aMotsCorrects = [
    "Berceau",
    "Affiche",
    "Rivage",
    "Coupable",
    "Sauvetage",
    "Ridicule",
    "Consonne",
    "Organisation",
    "Goutelettes",
    "Extensif",
    "Peinture",
    "Pyramide",
    "Effrayer",
    "Propagande",
    "",
];

let aMotsErrones = [
    "Vadroulle",
    "Aqatique",
    "Pallourde",
    "Compliçe",
    "Parrachute",
    "Silencieu",
    "Chaine",
    "Drapau",
    "Lilac",
    "Kilomèttre",
    "Faussile",
    "Millieu",
    "Farfellu",
    "Mittrailleuse",
    "Canelle",
    "",
];

//------------------------------------MOTS-------------------------------------
let nombreMotsCorrects = aMotsCorrects.length;
let nombreMotsErrones = aMotsErrones.length;

let indexMotCorrectAleatoire = Math.floor(Math.random() * aMotsCorrects.length);
let motCorrectAleatoire = aMotsCorrects[indexMotCorrectAleatoire];

let indexMotIncorrectAleatoire = Math.floor(Math.random() * aMotsErrones.length);
let motErroneAleatoire = aMotsErrones[indexMotIncorrectAleatoire];

let nPositionMotErroneX = Math.random() * nLargeurCanvas - 100;
let npositionmoterroneY = Math.random() * 600 - 600;

let nPositionMotCorrectX = Math.random() * nLargeurCanvas - 100;
let nPositionMotCorrectY = Math.random() * 600 - 600;

let nMotCorrectVitesse = 1;
let nMotErroneVitesse = 1;

let mot1 = {
    texte: "",
    x: 0,
    y: 0,
    hauteur: 20,
    largeur: 0,
};

let mot2 = {
    texte: "",
    x: 0,
    y: 0,
    hauteur: 20,
    largeur: 0,
};

//-------------------------------------AUDIOS--------------------------------------------------------
let oMauvaiseReponse = new Audio();
oMauvaiseReponse.src = "assets/audio/mauvaise-reponse.mp3";
let oBonneReponse = new Audio();
oBonneReponse.src = "assets/audio/bonne-reponse.mp3";
let oMusiqueFond = new Audio();
oMusiqueFond.src = "assets/audio/musique-de-fond.mp3";
oMusiqueFond.volume = 0.3;
oMusiqueFond.play();

//--------------------------------------------IMAGES-------------------------------------------------------
let oImageAcceuil = new Image();
oImageAcceuil.src = "assets/images/acceuil.jpg";
let oBulleParole = new Image();
oBulleParole.src = "assets/images/bulleParole.png";
let oImageJeu = new Image();
oImageJeu.src = "assets/images/JeuFond.jpg";
let oImageBeurre = new Image();
oImageBeurre.src = "assets/images/beurre.png";
let oImageFarine = new Image();
oImageFarine.src = "assets/images/farine.png";
let oImageSucre = new Image();
oImageSucre.src = "assets/images/sucre.png";
let oImageLait = new Image();
oImageLait.src = "assets/images/lait.webp";
let oImageOeufs = new Image();
oImageOeufs.src = "assets/images/oeufs.png";
let oCupcakeEntier = new Image();
oCupcakeEntier.src = "assets/images/cupcakeEntier.png";
let oImagePapier = new Image();
oImagePapier.src = "assets/images/papier.png";

let sEtat = "intro";
let messageIntro = "";
let messageIntroAffiche = false;

let oBoutonDemarrer = {
    x: 400,
    y: 399,
    largeur: 200,
    hauteur: 50,
    texte: "DÉMARRER",
    teinte: 0,
};

let oBoutonContinuer = {
    x: 500,
    y: 100,
    largeur: 150,
    hauteur: 35,
    texte: "Continuer",
    teinte: 0,
};
let oBoutonDemarrerJeu = {
    x: 500,
    y: 465,
    largeur: 150,
    hauteur: 35,
    texte: "Continuer",
    teinte: 0,
};
let oBoutonRejouer = {
    x: 400,
    y: 399,
    largeur: 200,
    hauteur: 50,
    texte: "Rejouer",
    teinte: 0,
};

//------------------------------------------TABLEAU MOTS----------------------------------------
let nPoints = 0;
let imageCupcake = new Image();
//------------------------------------------INITIALISER------------------------------------------
function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    oCanvasHTML.addEventListener("click", clickCanvas);
}

function intro() {
    sEtat = "intro";
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oImageAcceuil, 0, 0, nLargeurCanvas, nHauteurCanvas);

    oContexte.drawImage(oBulleParole, 300, -25, 375, 375);
    oContexte.font = "15px botak";
    oContexte.fillStyle = "#d55576";
    oContexte.fillText("Bienvenue dans la pâtisserie de Rose! ", 475, 115);
    oContexte.fillText("Aujourd'hui, j'ai trop de commandes.", 475, 145);
    oContexte.fillText("J'aurai donc besoin de ton aide pour", 475, 175);
    oContexte.fillText("faire des gâteaux.", 475, 205);

    //-----------------------------------BOUTTON DÉMARRER------------------------------------
    oBoutonDemarrer.teinte++;

    if (oBoutonDemarrer.teinte >= 360) {
        oBoutonDemarrer.teinte = 0;
    }
    oContexte.fillStyle = `hsl(${oBoutonDemarrer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonDemarrer.x, oBoutonDemarrer.y, oBoutonDemarrer.largeur, oBoutonDemarrer.hauteur);
    oContexte.fillStyle = "#ffffffff";
    oContexte.font = "20px botak";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonDemarrer.texte,
        oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
        oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
    );

    //-----------------------------------------FIN BOUTTON--------------------------------------------
}
//----------------------------------------BOUCLE JEU----------------------------------------------
function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    //ÉTAT DU JEU

    if (sEtat == "intro") {
        intro();
    } else if (sEtat == "instructions") {
        afficherInstructions();
    } else if (sEtat == "instructions2") {
        afficherInstructions2();
    } else if (sEtat == "jeu1") {
        afficherJeu1();
    } else if (sEtat == "jeu2") {
        afficherJeu2();
    } else if (sEtat == "outro") {
        afficherOutro();
    }
}
// --------------------------------------CLICS-------------------------------------------
function clickCanvas(evenement) {
    let curseurX = evenement.offsetX;
    let curseurY = evenement.offsetY;

    if (sEtat == "intro" && detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true) {
        sEtat = "instructions";
    } else if (sEtat == "instructions" && detecterClicObjet(curseurX, curseurY, oBoutonContinuer) == true) {
        sEtat = "instructions2";
    } else if (sEtat == "instructions2" && detecterClicObjet(curseurX, curseurY, oBoutonContinuer) == true) {
        sEtat = "jeu1";
    } else if (sEtat == "jeu1" && detecterClicObjet(curseurX, curseurY, oBoutonDemarrerJeu) == true) {
        choisirMot();
        choisirMot2();
        sEtat = "jeu2";
    } else if (sEtat == "jeu2") {
        let hitbox = {
            x: mot1.x - 50,
            y: mot1.y - 50,
            largeur: mot1.largeur + 50,
            hauteur: mot1.hauteur + 50,
        };
        let collisionMot = detecterClicObjet(curseurX, curseurY, hitbox);

        if (collisionMot == true && aMotsErrones.includes(mot1.texte)) {
            //Gerer erreur
            console.log("Mot erroné");
            //Gerer erreur
            nPoints--;
            if (nPoints < 0) {
                nPoints = 0;
            }
            choisirMot();
        } else if (collisionMot == true && aMotsCorrects.includes(mot1.texte)) {
            //Gerer bon mot
            nPoints++;
            console.log("Mot correct");
            choisirMot();
        }
    }

    let hitbox = {
        x: mot2.x - 50,
        y: mot2.y - 50,
        largeur: mot2.largeur + 50,
        hauteur: mot2.hauteur + 50,
    };
    let collisionMot = detecterClicObjet(curseurX, curseurY, hitbox);

    if (collisionMot == true && aMotsErrones.includes(mot2.texte)) {
        //Gerer erreur
        nPoints--;
        oMauvaiseReponse.play();
        if (nPoints < 0) {
            nPoints = 0;
        }
        choisirMot2();
        console.log("Mot erroné");
    } else if (collisionMot == true && aMotsCorrects.includes(mot2.texte)) {
        //Gerer bon mot
        nPoints++;
        oBonneReponse.play();
        choisirMot2();
        console.log("Mot correct");
    } else if (sEtat == "jeu2" && nPoints >= 4) {
        sEtat = "outro";
    } else if (sEtat == "outro" && detecterClicObjet(curseurX, curseurY, oBoutonRejouer) == true) {
        sEtat = "intro";
    }
}

function dessinerPoints() {
    console.log(nPoints);

    if (nPoints >= 0) {
        let imagePapier = new Image();
        imagePapier.src = "assets/images/papier.png";
        oContexte.drawImage(imagePapier, 15, 7, 100, 100);
    }

    if (nPoints >= 1) {
        let imageGlacage = new Image();
        imageGlacage.src = "assets/images/glacage.png";
        oContexte.drawImage(imageGlacage, 15, 7, 100, 100);
    }

    if (nPoints >= 2) {
        let imageVermicelles = new Image();
        imageVermicelles.src = "assets/images/vermicelles.webp";
        oContexte.drawImage(imageVermicelles, 15, 7, 100, 100);
    }

    if (nPoints >= 3) {
        let imageCerise = new Image();
        imageCerise.src = "assets/images/cerise.png";
        oContexte.drawImage(imageCerise, 15, 7, 100, 100);
    }

    if (nPoints >= 4) {
        sEtat;
    }
}

//------------------------------INSTRUCTIONS---------------------------------------------------
function afficherInstructions() {
    oContexte.drawImage(oImageJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.fillStyle = "pink";
    oContexte.fillRect(0, 0, nLargeurCanvas, 100);

    oContexte.font = "20px botak";
    oContexte.fillStyle = "#d55576";
    oContexte.fillText("ATTENTION!", 355, 25);
    oContexte.font = "15px botak";
    oContexte.fillText("Plusieurs ingrédients et mots aléatoires défileront le long de l'écran.", 280, 50);
    oContexte.fillText("Ton objectif est de cliquer sur les mots bien orthographiés.", 245, 75);

    //-------------------------------------BOUTON CONTINUER---------------------------------------
    oBoutonContinuer.teinte++;

    if (oBoutonContinuer.teinte >= 360) {
        oBoutonContinuer.teinte = 0;
    }
    oContexte.fillStyle = `hsl(${oBoutonContinuer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonContinuer.x, oBoutonContinuer.y, oBoutonContinuer.largeur, oBoutonContinuer.hauteur);
    oContexte.fillStyle = "#fff";
    oContexte.font = "20px botak";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonContinuer.texte,
        oBoutonContinuer.x + oBoutonContinuer.largeur / 2,
        oBoutonContinuer.y + oBoutonContinuer.hauteur / 2 + 8
    );
}
//-----------------------------------INSTRUCTIONS 2-----------------------------------------
function afficherInstructions2() {
    oContexte.drawImage(oImageJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.fillStyle = "pink";
    oContexte.fillRect(0, 0, nLargeurCanvas, 100);

    oContexte.font = "15px botak";
    oContexte.fillStyle = "#d55576";

    oContexte.fillText("À chaque bonne réponse, tu obtiendras un morceau de gâteau.", 263, 25);
    oContexte.fillText("Après 4 bonne réponses, tu auras terminé ton gâteau.", 228, 50);
    oContexte.font = "20px botak";
    oContexte.fillText("Allez, les mains à la pâte!", 143, 80);
    oContexte.drawImage(oCupcakeEntier, 590, 0, 100, 100);

    //---------------------------------BOUTON CONTINUER--------------------------------------
    oBoutonContinuer.teinte++;

    if (oBoutonContinuer.teinte >= 360) {
        oBoutonContinuer.teinte = 0;
    }
    oContexte.fillStyle = `hsl(${oBoutonContinuer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonContinuer.x, oBoutonContinuer.y, oBoutonContinuer.largeur, oBoutonContinuer.hauteur);
    oContexte.fillStyle = "#fff";
    oContexte.font = "20px botak";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonContinuer.texte,
        oBoutonContinuer.x + oBoutonContinuer.largeur / 2,
        oBoutonContinuer.y + oBoutonContinuer.hauteur / 2 + 8
    );
}
//-------------------------------------AFFICHER JEU 1-----------------------------------------
function afficherJeu1() {
    oContexte.drawImage(oImageJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);

    //oContexte.fillRect(225, 50, 300, 100);
    oContexte.fillStyle = "#d55576";
    oContexte.font = "60px botak";

    //

    if (messageIntroAffiche == false) {
        messageIntroAffiche = true;
        setTimeout(() => {
            messageIntro = "3...";
        }, 700);
        setTimeout(() => {
            messageIntro = "3...2...";
        }, 1700);
        setTimeout(() => {
            // oContexte.fillStyle = "black";
            messageIntro = "3...2...1...";
        }, 2700);
        setTimeout(() => {
            messageIntro = "À VOS FOURNEAUX!";
        }, 3700);
        setTimeout(() => {
            messageIntro = "";
        }, 4700);
    }
    oContexte.fillText(messageIntro, 360, 250);

    //----------------------------------------------------BOUTON DÉMARRER--------------------------------------------
    oBoutonDemarrerJeu.teinte++;

    if (oBoutonDemarrerJeu.teinte >= 360) {
        oBoutonDemarrerJeu.teinte = 0;
    }
    oContexte.fillStyle = `hsl(${oBoutonDemarrerJeu.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonDemarrerJeu.x, oBoutonDemarrerJeu.y, oBoutonDemarrerJeu.largeur, oBoutonDemarrerJeu.hauteur);
    oContexte.fillStyle = "#fff";
    oContexte.font = "20px botak";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonDemarrerJeu.texte,
        oBoutonDemarrerJeu.x + oBoutonDemarrerJeu.largeur / 2,
        oBoutonDemarrerJeu.y + oBoutonDemarrerJeu.hauteur / 2 + 8
    );
}

function afficherJeu2() {
    oContexte.drawImage(oImageJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.fillStyle = "pink";
    oContexte.fillRect(0, 0, nLargeurCanvas / 5, 100);

    oContexte.font = "15px botak";
    oContexte.fillStyle = "#d55576";

    nPositionBeurreY = nPositionBeurreY + nBeurreVitesse;

    oContexte.drawImage(oImageBeurre, nPositionBeurreX, nPositionBeurreY, 100, 100);

    //--------------------------------------DÉFILEMENT DES INGRÉDIENTS------------------------------------------------
    //BEURRE
    oContexte.drawImage(oImageBeurre, nPositionBeurreX, nPositionBeurreY, 100, 100);
    nPositionBeurreY = nPositionBeurreY + nBeurreVitesse;
    if (nPositionBeurreY > nHauteurCanvas) {
        nPositionBeurreY = Math.random() * 600 - 600;

        let nNombreAleatoire = Math.floor(Math.random() * 600);
        nPositionBeurreX = nNombreAleatoire;
    }
    //OEUFS
    oContexte.drawImage(oImageOeufs, nPositionOeufsX, nPositionOeufsY, 130, 130);
    nPositionOeufsY = nPositionOeufsY + nOeufsVitesse;

    if (nPositionOeufsY > nHauteurCanvas) {
        nPositionOeufsY = Math.random() * 600 - 600;

        let nNombreAleatoire = Math.floor(Math.random() * 600);
        nPositionOeufsX = nNombreAleatoire;
    }
    //FARINE
    nPositionFarineY = nPositionFarineY + nFarineVitesse;
    oContexte.drawImage(oImageFarine, nPositionFarineX, nPositionFarineY, 130, 130);
    if (nPositionFarineY > nHauteurCanvas) {
        nPositionFarineY = Math.random() * 600 - 600;

        let nNombreAleatoire = Math.floor(Math.random() * 600);
        nPositionFarineX = nNombreAleatoire;
    }

    //SUCRE
    nPositionSucreY = nPositionSucreY + nSucreVitesse;
    oContexte.drawImage(oImageSucre, nPositionSucreX, nPositionSucreY, 130, 130);
    if (nPositionSucreY > nHauteurCanvas) {
        nPositionSucreY = Math.random() * 600 - 600;

        let nNombreAleatoire = Math.floor(Math.random() * 600);
        nPositionSucreX = nNombreAleatoire;
    }

    //LAIT
    nPositionLaitY = nPositionLaitY + nLaitVitesse;
    oContexte.drawImage(oImageLait, nPositionLaitX, nPositionLaitY, 130, 130);
    if (nPositionLaitY > nHauteurCanvas) {
        nPositionLaitY = Math.random() * 600 - 600;

        let nNombreAleatoire = Math.floor(Math.random() * 600);
        nPositionLaitX = nNombreAleatoire;
    }
    //-----------------------------------DÉFILEMENT DES MOTS---------------------------------
    //MOTS ERRONÉS
    oContexte.save();
    oContexte.font = "20px botak";
    oContexte.fillStyle = "#d55576";
    oContexte.shadowColor = "black";
    oContexte.shadowOffsetX = 1;
    oContexte.shadowOffsetY = 1;
    oContexte.shadowBlur = "10px";
    oContexte.fillText(mot1.texte, mot1.x, mot1.y);
    oContexte.restore();
    mot1.y += nMotCorrectVitesse;
    // console.log(mot1);

    oContexte.save();
    oContexte.font = "20px botak";
    oContexte.fillStyle = "#d55576";
    oContexte.shadowColor = "black";
    oContexte.shadowOffsetX = 1;
    oContexte.shadowOffsetY = 1;
    oContexte.shadowBlur = "10px";
    oContexte.fillText(mot2.texte, mot2.x, mot2.y);
    oContexte.restore();

    mot2.y += nMotCorrectVitesse;
    //On replace les mots
    if (mot1.y > nHauteurCanvas) {
        choisirMot();
    }
    if (mot2.y > nHauteurCanvas) {
        choisirMot2();
    }

    dessinerPoints();
} //Fin jeu2

function choisirMot() {
    let chances = Math.random() * 100;

    if (chances < 50) {
        let indexMotIncorrectAleatoire = Math.floor(Math.random() * aMotsErrones.length);
        let motErroneAleatoire = aMotsErrones[indexMotIncorrectAleatoire];
        mot1.texte = motErroneAleatoire;
    } else {
        let indexMotCorrectAleatoire = Math.floor(Math.random() * aMotsCorrects.length);
        let motCorrectAleatoire = aMotsCorrects[indexMotCorrectAleatoire];
        mot1.texte = motCorrectAleatoire;
    }

    mot1.largeur = oContexte.measureText(mot1.texte).width;

    mot1.x = Math.random() * (nLargeurCanvas - mot1.largeur);
    mot1.y = Math.random() * 600 - 600;
}

function choisirMot2() {
    let chances = Math.random() * 100;

    if (chances < 50) {
        let indexMotIncorrectAleatoire = Math.floor(Math.random() * aMotsErrones.length);
        let motErroneAleatoire = aMotsErrones[indexMotIncorrectAleatoire];
        mot2.texte = motErroneAleatoire;
    } else {
        let indexMotCorrectAleatoire = Math.floor(Math.random() * aMotsCorrects.length);
        let motCorrectAleatoire = aMotsCorrects[indexMotCorrectAleatoire];
        mot2.texte = motCorrectAleatoire;
    }

    mot2.largeur = oContexte.measureText(mot2.texte).width;

    mot2.x = Math.random() * nLargeurCanvas - mot2.largeur;
    mot2.y = Math.random() * 600 - 600;
}

function afficherOutro() {
    oContexte.drawImage(oImageJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oCupcakeEntier, 250, 150, 200, 200);

    oContexte.font = "30px botak";
    oContexte.fillStyle = "#d55576";
    oContexte.shadowColor = "black";
    oContexte.shadowOffsetX = 1;
    oContexte.shadowOffsetY = 1;
    oContexte.shadowBlur = "10px";
    oContexte.fillText("Félicitations! Vous avez rempli la commande!", nLargeurCanvas / 2, nHauteurCanvas / 3);
    oBoutonRejouer.teinte++;

    if (oBoutonRejouer.teinte >= 360) {
        oBoutonRejouer.teinte = 0;
    }
    oContexte.fillStyle = `hsl(${oBoutonRejouer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonRejouer.x, oBoutonRejouer.y, oBoutonRejouer.largeur, oBoutonRejouer.hauteur);
    oContexte.fillStyle = "#ffffffff";
    oContexte.font = "20px botak";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonRejouer.texte,
        oBoutonRejouer.x + oBoutonRejouer.largeur / 2,
        oBoutonRejouer.y + oBoutonRejouer.hauteur / 2 + 8
    );
}
//---------------------------------------DÉTECTION CLICS------------------------------------------
function detecterClicObjet(curseurX, curseurY, objet) {
    if (curseurX >= objet.x && curseurX <= objet.x + objet.largeur && curseurY >= objet.y && curseurY <= objet.y + objet.hauteur) {
        return true;
    } else {
        return false;
    }
}

//-----------------------------------AFFICHER FIN----------------------------------------
function afficherFin() {}

window.addEventListener("load", initialiser);
