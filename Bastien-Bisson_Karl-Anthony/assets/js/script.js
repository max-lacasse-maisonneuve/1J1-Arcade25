// Auteur: Bastien-Bisson, Karl-Anthony

// ===================================
// VARIABLES
// -----------------------------------
// ---- CANVAS ----
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false; // ENLEVE LE FLOU DANS LE PIXEL ART

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

oCanvasHTML.tabIndex = 1000; // REND LE CANVAS FOCUSABLE POUR LE CLAVIER
oCanvasHTML.focus(); // DONNE LA FOCUS AU CANVAS DIRECTEMENT

// ---- DIALOGUE ----
let texteEtat = "premierDialogue";

// ---- BOUCLE JEU ----
let sEtat = "intro";

// ---- IMAGE DE FOND INTRO (4 Images) ----
let oImageFondIntro1 = new Image();
oImageFondIntro1.src = "assets/images/FondCiels/ciel1.png";

let oImageFondIntro2 = new Image();
oImageFondIntro2.src = "assets/images/FondCiels/ciel2.png";

let oImageFondIntro3 = new Image();
oImageFondIntro3.src = "assets/images/FondCiels/ciel3.png";

let oImageFondIntro4 = new Image();
oImageFondIntro4.src = "assets/images/FondCiels/ciel4.png";

// ---- IMAGE DE FOND JEU (5 Images) ----
let oImageFondJeu1 = new Image();
oImageFondJeu1.src = "assets/images/FondNatures/Plaine/plaine1.png";

let oImageFondJeu2 = new Image();
oImageFondJeu2.src = "assets/images/FondNatures/Plaine/plaine2.png";

let oImageFondJeu3 = new Image();
oImageFondJeu3.src = "assets/images/FondNatures/Plaine/plaine3.png";

let oImageFondJeu4 = new Image();
oImageFondJeu4.src = "assets/images/FondNatures/Plaine/plaine4.png";

let oImageFondJeu5 = new Image();
oImageFondJeu5.src = "assets/images/FondNatures/Plaine/plaine5.png";

// ---- SPRITESHEET EXPLOSION ----
let oImageExplosionSpriteSheet = new Image();
oImageExplosionSpriteSheet.src =
  "assets/images/Explosions/Explosion2Spritesheet.png";

// ---- BULLE DE TEXTE ----
let oImageBulleArrondi1 = new Image();
oImageBulleArrondi1.src = "assets/images/BullesDeTexte/Arrondi1.png";
let bulleTexteVisible = true;

// ---- AUDIOS ----
let musiqueDeFond = new Audio("assets/audio/MusiqueDeFond.wav");
musiqueDeFond.loop = true;
musiqueDeFond.volume = 0.2;

let bruitCompagnon = new Audio("assets/audio/BruitCompagnon.flac");
bruitCompagnon.volume = 0.1;

let bruitBonneReponse = new Audio("assets/audio/BruitBonneReponse.wav");
bruitBonneReponse.volume = 0.3;

let bruitMauvaiseReponse = new Audio("assets/audio/BruitMauvaiseReponse.wav");
bruitMauvaiseReponse.volume = 0.15;

// ---- MINUTERIE GLOBALE ----
let temps = 0;
let minuterie = 120;
let minuterieVisible = false;

// ---- SCORE ----
let nScore = 0;

// ---- VARIABLES TREMBLEMENT DE L'ECRAN ----
let minuteurTremblement = 0;
let forceTremblement = 20;
let echelleTremblement = 1.05; // ZOOM

// ---- VARIABLE DELAI CLIC + APPARITION TEXTE "CLIQUEZ POUR CONTINUER" (SE FAIT EN MEME TEMPS) ----
let peutCliquer = false;
let delaiTexteClique = 0;
let delaiCommence = false;

// ---- VARIABLES TRANSITION
let alphaTransition = 0;
let transitionEnCours = false;
let typeDeTransition = "";
let delaiAvantTransition = 0;

// ---- VARIABLES COUNTDOWN
let countdownEnCours = false;
let compteurCountdown = 3;
let delaiCountdown = 60;
let countdownTermine = false;
let afficherGO = false;
let delaiGO = 60;

