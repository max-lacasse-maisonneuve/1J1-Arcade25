//TP2 par Roger Do

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

//variables

//musique 1
let oSonMusique1 = new Audio();
oSonMusique1.src = "assets/audio/Clair_de_Lune.mp3";

oSonMusique1.loop = true;
oSonMusique1.volume = 1;
oSonMusique1.playbackRate = 1.25;

//musique 2
let oSonMusique2 = new Audio();
oSonMusique2.src = "assets/audio/musiqueIntro.mp3";

oSonMusique2.volume = 1;
oSonMusique2.playbackRate = 0.9;
oSonMusique2.currentTime = 0.2;

//bruit effect
let oBloqueReussi = new Audio();
oBloqueReussi.src = "assets/audio/Defense_Guard_Win.wav";

let oHorizontalATQ = new Audio()
oHorizontalATQ.src = "assets/audio/HorizontalATQ.wav";

let oTransformATQ = new Audio()
oTransformATQ.src = "assets/audio/TransformATQbleu.wav"

let oTransformEndATQ = new Audio()
oTransformEndATQ.src = "assets/audio/TransformEndATQbleu.wav"
oTransformEndATQ.volume = 0.3   
oTransformEndATQ.playbackRate = 1.4

let oSwingATQNormale = new Audio()
oSwingATQNormale.src = "assets/audio/SwingNormaleATQ.wav"

let oHitEnnemi = new Audio()
oHitEnnemi.src = "assets/audio/HitEau.wav"

//images
//fond //a faire plus tard
let oFond = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 2.5,
  image: new Image(),
  src: "assets/images/.png",
};

//fin 1

let oFin1 = new Image()
oFin1.src = "assets/images/end1.png"

//fin 2

let oFin2 = new Image()
oFin2.src = "assets/images/end_2.png"


//fin 3

let oFin3 = new Image()
oFin3.src = "assets/images/end_3.png"


//enemies (mal)

let oImageEau = {
  x: nLargeurCanvas / 2 - 20 / 2,
  y: -400,
  largeur: 82,
  hauteur: 110,
  vitesse: 6,
  image: new Image(),
  src: "assets/images/eau.png",
  srcHit: "assets/images/placeholderHit.png"
};

//amis (bien)
//eau
let oImageOxy = {
  x: nLargeurCanvas / 2 - 200 / 2,
  y: -200,
  largeur: 90,
  hauteur: 60,
  vitesse: 5,
  image: new Image(),
  src: "assets/images/oxy.png",
};
//CuCl
let oImageCucl = {
  x: nLargeurCanvas / 2 - 100 / 2,
  y: -2000,
  largeur: 100,
  hauteur: 75,
  vitesse: 4,
  image: new Image(),
  src: "assets/images/cucl.png",
};

//perso (joueur)

