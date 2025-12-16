//Les variables génèrals

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let sEtat = "intro";
//---------remplacera le intro, consigne, jeu, et fin

let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

//---------------------------------Images generales------------------------
let oIntro = new Image();
oIntro.src = "assets/images/Intro.png";

let oBrille = new Image();
oBrille.src = "assets/images/shine.png";

let oBouton = new Image();
oBouton.src = "assets/images/bouton.png";

let oImageBg = new Image();
oImageBg.src = "assets/images/bg1.png";

let oImageFlipper = new Image();
oImageFlipper.src = "assets/images/carte du dos.png";

let oImageConsigne = new Image();
oImageConsigne.src= "assets/images/Consigne_bg.png";

let oImageJeu = new Image();
oImageJeu.src= "assets/images/Jeu_bg.png";

let oImageFin = new Image();
oImageFin.src= "assets/images/Fin_bg.png";


//----------------------------------------Variables du Fonctionement du (JEU)---------------------------------

// tableau pour les cartes
let ImagesCartes = [
  "assets/images/Wizard Cercle.png",
  "assets/images/Wizard chapeau.png",
  "assets/images/Wizard Coeur.png",
  "assets/images/Wizard Etoille.png",
  "assets/images/Wizard Papillon.png",
  "assets/images/Wizard Triangle.png",
  "assets/images/Wizard Cercle.png",
  "assets/images/Wizard chapeau.png",
  "assets/images/Wizard Coeur.png",
  "assets/images/Wizard Etoille.png",
  "assets/images/Wizard Papillon.png",
  "assets/images/Wizard Triangle.png",
];

// Cartes choisies par le joueur, si c'est null, aucune carte n'a été choisie
let choixCarte1 = null;
let choixCarte2 = null;
let nbPairesTrouvees = 0;


//score

// sons du jeu
let sons = {
  paireTrouvee: new Audio("assets/audio/ding!.mp3"),
  finPartie: new Audio("assets/audio/win or fail music.mp3"),
  erreur: new Audio("assets/audio/card.mp3"),
};

//Monter ou dessendre le son
sons.paireTrouvee.volume = 0.8;
sons.finPartie.volume = 0.8;
sons.erreur.volume = 0.8;

//---------------------------// Les boutons pour, intro, consignes, jeu, et fin ---------------------
let oBoutonDemarrer = {
  x: 480,
  y: 300,
  largeur: 300,
  hauteur: 400,
};

let oBoutonConsigne = {
  x: 200,
  y: 280,
  largeur: 400,
  hauteur: 300,
};

let oBoutonRejouer = {
  x: 200,
  y: 280,
  largeur: 400,
  hauteur: 300,
};

/// -------------------------variables pour les animations (INTRO)---------------

let nBrilleOpaciter = 0;
let nBrilleDirection = 0.02;

//----------------------------------------------------------------------------------

///-------Fonction d'initialisation du jeu -----
function initialiser() {
  initialiserCartes();

  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", onClicCanvas);

  //les textes du menu
}
//------- Boucle de jeu-------------
function boucleJeu() {
  oContexte.clearRect(0, 0, nHauteur, nLargeur);

  if (sEtat == "intro") {
    dessinerIntro();
  } else if (sEtat == "consigne") {
    dessinerConsigne();
  } else if (sEtat == "jeu") {
    dessinerUI();
  } else if (sEtat == "fin") {
    dessinerFin();
  }
}

