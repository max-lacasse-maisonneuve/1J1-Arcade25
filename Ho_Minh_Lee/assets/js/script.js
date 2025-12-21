let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nLargeur = oCanvasHTML.width;
let nHauteur = oCanvasHTML.height;
oContexte.imageSmoothingEnabled = false;
let sTitre = "Princesse en danger !";

let nPositionMonstreX = 0;
let nPositionMonstreY = 0;
let nMonstreVitesse = 1;

let sEtat = "intro";
let tempsPasse = 0;
let nMinuterie = 60;

let aLettres = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

let lettreAAfficher = "";

let nPoints = 0;

let oBoutonDemarrer = {
  x: nLargeur / 2 - 100,
  y: nHauteur - 300,
  largeur: 200,
  hauteur: 70,
  texte: "DÉMARRER",
};

let oFond = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  fondSrc: "assets/images/Backround.webp",
};
oFond.image.src = oFond.fondSrc;
let oImagePersonnage = {
  x: 30,
  y: 560,
  frame: 0,
  largeur: 768 / 6,
  hauteur: 128,
  largeurPerso: 192,
  hauteurPerso: 192,
  totalFrames: 6,
  image: new Image(),
  src: "assets/images/Idle.png",
};
let compteur = 0;
let vitesseAnimations = 7;
oImagePersonnage.image.src = oImagePersonnage.src;
let tailleTexte = 90;
let direction = 1;

/*let oImageMonstre1 = {
    x: 90,
    y: 560,
    frame: 0,
    largeur: 768 / 6,
    hauteur: 128,
    largeurPerso: 192,
    hauteurPerso: 192,
    totalFrames: 6,
    image: new Image(),
    src: "assets/images/run1.png"
}

let oImageMonstre2 = {
    x: 90,
    y: 560,
    frame: 0,
    largeur: 768 / 6,
    hauteur: 128,
    largeurPerso: 192,
    hauteurPerso: 192,
    totalFrames: 6,
    image: new Image(),
    src: "assets/images/run2.png"
}

let oImageMonstre3= {
    x: 90,
    y: 560,
    frame: 0,
    largeur: 768 / 6,
    hauteur: 128,
    largeurPerso: 192,
    hauteurPerso: 192,
    totalFrames: 6,
    image: new Image(),
    src: "assets/images/run3.png"
}*/

let tableauMonstre = [
  {
    x: Math.random() * 1100 + nLargeur,
    y: 576,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run 2.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 2.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 2.png",
    },
  },

  {
    x: Math.random() * 1100 + nLargeur,
    y: 575,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run 3.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 3.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 3.png",
    },
  },
  {
    x: Math.random() * 1100 + nLargeur,
    y: 585,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run1.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 1.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 1.png",
    },
  },

  {
    x: Math.random() * 1100 + nLargeur,
    y: 576,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run 2.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 2.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 2.png",
    },
  },

  {
    x: Math.random() * 1100 + nLargeur,
    y: 575,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run 3.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 3.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 3.png",
    },
  },
  {
    x: Math.random() * 1100 + nLargeur,
    y: 585,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    vitesse: Math.random() * 1 + 2,
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run1.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 1.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 1.png",
    },
  },
];

function initialiserJeu() {
  // creerMonstre()
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", onClicCanvas);
  window.addEventListener("keydown", onToucheEnfoncee);
  window.addEventListener("keyup", onToucheRelachee);
}

function onToucheEnfoncee(evenement) {}

function onToucheRelachee(evenement) {
  let touche = evenement.key;
  if (sEtat == "jeu") {
    if (touche == lettreAAfficher) {
      melangerLettres();
      //Eliminer un monstre
      let monstreAGauche = tableauMonstre[0];
      for (let i = 0; i < tableauMonstre.length; i++) {
        let unMonstre = tableauMonstre[i];
        if (unMonstre.x < monstreAGauche.x) {
          monstreAGauche = unMonstre;
        }
      }
      point();

      monstreAGauche.currentAnimation = "dead";
      //Ajouter un son de mort ici
      setTimeout(function () {
        replacerMonstre(monstreAGauche);
      }, 1000);
    }
  }
}

function replacerMonstre(monstre) {
  monstre.currentAnimation = "run";
  monstre.x = Math.random() * 1000 + nLargeur;
  monstre.vitesse = Math.random() * 1 + 2;
}

