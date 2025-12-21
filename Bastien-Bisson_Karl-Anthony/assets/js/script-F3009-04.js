// Auteur: Bastien-Bisson, Karl-Anthony

// ===================================
// VARIABLES
// -----------------------------------
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false; // ENLEVE LE FLOU DANS LE PIXEL ART

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

// IMAGE DE FOND INTRO (4 Images)
let oImageFondIntro1 = new Image();
oImageFondIntro1.src = "assets/images/FondCiels/ciel1.png";

let oImageFondIntro2 = new Image();
oImageFondIntro2.src = "assets/images/FondCiels/ciel2.png";

let oImageFondIntro3 = new Image();
oImageFondIntro3.src = "assets/images/FondCiels/ciel3.png";

let oImageFondIntro4 = new Image();
oImageFondIntro4.src = "assets/images/FondCiels/ciel4.png";

// IMAGE BULLE DE TEXTE
let oImageBulleArrondi1 = new Image();
oImageBulleArrondi1.src = "assets/images/BullesDeTexte/Arrondi1.png";

// DIALOGUE
let texteEtat = "premierDialogue";

// BOUCLE JEU
let sEtat = "intro";

// VARIABLES TREMBLEMENT DE L'ECRAN
let minuteurTremblement = 0;
let forceTremblement = 20;
let echelleTremblement = 1.05; // ZOOM

// VARIABLE DELAI CLIC + APPARITION TEXTE "CLIQUEZ POUR CONTINUER" (SE FAIT EN MEME TEMPS)
let peutCliquer = false;
let delaiTexteClique = 0;
let delaiCommence = false;

// VITESSE D'ANIMATION
let compteur = 0;
let vitesseAnimation = 8; // PLUS GRAND LE NOMBRE LE PLUS LENT L'ANIMATION

let oImageCompagnon = {
  positionX: 0,
  positionY: 510,
  vitesse: 4, // CHAQUE 4 TICKS VA AU PROCHAIN FRAME DE L'ANIMATION, LE PLUS GRAND LE NOMBRE LE PLUS LENT L'ANIMATION
  taille: 3,
  frameActuelle: 0,
  ligneActuelle: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  totalFrames: 6,
  image: new Image(),
  src: "assets/images/CompagnonCorbeauSpritesheet/Walk.png",
};
oImageCompagnon.image.src = oImageCompagnon.src;

// ===================================
// FONCTIONS
// -----------------------------------

// INITIALISATION
function initialiser() {
  setInterval(boucleJeu, 1000 / 60); // 60 FPS

  // AFFICHER JEU

  oCanvasHTML.addEventListener("click", clicCanvas); // CLIQUE DE SOURIS

  // TODO: TOUCHE DE CLAVIER "KEYDOWN" "KEYUP"
}

// BOUCLE DE JEU
function boucleJeu() {
  if (sEtat == "intro") {
    afficherIntro();
  } else if (sEtat == "jeu") {
    // afficherJeu();
  } else {
    // afficherFin();
  }
}

function dessinerCompagnon() {
  // --- SPRITE SHEET ANIMATION --- //
  let sourceX = oImageCompagnon.frameActuelle * oImageCompagnon.largeurFrame;
  let sourceY = oImageCompagnon.ligneActuelle * oImageCompagnon.hauteurFrame;

  // DESSINER
  oContexte.drawImage(
    oImageCompagnon.image,
    sourceX,
    sourceY, // ENDROIT DECOUPER DANS LE SPRITESHEET
    oImageCompagnon.largeurFrame,
    oImageCompagnon.hauteurFrame, // TAILLE A DECOUPER
    oImageCompagnon.positionX,
    oImageCompagnon.positionY,
    oImageCompagnon.largeurFrame * oImageCompagnon.taille, // REDIMENSIONNEMENT X
    oImageCompagnon.hauteurFrame * oImageCompagnon.taille // REDIMENSIONNEMENT Y
  );
}

function animationCompagnon() {
  compteur++;

  if (compteur % vitesseAnimation === 0) {
    oImageCompagnon.frameActuelle++;
    if (oImageCompagnon.frameActuelle >= oImageCompagnon.totalFrames) {
      oImageCompagnon.frameActuelle = 0; // SI LE FRAME ACTUELLE EST PLUS HAUT QUE LE TOTAL REVENIR AU PREMIER
    }
  }

  oImageCompagnon.positionX += oImageCompagnon.vitesse;
}

function dessinerIntro() {
  // AFFICHER LE FOND + TITRE
  oContexte.drawImage(oImageFondIntro1, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro2, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro3, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro4, 0, 0, nLargeurCanvas, nHauteurCanvas);

  // TITRE PRINCIPALE
  oContexte.font = "120px SuperKindly";
  oContexte.fillStyle = "Black";
  oContexte.fillText("Mystère bestial", 120, 120);

  // SOUS-TITRE
  oContexte.font = "60px CantedFX";
  oContexte.fillText("Devine l'animal !", 280, 190);
}

