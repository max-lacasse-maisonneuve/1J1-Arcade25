let oCanvasHTML = document.getElementById("Jeu");
let oContexte = oCanvasHTML.getContext("2d");

oContexte.imageSmoothingEnabled = false;

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

const Largeur_case = (nLargeurCanvas - 336) / 8;
const Hauteur_case = (nHauteurCanvas - 255) / 6;

let sEtat = "Intro";

let bFondJeu2 = false;
let nFondJeu2Aleatoire;

let nFondMortAleatoire;
let bFondMort = false;

let nMinuterieCasesIntro = 0;

let nMinuterieCasesFin1 = 0;
let nMinuterieCasesFin2 = 0;

let sPersonnageChoisi = null;

let tempsPersBleu = 0;
let tempsPersRose = 0;

//////////////////////////////////////////////// Musique
let MusiquePrincipal = new Audio("assets/audio/Space_Pirates.mp4");
MusiquePrincipal.loop = true;
MusiquePrincipal.volume = 0.3;

let MusiqueCountdown = new Audio("assets/audio/Countdown.mp3");

let SonPlay = new Audio("assets/audio/Play.mp3");

let SonPlayR = new Audio("assets/audio/Play.mp3");

let SonPlayB = new Audio("assets/audio/Play.mp3");

let SonVent = new Audio("assets/audio/vent_son.mp3");
SonVent.volume = 0.3;

let SonPerdu = new Audio("assets/audio/Game-over.mp3");
SonPerdu.volume = 1.0;

let SonGagné = new Audio("assets/audio/Gagné-Jeu.mp3");
SonGagné.volume = 1.0;

let SonManche1 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche1.volume = 1.0;

let SonManche2 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche2.volume = 1.0;

let SonManche3 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche3.volume = 1.0;

let SonManche4 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche4.volume = 1.0;

let SonManche5 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche5.volume = 1.0;

let SonManche6 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche6.volume = 1.0;

let SonManche7 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche7.volume = 1.0;

let SonManche8 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche8.volume = 1.0;

let SonManche9 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche9.volume = 1.0;

let SonManche10 = new Audio("assets/audio/Manche-Gagnée.mp3");
SonManche10.volume = 1.0;

let oImgTitre = {
  x: nLargeurCanvas / 2 - 280,
  y: 25,
  largeur: 600,
  hauteur: 400,
  largeurFrame: 400,
  hauteurFrame: 278,
  xFrame: 0,
  yFrame: 0,
  nbFrameMax: 25,
  image: new Image(),
  src: "assets/images/imgintro/Color-Minigames.png",
   };

let oImgPLay = {
  x: nLargeurCanvas / 2 - 100,
  y: nHauteurCanvas - 215,
  largeur: 250,
  hauteur: 100,
  largeurFrame: 300,
  hauteurFrame: 123,
  xFrame: 0,
  yFrame: 0,
  nbFrameMax: 25,
  image: new Image(),
  src: "assets/images/imgintro/Bouton-play.png",
};

////////////////////////////////////////////////////////////////////Personnage Principal

let oPersonnageBleuIntro = {
  x: 125,
  y: 300,
  largeur: 300,
  hauteur: 300,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 6,
  image: new Image(),
  srcIntro: "assets/images/personnage/Dude_Monster/Dude_Monster_Walk_6.png",
};

let oPersonnageRoseIntro = {
  x: 650,
  y: 300,
  largeur: 300,
  hauteur: 300,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 6,
  image: new Image(),
  srcIntro: "assets/images/personnage/Pink_Monster/Pink_Monster_Walk_6.png",
};

let oChoixPersonnageBleu = {
  x: 100,
  y: 90,
  largeur: 325,
  hauteur: 325,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 6,
  image: new Image(),
  srcChoix: "assets/images/personnage/Dude_Monster/Dude_Monster_Run_6.png",
};

let oChoixPersonnageRose = {
  x: 620,
  y: 90,
  largeur: 325,
  hauteur: 325,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 6,
  image: new Image(),
  srcChoix: "assets/images/personnage/Pink_Monster/Pink_Monster_Run_6.png",
};

let oPersonnageBleuJeu = {
  x: 0,
  y: 0,
  largeur: Largeur_case,
  hauteur: Hauteur_case,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  vitesseAnimation: 8,
  image: new Image(),

  directionActuelle: "bas",
  nbFrameMaxActuel: 4,

  animations: {
    bas: {
      src: "assets/images/personnage/Dude_Monster/Dude_Monster_Death_8.png",
      frames: 8,
    },
    gauche: {
      src: "assets/images/personnage/Dude_Monster/Dude_Monster_Walk_6.png",
      frames: 6,
    },
    droite: {
      src: "assets/images/personnage/Dude_Monster/Dude_Monster_Walk_6.png",
      frames: 6,
    },
    haut: {
      src: "assets/images/personnage/Dude_Monster/Dude_Monster_Climb_4.png",
      frames: 4,
    },
  },
};

let oPersonnageRoseJeu = {
  x: Largeur_case,
  y: Hauteur_case,
  largeur: Largeur_case,
  hauteur: Hauteur_case,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  vitesseAnimation: 8,
  image: new Image(),

  directionActuelle: "bas",
  nbFrameMaxActuel: 4,

  animations: {
    bas: {
      src: "assets/images/personnage/Pink_Monster/Pink_Monster_Death_8.png",
      frames: 8,
    },
    gauche: {
      src: "assets/images/personnage/Pink_Monster/Pink_Monster_Walk_6.png",
      frames: 6,
    },
    droite: {
      src: "assets/images/personnage/Pink_Monster/Pink_Monster_Walk_6.png",
      frames: 6,
    },
    haut: {
      src: "assets/images/personnage/Pink_Monster/Pink_Monster_Climb_4.png",
      frames: 4,
    },
  },
};

let oImgFondIntro = {
  x: 0,
  y: 0,
  largeur: nLargeurCanvas,
  hauteur: nHauteurCanvas,
  vitesse: 6,
  image: new Image(),
  src: "assets/images/FondPrincipal/bg_intro.png",
};

let oImgFondChoixJeu = {
  x: 0,
  y: 0,
  vitesse: 4,
  largeur: nLargeurCanvas,
  hauteur: nHauteurCanvas,
  image: new Image(),
  src: "assets/images/FondPrincipal/couleur arc-en-ciel.webp",
};

let oImgFondJeu1 = {
  x: 0,
  y: 0,
  largeur: nLargeurCanvas,
  hauteur: nHauteurCanvas,
  image: new Image(),
  src: "assets/images/FondPrincipal/bois.avif",
};

//////////////////////////////////////////Jeu 2 Ballon

let BallonsActifs = [];

//////////////////////////////////////////Conclusion Personnage tombant

let oPersonnageBleuTombant = {
  x: nLargeurCanvas / 2 + 10,
  y: -100,
  largeur: 150,
  hauteur: 150,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 8,
  vitesse: 5,
  image: new Image(),
  srcConclusion:
    "assets/images/personnage/Dude_Monster/Dude_Monster_Death_8.png",
};

let oPersonnageRoseTombant = {
  x: nLargeurCanvas / 2 + 10,
  y: -100,
  largeur: 150,
  hauteur: 150,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32,
  hauteurFrame: 32,
  nbFrameMax: 8,
  vitesse: 5,
  image: new Image(),
  srcConclusion:
    "assets/images/personnage/Pink_Monster/Pink_Monster_Death_8.png",
};

//////////////////////////////////////////Conclusion Personnage dansant

let oPersonnageBleuConcluDanse = {
  x: 0,
  y: 350,
  largeur: 300,
  hauteur: 300,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32.384,
  hauteurFrame: 32,
  nbFrameMax: 26,
  image: new Image(),
  srcDanse: "assets/images/personnage/Dude_Monster/Dude_Monster_DanseBleu.png",
};


let oPersonnageRoseConcluDanse = {
  x: nLargeurCanvas - 300 ,
  y: 350,
  largeur: 300,
  hauteur: 300,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 32.384,
  hauteurFrame: 32,
  nbFrameMax: 26,
  image: new Image(),
  srcDanse: "assets/images/personnage/Pink_Monster/Dude_Monster_DanseRose.png",
};


//////////////////////////////////////////Jeu 2 Fond

