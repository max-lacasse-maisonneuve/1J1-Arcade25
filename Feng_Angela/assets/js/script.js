// VARIABLES
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
// oCanvasHTML.width = window.innerWidth
// oCanvasHTML.height = window.innerHeight

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let sEtat = "intro";

let sTouche;
let nVie = 3;
let nPoint = 0;
let positionEquation = 0;
let persoChoisi = null;

let oSons = {
  intro: new Audio("assets/audio/intro.mp3"),
  vie: new Audio("assets/audio/hurt.mp3"),
  jeu: new Audio("assets/audio/space-cloud-333647.mp3"),
  point: new Audio("assets/audio/+life.mp3")
}

//------------- INTRO
let oFondIntro = new Image();
oFondIntro.src = "assets/images/BG/Intro/Clouds 3/1.png";

let oFondIntro2 = {
  x: 0,
  y: 0,
  vitesse: 0.2,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Intro/Clouds 3/2.png",
};

let oFondIntro3 = {
  x: 0,
  y: 0,
  vitesse: 1,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Intro/Clouds 3/3.png",
};

let oFondIntro4 = {
  x: 0,
  y: 0,
  vitesse: 1,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Intro/Clouds 3/4.png",
};

let oBoutonDemarrer = {
  x: nLargeurCanvas / 2 - 100,
  y: nHauteurCanvas - 200,
  largeur: 200,
  hauteur: 50,
  texte: "DEMARRER",
};

//--------------- MENU
let oFondMenu = new Image();
oFondMenu.src = "assets/images/BG/Choix.jpg";

let oBoutonChoisir = {
  x: nLargeurCanvas / 10,
  y: nHauteurCanvas - 280,
  largeur: 200,
  hauteur: 50,
  texte: "Choisir",
};

let oBoutonChoisir2 = {
  x: nLargeurCanvas / 2 - 100,
  y: nHauteurCanvas - 280,
  largeur: 200,
  hauteur: 50,
  texte: "Choisir",
};

let oBoutonChoisir3 = {
  x: nLargeurCanvas / 2 + 500,
  y: nHauteurCanvas - 280,
  largeur: 200,
  hauteur: 50,
  texte: "Choisir",
};

let oImagePersonnage = {
  positionX: 10,
  positionY: 255,
  frameActuelle: 0,
  largeurFrame: 522,
  hauteurFrame: 422,
  totalFrames: 12,
  image: new Image(),
  src: "assets/images/Personnages/Idle 1.png",
};
oImagePersonnage.image.src = oImagePersonnage.src;

let oImagePersonnage2 = {
  positionX: 550,
  positionY: 255,
  frameActuelle: 0,
  largeurFrame: 522,
  hauteurFrame: 422,
  totalFrames: 12,
  image: new Image(),
  src: "assets/images/Personnages/Idle 2.png",
};
oImagePersonnage2.image.src = oImagePersonnage2.src;

let oImagePersonnage3 = {
  positionX: 1150,
  positionY: 255,
  frameActuelle: 0,
  largeurFrame: 522,
  hauteurFrame: 422,
  totalFrames: 12,
  image: new Image(),
  src: "assets/images/Personnages/Idle 3.png",
};
oImagePersonnage3.image.src = oImagePersonnage3.src;

let compteur = 0;
let vitesseAnimation = 6;

//-------------------- JEU
let oFondJeu = new Image();
oFondJeu.src = "assets/images/BG/float.jpg";

let numeroChoisi = null;
let aNumeros = [
  {
    nom: "Numero 0",
    chiffre: 0,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/0.png",
  },
  {
    nom: "Numero 1",
    chiffre: 1,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/1.png",
  },
  {
    nom: "Numero 2",
    chiffre: 2,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/2.png",
  },
  {
    nom: "Numero 3",
    chiffre: 3,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/3.png",
  },
  {
    nom: "Numero 4",
    chiffre: 4,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/4.png",
  },
  {
    nom: "Numero 5",
    chiffre: 5,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/5.png",
  },
  {
    nom: "Numero 6",
    chiffre: 6,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/6.png",
  },
  {
    nom: "Numero 7",
    chiffre: 7,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/7.png",
  },
  {
    nom: "Numero 8",
    chiffre: 8,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/8.png",
  },
  {
    nom: "Numero 9",
    chiffre: 9,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 118,
    hauteur: 129,
    vitesse: 5,
    image: new Image(),
    src: "assets/images/Chiffres/9.png",
  },
];