//--------------------------------------Dessiner (L'INTRO) -------------------------------
function dessinerIntro() {
  oContexte.clearRect(0, 0, nLargeur, nHauteur);
  //les images dans intro bg (en premier)
  oContexte.drawImage(oIntro, 0, 0, 800, 600);

  // Orb qui brille, l'opaciter controler
  nBrilleOpaciter += nBrilleDirection;

  if (nBrilleOpaciter >= 1) {
    nBrilleOpaciter = 1;
    nBrilleDirection *= -1;
  } else if (nBrilleOpaciter <= 0) {
    nBrilleOpaciter = 0;
    nBrilleDirection *= -1;
  }

  oContexte.globalAlpha = nBrilleOpaciter;
  oContexte.drawImage(oBrille, 0, 0, 800, 600);
  oContexte.globalAlpha = 1;

  // Boutons + mini titre "Jouer"
  oContexte.drawImage(oBouton, 480, 300, 400, 300);

  oContexte.fillStyle = "black";
  oContexte.font = "50px Pixel";
  oContexte.fillText(`Jouer!`, 680, 470, 400, 300);
  //titre (deuxieme)
  oContexte.font = "100px Pixel";
  oContexte.fillStyle = "white";
  oContexte.textAlign = "center";
  oContexte.fillText(`Gadalka`, 400, 140, 500, 200);
}
//----------------------------------------------Dessiner (Éran Consigne)----------------------------------------

function dessinerConsigne() {
  oContexte.drawImage(oImageConsigne, 0, 0, 800, 600);

  oContexte.fillStyle = "white";
  oContexte.textAlign = "center";

  //--------section histoire-------//
  oContexte.font = "25px Pixel";

  oContexte.fillText(`Après une longue nuit avec tes amis, au festival d'Halloween,`, 400, 60);
  oContexte.fillText(`tu décides de dépenser ton dernier billet pour une autre attraction :`, 400, 90);
  oContexte.fillText(`la Gadalka .`, 400, 120);

  oContexte.fillText(`Tu t'approches près d'une tente mauve avec des étoiles, `, 400, 160);
  oContexte.fillText(`un cartomancien est assis devant l'entrée.`, 400, 190);
  oContexte.fillText(`Son nom est Christopher, mais tout le monde l'appelle le Barbu !`, 400, 220);

  oContexte.fillText(`Tu décides de s'asseoir aussi. Le barbu place ses cartes devant toi.`, 400, 260);
  oContexte.fillText(`Il te propose de piger des cartes pour dire ton avenir. `, 400, 290);

  // --- Consigne ---
  oContexte.font = "30px Pixel";
  // oContexte.fillStyle = "black";
  oContexte.fillText(`Le Barbu a besoin de ton aide !`, 400, 340);
  oContexte.fillText(`Pour dire ton avenir, trouve tous les cartes!`, 400, 380);


  oContexte.drawImage(oBouton, 200, 280, 400, 300);
  oContexte.fillStyle = "black";
  oContexte.font = "32px Pixel";
  oContexte.fillText(`Commencer`, 400, 440);
}
///----------------------------------------------Dessiner (Jeu)--------------------------------------

function dessinerUI() {
  oContexte.drawImage(oImageJeu, 0, 0, 800, 600);

  oContexte.fillStyle = "white";
  oContexte.font = "30px Pixel";
  oContexte.fillText(`Paires trouvées : ${nbPairesTrouvees}`, 150, 40);

  dessinerCartes();
}

///---------------------------------------------Dessiner (Fin)------------------------------------------------
function dessinerFin() {
  oContexte.drawImage(oImageFin, 0, 0, 800, 600);

  oContexte.fillStyle = "black";
  oContexte.font = "30px Pixel";
  oContexte.textAlign = "center";
  oContexte.fillText(`Bravo ! Tu as trouvé toutes les paires!`, 400, 200);
  oContexte.font = "30px Pixel";
  oContexte.fillText(`Tu trouveras un billet de cinq dollars!`, 400, 300);
  
  oContexte.drawImage(oBouton, 200, 280, 400, 300);
  oContexte.fillStyle = "black";
  oContexte.font = "40px Pixel";
  oContexte.fillText(`Rejouer?`, 400, 440);

}

///================================================Code du Jeu================================================//

//----------------------------------------------Créer les cartes-----------------------------------------------------
let listeCartes = [];

function initialiserCartes() {

listeCartes = [];

let largeurCarte = 100;
let hauteurCarte = 130;

  for (let i = 0; i < ImagesCartes.length; i++) {
    let carte = {
      x: 0,
      y: 0,
      largeur: largeurCarte,
      hauteur: hauteurCarte,
      img: new Image(),
      valeur: ImagesCartes[i],
      estVisible: false,
    };
    carte.img.src = ImagesCartes[i];
    listeCartes.push(carte);
  }
  melangerCartes();
}