let FondBaie = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_1.webp",
};

let FondCiel = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_2.webp",
};

let FondVille = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_3.webp",
};

let FondDirigeable = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_4.webp",
};

let FondIceberg = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_5.webp",
};

let FondCratere = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_6.webp",
};

let FondPlanete = {
  x: -100,
  y: -100,
  largeur: nLargeurCanvas + 200,
  hauteur: nHauteurCanvas + 30,
  image: new Image(),
  src: "assets/images/FondBallon/bg_7_rare.webp",
};

//////////////////////////////////////////Extra Fond Ballon

let FondPalierBallon = {
  x: 0,
  y: nHauteurCanvas - 250,
  largeur: nLargeurCanvas,
  hauteur: 250,
  image: new Image(),
  src: "assets/images/FondBallon/palier_ballon.png",
};

/////////////////////////////////////////////////////// Ballon

let BallonBleu = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_bleue.png",
};

let BallonVert = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_vert.png",
};

let BallonRouge = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_rouge.png",
};

let BallonJaune = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_jaune.png",
};

let BallonOrange = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_orange.png",
};

let BallonGris = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_gris.png",
};

let BallonMauve = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_mauve.png",
};

let BallonRose = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_rose.png",
};

let BallonBrun = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_brun.png",
};

let BallonBeige = {
  x: 0,
  y: 0,
  largeur: 140,
  hauteur: 267,
  image: new Image(),
  src: "assets/images/ballon/ballon_beige.png",
};

////////////////////////////////////////// Liste Ballon

let listeBallonsSources = [
    BallonBleu,
    BallonVert,
    BallonRouge,
    BallonJaune,
    BallonOrange,
    BallonGris,
    BallonMauve,
    BallonRose,
    BallonBrun,
    BallonBeige,
];

//////////////////////////////////////////Jeu 1

// 3 décors, Lave, Trou et Acide

let oImgFondLave = {
  x: 168,
  y: 168,
  largeur: nLargeurCanvas - 336,
  hauteur: nHauteurCanvas - 255,
  xFrame: 0,
  yFrame: 0,
  largeurFrame: 510,
  hauteurFrame: 510,
  nbFrameMax: 9,
  image: new Image(),
  src: "assets/images/fondMort/lllaaave.png",
};

let oImgFondAcide = {
  x: 168, //Position x
  y: 168, //Position y
  largeur: nLargeurCanvas - 336, //Grandeur x
  hauteur: nHauteurCanvas - 255, //Grandeur y
  xFrame: 0, //Position frame x
  yFrame: 0, //Position frame y
  largeurFrame: 476.5, //Grandeur frame x
  hauteurFrame: 473, //Grandeur frame y
  nbFrameMax: 4,
  image: new Image(),
  src: "assets/images/fondMort/Acide.png",
};

// //////////////////////// Cases de Fin

let oImgFinBonne = {
  x: 0,
  y: 0,
  largeur: nLargeurCanvas,
  hauteur: nHauteurCanvas,
  image: new Image(),
  src: "assets/images/fondPrincipal/Fond_Gagnant.png",
};

let oImgFinMauvais = {
  x: 0,
  y: 0,
  largeur: nLargeurCanvas,
  hauteur: nHauteurCanvas,
  image: new Image(),
  src: "assets/images/fondPrincipal/bg_fin.webp",
};

let fondtemps = 0;
let minuterie = 10;

function onClicCanvas(evenement) {
  let PositionXCurseur = evenement.offsetX;
  let PositionYCurseur = evenement.offsetY;

  if (sEtat == "Intro") {
    let PlayBouton = AppuyerBouton(
      PositionXCurseur,
      PositionYCurseur,
      oImgPLay.x,
      oImgPLay.y,
      oImgPLay.largeur,
      oImgPLay.hauteur
    );
    if (PlayBouton == true) {
      sEtat = "ChoixJeu";
      SonPlay.play();
    }
  } else if (sEtat == "ChoixJeu") {
    AletoireCouleurJeu1();
    QuestionAleatoire();
    let AquaChoix = AppuyerBouton(
      PositionXCurseur,
      PositionYCurseur,
      oChoixPersonnageBleu.x,
      oChoixPersonnageBleu.y,
      oChoixPersonnageBleu.largeur,
      oChoixPersonnageBleu.hauteur
    );
    let CeriseChoix = AppuyerBouton(
      PositionXCurseur,
      PositionYCurseur,
      oChoixPersonnageRose.x,
      oChoixPersonnageRose.y,
      oChoixPersonnageRose.largeur,
      oChoixPersonnageRose.hauteur
    );
    if (AquaChoix == true) {
      sPersonnageChoisi = "bleu";
      sEtat = "Jeu1";
      SonPlayB.play();
        ChangerAnimationPersonnage("droite");
    }
    if (CeriseChoix == true) {
      sPersonnageChoisi = "rose";
      sEtat = "Jeu1";
      SonPlayR.play();
       ChangerAnimationPersonnage("droite");
    }
  } else if (sEtat == "Jeu1") {
    //sEtat = "Fin";
  } else if (sEtat == "BonneFin") {
    initialiserBallonsJeu2();
    sEtat = "Jeu2";
  } else if (sEtat == "Jeu2") {
    sEtat = "Intro";
    RéintaliserJeuComplet();
  } else if (sEtat == "MauvaiseFin") {
    sEtat = "Intro";
    RéintaliserJeuComplet();
  }
}

let touche = null;

function ChangerAnimationPersonnage(NouvelleDirection) {
  if (sEtat != "Jeu1") {
    return;
  }
  /////////////////////////////////////////////////////////  Aqua
  if (sPersonnageChoisi == "bleu") {
    let persoBleu = oPersonnageBleuJeu;
    let animBleu = persoBleu.animations[NouvelleDirection];

    if (persoBleu.directionActuelle === NouvelleDirection) {
      return;
    }

    persoBleu.directionActuelle = NouvelleDirection;
    persoBleu.nbFrameMaxActuel = animBleu.frames;
    persoBleu.xFrame = 0;

    persoBleu.image.src = animBleu.src;
  }
  /////////////////////////////////////////////////////////  Cerise
  if (sPersonnageChoisi == "rose") {
    let persoRose = oPersonnageRoseJeu;
    let animRose = persoRose.animations[NouvelleDirection];

    if (persoRose.directionActuelle === NouvelleDirection) {
      return;
    }

    persoRose.directionActuelle = NouvelleDirection;
    persoRose.nbFrameMaxActuel = animRose.frames;
    persoRose.xFrame = 0;

    persoRose.image.src = animRose.src;
  }
}

// ////////////////////////////////////////////////////  Ballon Aleatoire

function creerBallonAleatoire() {
    let indexCouleur = Math.floor(Math.random() * listeBallonsSources.length);
    let sourceBallon = listeBallonsSources[indexCouleur];

    let tailleAleatoire = Math.floor(Math.random() * 160) + 30;
    
    let xAleatoire = Math.floor(Math.random() * (nLargeurCanvas - tailleAleatoire));
    
    let vitesseYAleatoire = Math.random() * 4 + 1; 

    let tempsAvantDepartAleatoire = Math.floor(Math.random() * 180);

    return {
        x: xAleatoire,
        y: nHauteurCanvas,
        largeur: tailleAleatoire,
        hauteur: tailleAleatoire,
        vitesseY: vitesseYAleatoire,
        tempsAvantDepart: tempsAvantDepartAleatoire,
        image: sourceBallon.image,
    };
}

function initialiserBallonsJeu2() {
    BallonsActifs = []; 
    for (let i = 0; i < 10; i++) {
        let nouveauBallon = creerBallonAleatoire();
        BallonsActifs.push(nouveauBallon);
    }
}