let equations = [
  {
    question: "5 + ? = 10",
    reponse: 5,
  },
  {
    question: "10 - 7 = ?",
    reponse: 3,
  },
  {
    question: "95 - 89 = ?",
    reponse: 6,
  },
  {
    question: "? + 77 = 77",
    reponse: 0,
  },
  {
    question: "44 - ? = 35",
    reponse: 9,
  },
  {
    question: "2 * 4 = ?",
    reponse: 8,
  },
  {
    question: " 100 / 100 = ?",
    reponse: 1,
  },
  {
    question: "? * 12 = 48",
    reponse: 4,
  },
  {
    question: " 22 / 11  = ?",
    reponse: 2,
  },
  {
    question: " ? + 60 = 67",
    reponse: 7,
  },
];

let directionTirX = null;
let directionTirY = null;

let positionTirX = null;
let positionTirY = null;

let oImageRayon = new Image();
oImageRayon.src = "assets/images/Effects/attack/PNG/2/1.png";

//------------ FIN
let vitesseAnimation2 = 20;

let vitesseAnimation3 = 24;

let vitesseAnimation4 = 19;

let vitesseAnimation5 = 19;

let oFondFinPerdu = new Image();
oFondFinPerdu.src = "assets/images/BG/Ecran Fin 2/background 4/1.png";

let oFondFinPerdu2 = {
  x: 0,
  y: 0,
  vitesse: 0.7,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin 2/background 4/2.png",
};

let oFondFinPerdu3 = {
  x: 0,
  y: 0,
  vitesse: 0.7,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin 2/background 4/3.png",
};

let oFondFinPerdu4 = {
  x: 0,
  y: 0,
  vitesse: 0.7,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin 2/background 4/4.png",
};

let oFondFinGagnant = new Image();
oFondFinGagnant.src = "assets/images/BG/Ecran Fin/Ocean_4/1.png";

let oFondFinGagnant2 = {
  x: 0,
  y: 0,
  vitesse: 0.6,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin/Ocean_4/2.png",
};

let oFondFinGagnant3 = {
  x: 0,
  y: 0,
  vitesse: 0.5,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin/Ocean_4/3.png",
};

let oFondFinGagnant4 = {
  x: 0,
  y: 0,
  vitesse: 0.4,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/BG/Ecran Fin/Ocean_4/4.png",
};

let oImagePersonnagePerdu = {
  positionX: 250,
  positionY: 350,
  frameActuelle: 0,
  largeurFrame: 128,
  hauteurFrame: 128,
  totalFrames: 6,
  tailleX: 450,
  tailleY: 450,
  image: new Image(),
  src: "assets/images/Personnages/personnage fin/Samurai/Dead.png",
};
oImagePersonnagePerdu.image.src = oImagePersonnagePerdu.src;

let oImagePersonnagePerdu2 = {
  positionX: 1000,
  positionY: 350,
  frameActuelle: 0,
  largeurFrame: 128,
  hauteurFrame: 128,
  totalFrames: 5,
  tailleX: 430,
  tailleY: 430,
  image: new Image(),
  src: "assets/images/Personnages/personnage fin/Samurai_Archer/Dead.png",
};
oImagePersonnagePerdu2.image.src = oImagePersonnagePerdu2.src;

let oImagePersonnageGagnant = {
  positionX: 250,
  positionY: 400,
  frameActuelle: 0,
  largeurFrame: 128,
  hauteurFrame: 128,
  totalFrames: 9,
  tailleX: 450,
  tailleY: 450,
  image: new Image(),
  src: "assets/images/Personnages/personnage fin/Samurai/Jump.png",
};
oImagePersonnageGagnant.image.src = oImagePersonnageGagnant.src;

let oImagePersonnageGagnant2 = {
  positionX: 1000,
  positionY: 400,
  frameActuelle: 0,
  largeurFrame: 128,
  hauteurFrame: 128,
  totalFrames: 9,
  tailleX: 430,
  tailleY: 430,
  image: new Image(),
  src: "assets/images/Personnages/personnage fin/Samurai_Archer/Jump.png",
};
oImagePersonnageGagnant2.image.src = oImagePersonnageGagnant2.src;

