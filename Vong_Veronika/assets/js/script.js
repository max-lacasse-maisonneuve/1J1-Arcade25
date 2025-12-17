// VARIABLES
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false; //make everything crispy

let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let sEtatJeu = "intro"; // intro, game, end

let oBoutonDemarrer = {
    x: nLargeur / 2 - 100,
    y: nHauteur - 100,
    largeur: 200,
    hauteur: 50,
    texte: "DÉMARRER",
    teinte: 0,
};

let oImageBG = new Image();
oImageBG.src = "assets/images/temp-forest.png";

let sProblemeMath; //text equation
let nReponses = [];
let nPositionReponse; //position of answer
let nReponseJoueur;
let ifProblemeCalled = false;

let nVie = 5;
let nPointage = 0;

let oImageBGReponse = {
    x: 0,
    y: 0,
    largeur: 100,
    hauteur: 100,
    image: new Image(),
    src: "assets/images/temp-planche.png",
};

let oBoutonsReponse = []; //buttons of answers

// sound

let oSonMusique = new Audio();
oSonMusique.src = "assets/audio/forest-ambience.mp3";
oSonMusique.loop = true; //loop music
oSonMusique.volume = 0.6;

//------------------FONCTIONS INITIALISATION JEU------------------------

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    window.addEventListener("click", ClicCanvas);
    window.addEventListener("keydown", toucheEnfoncee);
    window.addEventListener("keyup", toucheRelachee);

    oSonMusique.currentTime = 0; //redemarrer le son
}

function toucheEnfoncee(evenement) {
    touche = evenement.key;
}
function toucheRelachee(evenement) {
    touche = null;
}

//--------------boucle de jeu
function boucleJeu() {
    oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);
    if (sEtatJeu == "intro") {
        afficherIntro();
    } else if (sEtatJeu == "jeu") {
        afficherJeu();
    } else if (sEtatJeu == "fin") {
        afficherFin();
    } else {
        console.error("Erreur: état du jeu inconnu");
    }
}

//-------ecouteur evenement
function ClicCanvas(evenement) {
    let curseurX = evenement.offsetX;
    let curseurY = evenement.offsetY;

    if (sEtatJeu == "intro" && detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true) {
        sEtatJeu = "jeu";
        oSonMusique.play(); //play sound
        melangerSolution();
    }

    if (sEtatJeu == "jeu" && detecterClicObjet(curseurX, curseurY, oBoutonsReponse[nPositionReponse]) == true) {
        nPointage += 1;
        ifProblemeCalled = false;
    } else if (sEtatJeu == "jeu" && detecterClicObjet(curseurX, curseurY, oImageBGReponse) == false) {
        //when didn't click right answer
        nVie -= 1;
    }
    if (
        sEtatJeu == "fin" &&
        detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true //restart game after finishing
    ) {
        sEtatJeu = "intro";
        nVie = 5;
        nPointage = 0;
    }
    // console.log(nPointage, nVie);
}