function mettreAJourBallons() {
    for (let i = 0; i < BallonsActifs.length; i++) {
        let ballon = BallonsActifs[i];

        if (ballon.tempsAvantDepart > 0) {
            ballon.tempsAvantDepart--; 
            continue; 
        }

        ballon.y -= ballon.vitesseY; 

        if (ballon.y + ballon.hauteur < 0) {
            BallonsActifs[i] = creerBallonAleatoire();
        }
    }
}
let listeImagesObjets = [
    oImgTitre.image, oImgPLay.image, oImgFondChoixJeu.image, 
    oImgFondLave.image, oImgFondAcide.image, oImgFinBonne.image, oImgFinMauvais.image,
    oImgFondIntro.image, oImgFondJeu1.image, 
    oPersonnageBleuIntro.image, oPersonnageRoseIntro.image, // <-- Correction ici: .image
    BallonBeige.image, BallonBleu.image, BallonRouge.image, BallonVert.image, BallonJaune.image,
    BallonOrange.image, BallonGris.image, BallonRose.image, BallonMauve.image, BallonBrun.image,
    oPersonnageBleuTombant.image, oPersonnageRoseTombant.image, oPersonnageBleuConcluDanse.image,
    oPersonnageRoseConcluDanse.image, oChoixPersonnageBleu.image, oChoixPersonnageRose.image,
    FondBaie.image, FondCiel.image, FondVille.image, FondDirigeable.image, FondIceberg.image,
    FondCratere.image, FondPlanete.image, FondPalierBallon.image,
    oPersonnageBleuJeu.image, // J'ajoute les images de jeu si elles sont nécessaires au démarrage
    oPersonnageRoseJeu.image, 
]; 

let nbImagesACherger = listeImagesObjets.length;
let nbImagesChargees = 0;

function imageChargee() {
    nbImagesChargees++;
    
    // DÉMARRE LE JEU UNIQUEMENT QUAND TOUT EST CHARGÉ
    if (nbImagesChargees === nbImagesACherger) {
        setInterval(boucleJeu, 1000 / 60);
    }
}

// ////////////////////////////////////////////////////  Image source (Réintégrées et déplacées)

// Lancement du chargement en attribuant le SRC et en attachant les événements
function lancerChargementAssets() {
    // Étape 1: Attribuer les SRC pour lancer le téléchargement, et attacher les événements onload/onerror
    
    // Objets simples
    oImgTitre.image.src = oImgTitre.src;
    oImgPLay.image.src = oImgPLay.src;
    oImgFondChoixJeu.image.src = oImgFondChoixJeu.src;
    oImgFondLave.image.src = oImgFondLave.src;
    oImgFondAcide.image.src = oImgFondAcide.src;
    oImgFinMauvais.image.src = oImgFinMauvais.src;
    oImgFinBonne.image.src = oImgFinBonne.src;
    oImgFondIntro.image.src = oImgFondIntro.src;
    oImgFondJeu1.image.src = oImgFondJeu1.src;
    oPersonnageBleuIntro.image.src = oPersonnageBleuIntro.srcIntro;
    oPersonnageRoseIntro.image.src = oPersonnageRoseIntro.srcIntro;
    
    // Ballons
    BallonBeige.image.src = BallonBeige.src;
    BallonBleu.image.src = BallonBleu.src;
    BallonRouge.image.src = BallonRouge.src;
    BallonVert.image.src = BallonVert.src;
    BallonJaune.image.src = BallonJaune.src;
    BallonOrange.image.src = BallonOrange.src;
    BallonGris.image.src = BallonGris.src;
    BallonRose.image.src = BallonRose.src;
    BallonMauve.image.src = BallonMauve.src;
    BallonBrun.image.src = BallonBrun.src;
    
    // Personnages
    oPersonnageBleuTombant.image.src = oPersonnageBleuTombant.srcConclusion;
    oPersonnageRoseTombant.image.src = oPersonnageRoseTombant.srcConclusion;
    oPersonnageBleuConcluDanse.image.src = oPersonnageBleuConcluDanse.srcDanse;
    oPersonnageRoseConcluDanse.image.src = oPersonnageRoseConcluDanse.srcDanse;
    oChoixPersonnageBleu.image.src = oChoixPersonnageBleu.srcChoix;
    oChoixPersonnageRose.image.src = oChoixPersonnageRose.srcChoix;
    
    // Fonds Jeu 2
    FondBaie.image.src = FondBaie.src;
    FondCiel.image.src = FondCiel.src;
    FondVille.image.src = FondVille.src;
    FondDirigeable.image.src = FondDirigeable.src;
    FondIceberg.image.src = FondIceberg.src;
    FondCratere.image.src = FondCratere.src;
    FondPlanete.image.src = FondPlanete.src;
    FondPalierBallon.image.src = FondPalierBallon.src;
    
    // IMPORTANT : Les images du personnage de jeu
    // Note : elles sont chargées dynamiquement par ChangerAnimationPersonnage, 
    // mais il est plus sûr de charger au moins une image par défaut ici
    oPersonnageBleuJeu.image.src = oPersonnageBleuJeu.animations.bas.src; 
    oPersonnageRoseJeu.image.src = oPersonnageRoseJeu.animations.bas.src; 

    // Étape 2: Attacher les événements une fois que le src est défini
    for (const img of listeImagesObjets) {
        img.onload = imageChargee;
        img.onerror = imageChargee; 
    }
}

function initialiser() {
  lancerChargementAssets();
  MusiquePrincipal.play();
  window.addEventListener("click", onClicCanvas);
  window.addEventListener("keyup", onkeyup);
  window.addEventListener("keydown", onkeydown);
}

function onkeyup(evenement) {
  touche = null;
}

function onkeydown(evenement) {
  touche = evenement.key;
}
function retirerCases() {
  for (let i = 0; i < oCasesJeu.length; i++) {
    let uneCase = oCasesJeu[i];
    if (uneCase.couleur != reponse) {
      uneCase.cacher = true;
    }
  }
}

function remettreCases() {
  for (let i = 0; i < oCasesJeu.length; i++) {
    let uneCase = oCasesJeu[i];
    uneCase.cacher = false;
  }
}
function verifierPositionJoueur() {
  if (sPersonnageChoisi == "bleu") {
    for (let i = 0; i < oCasesJeu.length; i++) {
      let uneCase = oCasesJeu[i];
      let collision = AppuyerBouton(
        oPersonnageBleuJeu.x + oPersonnageBleuJeu.largeur / 2,
        oPersonnageBleuJeu.y + oPersonnageBleuJeu.hauteur,
        uneCase.x,
        uneCase.y,
        uneCase.largeur,
        uneCase.hauteur
      );
      if (collision == true && uneCase.couleur == reponse) {
        return true;
      }
    }
    return false;
  } else if (sPersonnageChoisi == "rose") {
    for (let i = 0; i < oCasesJeu.length; i++) {
      let uneCase = oCasesJeu[i];
      let collision = AppuyerBouton(
        oPersonnageRoseJeu.x + oPersonnageRoseJeu.largeur / 2,
        oPersonnageRoseJeu.y + oPersonnageRoseJeu.hauteur,
        uneCase.x,
        uneCase.y,
        uneCase.largeur,
        uneCase.hauteur
      );
      if (collision == true && uneCase.couleur == reponse) {
        return true;
      }
    }
    return false;
  }
}
/////////////////////////////////////////// Boucle Jeu
function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  fondtemps++;

  if (sEtat == "Intro") {
    afficherIntro();
    DessinerImageIntro();
  } else if (sEtat == "ChoixJeu") {
    // afficherChoixJeu();
    oFondChoixJeu();
  } else if (sEtat == "Jeu1") {
    if (fondtemps % 60 == 0) {
      minuterie--;
    }
    if (minuterie <= 0) {
      if (manche == 1) {
        minuterie = 11;
        SonManche1.play();
      } else if (manche == 2) {
        minuterie = 10;
        SonManche2.play();
      } else if (manche == 3) {
        minuterie = 9;
        SonManche3.play();
      } else if (manche == 4) {
        minuterie = 8;
        SonManche4.play();
      } else if (manche == 5) {
        minuterie = 7;
        SonManche5.play();
      } else if (manche == 6) {
        minuterie = 7;
        SonManche6.play();
      } else if (manche == 7) {
        minuterie = 6;
        SonManche7.play();
      } else if (manche == 8) {
        minuterie = 6;
        SonManche8.play();
      } else if (manche == 9) {
        minuterie = 5;
        SonManche9.play();
      } else if (manche == 10) {
        minuterie = 5;
        SonManche10.play();
      }

      retirerCases();
      let reponseJoueur = verifierPositionJoueur();

      if (reponseJoueur == false) {
        sEtat = "MauvaiseFin";
        SonPerdu.play();
        SonVent.play();
      }

      setTimeout(function () {
        manche++;
        remettreCases();
        QuestionAleatoire();

        if (manche >= 11) {
          sEtat = "BonneFin";
          SonGagné.play();
          SonVent.play();
        }
      }, 1000);
    }
    JoueurChoisi();
    afficherJeu1();
    FondMort();
    AfficherCases();
    DessinerJoueurChoisi();
    UI();
  } else if (sEtat == "BonneFin") {
    afficherFinBon();
  } else if (sEtat == "MauvaiseFin") {
    afficherFinMauvais();
  } else if (sEtat == "Jeu2") {
    FondJeu2();     
    Ballon();
    AfficherJeu2();
}
}

