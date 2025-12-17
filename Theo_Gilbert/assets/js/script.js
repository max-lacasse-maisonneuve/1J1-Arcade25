let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false;

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let sEtatJeu = "intro";
let nPoints = 0;
let nBonneReponse = 0;
let nQuestionPosee = 1;
let nTempsPasse = 0;
let nQuestionMinuteur = 20;
let nQuestionRepondue = 1;
let nCarteMinuteur = 10;
let nQuestionMinuteurPause = false;

let oFond = {
    x: 0,
    y: 0,
    hauteur: oCanvasHTML.height,
    largeur: oCanvasHTML.width,
    vitesse: 3,
    image: new Image(),
    src: "assets/images/ModernCityBackground.png",
};
oFond.image.src = oFond.src;

let oimageTitre = {
    x: nLargeurCanvas / 2 - 220,
    y: nHauteurCanvas / 2 - 318,
    largeur: 436,
    hauteur: 516,
    image: new Image(),
    src: "assets/images/TitleScreenMapDos.png",
};
oimageTitre.image.src = oimageTitre.src;

let oimageTopFrame = {
    x: nLargeurCanvas / 2 - 538,
    y: nHauteurCanvas / 2 - 350,
    largeur: 1075,
    hauteur: 156,
    image: new Image(),
    src: "assets/images/TopFrameGame.png",
};
oimageTopFrame.image.src = oimageTopFrame.src;

let oimageBottomFrame = {
    x: nLargeurCanvas / 2 - 538,
    y: nHauteurCanvas / 2 + 140,
    largeur: 1075,
    hauteur: 156,
    image: new Image(),
    src: "assets/images/BottomFrameGame.png",
};
oimageBottomFrame.image.src = oimageBottomFrame.src;

let oimageBoutonContinuer = {
    x: nLargeurCanvas / 2 - 270,
    y: nHauteurCanvas / 2 + 150,
    largeur: 538,
    hauteur: 157,
    image: new Image(),
    src: "assets/images/Quizbutton.png",
};
oimageBoutonContinuer.image.src = oimageBoutonContinuer.src;

let oimagePetiteCarte = {
    x: nLargeurCanvas / 2 - 400,
    y: nHauteurCanvas / 2 + 125,
    largeur: 96,
    hauteur: 96,
    image: new Image(),
    src: "assets/images/Map_icon.png",
};
oimagePetiteCarte.image.src = oimagePetiteCarte.src;

let oimageCarteMetro = {
    x: nLargeurCanvas / 2,
    y: nHauteurCanvas / 2,
    largeur: 570,
    hauteur: 683,
    image: new Image(),
    src: "assets/images/MontrealMetroMap.jpg",
};
oimageCarteMetro.image.src = oimageCarteMetro.src;

let oimageSmollCross = {
    x: nLargeurCanvas / 2 + 300,
    y: nHauteurCanvas / 2 - 300,
    largeur: 111,
    hauteur: 107,
    image: new Image(),
    src: "assets/images/CrossAppleSauce.png",
};
oimageSmollCross.image.src = oimageSmollCross.src;

let tableauBoutonsChoixQuestion = [
    {
        x: nLargeurCanvas / 2 - 400,
        y: nHauteurCanvas / 2 - 150,
        hauteur: 112,
        largeur: 384,
        numero: 1,
        image: new Image(),
    },
    {
        x: nLargeurCanvas / 2 - 400,
        y: nHauteurCanvas / 2,
        hauteur: 112,
        largeur: 384,
        numero: 2,
        image: new Image(),
    },
    {
        x: nLargeurCanvas / 2 + 20,
        y: nHauteurCanvas / 2,
        hauteur: 112,
        largeur: 384,
        numero: 3,
        image: new Image(),
    },
    {
        x: nLargeurCanvas / 2 + 20,
        y: nHauteurCanvas / 2 - 150,
        hauteur: 112,
        largeur: 384,
        numero: 4,
        image: new Image(),
    },
];

// tableauBoutonsChoixQuestion.src = "assets/images/Quizbutton.png"

// tableauBoutonsChoixQuestion.images.src = tableauBoutonsChoixQuestion.src
// debugger

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    ChoisirQuestion();
    oCanvasHTML.addEventListener("click", clicCanvas);
}

