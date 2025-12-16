let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;
oContexte.imageSmoothingEnabled = false;

let sEtatJeu = "intro";

let nPositionCurseurX = 0;
let nPositionCurseurY = 0;

let nbPairesTrouvees = 0;

let choixCarte1 = null;
let choixCarte2 = null;

let tempsPasse = 0;

let minuterie = 0;

let Points = 4

if (sEtatJeu == "Difficulte1") {
  minuterie = 40;
} else if (sEtatJeu == "Difficulte2") {
  minuterie = 30;
} else if (sEtatJeu == "Difficulte3") {
  minuterie = 25;
}

let sonDemarrer = new Audio("assets/audio/start_jeu.wav");
sonDemarrer.volume = 0.3;
let sonDebutNiveau = new Audio("assets/audio/start_niveau.wav");

let sonClick = new Audio("assets/audio/Click.wav");
sonClick.volume = 0.45;
let sonBonnePaire = new Audio("assets/audio/bonnePaire.wav");
sonBonnePaire.volume = 0.6;
let sonMauvaisePaire = new Audio("assets/audio/mauvaisePaire.wav");
sonMauvaisePaire.volume = 0.5;
let sonFinJeu = new Audio("assets/audio/jingle_fin.wav");

let carte1 = {
  x: nLargeur / 2 - 550,
  y: nHauteur - 500,
  hauteur: 280,
  largeur: 400,
  image: new Image(),
  src: "assets/images/carte1.png",
};
let carte2 = {
  x: nLargeur / 2 - 200,
  y: nHauteur - 500,
  hauteur: 280,
  largeur: 400,
  image: new Image(),
  src: "assets/images/carte2.png",
};
let carte3 = {
  x: nLargeur / 2 + 150,
  y: nHauteur - 500,
  hauteur: 280,
  largeur: 400,
  image: new Image(),
  src: "assets/images/carte3.png",
};

let oBoutonPlay = {
  x: 0,
  y: 0,
  hauteur: 100,
  largeur: 200,
  image: new Image(),
  src: "assets/images/Play_button.png",
};

let oFondFin = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 2,
  image: new Image(),
  src: "assets/images/FinBackground.png",
}

let oFondIntro = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 2,
  image: new Image(),
  src: "assets/images/PNG/background_3/background_3.png",
};

let oFondMenu = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  vitesse: 1,
  src: "assets/images/PNG/background_2/background_2.png",
};

let oBgDifficultee1 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 1,
  image: new Image(),
  src: "assets/images/PNG/background_3/background_3.png",
};

let oBgDifficultee2 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 1,
  image: new Image(),
  src: "assets/images/PNG/background_4/background_4.png",
};

let oBgDifficultee3 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 1,
  image: new Image(),
  src: "assets/images/PNG/background_1/background_1.png",
};

// oContext.fillStyle = "yellow";
// oContext.beginPath();
// oContext.arc(750,100,100,0,Math.PI * 2);
// oContext.fill();
// oContext.closePath();

let listeCartes = [
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "red",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "red",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },

  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "blue",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "blue",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "green",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "green",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "yellow",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "yellow",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "purple",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "purple",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "orange",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 160,
    largeur: 160,
    couleur: "orange",
    estVisible: false,
    image: new Image(),
    src: "assets/images/CloudCarte.png",
    src2: "assets/images/fondcloud.png",
  },
];

let oCloudCarte = {
  x: 0,
  y: 0,
  hauteur: 160,
  largeur: 160,
  image: new Image(),
  src: "assets/images/CloudCarte.png",
  src2: "assets/images/fondcloud.png",
};
oFondFin.image.src = oFondFin.src;
oFondIntro.image.src = oFondIntro.src;
oFondMenu.image.src = oFondMenu.src;
oCloudCarte.image.src = oCloudCarte.src;
oCloudCarte.image.src = oCloudCarte.src2;

oBgDifficultee1.image.src = oBgDifficultee1.src;
oBgDifficultee2.image.src = oBgDifficultee2.src;
oBgDifficultee3.image.src = oBgDifficultee3.src;
carte1.image.src = carte1.src;
carte3.image.src = carte3.src;
carte2.image.src = carte2.src;