///////////////    FONCTION    //////////////////////////////////////////////////////
function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  melangerChiffres();
  oCanvasHTML.addEventListener("click", clickCanvas);
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  compteur++;

  if (sEtat == "intro") {
    afficherIntro();
    afficherTitre();
    afficherBouton();
  } else if (sEtat == "menu") {
    afficherMenu();
    afficher3Bouton();
    if (compteur % vitesseAnimation === 0) {
      oImagePersonnage.frameActuelle += 1;
      if (oImagePersonnage.frameActuelle >= oImagePersonnage.totalFrames) {
        oImagePersonnage.frameActuelle = 0;
      }
    }

    if (compteur % vitesseAnimation === 0) {
      oImagePersonnage2.frameActuelle += 1;
      if (oImagePersonnage2.frameActuelle >= oImagePersonnage2.totalFrames) {
        oImagePersonnage2.frameActuelle = 0;
      }
    }

    if (compteur % vitesseAnimation === 0) {
      oImagePersonnage3.frameActuelle += 1;
      if (oImagePersonnage3.frameActuelle >= oImagePersonnage3.totalFrames) {
        oImagePersonnage3.frameActuelle = 0;
      }
    }
    afficherChoixPersonnages();
  } else if (sEtat == "jeu") {
    afficherJeu();
    if (persoChoisi == 1) {
      if (compteur % vitesseAnimation === 0) {
        oImagePersonnage.frameActuelle += 1;
        if (oImagePersonnage.frameActuelle >= oImagePersonnage.totalFrames) {
          oImagePersonnage.frameActuelle = 0;
        }
      }
      let sourceX =
        oImagePersonnage.frameActuelle * oImagePersonnage.largeurFrame;
      let sourceY = 0;
      oContexte.drawImage(
        oImagePersonnage.image,
        sourceX,
        sourceY,
        oImagePersonnage.largeurFrame,
        oImagePersonnage.hauteurFrame,
        350,
        nHauteurCanvas - 500,
        oImagePersonnage.largeurFrame,
        oImagePersonnage.hauteurFrame
      );
    } else if (persoChoisi == 2) {
      if (compteur % vitesseAnimation === 0) {
        oImagePersonnage2.frameActuelle += 1;
        if (oImagePersonnage2.frameActuelle >= oImagePersonnage2.totalFrames) {
          oImagePersonnage2.frameActuelle = 0;
        }
      }
      let sourceX2 =
        oImagePersonnage2.frameActuelle * oImagePersonnage2.largeurFrame;
      let sourceY2 = 0;
      oContexte.drawImage(
        oImagePersonnage2.image,
        sourceX2,
        sourceY2,
        oImagePersonnage2.largeurFrame,
        oImagePersonnage2.hauteurFrame,
        350,
        nHauteurCanvas - 500,
        oImagePersonnage2.largeurFrame,
        oImagePersonnage2.hauteurFrame
      );
    } else {
      if (compteur % vitesseAnimation === 0) {
        oImagePersonnage3.frameActuelle += 1;
        if (oImagePersonnage3.frameActuelle >= oImagePersonnage3.totalFrames) {
          oImagePersonnage3.frameActuelle = 0;
        }
      }
      let sourceX3 =
        oImagePersonnage3.frameActuelle * oImagePersonnage3.largeurFrame;
      let sourceY3 = 0;
      oContexte.drawImage(
        oImagePersonnage3.image,
        sourceX3,
        sourceY3,
        oImagePersonnage3.largeurFrame,
        oImagePersonnage3.hauteurFrame,
        350,
        nHauteurCanvas - 500,
        oImagePersonnage3.largeurFrame,
        oImagePersonnage3.hauteurFrame
      );
    }
    dessinerNumero();
    dessinerTir();
    dessinerUI();
    dessinerQuestion();
    if (nVie == 0) {
      sEtat = "fin";
      return;
    } else if (nPoint == 10) {
      sEtat = "fin";
      afficher2Gagnant();
      dessinerUI2();
      return;
    }
  } else if (sEtat == "fin") {
    if (nPoint == 10) {
      if (compteur % vitesseAnimation4 === 0) {
        oImagePersonnageGagnant.frameActuelle += 1;
        if (
          oImagePersonnageGagnant.frameActuelle >=
          oImagePersonnageGagnant.totalFrames
        ) {
          oImagePersonnageGagnant.frameActuelle = 0;
        }
      }
      if (compteur % vitesseAnimation5 === 0) {
        oImagePersonnageGagnant2.frameActuelle += 1;
        if (
          oImagePersonnageGagnant2.frameActuelle >=
          oImagePersonnageGagnant2.totalFrames
        ) {
          oImagePersonnageGagnant2.frameActuelle = 0;
        }
      }

      afficherFin();
      afficher2Gagnant();
      dessinerUI2();
    } else {
      if (compteur % vitesseAnimation2 === 0) {
        oImagePersonnagePerdu.frameActuelle += 1;
        if (
          oImagePersonnagePerdu.frameActuelle >=
          oImagePersonnagePerdu.totalFrames
        ) {
          oImagePersonnagePerdu.frameActuelle = 0;
        }
      }
      if (compteur % vitesseAnimation3 === 0) {
        oImagePersonnagePerdu2.frameActuelle += 1;
        if (
          oImagePersonnagePerdu2.frameActuelle >=
          oImagePersonnagePerdu2.totalFrames
        ) {
          oImagePersonnagePerdu2.frameActuelle = 0;
        }
      }

      afficherFin();
      afficher2Perdu();
      dessinerUI3();
    }
  }
}