function clicCanvas(evenement) {
    let PositionXCurseur = evenement.offsetX;
    let PositionYCurseur = evenement.offsetY;

    if (sEtatJeu == "choix Question" && nQuestionPosee == 1) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 2) {
        nBonneReponse = 4;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 3) {
        nBonneReponse = 3;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 4) {
        nBonneReponse = 3;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 5) {
        nBonneReponse = 1;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 6) {
        nBonneReponse = 4;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 7) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 8) {
        nBonneReponse = 1;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 9) {
        nBonneReponse = 4;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 10) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 11) {
        nBonneReponse = 3;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 12) {
        nBonneReponse = 3;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 13) {
        nBonneReponse = 1;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 14) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 15) {
        nBonneReponse = 4;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 16) {
        nBonneReponse = 1;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 17) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 18) {
        nBonneReponse = 4;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 19) {
        nBonneReponse = 1;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 20) {
        nBonneReponse = 3;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 21) {
        nBonneReponse = 2;
    }
    if (sEtatJeu == "choix Question" && nQuestionPosee == 22) {
        nBonneReponse = 4;
    }

    if (sEtatJeu == "choix Question") {
        for (let i = 0; i < tableauBoutonsChoixQuestion.length; i++) {
            let boutonQuestionCliquee = tableauBoutonsChoixQuestion[i];
            let collision = CollisionChoixQuestion(PositionXCurseur, PositionYCurseur, boutonQuestionCliquee);

            if (collision == true) {
                if (boutonQuestionCliquee.numero == nBonneReponse) {
                    // //console.log(boutonQuestionCliquee, "bonne reponse");
                    nPoints = nPoints + 25 + nQuestionMinuteur;
                    //console.log(nPoints)
                } else {
                    //console.log(boutonQuestionCliquee, "maubvaise reponse");
                }
                ChoisirQuestion();
                nQuestionRepondue = nQuestionRepondue + 1;
            }
        }
    }

    if (sEtatJeu == "intro") {
        let boutonJouerClique = zoneDuBoutonJouer(PositionXCurseur, PositionYCurseur, 500, 570, 265, 45);
        if (boutonJouerClique == true) {
            sEtatJeu = "règles";
        }
    } else if (sEtatJeu == "règles") {
        let boutonContinuerClique = zoneDuBoutonContinuer(PositionXCurseur, PositionYCurseur, 360, 502, 538, 157);
        if (boutonContinuerClique == true) {
            sEtatJeu = "choix Question";
            ChoisirQuestion();
        }
    } else if (sEtatJeu == "Choix Question") {
        let petiteCarteCliquee = zoneDeLaPetiteCarte(PositionXCurseur, PositionYCurseur, 230, 476, 96, 96);
        if (petiteCarteCliquee == true) {
            CarteActivee();
        }
    } else if (nQuestionRepondue > 6) {
        sEtatJeu = "score";
        let boutonRejouerClique = zoneDuBoutonRejouer(PositionXCurseur, PositionYCurseur, 360, 502, 538, 157);
        if (boutonRejouerClique == true) {
            sEtatJeu = "intro";
            nPoints = 0;
            nBonneReponse = 0;
            nQuestionPosee = 1;
            nTempsPasse = 0;
            nQuestionMinuteur = 20;
            nQuestionRepondue = 1;
        }
    }
}

function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    dessinerFond();
    if (sEtatJeu == "intro") {
        dessinerÉcranTitre();
        //console.log("intro");
    } else if (sEtatJeu == "règles") {
        afficherRegle();
        //console.log("règles");
    } else if (sEtatJeu == "choix Question") {
        afficherChoixQuestion();
        AfficherQuestion();
        //console.log("choix Question");
    } else if (sEtatJeu == "score") {
        AfficherScore();
    }
}

function dessinerFond() {
    oFond.x += oFond.vitesse;
    if (oFond.x > nHauteurCanvas) {
        oFond.x = 0;
    }
    oContexte.drawImage(oFond.image, oFond.x, oFond.y, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oFond.image, oFond.x - nLargeurCanvas, oFond.y, nLargeurCanvas, nHauteurCanvas);
}

function dessinerÉcranTitre() {
    oContexte.fillStyle = "Indigo";
    oContexte.fillRect(395, 560, 465, -540);

    oContexte.drawImage(oimageTitre.image, oimageTitre.x, oimageTitre.y, oimageTitre.largeur, oimageTitre.hauteur);

    oContexte.fillStyle = "darkturquoise";
    oContexte.fillRect(500, 570, 265, 45);

    oContexte.textAlign = "center";
    oContexte.font = "50px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText("Démarrer", nLargeurCanvas / 2, nHauteurCanvas / 2 + 250);
}

