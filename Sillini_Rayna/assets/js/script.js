// === Variables
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nLargeurCanvas = oCanvasHTML.width;
let nHauteurCanvas = oCanvasHTML.height;
let centreX = nLargeurCanvas / 2;

let sEtat = "menu";

let score = 0;
let nbErreurs = 0;

let sEquation = "";
let nBonneReponse = 0;
let sReponseJoueur = "";
let sOperation = "addition";
let nTempsMax = 4000;
let nDebutQuestion = 0;

let nbColonnes = 4;
let nbRangees = 19;

let largeurFrame = 0;
let hauteurFrame = 0;
let largeurFrameAdverse = 0;
let hauteurFrameAdverse = 0;

let frameActuelle = 0;
let ligneAnimation = 3;

let delaiAnimation = 8;

let estRalenti = false;
let tempsRalenti = 0;
let dureeRalenti = 800;

let oCheval = {
  x: 50,
  y: 260,
  frame: 0,
  vitesse: 2,
  compteurAnimation: 0,
  image: new Image(),
};
oCheval.image.src = "assets/images/cheval.png";
oCheval.image.onload = function () {
  largeurFrame = oCheval.image.width / nbColonnes;
  hauteurFrame = oCheval.image.height / nbRangees;
};

let oChevalAdverse = {
  x: 50,
  y: 360,
  frame: 0,
  vitesse: 2.2,
  compteurAnimation: 0,
  image: new Image(),
};
oChevalAdverse.image.src = "assets/images/chevalAdversaire.png";
//images de fond
let images = {
  menu: new Image(),
  choix: new Image(),
  jeu: new Image(),
  aide: new Image(),
  victoire: new Image(),
  defaite: new Image(),
};
oChevalAdverse.image.onload = function () {
  largeurFrameAdverse = oChevalAdverse.image.width / nbColonnes;
  hauteurFrameAdverse = oChevalAdverse.image.height / nbRangees;
};

images.menu.src = "assets/images/fondMenu.png";
images.choix.src = "assets/images/fondChoix.png";
images.jeu.src = "assets/images/fondJeu.png";
images.aide.src = "assets/images/menuAide.png";
images.victoire.src = "assets/images/ecranVictoire.png";
images.defaite.src = "assets/images/ecranPerdu.png";

// sons
let sons = {
  bon: new Audio("assets/audios/Accept.wav"),
  erreur: new Audio("assets/audios/erreur.wav"),
  victoire: new Audio("assets/audios/sonGagner.wav"),
  defaite: new Audio("assets/audios/sonPerdu.wav"),
  musique: new Audio("assets/audios/musiqueDeFond.mp3"),
};

sons.musique.loop = true;
sons.musique.volume = 0.2;

// BOUTONS
function creerBouton(y, texte, largeur = 220) {
  return {
    x: centreX - largeur / 2,
    y: y,
    largeur: largeur,
    hauteur: 50,
    texte: texte,
  };
}

let oBoutonJouer = creerBouton(300, "COMMENCER");
let oBoutonAide = creerBouton(370, "COMMENT JOUER");

let oBoutonAddition = creerBouton(300, "ADDITION", 300);
let oBoutonSoustraction = creerBouton(360, "SOUSTRACTION", 300);
let oBoutonMultiplication = creerBouton(420, "MULTIPLICATION", 300);
let oBoutonDivision = creerBouton(480, "DIVISION", 300);

let oBoutonRetour = creerBouton(550, "RETOUR");
let oBoutonRejouer = creerBouton(610, "REJOUER");

// === INITIALISATION ===

function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  window.addEventListener("keydown", onClavier);
  oCanvasHTML.addEventListener("click", onClicCanvas);
}

// BOUCLE DE JEU
function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);

  if (sEtat == "menu") dessinerMenu();
  else if (sEtat == "choix") dessinerChoix();
  else if (sEtat == "aide") dessinerAide();
  else if (sEtat == "jeu") {
    miseAJourJeu();
    dessinerJeu();
  } else if (sEtat == "victoire") dessinerVictoire();
  else if (sEtat == "defaite") dessinerDefaite();
}