function dessinerTexte() {
  if (oImageCompagnon.positionX >= nLargeurCanvas / 2 - 200) {
    // FAIRE COMPAGNON CORBEAU ARRETER AU MILIEU DE LECRAN
    oImageCompagnon.positionX = nLargeurCanvas / 2 - 200;
    oImageCompagnon.vitesse = 0;

    // COMMENCER LE DELAI
    if (!delaiCommence) {
      delaiTexteClique = 90; // 1.5 SECONDES
      peutCliquer = false;
      delaiCommence = true;
    }

    // DELAI DE CLICK + APPARITION TEXTE "CLIQUEZ POUR CONTINUER" APRES LE DELAI
    if (delaiTexteClique > 0) {
      delaiTexteClique--;
      if (delaiTexteClique == 0) {
        peutCliquer = true;
      }
    }

    if (
      oImageCompagnon.positionX == nLargeurCanvas / 2 - 200 &&
      oImageCompagnon.vitesse == 0
    ) {
      // AFFICHER LE TEXTE + BULLE DE TEXTE
      oContexte.drawImage(oImageBulleArrondi1, 450, 375, 330, 180);

      if (texteEtat == "premierDialogue") {
        oContexte.font = "23px HomerSimpson";
        oContexte.fillText("Je serai ton compagnon", 510, 445);
        oContexte.fillText("tout au long de ton aventure.", 490, 470);
      } else if (texteEtat == "deuxiemeDialogue") {
        oContexte.font = "23px HomerSimpson";
        oContexte.fillText("Voici ma première astuce :", 510, 445);
        oContexte.fillText("écris toujours les noms d'animaux", 480, 470);
        oContexte.fillText("au singulier.", 560, 495);
      } else if (texteEtat == "troisiemeDialogue") {
        oContexte.font = "40px KomikaTitle";
        oContexte.fillText("jamais au pluriel !", 480, 465);
      }

      // SI ON PEUT CLIQUER AFFICHE LE TEXTE
      if (peutCliquer) {
        oContexte.font = "40px SuperJoyful";
        oContexte.fillText("Cliquez pour continuer", 390, 750);
      }
    }
  }
}

function tremblementEcran() {
  if (minuteurTremblement > 0) {
    // RENDRE ALEATOIRE LES MOUVEMENTS DU TREMBLEMENT
    let tremblementX = (Math.random() - 0.5) * forceTremblement; // - 0.5 POUR QUE SE SOIT NEGATIF OU POSITIF ALEATOIREMENT
    let tremblementY = (Math.random() - 0.5) * forceTremblement;

    // === APPLIQUER LES CHANGEMENTS === //
    // BOUGER L'ORIGINE AU CENTRE POUR QUE L'EFFET S'EXECUTE AU CENTRE
    oContexte.translate(nLargeurCanvas / 2, nHauteurCanvas / 2);

    // TREMBLEMENT
    oContexte.translate(tremblementX, tremblementY);

    // ZOOM
    oContexte.scale(echelleTremblement, echelleTremblement);

    // REMETTRE L'ORIGINE A SA PLACE
    oContexte.translate(-nLargeurCanvas / 2, -nHauteurCanvas / 2);

    minuteurTremblement--;
  }
}

// ECOUTEURS D'EVENEMENT
function clicCanvas() {
  if (!peutCliquer) {
    // SI ON NE PEUT PAS CLIQUER N'EXECUTE PAS LE CODE
    return;
  }
  if (
    oImageCompagnon.positionX == nLargeurCanvas / 2 - 200 &&
    oImageCompagnon.vitesse == 0
  ) {
    if (texteEtat == "premierDialogue") {
      texteEtat = "deuxiemeDialogue";
    } else if (texteEtat == "deuxiemeDialogue") {
      texteEtat = "troisiemeDialogue";
      // FAIRE TREMBLER L'ECRAN
      minuteurTremblement = 30; // EN FRAMES 60 FPS = 0.25 SECONDES
    } else if (texteEtat == "troisiemeDialogue") {
      texteEtat = "troisiemeDialogue"; // POUR EMPECHER LE DIALOGUE DE REVENIR AU PREMIER
    } else {
      texteEtat = "premierDialogue";
    }

    // REINITIALISER LE DELAI
    peutCliquer = false;
    delaiTexteClique = 90; // JEU 60 FPS DONC 90 = 1.5 SECONDES
  }
}

// AFFICHAGE ELEMENT DE JEU
function afficherIntro() {
  // VIDER LE CANVAS
  oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);

  // SAUVEGARDER L'ETAT DU CANVAS
  oContexte.save();

  tremblementEcran();

  dessinerIntro();

  animationCompagnon();

  dessinerTexte();

  dessinerCompagnon();

  // REINITIALISER LE CANVAS
  oContexte.restore();
}

// CREER FONCTION afficherJeu

// CREER FONCTION afficherFin

window.addEventListener("load", initialiser);