function zoneDuBoutonJouer(PositionXCurseur, PositionYCurseur, PositionXObjet, PositionYObjet, LargeurObjet, HauteurObjet) {
    let zoneDuBoutonJouer = false;

    if (
        PositionXCurseur > PositionXObjet &&
        PositionYCurseur > PositionYObjet &&
        PositionXCurseur < PositionXObjet + LargeurObjet &&
        PositionYCurseur < PositionYObjet + HauteurObjet
    ) {
        zoneDuBoutonJouer = true;
    }

    return zoneDuBoutonJouer;
}

function afficherRegle() {
    oContexte.fillStyle = "darkblue";
    oContexte.fillRect(145, 590, 969, -530);

    oContexte.drawImage(oimageTopFrame.image, oimageTopFrame.x, oimageTopFrame.y, oimageTopFrame.largeur, oimageTopFrame.hauteur);

    oContexte.drawImage(
        oimageBottomFrame.image,
        oimageBottomFrame.x,
        oimageBottomFrame.y,
        oimageBottomFrame.largeur,
        oimageBottomFrame.hauteur
    );

    oContexte.drawImage(
        oimageBoutonContinuer.image,
        oimageBoutonContinuer.x,
        oimageBoutonContinuer.y,
        oimageBoutonContinuer.largeur,
        oimageBoutonContinuer.hauteur
    );

    oContexte.textAlign = "left";
    oContexte.font = "65px Energize";
    oContexte.fillStyle = "darkblue";
    oContexte.fillText("Continuer", nLargeurCanvas / 2 - 185, nHauteurCanvas / 2 + 240);
    oContexte.textAlign = "left";
    oContexte.font = "50px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText("Règlements", nLargeurCanvas / 2 - 470, nHauteurCanvas / 2 - 230);
    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("Ton but est de récolter le plus de points possible", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 200);

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("Tu pourras répondre à 6 question au total", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 170);

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("et tu auras 20 secondes pour répondre à chaque question.", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 150);
    oContexte.textAlign = "left";
    oContexte.font = "10px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("En plus c'est plus lent que des vraie secondes, je pense.", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 140);

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText(
        "Une bonne réponse donne 25 points en plus de te donner autant de points",
        nLargeurCanvas / 2 - 450,
        nHauteurCanvas / 2 - 110
    );

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("qu'il te restait de temps pour répondre.", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 90);

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("Mais quand tu te trompe, tu ne perds pas de points", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 60);

    oContexte.textAlign = "left";
    oContexte.font = "20px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("parce que je suis gentil :)", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 40);

    oContexte.textAlign = "left";
    oContexte.font = "10px Bahnschrift";
    oContexte.fillStyle = "white";
    oContexte.fillText("et parce que j'ai pitié de vous", nLargeurCanvas / 2 - 450, nHauteurCanvas / 2 - 30);
}

function zoneDuBoutonContinuer(PositionXCurseur, PositionYCurseur, PositionXObjet, PositionYObjet, LargeurObjet, HauteurObjet) {
    let zoneDuBoutonContinuer = false;
    if (
        PositionXCurseur > PositionXObjet &&
        PositionYCurseur > PositionYObjet &&
        PositionXCurseur < PositionXObjet + LargeurObjet &&
        PositionYCurseur < PositionYObjet + HauteurObjet
    ) {
        zoneDuBoutonContinuer = true;
    }

    return zoneDuBoutonContinuer;
}

function zoneDeLaPetiteCarte(PositionXCurseur, PositionYCurseur, PositionXObjet, PositionYObjet, LargeurObjet, HauteurObjet) {
    let zoneDeLaPetiteCarte = false;
    if (
        PositionXCurseur > PositionXObjet &&
        PositionYCurseur > PositionYObjet &&
        PositionXCurseur < PositionXObjet + LargeurObjet &&
        PositionYCurseur < PositionYObjet + HauteurObjet
    ) {
        zoneDeLaPetiteCarte = true;
    }

    return zoneDeLaPetiteCarte;
}

function CarteActivee() {
    //console.log ("carteActive");
    if (nTempsPasse % 60 == 0) {
        nCarteMinuteur--;
    }
    //console.log(nTempsPasse, nCarteMinuteur);

    oContexte.font = "50px Energize";
    oContexte.fillStyle = "orange";
    oContexte.fillText(" temps de la carte:" + nQuestionMinuteur, nLargeurCanvas / 2, nHauteurCanvas / 2 - 200);

    oContexte.drawImage(oimageCarteMetro.image, oimageCarteMetro.x, oimageCarteMetro.y, oimageCarteMetro.largeur, oimageCarteMetro.hauteur);

    oContexte.drawImage(oimageSmollCross.image, oimageSmollCross.x, oimageSmollCross.y, oimageSmollCross.largeur, oimageSmollCross.hauteur);
}