function creerMonstre() {
  let monstre = {
    x: Math.random() * 2000 + nLargeur,
    y: 585,
    hauteur: 180,
    largeur: 180,
    image: new Image(),
    currentAnimation: "run",
    animFrame: 0,
    run: {
      totalFrames: 5,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/run1.png",
    },
    dead: {
      totalFrames: 4,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/dead 1.png",
    },
    attaque: {
      totalFrames: 7,
      largeurFrame: 128,
      hauteurFrame: 128,
      src: "assets/images/Attack 1.png",
    },
  };

  tableauMonstre.push(monstre);
}
function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeur, nHauteur);
  compteur++;

  if (sEtat == "intro") {
    afficherIntro();
    if (compteur % vitesseAnimations === 0) {
      oImagePersonnage.frame += 1;
      if (oImagePersonnage.frame >= oImagePersonnage.totalFrames) {
        oImagePersonnage.frame = 0;
      }
    }
    dessinerPersonnage();
  } else if (sEtat == "jeu") {
    tempsPasse++;

    if (tempsPasse % 60 == 0) {
      nMinuterie--;
    }

    if (nMinuterie <= 0) {
      sEtat = "fin";
    }

    for (let i = 0; i < tableauMonstre.length; i++) {
      let unMonstre = tableauMonstre[i];
      let collision = detecterCollision(unMonstre, oImagePersonnage);

      if (collision == true) {
        unMonstre.x = -200;
        unMonstre.y = Math.random() * nLargeur;
        oImagePersonnage.estBlesse = true;
        sEtat = "fin";
      }
    }

    afficherJeu();
    dessinerPersonnage();
    dessinerMonstres();
    afficherLettre();
    dessinerTemps();
    dessinerUI();
  } else if (sEtat == "fin") {
    afficherFin();
  }
}

function detecterCollision(tableauMonstre, oImagePersonnage) {
  if (
    tableauMonstre.x < oImagePersonnage.x + oImagePersonnage.largeur &&
    tableauMonstre.x + tableauMonstre.largeur > oImagePersonnage.x &&
    tableauMonstre.y < oImagePersonnage.y + oImagePersonnage.hauteur &&
    tableauMonstre.y + tableauMonstre.hauteur > oImagePersonnage.y
  ) {
    return true;
  } else {
    return false;
  }
}

function afficherIntro() {
  if (tailleTexte > 120) {
    direction = -1;
  } else if (tailleTexte < 100) {
    direction = 1;
  }
  tailleTexte += direction * 0.6;

  oContexte.drawImage(
    oFond.image,
    oFond.x,
    oFond.y,
    oFond.largeur,
    oFond.hauteur
  );
  oContexte.font = `${tailleTexte}px CreakingCrypt-Regular`;
  oContexte.fillStyle = "#b397baff";
  oContexte.textAlign = "center";
  oContexte.fillText("PRINCESSE EN DANGER !", 700, 375);

  oContexte.fillStyle = " #e7e1e192";
  oContexte.font = "50px Arial";
  oContexte.fillText("Sauver la princesse", 700, 500);

  // Bouton
  oContexte.fillStyle = "#ededed88";
  oContexte.fillRect(
    oBoutonDemarrer.x,
    oBoutonDemarrer.y,
    oBoutonDemarrer.largeur,
    oBoutonDemarrer.hauteur
  );

  oContexte.fillStyle = "#03030323";
  oContexte.fillRect(
    oBoutonDemarrer.x,
    oBoutonDemarrer.y,
    oBoutonDemarrer.largeur,
    oBoutonDemarrer.hauteur
  );
  // Bouton (Mot)
  oContexte.fillStyle = "white";
  oContexte.font = "bold 25px Trebuchet";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oBoutonDemarrer.texte,
    oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
    oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
  );
}

function dessinerPersonnage() {
  let sourceX = oImagePersonnage.frame * oImagePersonnage.largeur;
  let sourceY = 0;

  oContexte.drawImage(
    oImagePersonnage.image,
    sourceX,
    sourceY,
    oImagePersonnage.largeur,
    oImagePersonnage.hauteur,
    oImagePersonnage.x,
    oImagePersonnage.y,
    oImagePersonnage.largeurPerso,
    oImagePersonnage.hauteurPerso
  );
}