//  ---- VITESSE D'ANIMATION + COMPTEUR ----
compteurCompagnon = 0;
compteurExplosion = 0;
compteurAnimaux = 0;

vitesseAnimationCompagnon = 8; // PLUS GRAND LE NOMBRE, LE PLUS LENT L'ANIMATION DANS CE CAS C'EST 8 TICKSs
vitesseAnimationAnimaux = 10;
vitesseAnimationExplosion = 6;

// ---- TABLEAUX ----
let explosionsActives = [];
let tableauAnimaux = [];
let tableauSrcDisponible = [
  "assets/images/Animaux/PNG/With_shadow/Bull_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Chick_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Lamb_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Piglet_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Rooster_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Sheep_animation_with_shadow.png",
  "assets/images/Animaux/PNG/With_shadow/Turkey_animation_with_shadow.png",
];

// ---- COMPAGNON ----
let oImageCompagnon = {
  positionX: 0,
  positionY: 510,
  taille: 3,
  vitesse: 4,
  direction: 1,
  frameActuelle: 0,
  ligneActuelle: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  totalFrames: 6,
  image: new Image(),
  src: "assets/images/CompagnonCorbeauSpritesheet/Walk.png",
};
oImageCompagnon.image.src = oImageCompagnon.src;

let compagnonVisible = true;

// ---- ANIMAL ----
let animalSelectionee = null;
let nBonneReponse = null;

// ---- CLAVIER ----
let texteTape = "";
let texteTapeFinale = "";

// ---- DEUXIEMES VAGUES
let deuxiemeVaguesActives = false;

// ===================================
// FONCTIONS
// -----------------------------------

// ==============================
// INITIALISATION
// ------------------------------
function initialiser() {
  setInterval(boucleJeu, 1000 / 60); // 60 FPS

  // AFFICHER JEU

  oCanvasHTML.addEventListener("click", clicCanvas); // CLIQUE DE SOURIS
  document.addEventListener("keydown", gererClavier);

  // TODO: TOUCHE DE CLAVIER "KEYDOWN" "KEYUP"
}

// ==============================
// BOUCLE DE JEU
// ------------------------------
function boucleJeu() {
  temps++;

  // ---- DELAI POUR LA TRANSITION ----
  if (delaiAvantTransition > 0) {
    delaiAvantTransition--;

    if (delaiAvantTransition == 0) {
      transitionEnCours = true;
      typeDeTransition = "fadeOut";
    }
  }

  if (sEtat == "intro") {
    afficherIntro();
  } else if (sEtat == "jeu") {
    minuterieCountdown();
    minuterieGO();
    afficherJeu();
    dessinerCountdown();
    dessinerGO();
  } else {
    afficherFin();
  }
}

// ===============================
// FONCTION VALIDER REPONSES
// ===============================
function validerReponse() {
  if (
    texteTapeFinale.toLowerCase().trim() == nBonneReponse.toLowerCase().trim()
  ) {
    bruitBonneReponse.play();
    bruitCompagnon.play();

    if (animalSelectionee) {
      let explosionX =
        animalSelectionee.positionX +
        (animalSelectionee.largeurFrame * animalSelectionee.taille) / 2 -
        160;
      let explosionY =
        animalSelectionee.positionY +
        (animalSelectionee.hauteurFrame * animalSelectionee.taille) / 2 -
        150;

      genererExplosion(explosionX, explosionY, 5);

      // FAIRE DISPARAITRE L'ANIMAL
      tableauAnimaux = tableauAnimaux.filter((a) => a !== animalSelectionee);

      animalSelectionee = null;

      // DEUXIEMES VAGUES
      if (tableauAnimaux.length == 0) {
        if (!deuxiemeVaguesActives) {
          genererAnimaux(3);
          deuxiemeVaguesActives = true;
        } else {
          sEtat = "fin";
        }
      }
    }

    if (minuterie >= 25) {
      nScore += 5;
    } else if (minuterie >= 20) {
      nScore += 3;
    } else if (minuterie >= 5) {
      nScore += 2;
    } else {
      nScore += 1;
    }
    minuterie += 3;
  } else if (
    texteTapeFinale.toLowerCase().trim() != nBonneReponse.toLowerCase().trim()
  ) {
    bruitMauvaiseReponse.play();

    minuterie -= 6;
  }
}