function afficherChoixQuestion() {
    nTempsPasse++;
    if (nTempsPasse % 60 == 0 && nQuestionMinuteurPause == false) {
        nQuestionMinuteur--;
    }
    //console.log(nTempsPasse, nQuestionMinuteur);

    oContexte.fillStyle = "darkblue";
    oContexte.fillRect(145, 590, 969, -530);

    oContexte.drawImage(oimageTopFrame.image, oimageTopFrame.x, oimageTopFrame.y, oimageTopFrame.largeur, oimageTopFrame.hauteur);

    oContexte.drawImage(
        oimageBottomFrame.image,
        oimageBottomFrame.x,
        oimageBottomFrame.y,
        oimageBottomFrame.largeur,
        oimageBottomFrame.hauteur
    );

    for (let i = 0; i < tableauBoutonsChoixQuestion.length; i++) {
        let element = tableauBoutonsChoixQuestion[i];
        element.image.src = "assets/images/Quizbutton.png";
        oContexte.drawImage(element.image, element.x, element.y, element.largeur, element.hauteur);
    }

    oContexte.drawImage(
        oimagePetiteCarte.image,
        oimagePetiteCarte.x,
        oimagePetiteCarte.y,
        oimagePetiteCarte.largeur,
        oimagePetiteCarte.hauteur
    );

    oContexte.font = "30px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText(" temps restant:" + nQuestionMinuteur, nLargeurCanvas / 2 + 275, 80);

    oContexte.font = "30px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText(" points obtenu:" + nPoints, nLargeurCanvas / 2 - 290, 80);

    oContexte.font = "30px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText(" Question" + nQuestionRepondue + "/6", nLargeurCanvas / 2 + 320, 580);
    oContexte.font = "30px Energize";

    if (nQuestionMinuteur == -0) {
        tempsEcoulee();
    }
}

function tempsEcoulee() {
    //console.log ("tempsEcoulee")
    ChoisirQuestion();
    nQuestionRepondue = nQuestionRepondue + 1;
}

function CollisionChoixQuestion(PositionXCurseur, PositionYCurseur, objet) {
    if (
        PositionXCurseur >= objet.x &&
        PositionXCurseur <= objet.x + objet.largeur &&
        PositionYCurseur >= objet.y &&
        PositionYCurseur <= objet.y + objet.hauteur
    ) {
        return true;
    }
    return false;
}

function ChoisirQuestion() {
    if (sEtatJeu == "choix Question") {
        // nQuestionPosee = 22
        nQuestionPosee = Math.floor(Math.random() * 22) + 1;
        //console.log(nQuestionPosee);
        nQuestionMinuteur = 20;
    }
}