///------------------------------------------- Dessiner les Cartes-------------------------------------------

function dessinerCartes() {

  let decalageX = 20;
  let decalageY = 20;
  let margeX = 155;
  let margeY = 100;
  let nbColonnes = 4;
  
  for (let i = 0; i < listeCartes.length; i++) {
    let element = listeCartes[i];

    let colonne = i % 4;
    let rangee = Math.floor(i /  nbColonnes);

    element.x = colonne * (element.largeur + decalageX) + margeX;
    element.y = rangee * (element.hauteur + decalageY) + margeY;

    if (element.estVisible == true) {
      oContexte.drawImage(element.img, element.x, element.y, element.largeur, element.hauteur);
    } else {
      oContexte.drawImage(oImageFlipper, element.x, element.y, element.largeur, element.hauteur);
    }
  }
}

//---------------------------------------------Melange de cartes----------------------------------//
function melangerCartes(curseurX, curseurY) {

  listeCartes.sort(function () {
    let nombreAleatoire = Math.random() * 2 - 1;
    return nombreAleatoire;
  });

}

//----------------------------------------------Trouver les Cartes identiques--------------------------///

function trouverCarte(curseurX, curseurY) {
  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];

    if (detecterClicObjet(curseurX, curseurY, carte)) {
      return carte;
    }
  }
  return null;
}

//------------------------------------------------Valider la paire)----------------------------------------------//

function validerFin() {
  if (choixCarte1.img.src == choixCarte2.img.src) {
    //====== nbs de scores ===//
    nbPairesTrouvees += 1;
    sons.paireTrouvee.play("assets/audio/ding!.mp3");

    choixCarte1 = null;
    choixCarte2 = null;

      if (nbPairesTrouvees == listeCartes.length / 2) {

        setTimeout(function (){
          sEtat = "fin";
          sons.finPartie.play();
        },2000);
      }
  } else {
    sons.erreur.play("assets/audio/card.mp3");

    let tempCarte1 = choixCarte1;
    let tempCarte2 = choixCarte2;

    setTimeout(function () {
      tempCarte1.estVisible = false;
      tempCarte2.estVisible = false;

      choixCarte1 = null;
      choixCarte2 = null;
    }, 1000);
  }
}

////-------------------------------------Function d'ecouteur d'evenements (le clic)----------------------------

function onClicCanvas(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  if (
    sEtat == "intro" &&
    detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true
  ) {
    sEtat = "consigne";
    return;
  }

  if (
    sEtat == "consigne" &&
    detecterClicObjet(curseurX, curseurY, oBoutonConsigne) == true
  ) {
    sEtat = "jeu";
    return;
  }

  if (sEtat == "jeu") {
    //si une carte est clicqer
    for (let i = 0; i < listeCartes.length; i++) {
      let carte = listeCartes[i];

      let collision = detecterClicObjet(curseurX, curseurY, carte);
      if (collision == true) {
        if (choixCarte1 == null) {
          choixCarte1 = carte;
          carte.estVisible = true;
        } else if (
          choixCarte1 != null &&
          choixCarte2 == null &&
          choixCarte1 != carte
        ) {
          /// != different a la valeur null = il y a qql chose*/
          choixCarte2 = carte;
          carte.estVisible = true;
          validerFin();
        }
      }
    }
  } else if (
    sEtat == "fin" &&
    detecterClicObjet(curseurX, curseurY, oBoutonRejouer) == true
  ) {
    sEtat = "intro";
    nbPairesTrouvees = 0;
    initialiserCartes();
  }
}


// === FONCTIONS UTILITAIRES ===
function detecterClicObjet(curseurX, curseurY, objet) {
  //verifi si l'object est a l'interieur
  if (
    curseurX >= objet.x &&
    curseurX <= objet.x + objet.largeur &&
    curseurY >= objet.y &&
    curseurY <= objet.y + objet.hauteur
  ) {
    return true;
  }
  return false;
}

window.addEventListener("load", initialiser);