// ===============================
// FONCTION UTILITAIRE
// ===============================
function detecterClicObjet(curseurX, curseurY, animal) {
  let largeur = animal.largeurFrame * animal.taille;
  let hauteur = animal.hauteurFrame * animal.taille;

  return (
    curseurX >= animal.positionX &&
    curseurX <= animal.positionX + largeur &&
    curseurY >= animal.positionY &&
    curseurY <= animal.positionY + hauteur
  );
}

// ==================================
// FONCTIONS ECOUTEURS D'EVENEMENT
// ----------------------------------
function clicCanvas(evenement) {
  // LE METTRE EN HAUT PARCE QUE IL VA PAS JOUER QUAND PEUT CLIQUER EST FALSE
  if (sEtat == "jeu" && countdownTermine) {
    onClicAnimal(evenement);
  }

  if (!peutCliquer) {
    // SI ON NE PEUT PAS CLIQUER N'EXECUTE PAS LE CODE
    return;
  }

  if (compagnonVisible) {
  }
  if (sEtat == "intro") {
    if (
      oImageCompagnon.positionX == nLargeurCanvas / 2 - 200 &&
      oImageCompagnon.vitesse == 0
    ) {
      // ---- JOUER LE BRUIT DU CORBEAU ----

      // ---- CHANGER LE TEXTE ----
      if (texteEtat == "premierDialogue") {
        texteEtat = "deuxiemeDialogue";
      } else if (texteEtat == "deuxiemeDialogue") {
        bruitCompagnon.play();
        texteEtat = "troisiemeDialogue";

        // // ---- GENERER EXPLOSION ----
        genererExplosion(
          oImageCompagnon.positionX - 115,
          oImageCompagnon.positionY - 110,
          5
        );

        compagnonVisible = false;

        // ---- TREMBLEMENT ----
        minuteurTremblement = 30;

        // ---- ATTENTE POUR LA TRANSITION
        delaiAvantTransition = 90;
      }
    }
  }
  if (sEtat == "jeu") {
    if (texteEtat == "quatriemeDialogue") {
      texteEtat = "cinquiemeDialogue";
    } else if (texteEtat == "cinquiemeDialogue") {
      countdownEnCours = true;
      peutCliquer = false;
      texteEtat = null;
      bulleTexteVisible = false; // CACHE LA BULLE DE TEXTE
    } else {
      texteEtat = "premierDialogue";
    }
  }

  // ---- REINITIALISER LE DELAI ----
  delaiTexteClique = 70;
  peutCliquer = false;
}

function gererClavier(evenement) {
  if (!animalSelectionee) {
    return;
  }

  if (evenement.key == "Backspace") {
    texteTape = texteTape.slice(0, -1);
  } else if (evenement.key == "Enter") {
    // QUAND TU PESES ENTER LE TEXTE EST ENREGISTRER
    texteTapeFinale = texteTape;
    validerReponse();

    // RESET POUR PROCHAIN INPUT
    texteTape = "";
    animalSelectionee = null;
  } else if (evenement.key.length == 1) {
    texteTape += evenement.key;
  }
}

// ==============================
// FONCTIONS AFFICHER
// ------------------------------
function afficherIntro() {
  // VIDER LE CANVAS
  oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);

  // SAUVEGARDER L'ETAT DU CANVAS
  oContexte.save();

  // TREMBLEMENT
  tremblementEcran();

  // VISUELS
  dessinerIntro();
  dessinerTexte();
  // dessinerUI();

  // COMPAGNON
  dessinerCompagnon();
  animationCompagnon();

  // DESSINER EXPLOSION
  dessinerExplosion();

  // TRANSITION
  transitionFade();

  // REINITIALISER LE CANVAS
  oContexte.restore();
}