function clickCanvas(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;
  if (
    sEtat == "intro" &&
    detecterClickObjet(curseurX, curseurY, oBoutonDemarrer) == true
  ) {
    oSons.jeu.play();
    sEtat = "menu";
  } else if (sEtat == "menu") {
    if (detecterClickObjet(curseurX, curseurY, oBoutonChoisir) == true) {
      persoChoisi = 1;
    }
    if (detecterClickObjet(curseurX, curseurY, oBoutonChoisir2) == true) {
      persoChoisi = 2;
    }
    if (detecterClickObjet(curseurX, curseurY, oBoutonChoisir3) == true) {
      persoChoisi = 3;
    }
    sEtat = "jeu";
  } else if (sEtat == "jeu") {
    if (directionTirX == null && directionTirY == null) {
      tir(curseurX, curseurY);
    }
  } else if (sEtat == "fin") {
    nVie = 3;
    nPoint = 0;
    melangerChiffres();
    sEtat = "intro";
  }
}

function detecterClickObjet(curseurX, curseurY, objet) {
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

////////////////    INTRO    //////////////////////////////////////////////////////
function afficherIntro() {
  // BG  vitesse
  oFondIntro2.image.src = oFondIntro2.fondSrc;
  oFondIntro2.x -= oFondIntro2.vitesse;

  if (oFondIntro2.x <= -nLargeurCanvas) {
    oFondIntro2.x = 0;
  }

  oFondIntro3.image.src = oFondIntro3.fondSrc;
  oFondIntro3.x -= oFondIntro3.vitesse;

  if (oFondIntro3.x <= -nLargeurCanvas) {
    oFondIntro3.x = 0;
  }

  oFondIntro4.image.src = oFondIntro4.fondSrc;
  oFondIntro4.x -= oFondIntro4.vitesse;

  if (oFondIntro4.x <= -nLargeurCanvas) {
    oFondIntro4.x = 0;
  }

  // Fond
  oContexte.drawImage(oFondIntro, 0, 0, nLargeurCanvas, nHauteurCanvas);

  // Lune
  oContexte.drawImage(
    oFondIntro2.image,
    oFondIntro2.x,
    oFondIntro2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondIntro2.image,
    oFondIntro2.x + nLargeurCanvas,
    oFondIntro2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  // Nuage
  oContexte.drawImage(
    oFondIntro3.image,
    oFondIntro3.x,
    oFondIntro3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondIntro3.image,
    oFondIntro3.x + nLargeurCanvas,
    oFondIntro3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  // Nuage2
  oContexte.drawImage(
    oFondIntro4.image,
    oFondIntro4.x,
    oFondIntro4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondIntro4.image,
    oFondIntro4.x + nLargeurCanvas,
    oFondIntro4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

}

function afficherTitre() {
  // Titre
  oContexte.fillStyle = "#ffffffff";
  oContexte.textAlign = "center";
  oContexte.font = " 110px Spicy Sale";
  oContexte.fillText("Bienvenue", nLargeurCanvas / 2, nHauteurCanvas / 2 - 110);

  oContexte.fillText(
    "Les Mathematiciens !",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2
  );
}

function afficherBouton() {
  // Bouton
  oContexte.fillStyle = "#ffffffff";
  oContexte.fillRect(
    oBoutonDemarrer.x,
    oBoutonDemarrer.y,
    oBoutonDemarrer.largeur,
    oBoutonDemarrer.hauteur
  );
  // Bouton (Mot)
  oContexte.fillStyle = "black";
  oContexte.font = "bold 25px Spicy Sale";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oBoutonDemarrer.texte,
    oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
    oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
  );
  
}


////////////////    MENU    //////////////////////////////////////////////////////
function afficherMenu() {
  oContexte.drawImage(oFondMenu, 0, 0, nLargeurCanvas, nHauteurCanvas);

  // Titre
  oContexte.fillStyle = "#ffffffff";
  oContexte.textAlign = "center";
  oContexte.font = " 85px Spicy Sale";
  oContexte.fillText(
    "Choisissez Votre Personnage",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 250
  );
}

function afficher3Bouton() {
  // Bouton
  oContexte.fillStyle = "white";
  oContexte.fillRect(
    oBoutonChoisir.x,
    oBoutonChoisir.y,
    oBoutonChoisir.largeur,
    oBoutonChoisir.hauteur
  );

  // Bouton (Mot)
  oContexte.fillStyle = "#0f5449ff";
  oContexte.font = "bold 25px Spicy Sale";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oBoutonChoisir.texte,
    oBoutonChoisir.x + oBoutonChoisir.largeur / 2,
    oBoutonChoisir.y + oBoutonChoisir.hauteur / 2 + 8
  );

  // Bouton1
  oContexte.fillStyle = "white";
  oContexte.fillRect(
    oBoutonChoisir2.x,
    oBoutonChoisir2.y,
    oBoutonChoisir2.largeur,
    oBoutonChoisir2.hauteur
  );

  // Bouton1 (Mot)
  oContexte.fillStyle = "#400050ff";
  oContexte.font = "bold 25px Spicy Sale";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oBoutonChoisir2.texte,
    oBoutonChoisir2.x + oBoutonChoisir2.largeur / 2,
    oBoutonChoisir2.y + oBoutonChoisir2.hauteur / 2 + 8
  );

  // Bouton2
  oContexte.fillStyle = "white";
  oContexte.fillRect(
    oBoutonChoisir3.x,
    oBoutonChoisir3.y,
    oBoutonChoisir3.largeur,
    oBoutonChoisir3.hauteur
  );

  // Bouton2 (Mot)
  oContexte.fillStyle = "#5b5b2dff";
  oContexte.font = "bold 25px Spicy Sale";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oBoutonChoisir3.texte,
    oBoutonChoisir3.x + oBoutonChoisir3.largeur / 2,
    oBoutonChoisir3.y + oBoutonChoisir3.hauteur / 2 + 8
  );
}