//-----------show game
function afficherIntro() {
    oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);
    //Title
    oContexte.fillStyle = "#F4B860";
    oContexte.font = "50px Woodstamp";
    oContexte.textAlign = "center";
    oContexte.fillText("Chasse", nLargeur / 2, 150);

    //instructions
    oContexte.fillStyle = "#242424ff";
    oContexte.font = "20px Typewriter";
    oContexte.textAlign = "center";
    oContexte.fillText("Trouver la bonne réponse de la question mathématique et clique sur cela.", nLargeur / 2, 200);

    //button
    oBoutonDemarrer.teinte++;

    if (oBoutonDemarrer.teinte >= 360) {
        oBoutonDemarrer.teinte = 0;
    }

    oContexte.fillStyle = `hsl(${oBoutonDemarrer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonDemarrer.x, oBoutonDemarrer.y, oBoutonDemarrer.largeur, oBoutonDemarrer.hauteur);
    oContexte.fillStyle = "#242424ff";
    oContexte.fillText(
        oBoutonDemarrer.texte,
        oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
        oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
    );
}

function afficherJeu() {
    oContexte.drawImage(oImageBG, 0, 0, nLargeur, nHauteur);

    if (ifProblemeCalled == false) {
        //to stop equation change infinitely
        problemeMath();

        // console.log(sProblemeMath, nSolution);
        ifProblemeCalled = true;
        oContexte.fillText(sProblemeMath, nLargeur / 2, nHauteur - 75);
        melangerSolution();
    } else if (ifProblemeCalled == true) {
        oContexte.fillText(sProblemeMath, nLargeur / 2, nHauteur - 75);
        afficherMelangerSolution();
    }

    if (nVie == 0 || nPointage == 10) {
        sEtatJeu = "fin";
    }
    dessinerUI();
}

function problemeMath() {
    //make the mathematical problemes
    let nSymboleMathRandom = Math.ceil(Math.random() * 4);

    for (let i = 0; i <= 2; i++) {
        let nReponse;
        let sSymbole;
        let nNumero1 = Math.ceil(Math.random() * 12);
        let nNumero2 = Math.ceil(Math.random() * 12);

        if (nSymboleMathRandom == 1) {
            nReponse = nNumero1 + nNumero2;
            sSymbole = "+";
        } else if (nSymboleMathRandom == 2) {
            nReponse = nNumero1 - nNumero2;
            sSymbole = "-";
        } else if (nSymboleMathRandom == 3) {
            nReponse = nNumero1 * nNumero2;
            sSymbole = "*";
        } else if (nSymboleMathRandom == 4) {
            nReponse = nNumero1 / nNumero2;
            nReponse = nReponse.toFixed(2);
            sSymbole = "/";
        }

        nReponses[i] = nReponse;

        if (i == 0) {
            sProblemeMath = `${nNumero1} ${sSymbole} ${nNumero2} = `;
        }
    }
}

function melangerSolution() {
    //mix the order of the answers
    nPositionReponse = Math.ceil(Math.random() * 3) - 1;

    for (let i = 0; i <= 2; i++) {
        let oBoutonReponse = {
            x: 60 + i * 270,
            y: 245,
            largeur: 100,
            hauteur: 100,
            image: new Image(),
        };
        oBoutonReponse.image.src = "assets/images/temp-planche.png";
        if (nPositionReponse == i) {
            oBoutonReponse.reponse = nReponses[0];
        } else {
            let nPositionMauvaiseReponse;
            if (nReponses.length == 2) {
                nPositionMauvaiseReponse = 1;
            } else {
                nPositionMauvaiseReponse = Math.ceil(Math.random()) + 1;
            }

            // console.log(nPositionMauvaiseReponse);
            // console.log(nReponses);

            oBoutonReponse.reponse = nReponses[nPositionMauvaiseReponse];
            nReponses.splice(nPositionMauvaiseReponse, 1);
        }

        oBoutonsReponse[i] = oBoutonReponse;
    }
    // console.log(oBoutonsReponse);
}

function afficherMelangerSolution() {
    for (let i = 0; i < oBoutonsReponse.length; i++) {
        oContexte.drawImage(oBoutonsReponse[i].image, oBoutonsReponse[i].x, oBoutonsReponse[i].y);
        oContexte.fillText(
            `${oBoutonsReponse[i].reponse}`,
            oBoutonsReponse[i].x + 50,
            oBoutonsReponse[i].y + oBoutonsReponse[i].hauteur / 2
        );
    }
}

function dessinerUI() {
    oContexte.fillText(`${nPointage} Pts`, 50, 80);
    oContexte.fillText(`${nVie} vie`, 50, 50);
    oContexte.fillStyle = "white";
}

function afficherFin() {
    if (nVie <= 0) {
        oContexte.fillText("Vous avez perdu... Il y eu des disparitions des enfants...", nLargeur / 2, nHauteur / 2);
    } else if (nPointage == 10) {
        oContexte.fillText("Vous avez gagné! Vous n'avez plus faim!", nLargeur / 2, nHauteur / 2);
    }
    oBoutonDemarrer.teinte++;

    if (oBoutonDemarrer.teinte >= 360) {
        oBoutonDemarrer.teinte = 0;
    }

    oContexte.fillStyle = `hsl(${oBoutonDemarrer.teinte}, 50%, 50%)`;
    oContexte.fillRect(oBoutonDemarrer.x, oBoutonDemarrer.y, oBoutonDemarrer.largeur, oBoutonDemarrer.hauteur);
    oContexte.fillStyle = "#242424ff";
    oContexte.fillText(
        oBoutonDemarrer.texte,
        oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
        oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
    );
}

//-------------------------------fonction utilitaires
function detecterClicObjet(curseurX, curseurY, objet) {
    if (curseurX >= objet.x && curseurX <= objet.x + objet.largeur && curseurY >= objet.y && curseurY <= objet.y + objet.hauteur) {
        return true;
    }
    return false;
}

window.addEventListener("load", initialiser);