function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", onClicCanvas);
  window.addEventListener("keyup", onToucheRelachee);
  oCanvasHTML.addEventListener("mousemove", mouvementSouris);
  melangerCartes();
}

function redemarrerJeu() {
  nbPairesTrouvees = 0;
  choixCarte1 = null;
  choixCarte2 = null;
  tempsPasse = 0;

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];
    carte.estVisible = false;
  }
  melangerCartes();
}

function mouvementSouris(evenement) {
  nPositionCurseurX = evenement.offsetX;
  nPositionCurseurY = evenement.offsetY;
}

function onClicCanvas(evenement) {
  console.log(sEtatJeu);

  if (sEtatJeu == "Difficulte1") {
    clicDifficulte1(evenement);
  } else if (sEtatJeu == "Difficulte2") {
    clicDifficulte2(evenement);
  } else if (sEtatJeu == "Difficulte3") {
    clicDifficulte3(evenement);
  } else if (sEtatJeu == "Menu") {
    clicCarte1(evenement);
    clicCarte2(evenement);
    clicCarte3(evenement);
  }
}

function clicCarte1(evenement) {
  if (sEtatJeu != "Menu") {
    return;
  }
  nPositionCurseurX = evenement.offsetX;
  nPositionCurseurY = evenement.offsetY;

  let collision = verifierCollisions(
    nPositionCurseurX,
    nPositionCurseurY,
    nLargeur - 350,
    nHauteur - 500,
    200,
    300
  );
  console.log(collision);

  if (collision == true) {
    sonDebutNiveau.currentTime = 0;
    sonDebutNiveau.play();
    sEtatJeu = "Difficulte3";
    minuterie = 25;
  }
}

function clicCarte2(evenement) {
  if (sEtatJeu != "Menu") {
    return;
  }

  let nPositionCurseurX = evenement.offsetX;
  let nPositionCurseurY = evenement.offsetY;

  let collision = verifierCollisions(
    nPositionCurseurX,
    nPositionCurseurY,
    nLargeur / 2 - 450,
    nHauteur - 500,
    200,
    300
  );
  console.log(collision);
  if (collision == true) {
    sonDebutNiveau.currentTime = 0;
    sonDebutNiveau.play();
    sEtatJeu = "Difficulte1";
    minuterie = 40;
  }
}
function clicCarte3(evenement) {
  if (sEtatJeu != "Menu") {
    return;
  }

  let collision = verifierCollisions(
    nPositionCurseurX,
    nPositionCurseurY,
    nLargeur / 2 - 100,
    nHauteur - 500,
    200,
    300
  );
  if (collision == true) {
    sonDebutNiveau.currentTime = 0;
    sonDebutNiveau.play();
    sEtatJeu = "Difficulte2";
    minuterie = 30;
  }
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeur, nHauteur);
  if (sEtatJeu == "intro") {
    redemarrerJeu();
    dessinerFondIntro();
    intro();
  } else if (sEtatJeu == "Menu") {
    redemarrerJeu();
    afficherMenu();
  } else if (sEtatJeu == "Difficulte1") {
    afficherDifficulte1();
  } else if (sEtatJeu == "Difficulte2") {
    afficherDifficulte2();
  } else if (sEtatJeu == "Difficulte3") {
    afficherDifficulte3();
  } else if (sEtatJeu == "fin") {
    afficherFin();
  }
}

function intro() {
  dessinerBoutonsIntro();
}

function dessinerFondIntro() {
  oFondIntro.x += oFondIntro.vitesse + 3;
  if (oFondIntro.x > nLargeur) {
    oFondIntro.x = -nLargeur;
  }
  oContexte.drawImage(
    oFondIntro.image,
    oFondIntro.x,
    oFondIntro.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondIntro.image,
    oFondIntro.x - nLargeur,
    oFondIntro.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondIntro.image,
    oFondIntro.x + nLargeur,
    oFondIntro.y,
    nLargeur,
    nHauteur
  );
}

function onToucheRelachee(evenement) {
  let touche = evenement.key;
  if (touche === "Enter") {
    sEtatJeu = "Menu";
    sonDemarrer.currentTime = 0;
    sonDemarrer.play();
  }
}
oBoutonPlay.image.src = oBoutonPlay.src;
oBoutonPlay.x = nLargeur / 2 - oBoutonPlay.largeur / 2;
oBoutonPlay.y = nHauteur / 2 - oBoutonPlay.hauteur / 2;