// ////////////////////////////////////////////Intro

function afficherIntro() {
  oImgFondIntro.x += oImgFondIntro.vitesse;

  if (oImgFondIntro.x > nLargeurCanvas) {
    oImgFondIntro.x = 0;
  }
  oContexte.drawImage(
    oImgFondIntro.image,
    oImgFondIntro.x,
    oImgFondIntro.y,
    oImgFondIntro.largeur,
    oImgFondIntro.hauteur
  );
  oContexte.drawImage(
    oImgFondIntro.image,
    oImgFondIntro.x - nLargeurCanvas,
    oImgFondIntro.y,
    oImgFondIntro.largeur,
    oImgFondIntro.hauteur
  );

  oContexte.fillStyle = "black";
  oContexte.fillRect(0, 0, nLargeurCanvas, 93);

  oContexte.fillRect(0, 0, 93, nHauteurCanvas);

  oContexte.fillRect(
    nLargeurCanvas - 93,
    0,
    nLargeurCanvas - 186,
    nHauteurCanvas
  );

  oContexte.fillRect(
    0,
    nHauteurCanvas - 93,
    nLargeurCanvas,
    nHauteurCanvas - 186
  );

  nMinuterieCasesIntro++;

  if (nMinuterieCasesIntro % 5 == 0) {
    let CaseChangeableIntro = oImgCasesIntro.shift();
    oImgCasesIntro.push(CaseChangeableIntro);
  }

  for (let i = 0; i < oImgCasesIntro.length; i++) {
    let CarreIntro = oImgCasesIntro[i];

    if (i < 10) {
      oContexte.fillStyle = "red";
    } else if (i >= 10 && i < 19) {
      oContexte.fillStyle = "yellow";
    } else if (i >= 19 && i < 29) {
      oContexte.fillStyle = "green";
    } else if (i >= 29 && i < 38) {
      oContexte.fillStyle = "blue";
    } else {
      oContexte.fillStyle = "black";
    }
    oContexte.fillRect(
      CarreIntro.x,
      CarreIntro.y,
      CarreIntro.largeur,
      CarreIntro.hauteur
    );
  }

  if (fondtemps % 8 == 0) {
    oPersonnageBleuIntro.xFrame++;
  }
  if (oPersonnageBleuIntro.xFrame >= oPersonnageBleuIntro.nbFrameMax) {
    oPersonnageBleuIntro.xFrame = 0;
  }

  oContexte.drawImage(
    oPersonnageBleuIntro.image,
    oPersonnageBleuIntro.xFrame * oPersonnageBleuIntro.largeurFrame,
    oPersonnageBleuIntro.yFrame * oPersonnageBleuIntro.hauteurFrame,
    oPersonnageBleuIntro.largeurFrame,
    oPersonnageBleuIntro.hauteurFrame,
    oPersonnageBleuIntro.x,
    oPersonnageBleuIntro.y,
    oPersonnageBleuIntro.largeur,
    oPersonnageBleuIntro.hauteur
  );

  oContexte.save();
  oContexte.translate(
    oPersonnageRoseIntro.x + oPersonnageRoseIntro.largeur / 2,
    oPersonnageRoseIntro.y
  );
  oContexte.scale(-1, 1);
  oContexte.translate(
    -(oPersonnageRoseIntro.x + oPersonnageRoseIntro.largeur / 2),
    -oPersonnageRoseIntro.y
  );

  if (fondtemps % 8 == 0) {
    oPersonnageRoseIntro.xFrame++;
  }
  if (oPersonnageRoseIntro.xFrame >= oPersonnageRoseIntro.nbFrameMax) {
    oPersonnageRoseIntro.xFrame = 0;
  }

  oContexte.drawImage(
    oPersonnageRoseIntro.image,
    oPersonnageRoseIntro.xFrame * oPersonnageRoseIntro.largeurFrame,
    oPersonnageRoseIntro.yFrame * oPersonnageRoseIntro.hauteurFrame,
    oPersonnageRoseIntro.largeurFrame,
    oPersonnageRoseIntro.hauteurFrame,
    oPersonnageRoseIntro.x,
    oPersonnageRoseIntro.y,
    oPersonnageRoseIntro.largeur,
    oPersonnageRoseIntro.hauteur
  );

  oContexte.restore();
}

function DessinerImageIntro() {
  if (fondtemps % 4 == 0) {
    oImgPLay.xFrame++;
  }
  if (oImgPLay.xFrame >= oImgPLay.nbFrameMax) {
    oImgPLay.xFrame = 0;
  }
  oContexte.drawImage(
    oImgPLay.image,
    oImgPLay.xFrame * oImgPLay.largeurFrame,
    oImgPLay.yFrame,
    oImgPLay.largeurFrame,
    oImgPLay.hauteurFrame,
    oImgPLay.x,
    oImgPLay.y,
    oImgPLay.largeur,
    oImgPLay.hauteur
  );

  if (fondtemps % 4 == 0) {
    oImgTitre.xFrame++;
  }
  if (oImgTitre.xFrame >= oImgTitre.nbFrameMax) {
    oImgTitre.xFrame = 0;
  }
  oContexte.drawImage(
    oImgTitre.image,
    oImgTitre.xFrame * oImgTitre.largeurFrame,
    oImgTitre.yFrame,
    oImgTitre.largeurFrame,
    oImgTitre.hauteurFrame,
    oImgTitre.x,
    oImgTitre.y,
    oImgTitre.largeur,
    oImgTitre.hauteur
  );
}

// ////////////////////////////////////////////Choix Jeu

