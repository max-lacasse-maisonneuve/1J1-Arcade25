const oCanvasHTML = document.querySelector("canvas");
const oContexte = oCanvasHTML.getContext("2d");

const nLargeur = oCanvasHTML.width;
const nHauteur = oCanvasHTML.height;

let hauteurMot = 0;
let vitesse = 2;

let nChances = 5;
let sEtat = "jeu";
let motADeviner = "combattre";

let mots = [
    "rouler",
    "boxe",
    "art",
    "martial",
    "travail",
    "matin",
    "soirée",
    "esprit",
    "midi",
    "déjeuner",
    "frapper",
    "manger",
    "initialisation",
    "clavier",
    "dessiner",
    "cinq",
    "sushi",
    "protéine",
    "retour",
    "heureux",
    "anticonstitutionnellement",
    "aminométhylpyrimidinylhydroxyéthylméthythiazolium",
    "hudra",
];
let aLettresEssayees = [];
let joueur = {
    x: 0,
};

let progression = 0; // 0 = premier mot, 1 = deuxième, 2 = troisième, 3 = mot final

function choisirNouveauMot() {
    if (progression < 3) {
        // Choisir un mot aléatoire SANS l’énorme mot final
        let listeFiltree = mots.filter((m) => m !== "aminométhylpyrimidinylhydroxyéthylméthythiazolium");
        motADeviner = listeFiltree[Math.floor(Math.random() * listeFiltree.length)];
    } else {
        // 4e mot obligatoire
        motADeviner = "aminométhylpyrimidinylhydroxyéthylméthythiazolium";
    }

    // Reset des lettres et chances
    aLettresEssayees = [];
    nChances = 10;
}

//let Graffiti_Artist_1 = {
//x: 0,
//y: 0,
//hauteur: 100,
//largeur: 100,
//frameX: 0,
//frameY: 0,
//frameLargeur: 32,
//frameHauteur: 32,
//frameMax: 5,
//image: new Image(),
//src: "assets/images/Graffiti_Artist_1",
//};

//oContexte.drawImage(
//Graffiti_Artist_1.image,
//Graffiti_Artist_1.frameX * Graffiti_Artist_1.frameLargeur,
//Graffiti_Artist_1.frameY,
//Graffiti_Artist_1.frameLargeur,
//Graffiti_Artist_1.frameHauteur,
//Graffiti_Artist_1.x,
//Graffiti_Artist_1.y,
//Graffiti_Artist_1.largeur,
//Graffiti_Artist_1.hauteur
//);
//oContexte.restore();

let sEtatJeu = "intro";

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    choisirNouveauMot();
    window.addEventListener("keydown", onToucheEnfoncee);
    window.addEventListener("keyup", onToucheRelachee);
    oCanvasHTML.addEventListener("click", clicCanvas);
}

function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeur, nHauteur);

    oContexte.fillStyle = "black";
    oContexte.font = "50px Tokyo";
    oContexte.textAlign = "left";

    if (sEtatJeu == "intro") {
        afficherIntro();
    } else if (sEtatJeu == "jeu") {
        afficherJeu();
        dessinerLettresEssayees();
        dessinerMotADeviner();
        dessinerUI();
    } else if (sEtatJeu == "fin") {
        afficherFin();
    }
}

function dessinerLettresEssayees() {
    let essais = "";

    for (let i = 0; i < aLettresEssayees.length; i++) {
        let lettre = aLettresEssayees[i];
        essais += lettre;
    }

    oContexte.fillStyle = "white";
    oContexte.font = "30px Arial";
    oContexte.textAlign = "center";

    oContexte.fillText(essais, nLargeur / 2, nHauteur / 2);
}

function dessinerMotADeviner() {
    let mot = "";
    for (let i = 0; i < motADeviner.length; i++) {
        let lettre = motADeviner[i];

        if (aLettresEssayees.includes(lettre) == true) {
            mot += lettre;
        } else {
            mot += "_ ";
        }
    }

    if (mot === motADeviner) {
        progression++;

        if (progression >= 4) {
            // Le joueur a fini les 3 mots + le final
            sEtatJeu = "fin";
        } else {
            // On passe au mot suivant
            choisirNouveauMot();
        }
    }

    oContexte.fillStyle = "lightgrey";
    oContexte.font = "30px Arial";
    oContexte.textAlign = "center";

    oContexte.fillText(mot, nLargeur / 2, nHauteur / 2 + 60);
}

function dessinerUI() {
    oContexte.fillStyle = "white";
    oContexte.font = "20px Arial";
    oContexte.textAlign = "right";

    oContexte.fillText(`${nChances} chances`, nLargeur - 60, 60);
}

function clicCanvas() {
    if (sEtatJeu == "intro") {
        sEtatJeu = "jeu";
    } else if (sEtatJeu == "jeu") {
        sEtat = "fin";
    } else if (sEtat == "fin") {
        sEtat = "intro";
    }
}
function afficherIntro() {
    oContexte.fillStyle = "grey";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);
    oContexte.fillStyle = "black";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.fillStyle = "grey";
    oContexte.textAlign = "center";
    oContexte.fillText(`Le tagger pendue. Cliquer pour commencer.`, nLargeur / 2, hauteurMot);

    hauteurMot += vitesse;
    if (hauteurMot == 0) {
        hauteurMot += vitesse;
    }
    if (hauteurMot == 200) {
        hauteurMot = 200;
        vitesse = 0;
    }
}

function afficherJeu() {
    oContexte.fillStyle = "grey";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.fillStyle = "lightgrey";
    oContexte.textAlign = "center";
    if (progression == 0) {
        oContexte.fillStyle = "lightgrey";
        oContexte.textAlign = "center";
        oContexte.fillText(`premier mot à trouver`, nLargeur / 2, nHauteur / 3);
    } else if (progression == 1) {
        oContexte.fillStyle = "lightgrey";
        oContexte.textAlign = "center";
        oContexte.fillText(`deuxième mot à trouver`, nLargeur / 2, nHauteur / 3);
    } else if (progression == 2) {
        oContexte.fillStyle = "lightgrey";
        oContexte.textAlign = "center";
        oContexte.fillText(`troisième mot à trouver`, nLargeur / 2, nHauteur / 3);
    } else if (progression == 3) {
        oContexte.fillStyle = "lightgrey";
        oContexte.textAlign = "center";
        oContexte.fillText(`dernier mot à trouver`, nLargeur / 2, nHauteur / 3);
    }

    oContexte.fillStyle = "black";
    oContexte.textAlign = "center";
    oContexte.fillText(`Trouver le bon mot. Sinon...`, nLargeur / 2, nHauteur / 5);
}

function afficherFin() {
    oContexte.fillStyle = "grey";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.fillStyle = "black";
    oContexte.textAlign = "center";
    oContexte.fillText(`Bien joué...`, nLargeur / 2, nHauteur / 5);
    oContexte.fillText(`Vous méritez de vivre dans notre société.`, nLargeur / 2, nHauteur / 3);
}

function onToucheEnfoncee(evenement) {}

function onToucheRelachee(evenement) {
    let touche = evenement.key;

    if (touche.length == 1 && aLettresEssayees.includes(touche) == false) {
        aLettresEssayees.push(touche);
        if (motADeviner.includes(touche) == false) {
            nChances -= 1;
        }

        if (nChances <= 0) {
            // Le joueur doit recommencer depuis le début
            progression = 0;
            choisirNouveauMot();
        }
    }
}

window.addEventListener("load", initialiser);