function afficherChoixPersonnages() {
  let sourceX = oImagePersonnage.frameActuelle * oImagePersonnage.largeurFrame;
  let sourceY = 0;
  oContexte.drawImage(
    oImagePersonnage.image,
    sourceX,
    sourceY,
    oImagePersonnage.largeurFrame,
    oImagePersonnage.hauteurFrame,
    oImagePersonnage.positionX,
    oImagePersonnage.positionY,
    oImagePersonnage.largeurFrame,
    oImagePersonnage.hauteurFrame
  );

  let sourceX2 =
    oImagePersonnage2.frameActuelle * oImagePersonnage2.largeurFrame;
  let sourceY2 = 0;
  oContexte.drawImage(
    oImagePersonnage2.image,
    sourceX2,
    sourceY2,
    oImagePersonnage2.largeurFrame,
    oImagePersonnage2.hauteurFrame,
    oImagePersonnage2.positionX,
    oImagePersonnage2.positionY,
    oImagePersonnage2.largeurFrame,
    oImagePersonnage2.hauteurFrame
  );

  let sourceX3 =
    oImagePersonnage3.frameActuelle * oImagePersonnage3.largeurFrame;
  let sourceY3 = 0;
  oContexte.drawImage(
    oImagePersonnage3.image,
    sourceX3,
    sourceY3,
    oImagePersonnage3.largeurFrame,
    oImagePersonnage3.hauteurFrame,
    oImagePersonnage3.positionX,
    oImagePersonnage3.positionY,
    oImagePersonnage3.largeurFrame,
    oImagePersonnage3.hauteurFrame
  );
}

////////////////    JEU    //////////////////////////////////////////////////////