function afficherJeu() {
  oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);

  // AUDIOS
  // musiqueDeFond.play();

  // MINUTERIE
  minuterieJeu();

  // EFFETS

  // VISUELS
  dessinerJeu();
  dessinerTexte();
  dessinerUI();

  // DESSINER ANIMAUX
  dessinerAnimaux();
  animationAnimaux();

  // COMPAGNON
  compagnonVisible = true;
  dessinerCompagnon();
  animationCompagnon();

  // DESSINER EXPLOSION
  dessinerExplosion();

  // TRANSITION
  transitionFade();
}

function afficherFin() {
  oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);

  dessinerFin();
}

// ==============================
// FONCTIONS DESSINER GENERALE
// ------------------------------
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

function dessinerJeu() {
  // AFFICHER LE FOND + TITRE
  oContexte.drawImage(oImageFondJeu1, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondJeu2, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondJeu3, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondJeu4, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondJeu5, 0, 0, nLargeurCanvas, nHauteurCanvas);
}

function dessinerFin() {
  // AFFICHER LE FOND + TITRE
  oContexte.drawImage(oImageFondIntro1, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro2, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro3, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oImageFondIntro4, 0, 0, nLargeurCanvas, nHauteurCanvas);

  // TITRE PRINCIPALE
  oContexte.fillStyle = "Black";
  oContexte.font = "120px SuperKindly";
  oContexte.textAlign = "left";
  oContexte.fillText("Mystère bestial", nLargeurCanvas / 2 - 420, 130);

  // SOUS-TITRE
  oContexte.font = "60px CantedFX";
  oContexte.textAlign = "left";
  oContexte.fillText("Devine l'animal !", nLargeurCanvas / 2 - 250, 200);

  // MONTRER SCORE
  oContexte.font = "50px SuperJoyful";
  oContexte.textAlign = "center";
  oContexte.fillText(
    `Score: ${nScore}`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2
  );

  // REDEMARRER
  oContexte.font = "50px SuperJoyful";
  oContexte.textAlign = "center";
  oContexte.fillText(
    "Appuyer ctrl + R pour recommencer",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 + 200
  );
}

// ==============================
// DESSINER TEXTE
// ------------------------------
function dessinerTexte() {
  oContexte.fillStyle = "black";

  // ---- INTRO ----
  if (sEtat == "intro") {
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
        if (texteEtat == "troisiemeDialogue") {
          peutCliquer = false;
        }
      }

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
    }

    // SI ON PEUT CLIQUER AFFICHE LE TEXTE
    if (peutCliquer) {
      oContexte.font = "40px SuperJoyful";
      oContexte.fillText("Cliquez pour continuer", 390, 750);
    }
  }
  // ---- JEU ----
  // COMMENCER LE DELAI
  else if (sEtat == "jeu") {
    if (!countdownEnCours && !afficherGO) {
      if (!delaiCommence) {
        delaiTexteClique = 90; // 1.5 SECONDES
        peutCliquer = false;
        delaiCommence = true;
      }
    }

    // DELAI DE CLICK + APPARITION TEXTE "CLIQUEZ POUR CONTINUER" APRES LE DELAI
    if (delaiTexteClique > 0) {
      delaiTexteClique--;
      if (delaiTexteClique == 0) {
        peutCliquer = true;
      }
    }

    // AFFICHER LE TEXTE + BULLE DE TEXTE
    if (bulleTexteVisible) {
      oContexte.drawImage(oImageBulleArrondi1, 300, 0, 330, 180);
    }

    // ---- INSTRUCTIONS ----
    if (texteEtat == "quatriemeDialogue") {
      oContexte.font = "23px HomerSimpson";
      oContexte.fillText("Lorsque le jeu commence,", 365, 65);
      oContexte.fillText("clique sur un des animaux", 365, 90);
      oContexte.fillText("aléatoirement générés.", 370, 115);
    } else if (texteEtat == "cinquiemeDialogue") {
      oContexte.font = "23px HomerSimpson";
      oContexte.fillText("Quand tu as cliqué sur un", 350, 60);
      oContexte.fillText("animal, un texte apparaîtra et", 340, 85);
      oContexte.fillText("tu devras écrire son nom.", 355, 110);
    }

    // SI ON PEUT CLIQUER AFFICHE LE TEXTE
    if (peutCliquer && !countdownEnCours && !afficherGO) {
      oContexte.font = "40px SuperJoyful";
      oContexte.fillText("Cliquez pour continuer", 370, 675);
    }

    if (animalSelectionee) {
      oContexte.fillStyle = "black";
      oContexte.font = "40px SuperJoyful";
      oContexte.textAlign = "center";
      oContexte.fillText(
        "Le nom de l'animal est: ",
        nLargeurCanvas / 2,
        nHauteurCanvas / 2
      );

      // TEXTE QUE LE JOUEUR ECRIT
      oContexte.textAlign = "left";
      oContexte.fillText(
        texteTape,
        nLargeurCanvas / 2 + 200,
        nHauteurCanvas / 2
      );
    }
  }
}