function dessinerMonstres() {
  for (let i = 0; i < tableauMonstre.length; i++) {
    let monstre = tableauMonstre[i];
    let anim = monstre[monstre.currentAnimation];
    monstre.image.src = anim.src;

    if (monstre.currentAnimation != "dead") {
      monstre.x -= monstre.vitesse;
    }

    if (monstre.x < -100) {
      monstre.x = Math.random() * 1000 + nLargeur;
      monstre.vitesse = Math.random() * 2 + 2;
    }
    if (compteur % vitesseAnimations === 0) {
      monstre.animFrame += 1;
      if (monstre.animFrame >= anim.totalFrames) {
        monstre.animFrame = 0;
      }
    }

    oContexte.save();
    oContexte.translate(monstre.x + monstre.largeur / 2, monstre.y);
    oContexte.scale(-1, 1);
    oContexte.translate(-(monstre.x + monstre.largeur / 2), -monstre.y);

    oContexte.drawImage(
      monstre.image,
      monstre.animFrame * anim.largeurFrame,
      0,
      anim.largeurFrame,
      anim.hauteurFrame,
      monstre.x,
      monstre.y,
      monstre.largeur,
      monstre.hauteur
    );
    oContexte.restore();
  }
}
function afficherJeu() {
  oContexte.drawImage(
    oFond.image,
    oFond.x,
    oFond.y,
    oFond.largeur,
    oFond.hauteur
  );
  let sourceX = oImagePersonnage.frame * oImagePersonnage.largeur;
  let sourceY = 0;
  oContexte.drawImage(
    oImagePersonnage.image,
    sourceX,
    sourceY,
    oImagePersonnage.largeur,
    oImagePersonnage.hauteur,
    oImagePersonnage.x,
    oImagePersonnage.y,
    oImagePersonnage.largeurPerso,
    oImagePersonnage.hauteurPerso
  );
  if (compteur % vitesseAnimations === 0) {
    oImagePersonnage.frame += 1;
    if (oImagePersonnage.frame >= oImagePersonnage.totalFrames) {
      oImagePersonnage.frame = 0;
    }
  }

  dessinerMonstres();
}
function melangerLettres() {
  let positionAleatoire = Math.floor(Math.random() * aLettres.length);
  lettreAAfficher = aLettres[positionAleatoire];
}

function afficherLettre() {
  oContexte.fillStyle = "white";
  oContexte.font = "50px Arial";
  oContexte.fillText(lettreAAfficher, nLargeur / 2, nHauteur - 100);
  oContexte.textAlign = "center";
}

function detecterClicObjet(curseurX, curseurY, objet) {
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

function onClicCanvas(evenement) {
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  console.log("icid");

  if (
    sEtat == "intro" &&
    detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true
  ) {
    sEtat = "jeu";
    melangerLettres();
  } else if (sEtat == "fin") {
    sEtat = "intro";
    redemarrer();
  }
}

function redemarrer() {
  tempsPasse = 0;
  nPoints = 0;
  nMinuterie = 60;
  for(let i =0;i<tableauMonstre.length;i++){
    let monstre = tableauMonstre[i];
    replacerMonstre(monstre)
  }
}

function afficherFin() {
  oContexte.drawImage(
    oFond.image,
    oFond.x,
    oFond.y,
    oFond.largeur,
    oFond.hauteur
  );
  oContexte.font = `70px CreakingCrypt-Regular`;
  oContexte.fillStyle = "#ddb6e7ff";
  oContexte.textAlign = "center";
  oContexte.fillText(`Tu as perdu en ${nMinuterie} secondes avec ${nPoints} points`, 700, 475);
  if(nMonstreVitesse <= 0 ){
    oContexte.font = `70px CreakingCrypt-Regular`;
  oContexte.fillStyle = "#ddb6e7ff";
  oContexte.textAlign = "center";
  oContexte.fillText(`Tu as Gagner avec ${nPoints}`, 700, 475);
  
  }
}
function point() {
  if ((touche = lettreAAfficher)) {
    nPoints += 1;
  }
}
function minuterie() {}

function dessinerUI() {
  oContexte.font = "30px Nasalization";
  oContexte.textAlign = "left";
  oContexte.fillStyle = "white";
  oContexte.fillText(`Points: ${nPoints}`, 40, 70);
}

function dessinerTemps() {
  oContexte.font = "25px Nasalization";
  oContexte.fillStyle = "white";
  oContexte.textAlign = "right";
  oContexte.fillText(`Temps: ${nMinuterie}`, nLargeur - 40, 70);
}

window.addEventListener("load", initialiserJeu);