// CLAVIER
function onClavier(e) {
  if (sEtat != "jeu") return;

  if (e.key >= "0" && e.key <= "9") sReponseJoueur += e.key;
  if (e.key == "Backspace") sReponseJoueur = sReponseJoueur.slice(0, -1);
  if (e.key == "Enter") validerReponse();
}

// CLIC
function onClicCanvas(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  if (sEtat == "menu") {
    if (detecterClicObjet(x, y, oBoutonJouer)) sEtat = "choix";
    if (detecterClicObjet(x, y, oBoutonAide)) sEtat = "aide";
  } else if (sEtat == "choix") {
    if (detecterClicObjet(x, y, oBoutonAddition)) choisirOperation("addition");
    if (detecterClicObjet(x, y, oBoutonSoustraction))
      choisirOperation("soustraction");
    if (detecterClicObjet(x, y, oBoutonMultiplication))
      choisirOperation("multiplication");
    if (detecterClicObjet(x, y, oBoutonDivision)) choisirOperation("division");
    if (detecterClicObjet(x, y, oBoutonRetour)) sEtat = "menu";
  } else if (sEtat == "aide" || sEtat == "victoire" || sEtat == "defaite") {
    if (detecterClicObjet(x, y, oBoutonRetour)) sEtat = "menu";
    if (detecterClicObjet(x, y, oBoutonRejouer)) sEtat = "choix";
  }
}

// JEU

function choisirOperation(op) {
  sOperation = op;
  demarrerJeu();
}

function demarrerJeu() {
  score = 0;
  nbErreurs = 0;
  oCheval.x = 50;
  oChevalAdverse.x = 50;
  oCheval.vitesse = 2;
  sEtat = "jeu";
  sons.musique.currentTime = 0;
  sons.musique.play();
  genererEquation();
}

// ÉQUATIONS
function genererEquation() {
  let a = Math.floor(Math.random() * 10) + 1;
  let b = Math.floor(Math.random() * 10) + 1;

  if (sOperation == "addition") {
    sEquation = a + " + " + b;
    nBonneReponse = a + b;
  } else if (sOperation == "soustraction") {
    sEquation = a + " - " + b;
    nBonneReponse = a - b;
  } else if (sOperation == "multiplication") {
    sEquation = a + " × " + b;
    nBonneReponse = a * b;
  } else {
    nBonneReponse = a;
    sEquation = a * b + " ÷ " + b;
  }

  sReponseJoueur = "";
  nDebutQuestion = Date.now();
}

// VALIDATION
function validerReponse() {
  if (sEtat != "jeu") {
    return;
  }
  if (parseInt(sReponseJoueur) == nBonneReponse) {
    score++;
    oCheval.vitesse += 0.6;
    sons.bon.play();
  } else {
    nbErreurs++;
    oCheval.vitesse -= 0.6;
    if (oCheval.vitesse < 1) oCheval.vitesse = 1;

    // RALENTISSEMENT VISUEL
    estRalenti = true;
    tempsRalenti = Date.now();
    oCheval.x -= 15;
    sons.erreur.play();
  }
  if (nbErreurs >= 3) {
    sEtat = "defaite";
    sons.musique.pause();
    sons.defaite.play();
    return;
  } else {
    genererEquation();
  }
}
function animerSprite(cheval) {
  cheval.compteurAnimation++;

  if (cheval.compteurAnimation % delaiAnimation == 0) {
    cheval.frame++;

    if (cheval.frame >= nbColonnes) {
      cheval.frame = 0;
    }
  }
}
function miseAJourJeu() {
  if (sEtat != "jeu") return;

  animerSprite(oCheval);
  animerSprite(oChevalAdverse);

  oCheval.x += oCheval.vitesse;
  oChevalAdverse.x += oChevalAdverse.vitesse;

  // === VICTOIRE DU JOUEUR ===
  if (largeurFrame > 0 && oCheval.x + largeurFrame >= nLargeurCanvas) {
    sEtat = "victoire";
    sons.musique.pause();
    sons.victoire.play();
  }

  // === DÉFAITE DU JOUEUR ===
  if (
    largeurFrameAdverse > 0 &&
    oChevalAdverse.x + largeurFrameAdverse >= nLargeurCanvas
  ) {
    sEtat = "defaite";
    sons.musique.pause();
    sons.defaite.play();
  }
}