function afficherJeu() {
  oContexte.drawImage(oFondJeu, 0, 0, nLargeurCanvas, nHauteurCanvas);
}
// tir du position
function tir(positionXCurseur, positionYCurseur) {
  directionTirX = positionXCurseur;
  directionTirY = positionYCurseur;

  const dx = positionXCurseur - nLargeurCanvas / 2;
  const dy = positionYCurseur - nHauteurCanvas;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist > 0) {
    positionTirX = nLargeurCanvas / 2 + dx / dist;
    positionTirY = nHauteurCanvas + dy / dist;
  }
}
// dessin de tir
function dessinerTir() {
  if (directionTirX != null && directionTirY != null) {
    oContexte.drawImage(oImageRayon, positionTirX, positionTirY, 50, 50);
    positionTirX += (directionTirX - nLargeurCanvas / 2) / 12;
    positionTirY += (directionTirY - nHauteurCanvas) / 12;

    let objetTir = {
      x: positionTirX,
      y: positionTirY,
      largeur: 50,
      hauteur: 50,
    };

    for (
      let positionListe = 0;
      positionListe < aNumeros.length;
      positionListe++
    ) {
      let numero = aNumeros[positionListe];
      let collisions = detecterCollision(numero, objetTir);
      if (collisions == true) {
        directionTirX = null;
        directionTirY = null;

        numeroChoisi = numero.chiffre;
        verificationQuestion();
        break;
      }
    }

    if (
      positionTirX > nLargeurCanvas ||
      positionTirX < 0 ||
      positionTirY > nHauteurCanvas ||
      positionTirY < 0
    ) {
      directionTirX = null;
      directionTirY = null;
    }
  }
}
// collision
function detecterCollision(objet1, objet2) {
  if (
    objet1.x < objet2.x + objet2.largeur &&
    objet1.x + objet1.largeur > objet2.x &&
    objet1.y < objet2.y + objet2.hauteur &&
    objet1.y + objet1.hauteur > objet2.y
  ) {
    return true;
  } else {
    return false;
  }
}
// afficher/dessiner les..
function dessinerUI() {
  oContexte.fillStyle = "white";
  oContexte.font = "50px Spicy Sale";
  oContexte.fillText(`Vies: ${nVie}`, 150, 70);

  oContexte.fillStyle = "white";
  oContexte.font = "50px Spicy Sale";
  oContexte.fillText(`Points: ${nPoint}`, 1400, 70);
}
// melange le tableau
function melangerChiffres() {
  for (let i = 0; i < aNumeros.length; i++) {
    let numero = aNumeros[i];
    numero.vitesse = Math.random() * 3 + 5;
    numero.y = Math.random() * 20 - 20;
    numero.x = Math.random() * (nLargeurCanvas - numero.largeur);
  }
}
// melange le dedans du tableau
function melangerChiffre(numero) {
  numero.vitesse = Math.random() * 3 + 5;
  numero.y = 0;
  numero.x = Math.random() * (nLargeurCanvas - numero.largeur);
}
// afficher les numeros
function dessinerNumero() {
  for (let i = 0; i < aNumeros.length; i++) {
    let numero = aNumeros[i];

    numero.image.src = numero.src;
    numero.y += numero.vitesse;

    if (numero.y > nHauteurCanvas) {
      // console.log("replacer",numero);
      melangerChiffre(numero);
    }

    oContexte.drawImage(
      numero.image,
      numero.x,
      numero.y,
      numero.largeur,
      numero.hauteur
    );
  }
}
// question à poser
function dessinerQuestion() {
  let equation = equations[positionEquation];
  oContexte.fillStyle = "#ffffff";
  oContexte.font = "bold 64px Spicy Sale";
  oContexte.textAlign = "center";

  let texteAAfficher = equation.question;

  if (numeroChoisi != null) {
    texteAAfficher = texteAAfficher.replace("?", numeroChoisi);
  }

  oContexte.fillText(texteAAfficher, nLargeurCanvas / 2, nHauteurCanvas - 820);
}
// corriger question
function verificationQuestion() {
  let equation = equations[positionEquation];

  if (numeroChoisi == equation.reponse) {
    positionEquation++;
    numeroChoisi = null;
    nPoint += 1;
    oSons.point.play()
    console.log("Félicitations, vous avez terminé le quiz !");
  } else {
    nVie -= 1;
    numeroChoisi = null;
    oSons.vie.play()
    console.log("Mauvaise réponse, réessayez !");
  }
}
////////////////    FIN    //////////////////////////////////////////////////////

