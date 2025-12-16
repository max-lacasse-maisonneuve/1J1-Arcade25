// ============ VARIABLES
/*@autor: Jamila Vargas*/
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

//============= DECOR
/*decor intro*/
let oFondDebut = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "../assets/images/backgrounds/bg1.png",
};
oFondDebut.image.src = oFondDebut.src;
let oNuage1 = {
  x: -390,
  y: 0,
  hauteur: 500,
  largeur: 500,
  vitesse: 1,
  image: new Image(),
  src: "../assets/images/backgrounds/nuage_1.png",
};
oNuage1.image.src = oNuage1.src;
let oNuage2 = {
  x: -400,
  y: 0,
  hauteur: 500,
  largeur: 500,
  vitesse: 2,
  image: new Image(),
  src: "../assets/images/backgrounds/nuage_2.png",
};
oNuage2.image.src = oNuage2.src;

/*decor jeuporte*/
let oFondPorte = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "../assets/images/backgrounds/bg2.png",
};
oFondPorte.image.src = oFondPorte.src;
let oPortefermer_1 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/backgrounds/portefermer.png",
  srcOuvert: "../assets/images/backgrounds/porteouvert.png",
};
oPortefermer_1.image.src = oPortefermer_1.src;
let oPortefermer_2 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/backgrounds/portefermer.png",
  srcOuvert: "../assets/images/backgrounds/porteouvert.png",
};
oPortefermer_2.image.src = oPortefermer_2.src;
let oPortefermer_3 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/backgrounds/portefermer.png",
  srcOuvert: "../assets/images/backgrounds/porteouvert.png",
};
oPortefermer_3.image.src = oPortefermer_3.src;

/*decor jeuboss*/
let oFondBoss = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "../assets/images/backgrounds/bg3.png",
};
oFondBoss.image.src = oFondBoss.src;

/*decor bravo*/
let oFondBravo = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "../assets/images/backgrounds/bg4.png",
};
oFondBravo.image.src = oFondBravo.src;
let oBallon_1 = {
  x: 50,
  y: 800,
  hauteur: 500,
  largeur: 500,
  vitesse: 2,
  image: new Image(),
  src: "../assets/images/backgrounds/Ballon.png",
};
oBallon_1.image.src = oBallon_1.src;
let oBallon_2 = {
  x: 500,
  y: 800,
  hauteur: 500,
  largeur: 500,
  vitesse: 1,
  image: new Image(),
  src: "../assets/images/backgrounds/Ballon.png",
};
oBallon_2.image.src = oBallon_2.src;

//============ PERSONNAGES

let oPrincesse = {
  x: 0,
  y: 0,
  hauteur: 128,
  largeur: 128,
  image: new Image(),
  src: "../assets/images/perso/princessepeur.png",
  srcestHeureux: "../assets/images/perso/princesseheureuse.png",
};
let oChevalier = {
  x: 0,
  y: 0,
  hauteur: 128,
  largeur: 128,
  image: new Image(),
  src: "../assets/images/perso/Chevalierfache.png",
  srcHeureux: "../assets/images/perso/ChevalierHeureux.png",
  srcDos: "../assets/images/perso/ChevalierDos.png",
  srcTriste: "../assets/images/perso/ChevalierTriste.png",
};
let oDragon = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/monstre/Dragon.png",
};
oDragon.image.src = oDragon.src;
let oMonstre1 = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/monstre/Monstre_1.png",
};
oMonstre1.image.src = oMonstre1.src;
let oMonstre2 = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/monstre/Monstre_2.png",
};
oMonstre2.image.src = oMonstre2.src;
let oMonstre3 = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/monstre/Monstre_3.png",
};
oMonstre3.image.src = oMonstre3.src;

//============ MONSTRE EN CHIFFRE