function oFondChoixJeu() {
  oImgFondChoixJeu.y += oImgFondChoixJeu.vitesse;

  if (oImgFondChoixJeu.y > nHauteurCanvas) {
    oImgFondChoixJeu.y = 0;
  }

  oContexte.drawImage(
    oImgFondChoixJeu.image,
    oImgFondChoixJeu.x,
    oImgFondChoixJeu.y - nHauteurCanvas,
    oImgFondChoixJeu.largeur,
    oImgFondChoixJeu.hauteur
  );
  oContexte.drawImage(
    oImgFondChoixJeu.image,
    oImgFondChoixJeu.x,
    oImgFondChoixJeu.y,
    oImgFondChoixJeu.largeur,
    oImgFondChoixJeu.hauteur
  );

  oContexte.fillStyle = "skyblue";
  oContexte.lineWidth = 7;
  oContexte.strokeRect(100, 80, 350, 350);
  oContexte.fillRect(100, 80, 350, 350);

  oContexte.fillStyle = "purple";
  oContexte.strokeRect(595, 80, 350, 350);
  oContexte.fillRect(595, 80, 350, 350);

  oContexte.fillStyle = "royalblue";
  oContexte.fillRect(100, 360, 350, 70);

  oContexte.fillStyle = "lightpink";
  oContexte.fillRect(595, 360, 350, 70);

  if (fondtemps % 5 == 0) {
    oChoixPersonnageBleu.xFrame++;
  }
  if (oChoixPersonnageBleu.xFrame >= oChoixPersonnageBleu.nbFrameMax) {
    oChoixPersonnageBleu.xFrame = 0;
  }

  oContexte.drawImage(
    oChoixPersonnageBleu.image,
    oChoixPersonnageBleu.xFrame * oChoixPersonnageBleu.largeurFrame,
    oChoixPersonnageBleu.yFrame * oChoixPersonnageBleu.hauteurFrame,
    oChoixPersonnageBleu.largeurFrame,
    oChoixPersonnageBleu.hauteurFrame,
    oChoixPersonnageBleu.x,
    oChoixPersonnageBleu.y,
    oChoixPersonnageBleu.largeur,
    oChoixPersonnageBleu.hauteur
  );

  oContexte.save();
  oContexte.translate(
    oChoixPersonnageRose.x + oChoixPersonnageRose.largeur / 2,
    oChoixPersonnageRose.y
  );
  oContexte.scale(-1, 1);
  oContexte.translate(
    -(oChoixPersonnageRose.x + oChoixPersonnageRose.largeur / 2),
    -oChoixPersonnageRose.y
  );
  if (fondtemps % 5 == 0) {
    oChoixPersonnageRose.xFrame++;
  }
  if (oChoixPersonnageRose.xFrame >= oChoixPersonnageRose.nbFrameMax) {
    oChoixPersonnageRose.xFrame = 0;
  }

  oContexte.drawImage(
    oChoixPersonnageRose.image,
    oChoixPersonnageRose.xFrame * oChoixPersonnageRose.largeurFrame,
    oChoixPersonnageRose.yFrame * oChoixPersonnageRose.hauteurFrame,
    oChoixPersonnageRose.largeurFrame,
    oChoixPersonnageRose.hauteurFrame,
    oChoixPersonnageRose.x,
    oChoixPersonnageRose.y,
    oChoixPersonnageRose.largeur,
    oChoixPersonnageRose.hauteur
  );
  oContexte.restore();
oContexte.textAlign = "center"
  oContexte.fillStyle = "orange";
  oContexte.strokeRect(45, 460, 955, 300);
  oContexte.fillRect(45, 460, 955, 300);

oContexte.textAlign = "center"
  oContexte.fillStyle = "black";
  oContexte.font = "60px 'Press Start 2P'";
  oContexte.fillText("Règlements", nLargeurCanvas/2, 545);

oContexte.textAlign = "left"
  oContexte.fillStyle = "black";
  oContexte.font = "48px 'Press Start 2P'";
  oContexte.fillText("Choisi ton personnage", 20, 62);

  oContexte.fillStyle = "hotpink";
  oContexte.font = "40px 'Press Start 2P'";
  oContexte.fillText("Cerise", 652, 132);

  oContexte.fillStyle = "cyan";
  oContexte.fillText("Aqua", 198, 132);

  oContexte.fillStyle = "white";
  oContexte.font = "16px 'Press Start 2P'";

  oContexte.textAlign = "center"
  oContexte.fillText(
    "Appuyez sur   ou             pour aller vers le      !",
   nLargeurCanvas/2,
    590
  );
  oContexte.fillText(
    "Appuyez sur	  ou            pour aller vers le     !",
     nLargeurCanvas/2,
    640
  );
  oContexte.fillText(
    "Appuyez sur   ou               pour aller vers la        !",
   nLargeurCanvas/2,
    690
  );
  oContexte.fillText(
    "Appuyez sur   ou               pour aller vers la        !",
   nLargeurCanvas/2,
    740
  );

  oContexte.fillStyle = "black";
  oContexte.fillText(
    "          W    Flèche Haut                    Haut",
   nLargeurCanvas/2,
    590
  );
  oContexte.fillText(
    "          S    Flèche Bas                    Bas",
     nLargeurCanvas/2,
    640
  );
  oContexte.fillText(
    "          A    Flèche Gauche                    Gauche",
   nLargeurCanvas/2,
    690
  );
  oContexte.fillText(
    "          D    Flèche Droite                    Droite",
   nLargeurCanvas/2,
    740
  );
}

// ////////////////////////////////////////////Jeu 1

function afficherJeu1() {
  oContexte.drawImage(
    oImgFondJeu1.image,
    oImgFondJeu1.x,
    oImgFondJeu1.y,
    oImgFondJeu1.largeur,
    oImgFondJeu1.hauteur
  );

  oContexte.fillStyle = "black";
  oContexte.font = "18px 'Press Start 2P'";

  oContexte.textAlign = "center";
  oContexte.fillText(question, nLargeurCanvas / 2, 150, nLargeurCanvas -50);
}

function JoueurChoisi() {
  /////////////////////////////////////////////// Aqua
  if (sPersonnageChoisi == "bleu") {
    let bToucheAEteAppuye = false;

    if (touche) {
      oPersonnageBleuJeu.image,
        oPersonnageBleuJeu.xFrame,
        oPersonnageBleuJeu.yFrame,
        oPersonnageBleuJeu.largeurFrame,
        oPersonnageBleuJeu.hauteurFrame,
        oPersonnageBleuJeu.largeur / 2,
        oPersonnageBleuJeu.hauteur / 2,
        oPersonnageBleuJeu.largeur,
        oPersonnageBleuJeu.hauteur;
      bToucheAEteAppuye = true;
      let actionTouche = touche;
      touche = null;

      if (actionTouche == "ArrowRight" || actionTouche == "d") {
        ChangerAnimationPersonnage("droite");
        oPersonnageBleuJeu.x += Largeur_case;
      } else if (actionTouche == "ArrowLeft" || actionTouche == "a") {
        ChangerAnimationPersonnage("gauche");
        oPersonnageBleuJeu.x -= Largeur_case;
      } else if (actionTouche == "ArrowUp" || actionTouche == "w") {
        ChangerAnimationPersonnage("haut");
        oPersonnageBleuJeu.y -= Hauteur_case;
      } else if (actionTouche == "ArrowDown" || actionTouche == "s") {
        ChangerAnimationPersonnage("bas");
        oPersonnageBleuJeu.y += Hauteur_case;
      }
    }

    const Min_x = 168;
    const Min_y = 138;
    const Max_x = nLargeurCanvas - 168 - oPersonnageBleuJeu.largeur;
    const Max_y = nHauteurCanvas - 117 - oPersonnageBleuJeu.hauteur;

    oPersonnageBleuJeu.x = Math.max(
      Min_x,
      Math.min(oPersonnageBleuJeu.x, Max_x)
    );
    oPersonnageBleuJeu.y = Math.max(
      Min_y,
      Math.min(oPersonnageBleuJeu.y, Max_y)
    );

    
    oPersonnageBleuJeu.xFrame = 0;

    /////////////////////////////////////////////// Cerise
  }
  if (sPersonnageChoisi == "rose") {
    let bToucheAEteAppuye = false;

    if (touche) {
      oPersonnageRoseJeu.image,
        oPersonnageRoseJeu.xFrame,
        oPersonnageRoseJeu.yFrame,
        oPersonnageRoseJeu.largeurFrame,
        oPersonnageRoseJeu.hauteurFrame,
        oPersonnageRoseJeu.largeur / 2,
        oPersonnageRoseJeu.hauteur / 2,
        oPersonnageRoseJeu.largeur,
        oPersonnageRoseJeu.hauteur;
      bToucheAEteAppuye = true;
      let actionTouche = touche;
      touche = null;

      if (actionTouche == "ArrowRight" || actionTouche == "d") {
        ChangerAnimationPersonnage("droite");
        oPersonnageRoseJeu.x += Largeur_case;
      } else if (actionTouche == "ArrowLeft" || actionTouche == "a") {
        ChangerAnimationPersonnage("gauche");
        oPersonnageRoseJeu.x -= Largeur_case;
      } else if (actionTouche == "ArrowUp" || actionTouche == "w") {
        ChangerAnimationPersonnage("haut");
        oPersonnageRoseJeu.y -= Hauteur_case;
      } else if (actionTouche == "ArrowDown" || actionTouche == "s") {
        ChangerAnimationPersonnage("bas");
        oPersonnageRoseJeu.y += Hauteur_case;
      }
    }

    const Min_x = 168;
    const Min_y = 138;
    const Max_x = nLargeurCanvas - 168 - oPersonnageRoseJeu.largeur;
    const Max_y = nHauteurCanvas - 117 - oPersonnageRoseJeu.hauteur;

    oPersonnageRoseJeu.x = Math.max(
      Min_x,
      Math.min(oPersonnageRoseJeu.x, Max_x)
    );
    oPersonnageRoseJeu.y = Math.max(
      Min_y,
      Math.min(oPersonnageRoseJeu.y, Max_y)
    );

    oPersonnageRoseJeu.xFrame = 0;
  }
}