function afficherFin() {
  oFondFinPerdu2.image.src = oFondFinPerdu2.fondSrc;
  oFondFinPerdu2.x -= oFondFinPerdu2.vitesse;

  if (oFondFinPerdu2.x <= -nLargeurCanvas) {
    oFondFinPerdu2.x = 0;
  }

  oFondFinPerdu3.image.src = oFondFinPerdu3.fondSrc;
  oFondFinPerdu3.x -= oFondFinPerdu3.vitesse;

  if (oFondFinPerdu3.x <= -nLargeurCanvas) {
    oFondFinPerdu3.x = 0;
  }

  oFondFinPerdu4.image.src = oFondFinPerdu4.fondSrc;
  oFondFinPerdu4.x -= oFondFinPerdu4.vitesse;

  if (oFondFinPerdu4.x <= -nLargeurCanvas) {
    oFondFinPerdu4.x = 0;
  }

  if (nVie == 0) {
    oContexte.drawImage(oFondFinPerdu, 0, 0, nLargeurCanvas, nHauteurCanvas);

    oContexte.drawImage(
      oFondFinPerdu2.image,
      oFondFinPerdu2.x,
      oFondFinPerdu2.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinPerdu2.image,
      oFondFinPerdu2.x + nLargeurCanvas,
      oFondFinPerdu2.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinPerdu3.image,
      oFondFinPerdu3.x,
      oFondFinPerdu3.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinPerdu3.image,
      oFondFinPerdu3.x + nLargeurCanvas,
      oFondFinPerdu3.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinPerdu4.image,
      oFondFinPerdu4.x,
      oFondFinPerdu4.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinPerdu4.image,
      oFondFinPerdu4.x + nLargeurCanvas,
      oFondFinPerdu4.y,
      nLargeurCanvas,
      nHauteurCanvas
    );
  }

  oFondFinGagnant2.image.src = oFondFinGagnant2.fondSrc;
  oFondFinGagnant2.x -= oFondFinGagnant2.vitesse;

  if (oFondFinGagnant2.x <= -nLargeurCanvas) {
    oFondFinGagnant2.x = 0;
  }

  oFondFinGagnant3.image.src = oFondFinGagnant3.fondSrc;
  oFondFinGagnant3.x -= oFondFinGagnant3.vitesse;

  if (oFondFinGagnant3.x <= -nLargeurCanvas) {
    oFondFinGagnant3.x = 0;
  }

  oFondFinGagnant4.image.src = oFondFinGagnant4.fondSrc;
  oFondFinGagnant4.x -= oFondFinGagnant4.vitesse;

  if (oFondFinGagnant4.x <= -nLargeurCanvas) {
    oFondFinGagnant4.x = 0;
  }

  if (nPoint == 10) {
    oContexte.drawImage(oFondFinGagnant, 0, 0, nLargeurCanvas, nHauteurCanvas);

    oContexte.drawImage(
      oFondFinGagnant2.image,
      oFondFinGagnant2.x,
      oFondFinGagnant2.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinGagnant2.image,
      oFondFinGagnant2.x + nLargeurCanvas,
      oFondFinGagnant2.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinGagnant3.image,
      oFondFinGagnant3.x,
      oFondFinGagnant3.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinGagnant3.image,
      oFondFinGagnant3.x + nLargeurCanvas,
      oFondFinGagnant3.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinGagnant4.image,
      oFondFinGagnant4.x,
      oFondFinGagnant4.y,
      nLargeurCanvas,
      nHauteurCanvas
    );

    oContexte.drawImage(
      oFondFinGagnant4.image,
      oFondFinGagnant4.x + nLargeurCanvas,
      oFondFinGagnant4.y,
      nLargeurCanvas,
      nHauteurCanvas
    );
  }
}