// ==============================
// DESSINER UI
// ------------------------------
function dessinerUI() {
  if (sEtat == "jeu" && minuterieVisible) {
    oContexte.fillStyle = "black";
    oContexte.font = "40px SuperJoyful";
    oContexte.fillText(minuterie, 1050, 850);

    oContexte.font = "40px SuperJoyful";
    oContexte.textAlign = "right";
    oContexte.fillText(`Score: ${nScore}`, 1000, 50);
  }
}

// ==============================
// FONCTIONS COMPAGNONS
// ------------------------------
function dessinerCompagnon() {
  if (!compagnonVisible) {
    return; // NE PAS DESSINER SI LE COMPAGNON NEST PAS SUPPOSER ETRE VISIBLE
  }
  // --- SPRITE SHEET ANIMATION --- //
  let sourceX = oImageCompagnon.frameActuelle * oImageCompagnon.largeurFrame;
  let sourceY = oImageCompagnon.ligneActuelle * oImageCompagnon.hauteurFrame;

  oContexte.save();

  // FLIP LE SPRITE SI LE COMPAGNON BOUGE VERS LA GAUCHE
  if (oImageCompagnon.direction == -1) {
    oContexte.translate(
      oImageCompagnon.positionX +
        (oImageCompagnon.largeurFrame * oImageCompagnon.taille) / 2,
      0
    );
    oContexte.scale(-1, 1);
    oContexte.translate(
      -(
        oImageCompagnon.positionX +
        (oImageCompagnon.largeurFrame * oImageCompagnon.taille) / 2
      ),
      0
    );
  }

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

  oContexte.restore();
}

function animationCompagnon() {
  compteurCompagnon++;

  if (compteurCompagnon % vitesseAnimationCompagnon === 0) {
    oImageCompagnon.frameActuelle++;
    if (oImageCompagnon.frameActuelle >= oImageCompagnon.totalFrames) {
      oImageCompagnon.frameActuelle = 0; // SI LE FRAME ACTUELLE EST PLUS HAUT QUE LE TOTAL REVENIR AU PREMIER
    }
  }

  if (sEtat == "intro") {
    oImageCompagnon.positionX += oImageCompagnon.vitesse;
  } else if (sEtat == "jeu") {
    if (!afficherGO && countdownTermine) {
      // BOUGER BASER SUR LA DIRECTION
      oImageCompagnon.positionX +=
        oImageCompagnon.vitesse * oImageCompagnon.direction;

      // CHANGER DE DIRECTION QUAND ON ARRIVE A LA FIN DU CANVAS
      if (oImageCompagnon.positionX >= nLargeurCanvas - 100) {
        oImageCompagnon.direction = -1; // BOUGER A GAUCHE
      } else if (oImageCompagnon.positionX <= 0) {
        oImageCompagnon.direction = 1; // BOUGER A DROITE
      }
    }
  }
}

// ==============================
// FONCTIONS CLIQUE ANIMAL
// ------------------------------
function onClicAnimal(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  for (let i = 0; i < tableauAnimaux.length; i++) {
    let animal = tableauAnimaux[i];
    let animalCliquer = detecterClicObjet(curseurX, curseurY, animal);

    if (animalCliquer == true) {
      animalSelectionee = animal;
      nBonneReponse = animal.nBonneReponse;
      texteTape = "";
      saisieActive = true;
    }
  }
}