function DessinerJoueurChoisi() {
  /////////////////////////////////////////////// Aqua
  if (sPersonnageChoisi == "bleu") {
    if (oPersonnageBleuJeu.directionActuelle == "gauche") {
      oContexte.save();

      oContexte.translate(
        oPersonnageBleuJeu.x + oPersonnageBleuJeu.largeur / 2,
        oPersonnageBleuJeu.y + oPersonnageBleuJeu.hauteur / 2
      );

      oContexte.scale(-1, 1);

      oContexte.drawImage(
        oPersonnageBleuJeu.image,
        oPersonnageBleuJeu.xFrame * oPersonnageBleuJeu.largeurFrame,
        oPersonnageBleuJeu.yFrame * oPersonnageBleuJeu.hauteurFrame,
        oPersonnageBleuJeu.largeurFrame,
        oPersonnageBleuJeu.hauteurFrame,
        -oPersonnageBleuJeu.largeur / 2,
        -oPersonnageBleuJeu.hauteur / 2,
        oPersonnageBleuJeu.largeur,
        oPersonnageBleuJeu.hauteur
      );

      oContexte.restore();
    } else {
      oContexte.drawImage(
        oPersonnageBleuJeu.image,
        oPersonnageBleuJeu.xFrame * oPersonnageBleuJeu.largeurFrame,
        oPersonnageBleuJeu.yFrame * oPersonnageBleuJeu.hauteurFrame,
        oPersonnageBleuJeu.largeurFrame,
        oPersonnageBleuJeu.hauteurFrame,
        oPersonnageBleuJeu.x,
        oPersonnageBleuJeu.y,
        oPersonnageBleuJeu.largeur,
        oPersonnageBleuJeu.hauteur
      );
    }

    /////////////////////////////////////////////// Cerise
  }
  if (sPersonnageChoisi == "rose") {
    if (oPersonnageRoseJeu.directionActuelle == "gauche") {
      oContexte.save();

      oContexte.translate(
        oPersonnageRoseJeu.x + oPersonnageRoseJeu.largeur / 2,
        oPersonnageRoseJeu.y + oPersonnageRoseJeu.hauteur / 2
      );

      oContexte.scale(-1, 1);

      oContexte.drawImage(
        oPersonnageRoseJeu.image,
        oPersonnageRoseJeu.xFrame * oPersonnageRoseJeu.largeurFrame,
        oPersonnageRoseJeu.yFrame * oPersonnageRoseJeu.hauteurFrame,
        oPersonnageRoseJeu.largeurFrame,
        oPersonnageRoseJeu.hauteurFrame,
        -oPersonnageRoseJeu.largeur / 2,
        -oPersonnageRoseJeu.hauteur / 2,
        oPersonnageRoseJeu.largeur,
        oPersonnageRoseJeu.hauteur
      );

      oContexte.restore();
    } else {
      oContexte.drawImage(
        oPersonnageRoseJeu.image,
        oPersonnageRoseJeu.xFrame * oPersonnageRoseJeu.largeurFrame,
        oPersonnageRoseJeu.yFrame * oPersonnageRoseJeu.hauteurFrame,
        oPersonnageRoseJeu.largeurFrame,
        oPersonnageRoseJeu.hauteurFrame,
        oPersonnageRoseJeu.x,
        oPersonnageRoseJeu.y,
        oPersonnageRoseJeu.largeur,
        oPersonnageRoseJeu.hauteur
      );
    }
  }
}

function UI() {
  oContexte.strokeStyle = "black";
  oContexte.lineWidth = 7;
  oContexte.strokeRect(230, 15, 570, 90);

  oContexte.fillStyle = "sienna";
  oContexte.fillRect(230, 15, 570, 90);

  oContexte.fillStyle = "white";
  oContexte.font = "60px 'Press Start 2P'";
  oContexte.fillText("MANCHE " + manche, nLargeurCanvas / 2, 95);

  // ><
  oContexte.lineWidth = 4;

  if (minuterie <= 10 && minuterie >= 7) {
    oContexte.fillStyle = "green";
    oContexte.strokeRect(130, 702, 786, 75);
    oContexte.fillRect(130, 702, 786, 75);

    oContexte.fillStyle = "black";
    oContexte.font = "40px 'Press Start 2P'";
    oContexte.fillText(
      `TEMPS RESTANT : ${minuterie} s`,
      nLargeurCanvas / 2,
      nHauteurCanvas - 20
    );
  } else if (minuterie <= 6 && minuterie >= 4) {
    oContexte.fillStyle = "yellow";
    oContexte.strokeRect(130, 702, 786, 75);
    oContexte.fillRect(130, 702, 786, 75);

    oContexte.fillStyle = "black";
    oContexte.font = "40px 'Press Start 2P'";
    oContexte.fillText(
      `TEMPS RESTANT : ${minuterie} s`,
      nLargeurCanvas / 2,
      nHauteurCanvas - 20
    );
  } else if (minuterie <= 3 && minuterie >= 0) {
    MusiqueCountdown.play();
    oContexte.fillStyle = "red";
    oContexte.strokeRect(130, 702, 786, 75);
    oContexte.fillRect(130, 702, 786, 75);

    oContexte.fillStyle = "black";
    oContexte.font = "40px 'Press Start 2P'";
    oContexte.fillText(
      `TEMPS RESTANT : ${minuterie} s`,
      nLargeurCanvas / 2,
      nHauteurCanvas - 20
    );
  }
}

function AfficherCases() {
  for (let i = 0; i < oCasesJeu.length; i++) {
    let CarreJeu = oCasesJeu[i];
    if (CarreJeu.cacher == true) {
      continue;
    }
    oContexte.fillStyle = CarreJeu.couleur;
    oContexte.fillRect(
      CarreJeu.x,
      CarreJeu.y,
      CarreJeu.largeur,
      CarreJeu.hauteur
    );
  }
}

function FondMort() {
  if (bFondMort == false) {
    nFondMortAleatoire = Math.floor(Math.random() * 3 + 1);
    bFondMort = true;
  }

  if (nFondMortAleatoire == 1) {
    oContexte.drawImage(
      oImgFondLave.image,
      oImgFondLave.xFrame * oImgFondLave.largeurFrame,
      oImgFondLave.yFrame * oImgFondLave.hauteurFrame,
      oImgFondLave.largeurFrame,
      oImgFondLave.hauteurFrame,
      oImgFondLave.x,
      oImgFondLave.y,
      oImgFondLave.largeur,
      oImgFondLave.hauteur
    );

    if (fondtemps % 15 == 0) {
      oImgFondLave.xFrame += 1;
      if (oImgFondLave.xFrame >= oImgFondLave.nbFrameMax) {
        oImgFondLave.xFrame = 0;
      }
    }
  } else if (nFondMortAleatoire == 2) {
    oContexte.fillStyle = "lightgrey";
    oContexte.fillRect(168, 168, nLargeurCanvas - 336, nHauteurCanvas - 255);

    oContexte.drawImage(
      oImgFondAcide.image,
      oImgFondAcide.xFrame * oImgFondAcide.largeurFrame,
      oImgFondAcide.yFrame * oImgFondAcide.hauteurFrame,
      oImgFondAcide.largeurFrame,
      oImgFondAcide.hauteurFrame,
      oImgFondAcide.x,
      oImgFondAcide.y,
      oImgFondAcide.largeur,
      oImgFondAcide.hauteur
    );
    if (fondtemps % 15 == 0) {
      oImgFondAcide.xFrame += 1;
      if (oImgFondAcide.xFrame >= oImgFondAcide.nbFrameMax) {
        oImgFondAcide.xFrame = 0;
      }
    }
  } else if (nFondMortAleatoire == 3) {
    oContexte.fillStyle = "black";
    oContexte.fillRect(168, 168, nLargeurCanvas - 336, nHauteurCanvas - 255);
  }
  if (sEtat == "Fin") {
    bFondChoisi = false;
  }
}

function RéintaliserJeuComplet() {
  oPersonnageBleuJeu.x = Largeur_case;
  oPersonnageBleuJeu.y = Hauteur_case;
  oPersonnageBleuJeu.directionActuelle = "bas";

  manche = 1;
  minuterie = 11;
  fondtemps = 0;

  bFondMort = false;
  nFondMortAleatoire = 0;
  remettreCases();

  bFondJeu2 = false;
  nFondJeu2Aleatoire = 0;

  oPersonnageBleuTombant.y = 300;
  oPersonnageRoseTombant.y = 300;

  SonVent.pause();


  // oContexte.textAlign = "left";

  sEtat = "Intro";
}