let oPerso = {
  x: nLargeurCanvas / 2 - 120 / 2,
  y: nHauteurCanvas - 100,
  largeur: 120,
  hauteur: 100,
  vitesse: 10,
  vie: 3,
  points: 0,
  estMal: false,
  estBien: false,
  image: new Image(),
  srcIdle: "assets/images/persoidle.png",
  srcMal: "assets/images/persocollectmal.png",
  srcBien: "assets/images/persocollectbien.png",
  srcVol: "assets/images/persovolant.png",
  srcDown: "assets/images/down.png",
  srcGauche: "assets/images/gauche.png",
  srcDroit: "assets/images/droit.png",
  // sprites bleu
  estBleu: false,
  srcIdleBleu: "assets/images/idle_bleu.png",
  srcMalBleu: "assets/images/mal_bleu.png",
  srcBienBleu: "assets/images/bien_bleu.png",
  srcVolBleu: "assets/images/vol_bleu.png",
  srcDownBleu: "assets/images/down_bleu.png",
  srcGaucheBleu: "assets/images/gauche_bleu.png",
  srcDroitBleu: "assets/images/droit_bleu.png",
  //attaque sprites (frames)
  estAttaque: false,
  frameAttaque: 0,
  srcATQ1: "assets/images/frame1.png", //frame 1
  srcATQ2: "assets/images/frame2.png", //frame 2
  srcATQ3: "assets/images/frame3.png", //frame 3
  srcATQ4: "assets/images/frame4.png", //frame 4
  //attaques sprites BLEU (frames)
  estAttaqueBleu: false,
  srcATQB1: "assets/images/fr1.png", // frame 1
  srcATQB2: "assets/images/fr2.png", // frame 2
  srcATQB3: "assets/images/fr3.png", // frame 3
  srcATQB4: "assets/images/fr4.png", // frame 4
  srcATQB5: "assets/images/fr5.png", // frame 5
  srcATQB6: "assets/images/fr6.png", // frame 6
  srcATQB7: "assets/images/fr7.png", // frame 7
  srcATQB8: "assets/images/fr8.png", // frame 8 fin transition
  srcATQB9: "assets/images/fr9.png", // frame 9 debut transform
  srcATQB10: "assets/images/fr10.png", // frame 10
  srcATQB11: "assets/images/fr11.png", // frame 11
  srcATQB12: "assets/images/fr12.png", // frame 12
  srcATQB13: "assets/images/fr13.png", // frame 13
  srcATQB14: "assets/images/fr14.png", // frame 14
  srcATQB15: "assets/images/fr15.png", // frame 15 transformation complet
  srcATQB16: "assets/images/fr16.png", // frame 16 debut swing
  srcATQB17: "assets/images/fr17.png", // frame 17
  srcATQB18: "assets/images/fr18.png", // frame 18 2s/3s (height)
  srcATQB19: "assets/images/f19bleu.png", // frame 19
  srcATQB20: "assets/images/fr20.png", // frame 20 gros swing
  srcATQB21: "assets/images/fr21.png", // frame 21 fin swing
  srcATQB22: "assets/images/fr22.png", // frame 22
  srcATQB23: "assets/images/fr23.png", // frame 23
  //sprite bloque
  estBloque: false,
  estHoldBloque: false,
  frameBloque: 0,
  srcBloque1: "assets/images/blockwindupframe.png",
  srcBloque2: "assets/images/bloque.png",
  //bloque bleu
  srcBloqueBleu1: "assets/image/blockbleu.png",
  srcBloqueBleu2: "assets/image/blockbleu2.png"
};

//swing attaque projectile
let oSwingWave = {
  x: 0,
  y: 0,
  largeur: oPerso.largeur + 600,
  hauteur: oPerso.hauteur + 350,
  vitesse: 10,
  image: new Image(),
  estSwingPresent: false,
  src: "assets/images/swingPH.png",
};

//perso block
//a faire plus tard

//intro image
let oImageIntro = new Image();
oImageIntro.src = "assets/images/intro.png";

// //fin image
// let oImageFin = new Image();
// oImageFin.src = "assets/images/placeholderfin.png";

//autres
let sEtatJeu = "intro";

let touche = null;

function initialiser() {
  oImageEau.image.src = oImageEau.src
  oSwingWave.image.src = oSwingWave.src;
  oPerso.image.src = oPerso.srcIdle;
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", clicCanvas);
  window.addEventListener("keydown", onToucheEnfoncee);
  window.addEventListener("keyup", onToucheRelachee);
  oSonMusique1.currentTime = 4;
}