// ==============================
// FONCTIONS GENERATION D'ANIMAUX
// ------------------------------
function genererAnimaux(nombreAnimaux) {
  // ENDROIT OU LES ANIMAUX SPAWN
  let positionsSpawn = [
    { x: 150, y: 700 },
    { x: 375, y: 700 },
    { x: 600, y: 700 },
    { x: 800, y: 700 },
  ];

  for (let i = 0; i < nombreAnimaux; i++) {
    // CHOISIR SOURCE ALEATOIRE
    let source = Math.floor(Math.random() * tableauSrcDisponible.length);
    let srcChoisie = tableauSrcDisponible[source];

    tableauSrcDisponible.splice(source, 1);

    // CHOISIR LA POSITION (i = 0 A 3, DONC LES 4 DIFFERENTS ENDROITS)
    let position = positionsSpawn[i];

    let nouvelAnimal = {
      positionX: position.x,
      positionY: position.y,
      taille: 4,
      frameActuelle: 0,
      ligneActuelle: 4, // 4 FOR FIFTH LINE
      largeurFrame: 32,
      hauteurFrame: 32,
      totalFrames: 4,
      image: new Image(),
      src: srcChoisie,
      nBonneReponse: "",
    };

    // EXCEPTIONS
    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Bull_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.largeurFrame = 64;
      nouvelAnimal.hauteurFrame = 64;
      nouvelAnimal.positionX = position.x - 60;
      nouvelAnimal.positionY = position.y - 60;
      nouvelAnimal.nBonneReponse = "Taureau";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Chick_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.largeurFrame = 16;
      nouvelAnimal.hauteurFrame = 16;
      nouvelAnimal.positionX = position.x + 25;
      nouvelAnimal.positionY = position.y + 50;
      nouvelAnimal.nBonneReponse = "Poussin";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Lamb_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.nBonneReponse = "Agneau";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Piglet_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.nBonneReponse = "Cochon";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Rooster_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.nBonneReponse = "Coq";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Sheep_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.nBonneReponse = "Mouton";
    }

    if (
      srcChoisie.includes(
        "assets/images/Animaux/PNG/With_shadow/Turkey_animation_with_shadow.png"
      )
    ) {
      nouvelAnimal.nBonneReponse = "Dinde";
    }
    nouvelAnimal.image.src = nouvelAnimal.src;

    tableauAnimaux.push(nouvelAnimal);
  }
}

function dessinerAnimaux() {
  for (let i = 0; i < tableauAnimaux.length; i++) {
    let animaux = tableauAnimaux[i];

    let sourceX = animaux.frameActuelle * animaux.largeurFrame;
    let sourceY = animaux.ligneActuelle * animaux.hauteurFrame;

    oContexte.drawImage(
      animaux.image,
      sourceX,
      sourceY,
      animaux.largeurFrame,
      animaux.hauteurFrame,
      animaux.positionX,
      animaux.positionY,
      animaux.largeurFrame * animaux.taille,
      animaux.hauteurFrame * animaux.taille
    );
  }
}

function animationAnimaux() {
  compteurAnimaux++;

  if (compteurAnimaux % vitesseAnimationAnimaux === 0) {
    for (let i = 0; i < tableauAnimaux.length; i++) {
      let animaux = tableauAnimaux[i];

      animaux.frameActuelle++;
      if (animaux.frameActuelle >= animaux.totalFrames) {
        animaux.frameActuelle = 0; // SI LE FRAME ACTUELLE EST PLUS HAUT QUE LE TOTAL REVENIR AU PREMIER
      }
    }
  }
}

// ==============================
// FONCTIONS D'EFFETS
// ------------------------------
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

function transitionFade() {
  if (!transitionEnCours) return;

  // --- FADE ---
  if (typeDeTransition === "fadeOut") {
    alphaTransition += 0.02;
    if (alphaTransition >= 1) {
      alphaTransition = 1;

      // ---- CHANGEMENT D'ETAT DE JEU
      if (sEtat == "intro") {
        sEtat = "jeu";
        delaiCommence = false;
        texteEtat = "quatriemeDialogue";

        // METTRE LA NOUVELLE POSITION DU COMPAGNON
        oImageCompagnon.positionX = 200;
        oImageCompagnon.positionY = 135;
        oImageCompagnon.vitesse = 4;
      }

      typeDeTransition = "fadeIn";

      // ---- EXPLOSION SUR LE COMPAGNON POUR LE "SPAWN" + LE SON
      bruitCompagnon.play();
      genererExplosion(85, 15, 5);
    }
  } else if (typeDeTransition === "fadeIn") {
    alphaTransition -= 0.02;
    if (alphaTransition <= 0) {
      alphaTransition = 0;
      transitionEnCours = false;
    }
  }

  // --- DESSINER L'EFFET ---
  oContexte.fillStyle = `rgba(0, 0, 0, ${alphaTransition})`;
  oContexte.fillRect(0, 0, nLargeurCanvas, nHauteurCanvas);
}