function AfficherQuestion() {
    if (nQuestionPosee == 1) {
        //console.log ("Question 1")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel Station est la plus proche", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("du chalet du Mont royal?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("McGill", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Peel", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Mont-Royal", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Laurier", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 2) {
        //console.log ("Question 2")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel station est la plus proche", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("du Centre Bell?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Peel", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Guy Concordia", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Lucien L'allié", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Bonaventure", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 3) {
        //console.log ("Question 3")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel station est la plus proche", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("du Marché Jean-Talon", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("De Castenau", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Fabre", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Outremont", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Jean-Talon est", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 4) {
        //console.log ("Question 4")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel station est la plus proche", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("du Stade Olympique", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Viau", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("L'assomption", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Sherbrooke", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Pie-IX", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 5) {
        //console.log ("Question 5")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel est la station la plus proche de", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "40px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("la Basilique Notre-Dame de Montréal?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);

        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Place d'arme", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Champ de Mars", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Place des Arts", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Laurent", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 6) {
        //console.log ("Question 6")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces stations n'est pas", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("sur l'île de montréal", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Jolicoeur", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Angrignon", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Cartier", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte Vertu", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 7) {
        //console.log ("Question 7")
        oContexte.textAlign = "center";
        oContexte.font = "47px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces stations ne connecte", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("pas plusieurs lignes de métro", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Lionel Groulx", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Outremont", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Jean Talon", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 8) {
        //console.log ("Question 8")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces stations est", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("sur la ligne verte", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Langelier", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Acadie", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Mont Royal", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("George Vanier", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 9) {
        //console.log ("Question 9")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces stations est", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("sur la ligne bleue", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Joliette", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Namur", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte des neiges", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Vendôme", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 10) {
        //console.log ("Question 10")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces stations est", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("sur la ligne orange", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Université de", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montréal", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Place St-Henry", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Parc", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Charlevoix", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 11) {
        //console.log ("Question 11")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Laquelle de ces rues n'a pas", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("de station d'autobus", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Boulevard", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Henry Bourassa", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Avenue", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Sherbrooke", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Rue Notre Dame", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Boulevard", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-laurent", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 12) {
        //console.log ("Question 12")
        oContexte.textAlign = "center";
        oContexte.font = "45 px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Pour aller de la station McGil là la station Cardillac", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Dans quels directions doit on aller?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte-vertu, puis", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré-Beaugand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Angrignon, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré-Beaugrand", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 13) {
        //console.log ("Question 13")
        oContexte.textAlign = "center";
        oContexte.font = "45px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quels directions doit ont prendre pour", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "36px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("aller de la station Plamondon à la station Verdun?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Angrignon", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré-Beaugrand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "26px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Angrignon", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "26px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré-Beaugrand", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 14) {
        //console.log ("Question 14")
        oContexte.textAlign = "center";
        oContexte.font = "42px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quels directions prendre pour aller de la", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "29px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("station Charlevoix à la station Édouard-Monpetit rapidement?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30 px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Snowdon", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "25px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel, côte vertu", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Honoré-Beaugrand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "27 px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-michel, Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "25 px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Honoré-Beaugrand", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon, Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Angrignon", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 15) {
        //console.log ("Question 15")
        oContexte.textAlign = "center";
        oContexte.font = "42px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel directions prendre pour aller de la", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        //console.log ("Question 15")
        oContexte.textAlign = "center";
        oContexte.font = "37px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("station Parc à la station Pie-IX rapidement", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "21px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel, Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Honoré Beaugrand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon, Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Honoré-Beaugrand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "23px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-michel, côte vertu", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Honoré Beaugrand", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "22px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon, Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Angrignon", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 16) {
        //console.log ("Question 16")
        oContexte.textAlign = "center";
        oContexte.font = "42px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel directions prendre pour aller de la", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "26px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(
            "station Uiversité de Montréal à la station de la concorde rapidement?",
            nLargeurCanvas / 2,
            nHauteurCanvas / 2 - 165
        );
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel, puis", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel, puis", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("St-Michel", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 17) {
        //console.log ("Question 17")
        oContexte.textAlign = "center";
        oContexte.font = "42px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel directions prendre pour aller de la", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "47px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("station Viau à la station Vendôme", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré-Beaugrand", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, côte vertu", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Angrignon puis,", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("côte vertu", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Snowdon, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("côte vertu", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Angrignon, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 18) {
        //console.log ("Question 18")
        oContexte.textAlign = "center";
        oContexte.font = "42px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Quel directions prendre pour aller de la", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "41px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Station Jarry à la station Jean Drapeau?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("puis, Snowdon", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "18px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Montmorency puis, Longueil", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "20px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("université de sherbrooke", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "20px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu puis Longueil", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "19px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("université de sherbrooke", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "25px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Côte vertu, puis", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Honoré Beaugrand", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 19) {
        //console.log ("Question 19")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Lequel de ces groupes de gens", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("n'ont pas priorité aux sièges?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Jeunes Enfants", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Femmes", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Enceintes", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Handicapées", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Personnes Agées", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 20) {
        //console.log ("Question 20")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Comment savoir si un autobus a une", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        //console.log ("Question 20")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("rampe d'accès pour chaise roulante?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Ils en ont", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("tous une", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "26px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Tu dois demander", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("au chauffeur", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "25px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Il y'a une appli qui", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "25px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("permet de le savoir", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "25px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Ils ont un symbole à", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("l'extérieur du bus", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    } else if (nQuestionPosee == 21) {
        //console.log ("Question 21")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("À partir de quel âge les frais", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "45px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("d'émission de la carte OPUS s'apliquent", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("13 ans", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("15 ans", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 60);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("18 ans", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 90);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("16 ans", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 60);
    } else if (nQuestionPosee == 22) {
        //console.log ("Question 22")
        oContexte.textAlign = "center";
        oContexte.font = "50px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Lequel de ces groupes de gens", nLargeurCanvas / 2, nHauteurCanvas / 2 - 195);
        oContexte.textAlign = "center";
        oContexte.font = "45px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("n'a pas de rabais sur leur carte OPUS?", nLargeurCanvas / 2, nHauteurCanvas / 2 - 165);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Les moins de", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("18 ans", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Les étudiants", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("à temps plein", nLargeurCanvas / 2 - 210, nHauteurCanvas / 2 + 68);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Les Blessées", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 98);
        oContexte.textAlign = "center";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("gravements", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 - 81);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Les personnes", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 51);
        oContexte.textAlign = "center";
        oContexte.font = "27px Energize";
        oContexte.fillStyle = "darkblue";
        oContexte.fillText("Agées", nLargeurCanvas / 2 + 210, nHauteurCanvas / 2 + 68);
    }
}

function AfficherScore() {
    oContexte.fillStyle = "darkblue";
    oContexte.fillRect(145, 590, 969, -530);

    oContexte.drawImage(oimageTopFrame.image, oimageTopFrame.x, oimageTopFrame.y, oimageTopFrame.largeur, oimageTopFrame.hauteur);

    oContexte.drawImage(
        oimageBottomFrame.image,
        oimageBottomFrame.x,
        oimageBottomFrame.y,
        oimageBottomFrame.largeur,
        oimageBottomFrame.hauteur
    );

    oContexte.drawImage(
        oimageBoutonContinuer.image,
        oimageBoutonContinuer.x,
        oimageBoutonContinuer.y,
        oimageBoutonContinuer.largeur,
        oimageBoutonContinuer.hauteur
    );

    oContexte.textAlign = "left";
    oContexte.font = "65px Energize";
    oContexte.fillStyle = "darkblue";
    oContexte.fillText("Rejouer", nLargeurCanvas / 2 - 135, nHauteurCanvas / 2 + 240);

    oContexte.textAlign = "left";
    oContexte.font = "50px Energize";
    oContexte.fillStyle = "white";
    oContexte.fillText("Tu as remporté " + nPoints + " points", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 120);

    if (nPoints < 40) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("En gros tu es nul", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 140);
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "turquoise";
        oContexte.fillText("L", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "turquoise";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 39 && nPoints < 75) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText("Donc tu es une personne normale", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 140);
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "lightgreen";
        oContexte.fillText("D", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "lightgreen";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 74 && nPoints < 100) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(
            " T'as tu choisi au hasard? Parce que moi oui et je suis ici.",
            nLargeurCanvas / 2 - 325,
            nHauteurCanvas / 2 + 140
        );
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "yellow";
        oContexte.fillText("C", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "yellow";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 99 && nPoints < 130) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(" Ok, j'ai pas de message interessant ici, t'es juste bon.", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 140);
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "orange";
        oContexte.fillText("B", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "orange";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 129 && nPoints < 160) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(" T'en connais surprenamment, est ce que ça va?", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 140);
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "red";
        oContexte.fillText("A", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "red";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 159 && nPoints < 210) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(" Pfffff... Showoff.", nLargeurCanvas / 2 - 325, nHauteurCanvas / 2 + 140);
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "magenta";
        oContexte.fillText("S", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "magenta";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    } else if (nPoints > 209) {
        oContexte.textAlign = "left";
        oContexte.font = "30px Energize";
        oContexte.fillStyle = "white";
        oContexte.fillText(
            " Parfait, comme moi Théo, d'ou viens le ranc T. Veux tu m'épouser?",
            nLargeurCanvas / 2 - 325,
            nHauteurCanvas / 2 + 140
        );
        oContexte.textAlign = "left";
        oContexte.font = "500px Energize";
        oContexte.fillStyle = "gold";
        oContexte.fillText("T", nLargeurCanvas / 2 + 120, nHauteurCanvas / 2);
        oContexte.textAlign = "left";
        oContexte.font = "200px Energize";
        oContexte.fillStyle = "gold";
        oContexte.fillText("Ranc", nLargeurCanvas / 2 - 370, nHauteurCanvas / 2);
    }
}

function zoneDuBoutonRejouer(PositionXCurseur, PositionYCurseur, PositionXObjet, PositionYObjet, LargeurObjet, HauteurObjet) {
    let zoneDuBoutonRejouer = false;
    if (
        PositionXCurseur > PositionXObjet &&
        PositionYCurseur > PositionYObjet &&
        PositionXCurseur < PositionXObjet + LargeurObjet &&
        PositionYCurseur < PositionYObjet + HauteurObjet
    ) {
        zoneDuBoutonRejouer = true;
    }
    return zoneDuBoutonRejouer;
}

window.addEventListener("load", initialiser);