let Mchiffre_un = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_un.png",
};
Mchiffre_un.image.src = Mchiffre_un.src;
let Mchiffre_deux = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_deux.png",
};
Mchiffre_deux.image.src = Mchiffre_deux.src;
let Mchiffre_trois = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_trois.png",
};
Mchiffre_trois.image.src = Mchiffre_trois.src;
let Mchiffre_quatre = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_quatre.png",
};
Mchiffre_quatre.image.src = Mchiffre_quatre.src;
let Mchiffre_cinq = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_cinq.png",
};
Mchiffre_cinq.image.src = Mchiffre_cinq.src;
let Mchiffre_six = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_six.png",
};
Mchiffre_six.image.src = Mchiffre_six.src;
let Mchiffre_sept = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_sept.png",
};
Mchiffre_sept.image.src = Mchiffre_sept.src;
let Mchiffre_huit = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_huit.png",
};
Mchiffre_huit.image.src = Mchiffre_huit.src;
let Mchiffre_neuf = {
  x: 0,
  y: 0,
  hauteur: 150,
  largeur: 150,
  image: new Image(),
  src: "../assets/images/Monstrechiffre/Mchiffre_neuf.png",
};
Mchiffre_neuf.image.src = Mchiffre_neuf.src;

//=============TEXTE BUBBLE
oTexteBubble1 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/Texte/texte_bubble_1.png",
};
oTexteBubble1.image.src = oTexteBubble1.src;

oTexteBubble2 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/Texte/texte_bubble_2.png",
};
oTexteBubble2.image.src = oTexteBubble2.src;

oTexteBubble3 = {
  x: 0,
  y: 0,
  hauteur: 500,
  largeur: 1000,
  image: new Image(),
  src: "../assets/images/Texte/texte_bubble_3.png",
};
oTexteBubble3.image.src = oTexteBubble3.src;

//===========MUSIQUE

/*music jeuporte*/
let MJeuPorte = {
  son: new Audio("../assets/audio/mporte.wav"),
};
MJeuPorte.son.loop = true;
/*music jeuboss*/
let MBoss = {
  son: new Audio("../assets/audio/mboss.wav"),
};
MBoss.son.loop = true;
MBoss.son.volume = 0.2;
/*music bravo*/
let MBravo = {
  son: new Audio("../assets/audio/mbravo.mp3"),
};
MBravo.son.volume = 0.2;
/*music defaite*/
let MDefaite = {
  son: new Audio("../assets/audio/mdefaite.wav"),
};

//===========QUESTION

/*Section Porte*/
let NbPorte1 = Math.floor(Math.random() * 9);
let NbPorte2 = Math.floor(Math.random() * 9);
let BonneRepPorte = NbPorte1 + NbPorte2;

let MauvaiseRep1 = BonneRepPorte + Math.floor(Math.random() * 5) + 1;
let MauvaiseRep2 = BonneRepPorte - Math.floor(Math.random() * 5) + 1;
if (MauvaiseRep2 == BonneRepPorte) {
  MauvaiseRep2 += 2;
}
/*mettre dans un tableau et mélanger les portes*/
let reponsesPorte = [BonneRepPorte, MauvaiseRep1, MauvaiseRep2];
reponsesPorte.sort(function () {
  let nombreAleatoire = Math.random() * 2 - 1;
  return nombreAleatoire;
});

/*section Boss*/
let NbBoss1 = Math.floor(Math.random() * 5) + 5;
let NbBoss2 = Math.floor(Math.random() * 5) + 5;
let BonneRepBoss = NbBoss1 + NbBoss2;

let MauvaiseRep3 = BonneRepBoss + Math.floor(Math.random() * 5) + 1;
let MauvaiseRep4 = BonneRepBoss - Math.floor(Math.random() * 5) + 1;
if (MauvaiseRep4 == BonneRepBoss) {
  MauvaiseRep4 += 2;
}
/*mettre dans un tableau et mélanger les portes*/
let reponsesBoss = [BonneRepBoss, MauvaiseRep3, MauvaiseRep4];
reponsesBoss.sort(function () {
  let nombreAleatoire = Math.random() * 2 - 1;
  return nombreAleatoire;
});

/*zone pour connecter porte et réponse*/
let ChoixRep1;
let ChoixRep2;
let ChoixRep3;