function dessinerBoutonsIntro() {
  // oContexte.fillStyle = "#e6add38f";
  // oContexte.fillRect(nLargeur / 2 - 300, nHauteur / 2 - 160, 600, 300);
  oContexte.drawImage(
    oBoutonPlay.image,
    oBoutonPlay.x,
    oBoutonPlay.y,
    oBoutonPlay.largeur,
    oBoutonPlay.hauteur
  );
  oContexte.fillStyle = "magenta";
  oContexte.font = "41px pixels";
  oContexte.fillText("Press enter to", nLargeur / 2 - 133, nHauteur / 2.3);
  oContexte.fillStyle = "black";
  oContexte.font = "40px pixels";
  oContexte.fillText("Press enter to", nLargeur / 2 - 130, nHauteur / 2.3);
}

function afficherMenu() {
  oFondMenu.x += oFondMenu.vitesse + 3;
  if (oFondMenu.x > nLargeur) {
    oFondMenu.x = -nLargeur;
  }
  oContexte.drawImage(
    oFondMenu.image,
    oFondMenu.x,
    oFondMenu.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondMenu.image,
    oFondMenu.x - nLargeur,
    oFondMenu.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondMenu.image,
    oFondMenu.x + nLargeur,
    oFondMenu.y,
    nLargeur,
    nHauteur
  );

  oContexte.drawImage(
    carte1.image,
    carte1.x,
    carte1.y,
    carte1.largeur,
    carte1.hauteur
  );
  oContexte.drawImage(
    carte2.image,
    carte2.x,
    carte2.y,
    carte2.largeur,
    carte2.hauteur
  );
  oContexte.drawImage(
    carte3.image,
    carte3.x,
    carte3.y,
    carte3.largeur,
    carte3.hauteur
  );

  oContexte.textAlign = "left";
  oContexte.fillStyle = "green";
  oContexte.font = "41px pixels";
  oContexte.fillText("Choose a difficulty", nLargeur / 2 - 175, nHauteur / 3);
  oContexte.fillStyle = "black";
  oContexte.font = "42px pixels";
  oContexte.fillText("Choose a difficulty", nLargeur / 2 - 176, nHauteur / 3);

  oContexte.fillStyle = "white";
  oContexte.font = "28px pixels";
  oContexte.fillText(`Points:${Points}`, nLargeur - 1150, 50);
  oContexte.fillStyle = "black";
  oContexte.font = "29px pixels";
  oContexte.fillText(`Points:${Points}`, nLargeur - 1150, 50);

    oContexte.fillStyle = "green";
  oContexte.font = "41px pixels";
  oContexte.fillText("Use Left Mouse Button To Choose", nLargeur / 2 - 295, nHauteur / 2 + 300);
  oContexte.fillStyle = "black";
  oContexte.font = "41px pixels";
  oContexte.fillText("Use Left Mouse Button To Choose", nLargeur / 2 - 294, nHauteur / 2 + 300);
}
if (nbPairesTrouvees == 6) {
  setTimeout(function () {
    sEtatJeu = "intro";
  }, 1000);
}