// ---- EXPLOSIONS ----
function genererExplosion(posX, posY, taille) {
  let imageExplosion = {
    positionX: posX,
    positionY: posY,
    taille: taille,
    frameActuelle: 0,
    ligneActuelle: 0,
    largeurFrame: 64,
    hauteurFrame: 64,
    totalFrames: 11,
    image: oImageExplosionSpriteSheet,
  };

  explosionsActives.push(imageExplosion);
}

function dessinerExplosion() {
  for (let i = explosionsActives.length - 1; i >= 0; i--) {
    let explosion = explosionsActives[i];

    let sourceX = explosion.frameActuelle * explosion.largeurFrame;
    let sourceY = explosion.ligneActuelle * explosion.hauteurFrame;

    oContexte.drawImage(
      explosion.image,
      sourceX,
      sourceY,
      explosion.largeurFrame,
      explosion.hauteurFrame,
      explosion.positionX,
      explosion.positionY,
      explosion.largeurFrame * explosion.taille,
      explosion.hauteurFrame * explosion.taille
    );

    compteurExplosion++;
    if (compteurExplosion % vitesseAnimationExplosion === 0) {
      explosion.frameActuelle++;
      // compteurExplosion = 0;
    }

    // SUPPRIMER LEXPLOSION
    if (explosion.frameActuelle >= explosion.totalFrames) {
      explosionsActives.splice(i, 1);
    }
  }
}

// ==============================
// FONCTIONS DES MINUTERIES
// ------------------------------
function minuterieJeu() {
  if (temps % 60 == 0) {
    // SI SA SERAIT 61 IL SERAIT == 1, CEST SA LA LOGIQUE (== AU RESTE) ET 60 CAR 60FPS (30 SERAIT 0.5 SECONDES) (120 SERAIT 2 SECONDES) ETC
    minuterie--;
  }
  if (minuterie <= 0) {
    musiqueDeFond.pause();
    sEtat = "fin";
  }
}

function minuterieCountdown() {
  if (!countdownEnCours || countdownTermine) return;

  delaiCountdown--;
  if (delaiCountdown <= 0) {
    compteurCountdown--;
    delaiCountdown = 60;
  }

  if (compteurCountdown <= 0) {
    countdownEnCours = false; // ARRETER LE COUNTDOWN
    countdownTermine = true; // MARQUER QUE C FINI

    afficherGO = true;
    delaiGO = 60;
  }
}

function dessinerCountdown() {
  if (!countdownEnCours) return;

  oContexte.font = "120px SuperJoyful";
  oContexte.fillText(
    compteurCountdown,
    nLargeurCanvas / 2 - 50,
    nHauteurCanvas / 2
  );
}

function minuterieGO() {
  if (!afficherGO) return;

  delaiGO--;
  if (delaiGO <= 0) {
    afficherGO = false; // ARRETER LE GO
    countdownEnCours = false;
    countdownTermine = true;
    peutCliquer = false;

    // APRES QUE LE GO S'AFFICHE
    if (tableauAnimaux.length == 0) {
      genererAnimaux(4);
    }

    // GERER MINUTERIE
    minuterie = 30;
    minuterieVisible = true;

    // AUDIOS
    musiqueDeFond.play();
  }
}

function dessinerGO() {
  if (!afficherGO) return;

  oContexte.font = "120px SuperJoyful";
  oContexte.fillText("GO!", nLargeurCanvas / 2 - 100, nHauteurCanvas / 2);
}

window.addEventListener("load", initialiser);