let zones = [
  { ChoixRep1, x: 0, y: 0, largeur: 200, hauteur: 500 },
  { ChoixRep2, x: 400, y: 0, largeur: 200, hauteur: 500 },
  { ChoixRep3, x: 700, y: 0, largeur: 200, hauteur: 500 },
];
//===========AUTRE

let sEtat = "intro";
let NbPorteEssais = 3;

/*Vie*/
let nVies = 7;

oVie = {
  x: 0,
  y: 0,
  hauteur: 50,
  largeur: 100,
  image: new Image(),
  src: "../assets/images/Texte/vie.png",
};
oVie.image.src = oVie.src;

//==========FUNCTION BOUCLE DE JEU

function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", Onclickcanvas);
}
function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);

  if (sEtat == "intro") {
    DessinerIntro();
    DessinerNuage();
  } else if (sEtat == "jeuporte") {
    DessinerJeuPorte();
    AfficherUIjeu();
  } else if (sEtat == "jeuboss") {
    DessinerJeuBoss();
    AfficherUIjeu();
  } else if (sEtat == "bravo") {
    DessinerBravo();
    Ballon();
  } else if (sEtat == "defaite") {
    DessinerDefaite();
  }
}
//
function Onclickcanvas(evenement) {
  if (sEtat == "intro") {
    MJeuPorte.son.play();
    sEtat = "jeuporte";
  } else if (sEtat == "jeuporte") {
    QuestionPorte(evenement);
  } else if (sEtat == "jeuboss") {
    QuestionBoss(evenement);
  } else if (sEtat == "bravo" || sEtat == "defaite") {
    RedémarrerJeu();
  }
}
//==========FUNCTION INTRO