function afficherDifficulte1() {
  oBgDifficultee1.x += oBgDifficultee1.vitesse + 3;
  if (oBgDifficultee1.x > nLargeur) {
    oBgDifficultee1.x = -nLargeur;
  }
  oContexte.drawImage(
    oBgDifficultee1.image,
    oBgDifficultee1.x,
    oBgDifficultee1.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee1.image,
    oBgDifficultee1.x - nLargeur,
    oBgDifficultee1.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee1.image,
    oBgDifficultee1.x + nLargeur,
    oBgDifficultee1.y,
    nLargeur,
    nHauteur
  );

  tempsPasse++;
  if (tempsPasse % 60 == 0) {
    console.log(tempsPasse);
    minuterie--;
  }
  if (minuterie <= 0) {
    sEtatJeu = "Menu";
  }

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];

    let colonne = i % 6; // Pour créer 4 colonnes différentes et utiliser modulo
    let rangee = Math.floor(i / 6);

    let decalageX = colonne * 10;
    let decalageY = rangee * 200;

    margeX = 125;
    margeY = 125;

    carte.x = colonne * carte.largeur + decalageX + margeX;
    carte.y = rangee * carte.hauteur + decalageY + margeY;

    if (carte.estVisible != true) {
      if (carte.src) {
        carte.image.src = carte.src2;
        oContexte.drawImage(
          carte.image,
          carte.x - 40,
          carte.y - 55,
          carte.largeur + 75,
          carte.hauteur + 60
        );
        carte.image.src = carte.src;

        oContexte.drawImage(
          carte.image,
          carte.x,
          carte.y,
          carte.largeur,
          carte.hauteur
        );
      }
    } else {
      oContexte.fillStyle = carte.couleur;
      oContexte.fillRect(carte.x, carte.y, carte.largeur, carte.hauteur);
    }
  }
  if (minuterie >= 25) {
     oContexte.fillStyle = "green";
  }
  else if (minuterie >= 11) {
    oContexte.fillStyle = "yellow";
  }
    else if (minuterie < 11) {
    oContexte.fillStyle = "red";
  }
 
  oContexte.font = "41px pixels";
  
  oContexte.fillText(`temps restant ${minuterie}`,nLargeur - 750, 40);
}

function afficherDifficulte2() {
  oBgDifficultee2.x += oBgDifficultee2.vitesse + 3;
  if (oBgDifficultee2.x > nLargeur) {
    oBgDifficultee2.x = -nLargeur;
  }
  oContexte.drawImage(
    oBgDifficultee2.image,
    oBgDifficultee2.x,
    oBgDifficultee2.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee2.image,
    oBgDifficultee2.x - nLargeur,
    oBgDifficultee2.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee2.image,
    oBgDifficultee2.x + nLargeur,
    oBgDifficultee2.y,
    nLargeur,
    nHauteur
  );
  tempsPasse++;
  if (tempsPasse % 60 == 0) {
    console.log(tempsPasse);
    minuterie--;
  }
  if (minuterie <= 0) {
    sEtatJeu = "Menu";
  }

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];

    let colonne = i % 6; // Pour créer 4 colonnes différentes et utiliser modulo
    let rangee = Math.floor(i / 6);

    let decalageX = colonne * 10;
    let decalageY = rangee * 200;

    margeX = 125;
    margeY = 125;

    carte.x = colonne * carte.largeur + decalageX + margeX;
    carte.y = rangee * carte.hauteur + decalageY + margeY;

    if (carte.estVisible != true) {
      if (carte.src) {
        // oContexte.fillStyle = "rgba(173, 216, 230, 0.5)";
        // oContexte.fillRect(carte.x, carte.y, carte.largeur, carte.hauteur);
        carte.image.src = carte.src2;
        oContexte.drawImage(
          carte.image,
          carte.x - 40,
          carte.y - 55,
          carte.largeur + 75,
          carte.hauteur + 60
        );
        carte.image.src = carte.src;

        oContexte.drawImage(
          carte.image,
          carte.x,
          carte.y,
          carte.largeur,
          carte.hauteur
        );
      }
    } else {
      oContexte.fillStyle = carte.couleur;
      oContexte.fillRect(carte.x, carte.y, carte.largeur, carte.hauteur);
    }
  }
  if (minuterie >= 25) {
     oContexte.fillStyle = "green";
  }
  else if (minuterie >= 11) {
    oContexte.fillStyle = "yellow";
  }
    else if (minuterie < 11) {
    oContexte.fillStyle = "red";
  }
  oContexte.font = "41px pixels";
  oContexte.fillText(`temps restant ${minuterie}`,nLargeur - 750, 40);
}