function afficher2Perdu() {
  oFondFinPerdu2.image.src = oFondFinPerdu2.fondSrc;
  oFondFinPerdu2.x -= oFondFinPerdu2.vitesse;

  if (oFondFinPerdu2.x <= -nLargeurCanvas) {
    oFondFinPerdu2.x = 0;
  }

  oFondFinPerdu3.image.src = oFondFinPerdu3.fondSrc;
  oFondFinPerdu3.x -= oFondFinPerdu3.vitesse;

  if (oFondFinPerdu3.x <= -nLargeurCanvas) {
    oFondFinPerdu3.x = 0;
  }

  oFondFinPerdu4.image.src = oFondFinPerdu4.fondSrc;
  oFondFinPerdu4.x -= oFondFinPerdu4.vitesse;

  if (oFondFinPerdu4.x <= -nLargeurCanvas) {
    oFondFinPerdu4.x = 0;
  }

  oContexte.drawImage(oFondFinPerdu, 0, 0, nLargeurCanvas, nHauteurCanvas);

  oContexte.drawImage(
    oFondFinPerdu2.image,
    oFondFinPerdu2.x,
    oFondFinPerdu2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinPerdu2.image,
    oFondFinPerdu2.x + nLargeurCanvas,
    oFondFinPerdu2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinPerdu3.image,
    oFondFinPerdu3.x,
    oFondFinPerdu3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinPerdu3.image,
    oFondFinPerdu3.x + nLargeurCanvas,
    oFondFinPerdu3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinPerdu4.image,
    oFondFinPerdu4.x,
    oFondFinPerdu4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinPerdu4.image,
    oFondFinPerdu4.x + nLargeurCanvas,
    oFondFinPerdu4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  let sourcePX =
    oImagePersonnagePerdu.frameActuelle * oImagePersonnagePerdu.largeurFrame;
  let sourcePY = 0;
  oContexte.drawImage(
    oImagePersonnagePerdu.image,
    sourcePX,
    sourcePY,
    oImagePersonnagePerdu.largeurFrame,
    oImagePersonnagePerdu.hauteurFrame,
    oImagePersonnagePerdu.positionX,
    oImagePersonnagePerdu.positionY,
    oImagePersonnagePerdu.tailleX,
    oImagePersonnagePerdu.tailleY
  );

  let sourcePX2 =
    oImagePersonnagePerdu2.frameActuelle * oImagePersonnagePerdu2.largeurFrame;
  let sourcePY2 = 0;
  oContexte.drawImage(
    oImagePersonnagePerdu2.image,
    sourcePX2,
    sourcePY2,
    oImagePersonnagePerdu2.largeurFrame,
    oImagePersonnagePerdu2.hauteurFrame,
    oImagePersonnagePerdu2.positionX,
    oImagePersonnagePerdu2.positionY,
    oImagePersonnagePerdu2.tailleX,
    oImagePersonnagePerdu2.tailleY
  );
}

function afficher2Gagnant() {
  oFondFinGagnant2.image.src = oFondFinGagnant2.fondSrc;
  oFondFinGagnant2.x -= oFondFinGagnant2.vitesse;

  if (oFondFinGagnant2.x <= -nLargeurCanvas) {
    oFondFinGagnant2.x = 0;
  }

  oFondFinGagnant3.image.src = oFondFinGagnant3.fondSrc;
  oFondFinGagnant3.x -= oFondFinGagnant3.vitesse;

  if (oFondFinGagnant3.x <= -nLargeurCanvas) {
    oFondFinGagnant3.x = 0;
  }

  oFondFinGagnant4.image.src = oFondFinGagnant4.fondSrc;
  oFondFinGagnant4.x -= oFondFinGagnant4.vitesse;

  if (oFondFinGagnant4.x <= -nLargeurCanvas) {
    oFondFinGagnant4.x = 0;
  }

  oContexte.drawImage(oFondFinGagnant, 0, 0, nLargeurCanvas, nHauteurCanvas);

  oContexte.drawImage(
    oFondFinGagnant2.image,
    oFondFinGagnant2.x,
    oFondFinGagnant2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinGagnant2.image,
    oFondFinGagnant2.x + nLargeurCanvas,
    oFondFinGagnant2.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinGagnant3.image,
    oFondFinGagnant3.x,
    oFondFinGagnant3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinGagnant3.image,
    oFondFinGagnant3.x + nLargeurCanvas,
    oFondFinGagnant3.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinGagnant4.image,
    oFondFinGagnant4.x,
    oFondFinGagnant4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );

  oContexte.drawImage(
    oFondFinGagnant4.image,
    oFondFinGagnant4.x + nLargeurCanvas,
    oFondFinGagnant4.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  let sourceGX =
    oImagePersonnageGagnant.frameActuelle *
    oImagePersonnageGagnant.largeurFrame;
  let sourceGY = 0;
  oContexte.drawImage(
    oImagePersonnageGagnant.image,
    sourceGX,
    sourceGY,
    oImagePersonnageGagnant.largeurFrame,
    oImagePersonnageGagnant.hauteurFrame,
    oImagePersonnageGagnant.positionX,
    oImagePersonnageGagnant.positionY,
    oImagePersonnageGagnant.tailleX,
    oImagePersonnageGagnant.tailleY
  );

  let sourceGX2 =
    oImagePersonnageGagnant2.frameActuelle *
    oImagePersonnageGagnant2.largeurFrame;
  let sourceGY2 = 0;
  oContexte.drawImage(
    oImagePersonnageGagnant2.image,
    sourceGX2,
    sourceGY2,
    oImagePersonnageGagnant2.largeurFrame,
    oImagePersonnageGagnant2.hauteurFrame,
    oImagePersonnageGagnant2.positionX,
    oImagePersonnageGagnant2.positionY,
    oImagePersonnageGagnant2.tailleX,
    oImagePersonnageGagnant2.tailleY
  );
}

function dessinerUI2() {
  oContexte.fillStyle = "#002bd5ff";
  oContexte.font = "100px Spicy Sale";
  oContexte.fillText(
    `Vous avez gagne`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 200
  );
  oContexte.fillText(
    `Points obtenus ${nPoint}`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 100
  );
}

function dessinerUI3() {
  oContexte.fillStyle = "#002bd5ff";
  oContexte.font = "100px Spicy Sale";
  oContexte.fillText(
    `Vous avez perdu`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 200
  );
  oContexte.fillText(
    `Points obtenus ${nPoint}`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 100
  );
}
window.addEventListener("load", initialiser);