function onToucheEnfoncee(evenement) {
  touche = evenement.key;
  if (
    touche == "r" &&
    oPerso.estAttaque == false &&
    oPerso.estAttaqueBleu == false
  ) {
    if (oPerso.estBleu == true) {
      oPerso.estAttaqueBleu = true;

      setTimeout(() => {
        oPerso.frameAttaque = 1;
      }, 140 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 2;
      }, 240 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 3;
      }, 340 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 4;
      }, 440 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 5;
      }, 540 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 6;
      }, 640 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 7;
        oTransformATQ.play()
        oTransformEndATQ.play()
      }, 740 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 8; //fin transition
      }, 800 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 9; //debut transform
      }, 900 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 10;
      }, 1000 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 11;
      }, 1100 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 12;
      }, 1200 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 13;
      }, 1300 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 14;
      }, 1400 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 15; //fin transform
      }, 1600 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 16; //debut swing
      }, 1800 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 17;
      }, 2000 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 18; //height
      }, 2400 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 19;
      }, 2500 * 1);

      setTimeout(() => {
        oPerso.frameAttaque = 20; //gros swing
        oSwingWave.x = oPerso.x - 325;
        oSwingWave.y = oPerso.y + oPerso.hauteur / 2 - 20;
        oSwingWave.estSwingPresent = true; //wave qui sort
        oHorizontalATQ.play() //son
      }, 2750 * 1);

      setTimeout(() => {
        oPerso.frameAttaque = 21; //fin swing
      }, 2900 * 1);

      setTimeout(() => {
        oPerso.frameAttaque = 22;
      }, 3000 * 1);
      setTimeout(() => {
        oPerso.frameAttaque = 23;
      }, 3300 * 1);

      setTimeout(() => {
        oPerso.estAttaqueBleu = false;
        oPerso.frameAttaque = 0;
      }, 5000 * 1);
      if (oPerso.estBleu == true) {
        oPerso.estBleu = false
      }
    } else {
      oPerso.estAttaque = true;
      setTimeout(function () {
        oPerso.frameAttaque = 1;
      }, 100 * 1.25);

      setTimeout(function () {
        oPerso.frameAttaque = 2;
        oSwingATQNormale.play()
      }, 200 * 1.25);

      setTimeout(function () {
        oPerso.frameAttaque = 3;
      }, 300 * 1.25);
      setTimeout(() => {
        oPerso.estAttaque = false;
        oPerso.frameAttaque = 0;

        oPerso.estBleu = false
      }, 700 * 1.25);
    }
  }



  if (oPerso.estHoldBloque == false) {
  if (touche == "f" && oPerso.estBloque == false && oPerso.estBleu == false) {
    oPerso.estBloque = true;
    setTimeout(() => {
        oPerso.frameBloque = 1;
      }, 100 * 1);
      setTimeout(() => {
        oPerso.frameBloque = 2;
        oBloqueReussi.play()  //son
      }, 200 * 1);
      setTimeout(() => {
        oPerso.estBloque = false;
        oPerso.frameBloque = 0;
      }, 500 * 1.25);
  } 
}
}

function onToucheRelachee(evenement) {
  touche = null;
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  if (sEtatJeu == "intro") {
    afficherIntro();
  } else if (sEtatJeu == "jeu") {
    afficherJeu();
  } else if (sEtatJeu == "fin") {
    afficherFin();
  }
}

function clicCanvas() {
  if (sEtatJeu == "intro") {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    oSonMusique2.currentTime = 1000000;
    oSonMusique1.play();
    sEtatJeu = "jeu";
  } else if (sEtatJeu == "fin") {

    sEtatJeu = "intro"
    oPerso.vie = 3
    oPerso.points = 0
//repositioner perso au debut
    oPerso.x = nLargeurCanvas / 2 - 120 / 2;
    oPerso.y = nHauteurCanvas - 100;
    oPerso.largeur = 120;
    oPerso.hauteur = 100;
    oPerso.image.src = oPerso.srcIdle;
//recommencer musique
    oSonMusique1.pause
    oSonMusique1.currentTime = 0;
    oSonMusique2.currentTime = 0.2;

  }



}