function afficherDifficulte3() {
  oBgDifficultee3.x += oBgDifficultee3.vitesse + 3;
  if (oBgDifficultee3.x > nLargeur) {
    oBgDifficultee3.x = -nLargeur;
  }
  oContexte.drawImage(
    oBgDifficultee3.image,
    oBgDifficultee3.x,
    oBgDifficultee3.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee3.image,
    oBgDifficultee3.x - nLargeur,
    oBgDifficultee3.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oBgDifficultee3.image,
    oBgDifficultee3.x + nLargeur,
    oBgDifficultee3.y,
    nLargeur,
    nHauteur
  );
  tempsPasse++;
  if (tempsPasse % 60 == 0) {
    console.log(tempsPasse);
    minuterie--;
  }
  if (minuterie <= 0) {
    sEtatJeu = "Menu";
  }

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];

    let colonne = i % 4; // Pour créer 4 colonnes différentes et utiliser modulo
    let rangee = Math.floor(i / 4);
    let decalageX = colonne * 100;
    let decalageY = rangee * 50;

    margeX = 125;
    margeY = 125;

    carte.x = colonne * carte.largeur + decalageX + margeX;
    carte.y = rangee * carte.hauteur + decalageY + margeY;
    if (carte.estVisible != true) {
      if (carte.src) {
        // oContexte.fillStyle = "rgba(173, 216, 230, 0.5)";
        // oContexte.fillRect(carte.x, carte.y, carte.largeur, carte.hauteur);
        carte.image.src = carte.src2;
        oContexte.drawImage(
          carte.image,
          carte.x - 40,
          carte.y - 55,
          carte.largeur + 75,
          carte.hauteur + 60
        );
        carte.image.src = carte.src;

        oContexte.drawImage(
          carte.image,
          carte.x,
          carte.y,
          carte.largeur,
          carte.hauteur
        );
      }
    } else {
      oContexte.fillStyle = carte.couleur;
      oContexte.fillRect(carte.x, carte.y, carte.largeur, carte.hauteur);
    }
  }
  if (minuterie >= 20) {
     oContexte.fillStyle = "green";
  }
  else if (minuterie >= 7) {
    oContexte.fillStyle = "yellow";
  }
    else if (minuterie < 7) {
    oContexte.fillStyle = "red";
  }
  oContexte.font = "41px pixels";
  oContexte.fillText(`temps restant ${minuterie}`,nLargeur - 750, 40);
}

function clicDifficulte1(evenement) {
  if (sEtatJeu != "Difficulte1") {
    return;
  }
  nPositionCurseurX = evenement.offsetX;
  nPositionCurseurY = evenement.offsetY;

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];
    let collision = verifierCollisions(
      nPositionCurseurX,
      nPositionCurseurY,
      carte.x,
      carte.y,
      carte.largeur,
      carte.hauteur
    );
    if (collision == true) {
      sonClick.currentTime = 0;
      sonClick.play();
      if (choixCarte1 == null && carte.estVisible == false) {
        choixCarte1 = carte;
        carte.estVisible = true;
      } else if (
        choixCarte1 != null &&
        choixCarte2 == null &&
        choixCarte1 != carte &&
        carte.estVisible == false
      ) {
        choixCarte2 = carte;
        carte.estVisible = true;
        validerCombinaison();
      }
    }
  }
}

function clicDifficulte2(evenement) {
  if (sEtatJeu != "Difficulte2") {
    return;
  }

  nPositionCurseurX = evenement.offsetX;
  nPositionCurseurY = evenement.offsetY;

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];
    let collision = verifierCollisions(
      nPositionCurseurX,
      nPositionCurseurY,
      carte.x,
      carte.y,
      carte.largeur,
      carte.hauteur
    );
    if (collision == true) {
      sonClick.currentTime = 0;
      sonClick.play();
      if (choixCarte1 == null) {
        choixCarte1 = carte;
        carte.estVisible = true;
      } else if (
        choixCarte1 != null &&
        choixCarte2 == null &&
        choixCarte1 != carte &&
        carte.estVisible == false
      ) {
        choixCarte2 = carte;
        carte.estVisible = true;
        validerCombinaison();
      }
    }
  }
}
function clicDifficulte3(evenement) {
  if (sEtatJeu != "Difficulte3") {
    return;
  }

  nPositionCurseurX = evenement.offsetX;
  nPositionCurseurY = evenement.offsetY;

  for (let i = 0; i < listeCartes.length; i++) {
    let carte = listeCartes[i];
    let collision = verifierCollisions(
      nPositionCurseurX,
      nPositionCurseurY,
      carte.x,
      carte.y,
      carte.largeur,
      carte.hauteur
    );
    if (collision == true) {
      sonClick.currentTime = 0;
      sonClick.play();
      console.log(choixCarte1, choixCarte2);

      if (choixCarte1 == null && carte.estVisible == false) {
        choixCarte1 = carte;
        carte.estVisible = true;
      } else if (
        choixCarte1 != null &&
        choixCarte2 == null &&
        choixCarte1 != carte &&
        carte.estVisible == false
      ) {
        choixCarte2 = carte;
        carte.estVisible = true;
        validerCombinaison();
      }
    }
  }
}