// ////////////////////////////////////////////Jeu 2
function FondJeu2 (){
   
  if (bFondJeu2 == false) {
    nFondJeu2Aleatoire = Math.floor(Math.random() * 100 + 1);
    bFondJeu2 = true;
  }

  if (nFondJeu2Aleatoire <= 16.5) {
    oContexte.drawImage(
      FondBaie.image,
      FondBaie.x,
      FondBaie.y,
      FondBaie.largeur,
      FondBaie.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 33 && nFondJeu2Aleatoire > 16.5) {
    oContexte.drawImage(
      FondCiel.image,
      FondCiel.x,
      FondCiel.y,
      FondCiel.largeur,
      FondCiel.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 49.5 && nFondJeu2Aleatoire > 33) {
    oContexte.drawImage(
      FondVille.image,
      FondVille.x,
      FondVille.y,
      FondVille.largeur,
      FondVille.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 66 && nFondJeu2Aleatoire > 49.5) {
    oContexte.drawImage(
      FondDirigeable.image,
      FondDirigeable.x,
      FondDirigeable.y,
      FondDirigeable.largeur,
      FondDirigeable.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 82.5 && nFondJeu2Aleatoire > 66) {
    oContexte.drawImage(
      FondIceberg.image,
      FondIceberg.x,
      FondIceberg.y,
      FondIceberg.largeur,
      FondIceberg.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 99 && nFondJeu2Aleatoire > 82.5) {
    oContexte.drawImage(
      FondCratere.image,
      FondCratere.x,
      FondCratere.y,
      FondCratere.largeur,
      FondCratere.hauteur
    );
  } else if (nFondJeu2Aleatoire <= 100 && nFondJeu2Aleatoire > 99) {
    oContexte.drawImage(
      FondPlanete.image,
      FondPlanete.x,
      FondPlanete.y,
      FondPlanete.largeur,
      FondPlanete.hauteur
    );

    oContexte.fillStyle = "white";
    oContexte.fillText(
      "Tu as eu l'image secret !",
      nLargeurCanvas / 2,
      nHauteurCanvas / 2 + 250
    );
    oContexte.fillText(
      "Prend une capture d'écran !",
      nLargeurCanvas / 2,
      nHauteurCanvas / 2 + 350
    );
  }
}

function Ballon (){
    mettreAJourBallons();

     //////////////////////////////////////////////////////////////////////////////// Ballon au mille couleur
 for (let i = 0; i < BallonsActifs.length; i++) {
     let ballon = BallonsActifs[i]; 
     if (ballon.image && ballon.image.complete && ballon.image.naturalWidth > 0) {
        if (ballon.tempsAvantDepart <= 0) {
          oContexte.drawImage(
                ballon.image,
                ballon.x, 
                ballon.y, 
                ballon.largeur, 
                ballon.hauteur
            );
            }
        }
    }
}


function AfficherJeu2() {
  //////////////////////////////////////////////////////////////////////////////// Palier de Pierre
  oContexte.drawImage(
    FondPalierBallon.image,
    FondPalierBallon.x,
    FondPalierBallon.y,
    FondPalierBallon.largeur,
    FondPalierBallon.hauteur
  );

  oContexte.font = "60px Pacifico";
  oContexte.fillStyle = "black";
  oContexte.fillText("Merci d'avoir joué !", nLargeurCanvas / 2, nHauteurCanvas - 60);

  //////////////////////////////////////////////////////////////////////////////// Personnage qui danse
   if (fondtemps % 8 == 0) {
    oPersonnageBleuConcluDanse.xFrame++;
  }
  if (oPersonnageBleuConcluDanse.xFrame >= oPersonnageBleuConcluDanse.nbFrameMax) {
    oPersonnageBleuConcluDanse.xFrame = 0;
  }

  oContexte.drawImage(
    oPersonnageBleuConcluDanse.image,
    oPersonnageBleuConcluDanse.xFrame * oPersonnageBleuConcluDanse.largeurFrame,
    oPersonnageBleuConcluDanse.yFrame * oPersonnageBleuConcluDanse.hauteurFrame,
    oPersonnageBleuConcluDanse.largeurFrame,
    oPersonnageBleuConcluDanse.hauteurFrame,
    oPersonnageBleuConcluDanse.x,
    oPersonnageBleuConcluDanse.y,
    oPersonnageBleuConcluDanse.largeur,
    oPersonnageBleuConcluDanse.hauteur
  );

  oContexte.save();
  oContexte.translate(
   oPersonnageRoseConcluDanse.x +oPersonnageRoseConcluDanse.largeur / 2,
   oPersonnageRoseConcluDanse.y
  );
  oContexte.scale(-1, 1);
  oContexte.translate(
    -(oPersonnageRoseConcluDanse.x +oPersonnageRoseConcluDanse.largeur / 2),
    -oPersonnageRoseConcluDanse.y
  );

  if (fondtemps % 8 == 0) {
   oPersonnageRoseConcluDanse.xFrame++;
  }
  if (oPersonnageRoseConcluDanse.xFrame >=oPersonnageRoseConcluDanse.nbFrameMax) {
   oPersonnageRoseConcluDanse.xFrame = 0;
  }

  oContexte.drawImage(
   oPersonnageRoseConcluDanse.image,
   oPersonnageRoseConcluDanse.xFrame *oPersonnageRoseConcluDanse.largeurFrame,
   oPersonnageRoseConcluDanse.yFrame *oPersonnageRoseConcluDanse.hauteurFrame,
   oPersonnageRoseConcluDanse.largeurFrame,
   oPersonnageRoseConcluDanse.hauteurFrame,
   oPersonnageRoseConcluDanse.x,
   oPersonnageRoseConcluDanse.y,
   oPersonnageRoseConcluDanse.largeur,
   oPersonnageRoseConcluDanse.hauteur
  );

  oContexte.restore();
  if (sEtat == "Intro") {
    bFondJeu2 = false;
  }
 }


// ////////////////////////////////////////////Fin

function afficherFinMauvais() {
  oContexte.drawImage(
    oImgFinMauvais.image,
    oImgFinMauvais.x,
    oImgFinMauvais.y,
    oImgFinMauvais.largeur,
    oImgFinMauvais.hauteur
  );

  if (sPersonnageChoisi == "bleu") {
    oContexte.save();

    oContexte.translate(
      oPersonnageBleuTombant.x + oPersonnageBleuTombant.largeur / 2,
      oPersonnageBleuTombant.y + oPersonnageBleuTombant.hauteur / 2
    );

    oContexte.rotate(Math.PI / 2);

    oContexte.translate(
      -(oPersonnageBleuTombant.x + oPersonnageBleuTombant.largeur / 2),
      -oPersonnageBleuTombant.y
    );

    oContexte.drawImage(
      oPersonnageBleuTombant.image,
      oPersonnageBleuTombant.xFrame,
      oPersonnageBleuTombant.yFrame,
      oPersonnageBleuTombant.largeurFrame,
      oPersonnageBleuTombant.hauteurFrame,
      oPersonnageBleuTombant.x,
      oPersonnageBleuTombant.y,
      oPersonnageBleuTombant.largeur,
      oPersonnageBleuTombant.hauteur
    );

    oContexte.restore();

    oPersonnageBleuTombant.y =
      oPersonnageBleuTombant.y + oPersonnageBleuTombant.vitesse;

    if (oPersonnageBleuTombant.y > nHauteurCanvas) {
      oPersonnageBleuTombant.y = 0;
    }
  }
  if (sPersonnageChoisi == "rose") {
    oContexte.save();

    oContexte.translate(
      oPersonnageRoseTombant.x + oPersonnageRoseTombant.largeur / 2,
      oPersonnageRoseTombant.y + oPersonnageRoseTombant.hauteur / 2
    );

    oContexte.rotate(Math.PI / 2);

    oContexte.translate(
      -(oPersonnageRoseTombant.x + oPersonnageRoseTombant.largeur / 2),
      -oPersonnageRoseTombant.y
    );

    oContexte.drawImage(
      oPersonnageRoseTombant.image,
      oPersonnageRoseTombant.xFrame,
      oPersonnageRoseTombant.yFrame,
      oPersonnageRoseTombant.largeurFrame,
      oPersonnageRoseTombant.hauteurFrame,
      oPersonnageRoseTombant.x,
      oPersonnageRoseTombant.y,
      oPersonnageRoseTombant.largeur,
      oPersonnageRoseTombant.hauteur
    );

    oContexte.restore();

    oPersonnageRoseTombant.y =
      oPersonnageRoseTombant.y + oPersonnageRoseTombant.vitesse;

    if (oPersonnageRoseTombant.y > nHauteurCanvas) {
      oPersonnageRoseTombant.y = 0;
    }
  }

  oContexte.fillStyle = "black";
  oContexte.fillRect(0, 0, 88, nHauteurCanvas);
  oContexte.fillRect(nLargeurCanvas - 88, 0, 88, nHauteurCanvas);

  oContexte.fillStyle = "black";
  oContexte.fillRect(88, 0, nLargeurCanvas - 176, 93);
  oContexte.fillRect(88, nHauteurCanvas - 93, nLargeurCanvas - 176, 93);

  oContexte.font = "60px Pacifico";
  oContexte.fillStyle = "white";
  oContexte.fillText(
    "Color Minigames",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 327
  );
  oContexte.font = "50px Pacifico";
  oContexte.fillText(
    "Par Zacharie Poliquin",
    nLargeurCanvas / 2,
    nHauteurCanvas - 25
  );
  oContexte.font = "60px Pacifico";
  oContexte.fillStyle = "red";
  oContexte.fillText("Tu as Perdu !", nLargeurCanvas / 2, 510);

  nMinuterieCasesFin1++;

  if (nMinuterieCasesFin1 % 10 == 0) {
    let CaseChangeableFin1 = oImgCasesFin1.shift();
    oImgCasesFin1.push(CaseChangeableFin1);
  }

  for (let i = 0; i < oImgCasesFin1.length; i++) {
    let CarreFin1 = oImgCasesFin1[i];

    if (i < 4) {
      oContexte.fillStyle = "purple";
    } else if (i >= 4 && i < 8) {
      oContexte.fillStyle = "blue";
    } else if (i >= 8 && i < 12) {
      oContexte.fillStyle = "green";
    } else if (i >= 12 && i < 16) {
      oContexte.fillStyle = "yellow";
    } else if (i >= 16 && i < 20) {
      oContexte.fillStyle = "orange";
    } else if (i >= 20 && i < 24) {
      oContexte.fillStyle = "red";
    } else if (i >= 24 && i < 28) {
      oContexte.fillStyle = "pink";
    } else {
      oContexte.fillStyle = "black";
    }
    oContexte.fillRect(
      CarreFin1.x,
      CarreFin1.y,
      CarreFin1.largeur,
      CarreFin1.hauteur
    );
  }

  nMinuterieCasesFin2++;

  if (nMinuterieCasesFin2 % 10 == 0) {
    let CaseChangeableFin2 = oImgCasesFin2.shift();
    oImgCasesFin2.push(CaseChangeableFin2);
  }

  for (let i = 0; i < oImgCasesFin2.length; i++) {
    let CarreFin2 = oImgCasesFin2[i];

    if (i < 4) {
      oContexte.fillStyle = "purple";
    } else if (i >= 4 && i < 8) {
      oContexte.fillStyle = "blue";
    } else if (i >= 8 && i < 12) {
      oContexte.fillStyle = "green";
    } else if (i >= 12 && i < 16) {
      oContexte.fillStyle = "yellow";
    } else if (i >= 16 && i < 20) {
      oContexte.fillStyle = "orange";
    } else if (i >= 20 && i < 24) {
      oContexte.fillStyle = "red";
    } else if (i >= 24 && i < 28) {
      oContexte.fillStyle = "pink";
    } else {
      oContexte.fillStyle = "black";
    }
    oContexte.fillRect(
      CarreFin2.x,
      CarreFin2.y,
      CarreFin2.largeur,
      CarreFin2.hauteur
    );
  }
}

function afficherFinBon() {
  oContexte.drawImage(
    oImgFinBonne.image,
    oImgFinBonne.x,
    oImgFinBonne.y,
    oImgFinBonne.largeur,
    oImgFinBonne.hauteur
  );

  oContexte.fillStyle = "black";
  oContexte.fillRect(0, 0, 88, nHauteurCanvas);
  oContexte.fillRect(nLargeurCanvas - 88, 0, 88, nHauteurCanvas);

  oContexte.fillStyle = "black";
  oContexte.fillRect(88, 0, nLargeurCanvas - 176, 93);
  oContexte.fillRect(88, nHauteurCanvas - 93, nLargeurCanvas - 176, 93);

  oContexte.font = "60px Pacifico";
  oContexte.fillStyle = "white";
  oContexte.fillText(
    "Color Minigames",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 327
  );
  oContexte.font = "50px Pacifico";
  oContexte.fillText(
    "Par Zacharie Poliquin",
    nLargeurCanvas / 2,
    nHauteurCanvas - 30
  );

  oContexte.font = "60px Pacifico";
  oContexte.fillStyle = "gold";
  oContexte.fillText("Tu as Gagné !", nLargeurCanvas / 2, 410);

  nMinuterieCasesFin1++;

  if (nMinuterieCasesFin1 % 10 == 0) {
    let CaseChangeableFin1 = oImgCasesFin1.shift();
    oImgCasesFin1.push(CaseChangeableFin1);
  }

  for (let i = 0; i < oImgCasesFin1.length; i++) {
    let CarreFin1 = oImgCasesFin1[i];

    if (i < 4) {
      oContexte.fillStyle = "purple";
    } else if (i >= 4 && i < 8) {
      oContexte.fillStyle = "blue";
    } else if (i >= 8 && i < 12) {
      oContexte.fillStyle = "green";
    } else if (i >= 12 && i < 16) {
      oContexte.fillStyle = "yellow";
    } else if (i >= 16 && i < 20) {
      oContexte.fillStyle = "orange";
    } else if (i >= 20 && i < 24) {
      oContexte.fillStyle = "red";
    } else if (i >= 24 && i < 28) {
      oContexte.fillStyle = "pink";
    } else {
      oContexte.fillStyle = "black";
    }
    oContexte.fillRect(
      CarreFin1.x,
      CarreFin1.y,
      CarreFin1.largeur,
      CarreFin1.hauteur
    );
  }

  nMinuterieCasesFin2++;

  if (nMinuterieCasesFin2 % 10 == 0) {
    let CaseChangeableFin2 = oImgCasesFin2.shift();
    oImgCasesFin2.push(CaseChangeableFin2);
  }

  for (let i = 0; i < oImgCasesFin2.length; i++) {
    let CarreFin2 = oImgCasesFin2[i];

    if (i < 4) {
      oContexte.fillStyle = "purple";
    } else if (i >= 4 && i < 8) {
      oContexte.fillStyle = "blue";
    } else if (i >= 8 && i < 12) {
      oContexte.fillStyle = "green";
    } else if (i >= 12 && i < 16) {
      oContexte.fillStyle = "yellow";
    } else if (i >= 16 && i < 20) {
      oContexte.fillStyle = "orange";
    } else if (i >= 20 && i < 24) {
      oContexte.fillStyle = "red";
    } else if (i >= 24 && i < 28) {
      oContexte.fillStyle = "pink";
    } else {
      oContexte.fillStyle = "black";
    }
    oContexte.fillRect(
      CarreFin2.x,
      CarreFin2.y,
      CarreFin2.largeur,
      CarreFin2.hauteur
    );
  }
}

function AppuyerBouton(
  PositionXCurseur,
  PositionYCurseur,
  PositionXObjet,
  PositionYObjet,
  largeurObjet,
  hauteurObjet
) {
  let DansZone = false;

  if (
    PositionXCurseur > PositionXObjet &&
    PositionYCurseur > PositionYObjet &&
    PositionXCurseur < PositionXObjet + largeurObjet &&
    PositionYCurseur < PositionYObjet + hauteurObjet
  ) {
    DansZone = true;
  }

  return DansZone;
}

window.addEventListener("load", initialiser);