function afficherIntro() {
  oContexte.drawImage(oImageIntro, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oSonMusique2.play();
}

function afficherJeu() {
  dessinerPerso();
  dessinerEnemies();
  dessinerAmis();
  collisionsEnemies();
  collisionsAmis();
  collisionATQ();
  combat();
  UI();

  pagefin();
}

function dessinerEnemies() {
  //eau

  oImageEau.image.src = oImageEau.src;
  oImageEau.y += oImageEau.vitesse;
  oImageEau.angle += 0.05;

  if (oImageEau.y > nHauteurCanvas) {
    oImageEau.y = -262;

    setTimeout(function () {
      oImageEau.y = 0 - oImageEau.hauteur;
      oImageEau.x = Math.random() * (nLargeurCanvas - oImageEau.largeur);
    }, Math.random() * 3000 + 1500);
  }
  oContexte.drawImage(
    oImageEau.image,
    oImageEau.x,
    oImageEau.y,
    oImageEau.largeur,
    oImageEau.hauteur
  );
}

function dessinerAmis() {
  //oxygene

  oImageOxy.image.src = oImageOxy.src;
  oImageOxy.y += oImageOxy.vitesse;
  oImageOxy.angle += 0.05;

  if (oImageOxy.y > nHauteurCanvas) {
    oImageOxy.y = -262;

    setTimeout(function () {
      oImageOxy.y = 0 - oImageOxy.hauteur;
      oImageOxy.x = Math.random() * (nLargeurCanvas - oImageOxy.largeur);
    }, Math.random() * 2000 + 100);
  }
  oContexte.drawImage(
    oImageOxy.image,
    oImageOxy.x,
    oImageOxy.y,
    oImageOxy.largeur,
    oImageOxy.hauteur
  );

  //CuCl

  oImageCucl.image.src = oImageCucl.src;
  oImageCucl.y += oImageCucl.vitesse;
  oImageCucl.angle += 0.005;

  if (oImageCucl.y > nHauteurCanvas) {
    oImageCucl.y = -2620;

    setTimeout(function () {
      oImageCucl.y = 0 - oImageCucl.hauteur;
      oImageCucl.x = Math.random() * (nLargeurCanvas - oImageCucl.largeur);
    }, Math.random() * 4000000 + 4000000);
  }
  oContexte.drawImage(
    oImageCucl.image,
    oImageCucl.x,
    oImageCucl.y,
    oImageCucl.largeur,
    oImageCucl.hauteur
  );
}

//collision (enemies)
function collisionsEnemies() {
  let collision = detecterCollision(oPerso, oImageEau);

  if (collision == true) {
    oImageEau.y = -200;
    oImageEau.x = Math.random() * (nLargeurCanvas - oImageEau.largeur * 1.5);

    if (oPerso.estBleu) {
      oPerso.image.src = oPerso.srcMalBleu;
    } else {
      oPerso.image.src = oPerso.srcMal;
    }

    //si perso attaque
    if (
      oPerso.estAttaque == true ||
      oPerso.estAttaqueBleu == true ||
      oPerso.estBloque == true
    ) {
      oPerso.estMal = false;
      oPerso.points += 250
      oPerso.vie -= 0;
    } else {
      oPerso.estMal = true;
      oPerso.vie -= 1;
//ajouter son a faire (hit sfx)
    }

    //animation mal
    //taille reduit et sprite mal
    if (oPerso.estMal) {
      oPerso.largeur = oPerso.largeur - 25;
      oPerso.hauteur = oPerso.hauteur - 25;
    }

    //taille minimum
    if (oPerso.largeur < 60) {
      oPerso.largeur = 60;
    }
    if (oPerso.hauteur < 60) {
      oPerso.hauteur = 60;
    }

    //retourner sprite a idle apres 1 sec
    setTimeout(() => {
      oPerso.estMal = false;
    }, 1000);
  }
}

//collisions (amis)
function collisionsAmis() {
  //oxy

  let collision = detecterCollision(oPerso, oImageOxy);

  if (collision == true) {
    oImageOxy.y = -200;
    setTimeout(() => {
      oImageOxy.y = -oImageOxy.hauteur;
      oImageOxy.x = Math.random() * (nLargeurCanvas - oImageOxy.largeur);
    }, 1000);

    if (oPerso.estBleu) {
      oPerso.image.src = oPerso.srcBienBleu;
    } else {
      oPerso.image.src = oPerso.srcBien;
    }
    oPerso.estBien = true;
    oPerso.points += 125;

    //animation bien
    //taille grossi et sprite bien
    if (oPerso.estBien) {
      oPerso.largeur = oPerso.largeur + 25;
      oPerso.hauteur = oPerso.hauteur + 25;
    }

    //taille maximum
    if (oPerso.largeur > 190) {
      oPerso.largeur = 190;
    }
    if (oPerso.hauteur > 190) {
      oPerso.hauteur = 190;
    }

    //retourner sprite a idle apres 1 sec
    setTimeout(() => {
      oPerso.estBien = false;
    }, 1000);
  }

  //CuCl

  let collisionCuCl = detecterCollision(oPerso, oImageCucl);

  if (collisionCuCl == true) {
    oImageCucl.y = -2000;
    setTimeout(() => {
      oImageCucl.y = -oImageCucl.hauteur;
      oImageCucl.x = Math.random() * (nLargeurCanvas - oImageCucl.largeur);
    }, 15000);

    oPerso.estBleu = true;
    oPerso.points += 350;
    oPerso.vie += 5;
    //animation bien
    //taille grossi et sprite bien
    if (oPerso.estBien) {
      oPerso.largeur = oPerso.largeur + 25;
      oPerso.hauteur = oPerso.hauteur + 25;
    }
  }
}

//collisions attaques (swing, wave, block, etc.)
function collisionATQ() {

if (oSwingWave.estSwingPresent == true) { 
let collision = detecterCollision(oSwingWave, oImageEau);
if (collision == true) {
    // debugger;
    oImageEau.image.src = oImageEau.srcHit
    oHitEnnemi.play()

    setTimeout(() => {
      oImageEau.y = -200;
      oImageEau.x = Math.random() * (nLargeurCanvas - oImageEau.largeur * 1.5);
      oImageEau.image.src = oImageEau.src;
    }, 200); 
  }
}
}
//a faire

//touches clavier
function dessinerPerso() {
  //mouvements
  //gauche
  if (touche == "a") {
    oPerso.x -= oPerso.vitesse;
    if (oPerso.x < -180) {
      oPerso.x = -180;
    }
  }
  //droit
  if (touche == "d") {
    oPerso.x += oPerso.vitesse;
    if (oPerso.x > nLargeurCanvas * 1.225 - oPerso.largeur) {
      oPerso.x = nLargeurCanvas * 1.225 - oPerso.largeur;
    }
  }

  //up
  if (touche == "w") {
    oPerso.y -= oPerso.vitesse;
    if (oPerso.y < 0) {
      oPerso.y = 0;
    }
  }

  //down
  if (touche == "s") {
    oPerso.y += oPerso.vitesse;
    if (oPerso.y > nHauteurCanvas - oPerso.hauteur) {
      oPerso.y = nHauteurCanvas - oPerso.hauteur;
    }
  }

  //sprite animation
  // up

  if (oPerso.estMal == false && oPerso.estBien == false) {
    if (touche == "w") {
      oPerso.image.src = oPerso.srcVol;
    } else if (
      //down

      touche == "s"
    ) {
      oPerso.image.src = oPerso.srcDown;
    } else if (
      // gauche

      touche == "a"
    ) {
      oPerso.image.src = oPerso.srcGauche;
    } else if (
      //droit

      touche == "d"
    ) {
      oPerso.image.src = oPerso.srcDroit;
    } else {
      oPerso.image.src = oPerso.srcIdle;
    }
  }

  //si bleu = true
  if (oPerso.estBleu) {
    // up

    if (oPerso.estMal == false && oPerso.estBien == false) {
      if (touche == "w") {
        oPerso.image.src = oPerso.srcVolBleu;
      } else if (touche == "s") {
        //down
        oPerso.image.src = oPerso.srcDownBleu;
      } else if (touche == "a") {
        // gauche
        oPerso.image.src = oPerso.srcGaucheBleu;
      } else if (touche == "d") {
        //droit
        oPerso.image.src = oPerso.srcDroitBleu;
      } else {
        oPerso.image.src = oPerso.srcIdleBleu;
      }
    }
  }

  if (
    oPerso.estAttaque == false &&
    oPerso.estAttaqueBleu == false &&
    oPerso.estBloque == false
  ) {
    oContexte.drawImage(
      oPerso.image,
      oPerso.x,
      oPerso.y,
      oPerso.largeur,
      oPerso.hauteur
    );
  }
}

function combat() {
  //atq (R)
  if (oPerso.estAttaqueBleu == true) {
    if (oPerso.frameAttaque == 0) {
      oPerso.image.src = oPerso.srcATQB1;
    } else if (oPerso.frameAttaque == 1) {
      oPerso.image.src = oPerso.srcATQB2;
    } else if (oPerso.frameAttaque == 2) {
      oPerso.image.src = oPerso.srcATQB3;
    } else if (oPerso.frameAttaque == 3) {
      oPerso.image.src = oPerso.srcATQB4;
    } else if (oPerso.frameAttaque == 4) {
      oPerso.image.src = oPerso.srcATQB5;
    } else if (oPerso.frameAttaque == 5) {
      oPerso.image.src = oPerso.srcATQB6;
    } else if (oPerso.frameAttaque == 6) {
      oPerso.image.src = oPerso.srcATQB7;
    } else if (oPerso.frameAttaque == 7) {
      oPerso.image.src = oPerso.srcATQB8;
    } else if (oPerso.frameAttaque == 8) {
      //fin transition
      oPerso.image.src = oPerso.srcATQB9; //debut transform
    } else if (oPerso.frameAttaque == 9) {
      oPerso.image.src = oPerso.srcATQB10;
    } else if (oPerso.frameAttaque == 10) {
      oPerso.image.src = oPerso.srcATQB11;
    } else if (oPerso.frameAttaque == 11) {
      oPerso.image.src = oPerso.srcATQB12;
    } else if (oPerso.frameAttaque == 12) {
      oPerso.image.src = oPerso.srcATQB13;
    } else if (oPerso.frameAttaque == 13) {
      oPerso.image.src = oPerso.srcATQB14;
    } else if (oPerso.frameAttaque == 14) {
      oPerso.image.src = oPerso.srcATQB15;
    } else if (oPerso.frameAttaque == 15) {
      //transformation complet
      oPerso.image.src = oPerso.srcATQB16;
    } else if (oPerso.frameAttaque == 16) {
      //debut swing
      oPerso.image.src = oPerso.srcATQB17;
    } else if (oPerso.frameAttaque == 17) {
      oPerso.image.src = oPerso.srcATQB18;
    } else if (oPerso.frameAttaque == 18) {
      //2/3s
      oPerso.image.src = oPerso.srcATQB19;
    } else if (oPerso.frameAttaque == 19) {
      oPerso.image.src = oPerso.srcATQB20;
    } else if (oPerso.frameAttaque == 20) {
      oPerso.image.src = oPerso.srcATQB21;
    } else if (oPerso.frameAttaque == 21) {
      //fin swing
      oPerso.image.src = oPerso.srcATQB22;
    } else if (oPerso.frameAttaque == 22) {
      oPerso.image.src = oPerso.srcATQB23;
    }

    oContexte.drawImage(
      oPerso.image,
      oPerso.x,
      oPerso.y,
      oPerso.largeur * 1,
      oPerso.hauteur * 1
    );
  } else if (oPerso.estAttaque == true) {
    if (oPerso.frameAttaque == 0) {
      oPerso.image.src = oPerso.srcATQ1;
    } else if (oPerso.frameAttaque == 1) {
      oPerso.image.src = oPerso.srcATQ2;
    } else if (oPerso.frameAttaque == 2) {
      oPerso.image.src = oPerso.srcATQ3;
    } else if (oPerso.frameAttaque == 3) {
      oPerso.image.src = oPerso.srcATQ4;
    }
    oContexte.drawImage(
      oPerso.image,
      oPerso.x,
      oPerso.y,
      oPerso.largeur * 1,
      oPerso.hauteur * 1
    );
  }

  //swing (atq bleu)
  if (oSwingWave.estSwingPresent == true) {
    oSwingWave.y -= oSwingWave.vitesse;
    oContexte.drawImage(
      oSwingWave.image,
      oSwingWave.x,
      oSwingWave.y,
      oSwingWave.largeur,
      oSwingWave.hauteur
    );

    if (oSwingWave.y > nLargeurCanvas) {
      oSwingWave.estSwingPresent = false;
    }
  }

  //bloque
  if (oPerso.estBloque == true) {
    if (oPerso.frameBloque == 1) {
      oPerso.image.src = oPerso.srcBloque1;
    } else if (oPerso.frameBloque == 2) {
      oPerso.image.src = oPerso.srcBloque2;
    }
      oContexte.drawImage(
      oPerso.image,
      oPerso.x,
      oPerso.y,
      oPerso.largeur * 1.19,
      oPerso.hauteur * 1.35
    );
  }

if (oPerso.estBloque && oPerso.frameBloque == 1 && oPerso.estHoldBloque) {
  if (touche == "f") {
    oPerso.estHoldBloque = true
    oPerso.image.src = oPerso.srcBloque1
      oContexte.drawImage(
      oPerso.image,
      oPerso.x - 10,
      oPerso.y - 40,
      oPerso.largeur * 1.19,
      oPerso.hauteur * 1.35
    );
  } else {
    oPerso.estHoldBloque = false
  }
  }
}


//UI (score, vie, etc.)
function UI() {
  if (sEtatJeu == "jeu") {
    oContexte.fillText("Vie(s): " + oPerso.vie, 50, 80);
    oContexte.font = "45px Poppins";
  }

  if (oPerso.vie == 2) {
    oContexte.fillStyle = "orange";
  } else if (oPerso.vie == 1) {
    oContexte.fillStyle = "red";
  } else {
    oContexte.fillStyle = "black";
  }

  if (sEtatJeu == "jeu") {
    oContexte.fillText("Score(s): " + oPerso.points, 50, 40);
    oContexte.font = "45px Arial";
  }
}
function pagefin() {
  if (oPerso.vie == 0) {
    sEtatJeu = "fin";
  }
}

function afficherFin() {
  // oContexte.textAlign = "center";
  // oContexte.fillText(
  //   `Écran de fin`,
  //   nLargeurCanvas / 2,
  //   nHauteurCanvas / 2 - 20
  // );

if (oPerso.points > 6000) {
  oContexte.drawImage(oFin3, 0, 0, nLargeurCanvas, nHauteurCanvas);
} else if (oPerso.points > 4000) {
  oContexte.drawImage(oFin2, 0, 0, nLargeurCanvas, nHauteurCanvas);
} else if (oPerso.points > 2000) {
  oContexte.drawImage(oFin1, 0, 0, nLargeurCanvas, nHauteurCanvas);
} else {
oContexte.drawImage(oFin1, 0, 0, nLargeurCanvas, nHauteurCanvas)
}

  if (sEtatJeu == "fin") {
    oContexte.font = "45px Arial";
    oContexte.fillText(
      oPerso.points,
      nLargeurCanvas / 2 - 150,
      nHauteurCanvas / 2 + 80
    );

    oContexte.font = "25px Arial";
    oContexte.fillText(
      "(Cliquez n'importe où pour recommencer)",
      nLargeurCanvas / 2 - 150,
      nHauteurCanvas / 2 + 190
    );
  }

  //fait recommencer avec un clic
  //a faire (juste copie colle)
}

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

window.addEventListener("load", initialiser);

//par roger do