function afficherFin() {
  oContexte.save(); 

oFondFin.x += oFondFin.vitesse + 3;
  if (oFondFin.x > nLargeur) {
    oFondFin.x = -nLargeur;
  }
  oContexte.drawImage(
    oFondFin.image,
    oFondFin.x,
    oFondFin.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondFin.image,
    oFondFin.x - nLargeur,
    oFondFin.y,
    nLargeur,
    nHauteur
  );
  oContexte.drawImage(
    oFondFin.image,
    oFondFin.x + nLargeur,
    oFondFin.y,
    nLargeur,
    nHauteur
  );

  oContexte.fillStyle = "hsla(0, 0%, 0%, 0.6)"
  oContexte.fillRect(nLargeur / 2 -300, nHauteur / 2 - 180, 600, 280)


  oContexte.textAlign = "center";
  oContexte.fillStyle = "yellow";
  oContexte.font = "52px pixels";
  oContexte.fillText(
    "🎉 CONGRATULATIONS 🎉",
    nLargeur / 2,
    nHauteur / 2 - 120
  );

 
  oContexte.fillStyle = "white";
  oContexte.font = "36px pixels";
  oContexte.fillText(
    `Final Score: ${Points}`,
    nLargeur / 2,
    nHauteur / 2 - 20
  );

  oContexte.fillStyle = "yellow";
  oContexte.font = "28px pixels";
  oContexte.fillText(
    "Press ENTER to return to menu",
    nLargeur / 2,
    nHauteur / 2 + 80
  );

  oContexte.restore();
}

function validerCombinaison() {
  if (choixCarte1.couleur == choixCarte2.couleur) {
    nbPairesTrouvees += 1;
    sonBonnePaire.currentTime = 0;
    sonBonnePaire.play();
    console.log(nbPairesTrouvees);

    choixCarte1 = null;
    choixCarte2 = null;

    //BRAVo
    if (nbPairesTrouvees == 6 && sEtatJeu == "Difficulte1") {
      Points += 1;

      if (Points >= 3) {
        sEtatJeu = "fin";
        sonFinJeu.currentTime = 0;
        sonFinJeu.play();
      } else if (Points < 3) {
        setTimeout(function () {
          sEtatJeu = "Menu";
        }, 1000);
      }
    }
  } else {
    sonMauvaisePaire.currentTime = 0;
    sonMauvaisePaire.play();
    setTimeout(function () {
      choixCarte1.estVisible = false;
      choixCarte2.estVisible = false;
      choixCarte1 = null;
      choixCarte2 = null;
    }, 1000);
  }

  if (nbPairesTrouvees == 6 && sEtatJeu == "Difficulte2") {
    Points += 1.5;

    if (Points >= 3) {
      sEtatJeu = "fin";
      sonFinJeu.currentTime = 0;
      sonFinJeu.play();
    } else if (Points < 3) {
      setTimeout(function () {
        sEtatJeu = "Menu";
      }, 1000);
    }
  }

  if (nbPairesTrouvees == 6 && sEtatJeu == "Difficulte3") {
    Points += 2.5;

    if (Points >= 3) {
      sEtatJeu = "fin";
      sonFinJeu.currentTime = 0;
      sonFinJeu.play();
    } else if (Points < 3) {
      setTimeout(function () {
        sEtatJeu = "Menu";
      }, 1000);
    }
  }
}

function melangerCartes() {
  listeCartes.sort(function (carteA, carteB) {
    let nombreAleatoire = Math.random() * 2 - 1;
    return nombreAleatoire;
  });
  console.log(listeCartes);
}

function verifierCollisions(
  positionXCurseur,
  positionYCurseur,
  positionXElement,
  positionYElement,
  largeurElement,
  hauteurElement
) {
  return (
    positionXCurseur > positionXElement &&
    positionXCurseur < positionXElement + largeurElement &&
    positionYCurseur > positionYElement &&
    positionYCurseur < positionYElement + hauteurElement
  );
}

window.addEventListener("load", initialiser);