// AFFICHAGE
function dessinerJeu() {
  oContexte.drawImage(images.jeu, 0, 0, nLargeurCanvas, nHauteurCanvas);

  dessinerCheval(oCheval);
  dessinerChevalAdverse();

  if (estRalenti) {
    oContexte.fillStyle = "rgba(255, 105, 180, 0.25)";
    oContexte.fillRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  }

  oContexte.fillStyle = "#ffffffff";
  oContexte.font = "30px Arial";
  oContexte.textAlign = "left";
  oContexte.fillText("Score : " + score, 20, 30);
  oContexte.fillText("Erreurs : " + nbErreurs + " / 3", 20, 60);

  oContexte.textAlign = "center";
  oContexte.fillText("Équation : " + sEquation, centreX, 150);
  oContexte.fillText("Réponse : " + sReponseJoueur, centreX, 190);
}

function dessinerCheval(cheval) {
  oContexte.drawImage(
    cheval.image,
    cheval.frame * largeurFrame,
    ligneAnimation * hauteurFrame,
    largeurFrame,
    hauteurFrame,
    cheval.x,
    cheval.y,
    largeurFrame,
    hauteurFrame
  );
}
function dessinerChevalAdverse() {
  oContexte.drawImage(
    oChevalAdverse.image,
    oChevalAdverse.frame * largeurFrameAdverse,
    ligneAnimation * hauteurFrameAdverse, // 4e rangée
    largeurFrameAdverse,
    hauteurFrameAdverse,
    oChevalAdverse.x,
    oChevalAdverse.y,
    largeurFrameAdverse,
    hauteurFrameAdverse
  );
}

// MENUS
function dessinerMenu() {
  oContexte.drawImage(images.menu, 0, 0, nLargeurCanvas, nHauteurCanvas);

  dessinerBouton(oBoutonJouer);
  dessinerBouton(oBoutonAide);
}

function dessinerChoix() {
  oContexte.drawImage(images.choix, 0, 0, nLargeurCanvas, nHauteurCanvas);
  dessinerBouton(oBoutonAddition);
  dessinerBouton(oBoutonSoustraction);
  dessinerBouton(oBoutonMultiplication);
  dessinerBouton(oBoutonDivision);
  dessinerBouton(oBoutonRetour);
}

function dessinerAide() {
  oContexte.drawImage(images.aide, 0, 0, nLargeurCanvas, nHauteurCanvas);
  dessinerBouton(oBoutonRetour);
}

function dessinerVictoire() {
  oContexte.drawImage(images.victoire, 0, 0, nLargeurCanvas, nHauteurCanvas);
  dessinerBouton(oBoutonRejouer);
  dessinerBouton(oBoutonRetour);
}
function dessinerDefaite() {
  oContexte.drawImage(images.defaite, 0, 0, nLargeurCanvas, nHauteurCanvas);
  dessinerBouton(oBoutonRejouer);
  dessinerBouton(oBoutonRetour);
}

// UI
function dessinerBouton(b) {
  oContexte.fillStyle = "#f08ac2";
  oContexte.fillRect(b.x, b.y, b.largeur, b.hauteur);

  oContexte.strokeStyle = "#8c004a";
  oContexte.lineWidth = 3;
  oContexte.strokeRect(b.x, b.y, b.largeur, b.hauteur);

  oContexte.fillStyle = "#fff";
  oContexte.font = "bold 20px Arial";
  oContexte.textAlign = "center";
  oContexte.fillText(b.texte, b.x + b.largeur / 2, b.y + b.hauteur / 2 + 7);
}

// OUTILS
function detecterClicObjet(x, y, o) {
  return x >= o.x && x <= o.x + o.largeur && y >= o.y && y <= o.y + o.hauteur;
}

window.addEventListener("load", initialiser);