function DessinerIntro() {
  /*fond*/
  oContexte.drawImage(
    oFondDebut.image,
    oFondDebut.x,
    oFondDebut.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  /*personnage*/
  oContexte.drawImage(
    oDragon.image,
    300,
    -60,
    oDragon.largeur * 8,
    oDragon.hauteur * 8
  );
  oContexte.drawImage(
    oPrincesse.image,
    450,
    320,
    oPrincesse.largeur * 4,
    oPrincesse.hauteur * 4
  );
  oPrincesse.image.src = oPrincesse.src;
  oContexte.drawImage(
    oChevalier.image,
    0,
    300,
    oChevalier.largeur * 4,
    oChevalier.hauteur * 4
  );
  oChevalier.image.src = oChevalier.src;
}
function DessinerNuage() {
  /*vitesse nuage*/
  oNuage1.x += oNuage1.vitesse;
  if (oNuage1.x > nLargeurCanvas) {
    oNuage1.x = -400;
  }
  /*nuage1*/
  oContexte.drawImage(
    oNuage1.image,
    oNuage1.x,
    -170,
    oNuage1.largeur,
    oNuage1.hauteur
  );
  /*texte*/
  oContexte.drawImage(
    oTexteBubble1.image,
    -250,
    -200,
    oTexteBubble1.largeur * 1.5,
    oTexteBubble1.hauteur * 1.5
  );
  /*style*/
  oContexte.fillStyle = "black";
  oContexte.font = "50px fette";
  oContexte.fillText(`sauvez la princesse`, 280, 160);

  oContexte.font = "30px fette";
  oContexte.fillText("toucher n'importe où pour commencer", 245, 270);

  /*nuage2*/
  oNuage2.x += oNuage2.vitesse;
  if (oNuage2.x > nLargeurCanvas) {
    oNuage2.x = -400;
  }

  oContexte.drawImage(
    oNuage2.image,
    oNuage2.x,
    -35,
    oNuage2.largeur,
    oNuage2.hauteur
  );
}

//========= FUNCTION JEUPORTE

function DessinerJeuPorte() {
  /*fond*/
  oContexte.drawImage(
    oFondPorte.image,
    oFondPorte.x,
    oFondPorte.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  /*personnage*/
  oContexte.drawImage(
    oChevalier.image,
    240,
    400,
    oChevalier.largeur * 4,
    oChevalier.hauteur * 4
  );
  /*portes*/
  oContexte.drawImage(
    oPortefermer_1.image,
    -15,
    -110,
    oPortefermer_1.largeur,
    oPortefermer_1.hauteur * 1.5
  );
  oContexte.drawImage(
    oPortefermer_2.image,
    -380,
    -110,
    oPortefermer_2.largeur,
    oPortefermer_2.hauteur * 1.5
  );
  oContexte.drawImage(
    oPortefermer_3.image,
    360,
    -110,
    oPortefermer_3.largeur,
    oPortefermer_3.hauteur * 1.5
  );
  /*question*/
  oContexte.drawImage(
    oTexteBubble1.image,
    -250,
    -200,
    oTexteBubble1.largeur * 1.5,
    oTexteBubble1.hauteur * 1.5
  );
  /*bulle reponse*/
  oContexte.drawImage(
    oTexteBubble2.image,
    -115,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  oContexte.drawImage(
    oTexteBubble2.image,
    255,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  oContexte.drawImage(
    oTexteBubble2.image,
    630,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  /*coeur*/
  oContexte.drawImage(oVie.image, 850, -5, oVie.largeur * 2, oVie.hauteur * 2);
  /*changement etat personnage*/
  if (sEtat == "jeuporte") {
    oChevalier.image.src = oChevalier.srcDos;
  }
}
function QuestionPorte(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  if (sEtat == "jeuporte") {
    for (let i = 0; i < reponsesPorte.length; i++) {
      /*connecter zone click avec sa zone porte*/
      let zone = zones[i];
      let collision = detecterClicObjet(curseurX, curseurY, zone);

      if (collision == true) {
        if (reponsesPorte[i] == BonneRepPorte) {
          /*animation porte*/
          if (zone == zones[0]) {
            oPortefermer_2.image.src = oPortefermer_2.srcOuvert;
          } else if (zone == zones[1]) {
            oPortefermer_1.image.src = oPortefermer_1.srcOuvert;
          } else if (zone == zones[2]) {
            oPortefermer_3.image.src = oPortefermer_3.srcOuvert;
          }
          setTimeout(function () {
            oPortefermer_1.image.src = oPortefermer_1.src;
            oPortefermer_2.image.src = oPortefermer_2.src;
            oPortefermer_3.image.src = oPortefermer_3.src;
          }, 1000);

          /*mélange + refresh ui*/
          MélangeNombre();
          AfficherUIjeu();
          /*nombre tours porte*/
          if (NbPorteEssais == 0) {
            setTimeout(function () {
              MJeuPorte.son.pause();
              MBoss.son.play();
              sEtat = "jeuboss";
            }, 500);
          }
        } /*plus de vie*/ else {
          nVies -= 1;
          if (nVies == 0) {
            MJeuPorte.son.pause();
            MDefaite.son.play();
            sEtat = "defaite";
          }
        }
      }
    }
  }
}
function MonstreChiffrePorte() {
  /*Pour le nombre de gauche*/
  if (NbPorte1 == 1) {
    oContexte.drawImage(
      Mchiffre_un.image,
      70,
      400,
      Mchiffre_un.largeur * 2,
      Mchiffre_un.hauteur * 2
    );
  } else if (NbPorte1 == 2) {
    oContexte.drawImage(
      Mchiffre_deux.image,
      70,
      400,
      Mchiffre_deux.largeur * 2,
      Mchiffre_deux.hauteur * 2
    );
  } else if (NbPorte1 == 3) {
    oContexte.drawImage(
      Mchiffre_trois.image,
      70,
      400,
      Mchiffre_trois.largeur * 2,
      Mchiffre_trois.hauteur * 2
    );
  } else if (NbPorte1 == 4) {
    oContexte.drawImage(
      Mchiffre_quatre.image,
      70,
      400,
      Mchiffre_quatre.largeur * 2,
      Mchiffre_quatre.hauteur * 2
    );
  } else if (NbPorte1 == 5) {
    oContexte.drawImage(
      Mchiffre_cinq.image,
      70,
      400,
      Mchiffre_cinq.largeur * 2,
      Mchiffre_cinq.hauteur * 2
    );
  } else if (NbPorte1 == 6) {
    oContexte.drawImage(
      Mchiffre_six.image,
      70,
      400,
      Mchiffre_six.largeur * 2,
      Mchiffre_six.hauteur * 2
    );
  } else if (NbPorte1 == 7) {
    oContexte.drawImage(
      Mchiffre_sept.image,
      70,
      400,
      Mchiffre_sept.largeur * 2,
      Mchiffre_sept.hauteur * 2
    );
  } else if (NbPorte1 == 8) {
    oContexte.drawImage(
      Mchiffre_huit.image,
      70,
      400,
      Mchiffre_huit.largeur * 2,
      Mchiffre_huit.hauteur * 2
    );
  } else if (NbPorte1 == 9) {
    oContexte.drawImage(
      Mchiffre_neuf.image,
      70,
      400,
      Mchiffre_neuf.largeur * 2,
      Mchiffre_neuf.hauteur * 2
    );
  }

  /*Pour le nombre de droite*/
  if (NbPorte2 == 1) {
    oContexte.drawImage(
      Mchiffre_un.image,
      570,
      400,
      Mchiffre_un.largeur * 2,
      Mchiffre_un.hauteur * 2
    );
  } else if (NbPorte2 == 2) {
    oContexte.drawImage(
      Mchiffre_deux.image,
      570,
      400,
      Mchiffre_deux.largeur * 2,
      Mchiffre_deux.hauteur * 2
    );
  } else if (NbPorte2 == 3) {
    oContexte.drawImage(
      Mchiffre_trois.image,
      570,
      400,
      Mchiffre_trois.largeur * 2,
      Mchiffre_trois.hauteur * 2
    );
  } else if (NbPorte2 == 4) {
    oContexte.drawImage(
      Mchiffre_quatre.image,
      570,
      400,
      Mchiffre_quatre.largeur * 2,
      Mchiffre_quatre.hauteur * 2
    );
  } else if (NbPorte2 == 5) {
    oContexte.drawImage(
      Mchiffre_cinq.image,
      570,
      400,
      Mchiffre_cinq.largeur * 2,
      Mchiffre_cinq.hauteur * 2
    );
  } else if (NbPorte2 == 6) {
    oContexte.drawImage(
      Mchiffre_six.image,
      570,
      400,
      Mchiffre_six.largeur * 2,
      Mchiffre_six.hauteur * 2
    );
  } else if (NbPorte2 == 7) {
    oContexte.drawImage(
      Mchiffre_sept.image,
      570,
      400,
      Mchiffre_sept.largeur * 2,
      Mchiffre_sept.hauteur * 2
    );
  } else if (NbPorte2 == 8) {
    oContexte.drawImage(
      Mchiffre_huit.image,
      570,
      400,
      Mchiffre_huit.largeur * 2,
      Mchiffre_huit.hauteur * 2
    );
  } else if (NbPorte2 == 9) {
    oContexte.drawImage(
      Mchiffre_neuf.image,
      570,
      400,
      Mchiffre_neuf.largeur * 2,
      Mchiffre_neuf.hauteur * 2
    );
  }
}
//========= FUNCTION JEUBOSS

function DessinerJeuBoss() {
  /*fond*/
  oContexte.drawImage(
    oFondBoss.image,
    oFondBoss.x,
    oFondBoss.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  /*personnage*/
  oContexte.drawImage(
    oChevalier.image,
    50,
    300,
    oChevalier.largeur * 4,
    oChevalier.hauteur * 4
  );
  oChevalier.image.src = oChevalier.src;
  oContexte.drawImage(
    oDragon.image,
    300,
    -160,
    oDragon.largeur * 8,
    oDragon.hauteur * 8
  );
  /*question*/
  oContexte.drawImage(
    oTexteBubble1.image,
    -250,
    -200,
    oTexteBubble1.largeur * 1.5,
    oTexteBubble1.hauteur * 1.5
  );
  /*bulle reponse*/
  oContexte.drawImage(
    oTexteBubble2.image,
    -115,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  oContexte.drawImage(
    oTexteBubble2.image,
    255,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  oContexte.drawImage(
    oTexteBubble2.image,
    630,
    200,
    oTexteBubble2.largeur * 0.5,
    oTexteBubble2.hauteur * 0.5
  );
  /*coeur*/
  oContexte.drawImage(oVie.image, 850, -5, oVie.largeur * 2, oVie.hauteur * 2);
}
function QuestionBoss(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  if (sEtat == "jeuboss") {
    for (let i = 0; i < reponsesBoss.length; i++) {
      /*connecter zone a la reponse*/
      let zone = zones[i];
      let collision = detecterClicObjet(curseurX, curseurY, zone);

      if (collision == true) {
        if (reponsesBoss[i] == BonneRepBoss) {
          MBoss.son.pause();
          MBravo.son.play();
          sEtat = "bravo";
        } else {
          nVies -= 1;
          if (nVies == 0) {
            MBoss.son.pause();
            MDefaite.son.play();
            sEtat = "defaite";
          }
        }
      }
    }
  }
}
function MonstreChiffreBoss() {
  /*Pour le nombre de gauche*/
  if (NbBoss1 == 5) {
    oContexte.drawImage(
      Mchiffre_cinq.image,
      10,
      530,
      Mchiffre_cinq.largeur * 1.5,
      Mchiffre_cinq.hauteur * 1.5
    );
  } else if (NbBoss1 == 6) {
    oContexte.drawImage(
      Mchiffre_six.image,
      10,
      530,
      Mchiffre_six.largeur * 1.5,
      Mchiffre_six.hauteur * 1.5
    );
  } else if (NbBoss1 == 7) {
    oContexte.drawImage(
      Mchiffre_sept.image,
      10,
      530,
      Mchiffre_sept.largeur * 1.5,
      Mchiffre_sept.hauteur * 1.5
    );
  } else if (NbBoss1 == 8) {
    oContexte.drawImage(
      Mchiffre_huit.image,
      10,
      530,
      Mchiffre_huit.largeur * 1.5,
      Mchiffre_huit.hauteur * 1.5
    );
  } else if (NbBoss1 == 9) {
    oContexte.drawImage(
      Mchiffre_neuf.image,
      10,
      530,
      Mchiffre_neuf.largeur * 1.5,
      Mchiffre_neuf.hauteur * 1.5
    );
  }

  /*Pour le nombre de droite*/
  if (NbBoss2 == 5) {
    oContexte.drawImage(
      Mchiffre_cinq.image,
      750,
      530,
      Mchiffre_cinq.largeur * 1.5,
      Mchiffre_cinq.hauteur * 1.5
    );
  } else if (NbBoss2 == 6) {
    oContexte.drawImage(
      Mchiffre_six.image,
      750,
      530,
      Mchiffre_six.largeur * 1.5,
      Mchiffre_six.hauteur * 1.5
    );
  } else if (NbBoss2 == 7) {
    oContexte.drawImage(
      Mchiffre_sept.image,
      750,
      530,
      Mchiffre_sept.largeur * 1.5,
      Mchiffre_sept.hauteur * 1.5
    );
  } else if (NbBoss2 == 8) {
    oContexte.drawImage(
      Mchiffre_huit.image,
      750,
      530,
      Mchiffre_huit.largeur * 1.5,
      Mchiffre_huit.hauteur * 1.5
    );
  } else if (NbBoss2 == 9) {
    oContexte.drawImage(
      Mchiffre_neuf.image,
      750,
      530,
      Mchiffre_neuf.largeur * 1.5,
      Mchiffre_neuf.hauteur * 1.5
    );
  }
}

//========= FUNCTION Pour les deux jeux

function AfficherUIjeu() {
  /*style*/
  oContexte.fillStyle = "black";
  oContexte.font = "50px Brush Script MT";
  /*question et reponse*/
  if (sEtat == "jeuporte") {
    oContexte.fillText(`${NbPorte1} + ${NbPorte2} =`, 450, 160);

    oContexte.fillText(`${reponsesPorte[0]}`, 120, 330);
    oContexte.fillText(`${reponsesPorte[1]}`, 490, 330);
    oContexte.fillText(`${reponsesPorte[2]}`, 860, 330);
  } else if (sEtat == "jeuboss") {
    oContexte.fillText(`${NbBoss1} + ${NbBoss2} =`, 450, 160);

    oContexte.fillText(`${reponsesBoss[0]}`, 120, 330);
    oContexte.fillText(`${reponsesBoss[1]}`, 490, 330);
    oContexte.fillText(`${reponsesBoss[2]}`, 860, 330);
  }

  /*vie*/
  oContexte.fillStyle = "red";
  oContexte.fillText(nVies, 880, 55);

  /*Monstre chiffre*/
  if (sEtat == "jeuporte") {
    MonstreChiffrePorte();
  } else if (sEtat == "jeuboss") {
    MonstreChiffreBoss();
  }
}
function MélangeNombre() {
  /*remélange jusqu'a 0*/
  if (NbPorteEssais >= 0) {
    NbPorte1 = Math.floor(Math.random() * 9);
    NbPorte2 = Math.floor(Math.random() * 9);
    BonneRepPorte = NbPorte1 + NbPorte2;

    MauvaiseRep1 = BonneRepPorte + Math.floor(Math.random() * 5) + 1;
    MauvaiseRep2 = BonneRepPorte - Math.floor(Math.random() * 5) + 1;
    if (MauvaiseRep2 == BonneRepPorte) {
      MauvaiseRep2 += 2;
    }
    /*mettre dans un tableau et mélanger les portes*/
    reponsesPorte = [BonneRepPorte, MauvaiseRep1, MauvaiseRep2];
    reponsesPorte.sort(function () {
      let nombreAleatoire = Math.random() * 2 - 1;
      return nombreAleatoire;
    });
    /*moins 1 a chaque fois*/
    NbPorteEssais -= 1;
  }
  if (sEtat == "bravo" || sEtat == "defaite") {
    /*section Boss*/
    NbBoss1 = Math.floor(Math.random() * 5) + 5;
    NbBoss2 = Math.floor(Math.random() * 5) + 5;
    BonneRepBoss = NbBoss1 + NbBoss2;

    MauvaiseRep3 = BonneRepBoss + Math.floor(Math.random() * 5) + 1;
    MauvaiseRep4 = BonneRepBoss - Math.floor(Math.random() * 5) + 1;
    if (MauvaiseRep4 == BonneRepBoss) {
      MauvaiseRep4 += 2;
    }
    /*mettre dans un tableau et mélanger les portes*/
    reponsesBoss = [BonneRepBoss, MauvaiseRep3, MauvaiseRep4];
    reponsesBoss.sort(function () {
      let nombreAleatoire = Math.random() * 2 - 1;
      return nombreAleatoire;
    });
  }
}

//========= FUNCTION BRAVO

function DessinerBravo() {
  /*fond*/
  oContexte.drawImage(
    oFondBravo.image,
    oFondBravo.x,
    oFondBravo.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  /*personnage*/
  oContexte.drawImage(
    oChevalier.image,
    170,
    380,
    oChevalier.largeur * 4,
    oChevalier.hauteur * 4
  );
  oContexte.drawImage(
    oPrincesse.image,
    310,
    370,
    oPrincesse.largeur * 4,
    oPrincesse.hauteur * 4
  );
  /*texte et style*/
  oContexte.drawImage(
    oTexteBubble3.image,
    -250,
    -200,
    oTexteBubble3.largeur * 1.5,
    oTexteBubble3.hauteur * 1.5
  );
  oContexte.fillStyle = "black";
  oContexte.font = "60px fette";
  oContexte.fillText(`Bravo`, 410, 170);

  oContexte.font = "30px fette";
  oContexte.fillText("toucher n'importe où pour recommencer", 240, 270);
  /*change etat personnage*/
  if (sEtat == "bravo") {
    oChevalier.image.src = oChevalier.srcHeureux;
    oPrincesse.image.src = oPrincesse.srcestHeureux;
  }
}
function Ballon() {
  oBallon_1.y -= oBallon_1.vitesse;
  if (oBallon_1.y < -350) {
    oBallon_1.y = 700;
    oBallon_1.x = Math.random() * (nHauteurCanvas - oBallon_1.hauteur);
  }
  oContexte.drawImage(
    oBallon_1.image,
    oBallon_1.x,
    oBallon_1.y,
    oBallon_1.largeur,
    oBallon_1.hauteur
  );
  oBallon_2.y -= oBallon_2.vitesse;
  if (oBallon_2.y < -350) {
    oBallon_2.y = 700;
    oBallon_2.x = Math.random() * (nHauteurCanvas - oBallon_2.hauteur);
  }
  oContexte.drawImage(
    oBallon_2.image,
    oBallon_2.x,
    oBallon_2.y,
    oBallon_2.largeur,
    oBallon_2.hauteur
  );
}

//========= FUNCTION DEFAITE

function DessinerDefaite() {
  /*fond*/
  oContexte.drawImage(
    oFondBoss.image,
    oFondBoss.x,
    oFondBoss.y,
    nLargeurCanvas,
    nHauteurCanvas
  );
  /*personnage*/
  oContexte.drawImage(
    oChevalier.image,
    260,
    310,
    oChevalier.largeur * 4,
    oChevalier.hauteur * 4
  );
  /*Monstre*/
  oContexte.drawImage(
    oMonstre3.image,
    20,
    330,
    oMonstre3.largeur * 3,
    oMonstre3.hauteur * 3
  );
  oContexte.drawImage(
    oMonstre3.image,
    400,
    510,
    oMonstre3.largeur * 3,
    oMonstre3.hauteur * 3
  );
  oContexte.drawImage(
    oMonstre2.image,
    450,
    320,
    oMonstre2.largeur * 3,
    oMonstre2.hauteur * 3
  );
  oContexte.drawImage(
    oMonstre2.image,
    -150,
    420,
    oMonstre2.largeur * 3,
    oMonstre2.hauteur * 3
  );
  oContexte.drawImage(
    oMonstre1.image,
    100,
    450,
    oMonstre1.largeur * 3,
    oMonstre1.hauteur * 3
  );
  oContexte.drawImage(
    oMonstre1.image,
    640,
    420,
    oMonstre1.largeur * 3,
    oMonstre1.hauteur * 3
  );
  /*texte et style*/
  oContexte.drawImage(
    oTexteBubble3.image,
    -250,
    -200,
    oTexteBubble3.largeur * 1.5,
    oTexteBubble3.hauteur * 1.5
  );
  oContexte.fillStyle = "black";
  oContexte.font = "60px fette";
  oContexte.fillText(`Defaite`, 410, 170);

  oContexte.font = "30px fette";
  oContexte.fillText("toucher n'importe où pour recommencer", 240, 270);
  /*changement etat personnage*/
  if (sEtat == "defaite") {
    oChevalier.image.src = oChevalier.srcTriste;
  }
}

//========= FUNCTION REDÉMARER

function RedémarrerJeu() {
  if (sEtat == "bravo" || sEtat == "defaite") {
    /*changer aléatoire porte et boss*/
    MélangeNombre();

    /*autre*/
    NbPorteEssais = 3;
    nVies = 7;
    sEtat = "intro";
  }
}
//========= FUNCTION DETECTION

function detecterClicObjet(curseurX, curseurY, zone) {
  if (
    curseurX >= zone.x &&
    curseurX <= zone.x + zone.largeur &&
    curseurY >= zone.y &&
    curseurY <= zone.y + zone.hauteur
  ) {
    return true;
  }
  return false;
}
window.addEventListener("load", initialiser);
