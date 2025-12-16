//Liste d'inspiration pour l'apprentissage de certains concepts:
//-------------------------------------------------------------------
// Conseils collègues-famille
// exercice Meteor (animation)
// exercice Quiz gr04 (placement de boutons et liens avec les collisions)
// exercice 08_Dessin (placement de collision)
// Plusieurs notes à travers le JS ont étés prises disons... désolé

///////////////////////////////// Fond Écran Titre /////////////////////////////////////////////
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nLargeur = oCanvasHTML.width;
let nHauteur = oCanvasHTML.height;

let oFondTitre = new Image();
oFondTitre.src = "assets/images/bg_1.jpg";

let oFondInstructions = new Image();
oFondInstructions.src = "assets/images/bg2.jpg";

///Musique d'ambiance///

let oMusique = {
  son: new Audio("assets/audio/chillin039_with_my_puzzlesremixed2.ogg"),
};

///////////////////////////QUESTIONS///////////////////////////////////////
let questions = [
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Canada",
    choixReponses: ["Canada", "États-Unis", "France"],
    points: 5,
  },
  {
    question: "Quelle est la capitale de ce pays?",
    bonneReponse: "Londres",
    choixReponses: ["Buenos Aires", "Paris", "Londres"],
    points: 5,
  },
  {
    question: "Quel est le plus petit continent?",
    bonneReponse: "Océanie",
    choixReponses: ["Amérique du Sud", "Afrique", "Océanie"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Belgique",
    choixReponses: ["Allemagne", "Belgique", "Italie"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Chine",
    choixReponses: ["Japon", "Chine", "Russie"],
    points: 5,
  },
  {
    question: "Dans quel continent se trouve ce pays?",
    bonneReponse: "Europe",
    choixReponses: ["Amérique du Nord", "Asie", "Europe"],
    points: 5,
  },
  {
    question: "Que représente ce drapeau?",
    bonneReponse: "Antarctique",
    choixReponses: ["Antarctique", "Australie", "Russie"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Bolivie",
    choixReponses: ["Colombie", "Bolivie", "Hongrie"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Vietnam",
    choixReponses: ["Roumanie", "Vietnam", "Espagne"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Vatican",
    choixReponses: ["Italie", "Vatican", "Macédoine du Nord"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Turkménistan",
    choixReponses: ["Afghanistan", "Ouzbékistan", "Turkménistan"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Suède",
    choixReponses: ["Suède", "Danemark", "Suisse"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Nouvelle-Zélande",
    choixReponses: ["Australie", "Nouvelle-Zélande", "Islande"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Népal",
    choixReponses: ["Népal", "Laos", "Espagne"],
    points: 5,
  },
  {
    question: "Quel est le pays représenté?",
    bonneReponse: "Portugal",
    choixReponses: ["Roumanie", "Espagne", "Portugal"],
    points: 5,
  },
];

////////Le score commence à 0 et les points associés à la question ne sont pas encore remis au joueur (Techniquement?)///////
let questionActuelle = 0;
let score = 0;

///////////////////////////////Section Affichage des drapeaux////////////////////////////////
let oDrapeauCan = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/canada_01_16.png",
};
oDrapeauCan.image.src = oDrapeauCan.src;

let oDrapeauUk = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/united_kingdom_16.png",
};
oDrapeauUk.image.src = oDrapeauUk.src;

let oDrapeauAus = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/australia_16.png",
};
oDrapeauAus.image.src = oDrapeauAus.src;

let oDrapeauBel = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/belgium_16.png",
};
oDrapeauBel.image.src = oDrapeauBel.src;

let oDrapeauChn = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/china_16.png",
};
oDrapeauChn.image.src = oDrapeauChn.src;

let oDrapeauGre = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/greece_16.png",
};
oDrapeauGre.image.src = oDrapeauGre.src;

let oDrapeauAnt = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/antarctica_16.png",
};
oDrapeauAnt.image.src = oDrapeauAnt.src;

let oDrapeauBol = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/bolivia_16.png",
};
oDrapeauBol.image.src = oDrapeauBol.src;

let oDrapeauViet = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/vietnam_16.png",
};
oDrapeauViet.image.src = oDrapeauViet.src;

let oDrapeauVat = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/vatican_city_16.png",
};
oDrapeauVat.image.src = oDrapeauVat.src;

let oDrapeauTuk = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  vitesse: -2,
  image: new Image(),
  src: "assets/images/png/16/turkmenistan_16.png",
};
oDrapeauTuk.image.src = oDrapeauTuk.src;

let oDrapeauSue = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/sweden_16.png",
};
oDrapeauSue.image.src = oDrapeauSue.src;

let oDrapeauNz = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/new_zealand_16.png",
};
oDrapeauNz.image.src = oDrapeauNz.src;

let oDrapeauNep = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/nepal_16.png",
};
oDrapeauNep.image.src = oDrapeauNep.src;

let oDrapeauPor = {
  x: 0,
  y: 0,
  largeur: 50,
  hauteur: 50,
  image: new Image(),
  src: "assets/images/png/16/portugal_16.png",
};
oDrapeauPor.image.src = oDrapeauPor.src;

///////On commence à l'écran titre////////

let etat = "intro";

//////On donne la possibilité d'utiliser la souris et de cliquer pour avancer dans le quiz//////

function initialiser() {
  oCanvasHTML.addEventListener("click", onClicCanvas);
  oCanvasHTML.addEventListener("click", clicCanvas);
  oCanvasHTML.addEventListener("mouseup", boutonRelache);
  oCanvasHTML.addEventListener("mousedown", boutonAppuyé);
  oCanvasHTML.addEventListener("mousemove", mouvementSourisJeu);
  setInterval(boucleJeu, 1000 / 60);
}

let curseurX = 0;
let curseurY = 0;

function mouvementSourisJeu(evenement) {
  curseurX = evenement.offsetX;
  curseurY = evenement.offsetY;
}
/////S'assure de l'état de la souris lorsque son bouton est utilisé/////

function boutonAppuyé(evenement) {
  boutonAppuyé = true;
}

function boutonRelache(evenement) {
  boutonAppuyé = false;
}

//////////////Le déroulement du quiz un par un////////////////

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeur, nHauteur);
  /////////////////////Écran Titre/////////////////////////////
  if (etat == "intro") {
    dessinerTitre();
    //////////////////Écran Instructions//////////////////////
  } else if (etat == "instructions") {
    dessinerInstructions();
  } else if (etat == "question1") {
    dessinerQuestion1();
  } else if (etat == "question2") {
    dessinerQuestion2();
  } else if (etat == "question3") {
    dessinerQuestion3();
  } else if (etat == "question4") {
    dessinerQuestion4();
  } else if (etat == "question5") {
    dessinerQuestion5();
  } else if (etat == "question6") {
    dessinerQuestion6();
  } else if (etat == "question7") {
    dessinerQuestion7();
  } else if (etat == "question8") {
    dessinerQuestion8();
  } else if (etat == "question9") {
    dessinerQuestion9();
  } else if (etat == "question10") {
    dessinerQuestion10();
  } else if (etat == "question11") {
    dessinerQuestion11();
  } else if (etat == "question12") {
    dessinerQuestion12();
  } else if (etat == "question13") {
    dessinerQuestion13();
  } else if (etat == "question14") {
    dessinerQuestion14();
  } else if (etat == "question15") {
    dessinerQuestion15();
  } else dessinerFin(); ///À revoir, pas complètement sûr du problème///
}

////////Un simple clic apporte le joueur à la prochaine fonction de la boucle/////////

function clicCanvas() {
  if (etat == "intro") {
    etat = "instructions";
  } else if (etat == "instructions") {
    etat = "question1";
  } else if (etat == "question15") {
    dessinerFin();
  }
}

function onClicCanvas(evenement) {
  /////////////////////Section à revoir! Lien entre collision, position et question! STRUCTURE À SIMPLIFIER???????????//////////////////////
  ///////////////////// && = addition à l'intérieur d'une condition ////////////////////////

  ////////////////SINON, le jeu continue et les propriétés de la souris et de ses mouvements reste les mêmes///////////////////////
  let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;

  let question = questions[questionActuelle];

  ////////////////////Forme bouton et collisions NOTE: Je crois avoir compris!Les dimensions ET les collisions commencent de droite à gauche! /////////////////////////
  /////Collision Boutons Questionaires/////
  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  for (let i = 0; i < question.choixReponses.length; i++) {
    let boutonY = departY + i * (boutonHauteur + 20);

    ////Ce qui arrive quand la bonne réponse est choisie en lien avec le clic et la détection (Il serait préférable de revoir!)////

    let collision = detecterClicObjet(curseurX, curseurY, {
      x: boutonX,
      y: boutonY,
      largeur: boutonLargeur,
      hauteur: boutonHauteur,
    });

    if (collision == true) {
      let reponseChoisie = question.choixReponses[i];

      if (reponseChoisie == question.bonneReponse) {
        score += question.points;
      }

      questionActuelle++;

      if (questionActuelle >= questions.length) {
        etat = "fin";
      } else {
        etat = "question" + (questionActuelle + 1);
      }
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////Fonction des clics/////////////////////////////////

///////////////////Seulement dans ces endroits précis/////////////////////
//Tester technique vue dans les images de drapeaux.
//NOTE: si "x:" dans tableau image correspond à l'axis, donc on peut associer une propriété, comme la position x ou y, avec .x ou .y pour déterniner un lien avec la position d'un élément. À revoir avec le professeur je crois.

function detecterClicObjet(x, y, zoneCollisionBoutons) {
  if (
    x >= zoneCollisionBoutons.x &&
    x <= zoneCollisionBoutons.x + zoneCollisionBoutons.largeur &&
    y >= zoneCollisionBoutons.y &&
    y <= zoneCollisionBoutons.y + zoneCollisionBoutons.hauteur
  ) {
    //return true et return false fonctionne (fiou!)
    return true;
  } else {
    return false;
  }
}

function dessinerTitre() {
  let boutonCommencerPartie = {
    x: 420,
    y: 390,
    largeur: 420,
    hauteur: 90,
  };

  oContexte.drawImage(oFondTitre, 0, 0, nLargeur, nHauteur);

  oContexte.font = "90px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Drap0Show!!", 355, 250);
  ///////////"Noir" est la couleur de base du rectangle créé//////////////////
  oContexte.fillStyle = "black";
  oContexte.fillRect(
    boutonCommencerPartie.x,
    boutonCommencerPartie.y,
    boutonCommencerPartie.largeur,
    boutonCommencerPartie.hauteur
  );

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Commencer Partie", 440, 450);

  if (oDrapeauCan.y == oCanvasHTML.height - oDrapeauCan.hauteur) {
    oDrapeauCan.vitesse = oDrapeauCan.vitesse * -1;
  }
  if (oDrapeauCan.y == 0) {
    oDrapeauCan.vitesse = oDrapeauCan.vitesse * -1;
  }
  oDrapeauCan.y = oDrapeauCan.y + oDrapeauCan.vitesse;
  oContexte.drawImage(
    oDrapeauCan.image,
    oDrapeauCan.x,
    oDrapeauCan.y,
    oDrapeauCan.largeur,
    oDrapeauCan.hauteur
  );
}

function dessinerInstructions() {
  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);
  oContexte.font = "90px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Instructions", 355, 200);

  oContexte.font = "16.5px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(
    "Répondez à la question avec la bonne réponse parmis les choix donnés. Pour sélectionner votre réponse, simplement cliquer la boîte.",
    40,
    350
  );

  oContexte.font = "16.5px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Pour continuer, cliquez l'écran.", 500, 400);

  oContexte.font = "80px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Bonne chance!!", 355, 500);
}
/////Les questions contiennent également la position du texte dans les rectangles noirs de façon similaire aux collisions des rectangles///////
function dessinerQuestion1() {
  ///////////////////Contenu Question 1 (ne pas oublier de créer collision sur les boutons de chaque question! Exercice Mario Paint ou Révision?)/////////////////

  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 1!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 125, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauCanX = 300;
  let DrapeauCanY = 260;
  oDrapeauCan.largeur = 200;
  oDrapeauCan.hauteur = 200;

  oContexte.drawImage(
    oDrapeauCan.image,
    DrapeauCanX,
    DrapeauCanY,
    oDrapeauCan.largeur,
    oDrapeauCan.hauteur
  );
}

function dessinerQuestion2() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 2!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauUkX = 300;
  let DrapeauUkY = 260;
  oDrapeauUk.largeur = 200;
  oDrapeauUk.hauteur = 200;

  oContexte.drawImage(
    oDrapeauUk.image,
    DrapeauUkX,
    DrapeauUkY,
    oDrapeauUk.largeur,
    oDrapeauUk.hauteur
  );
}

function dessinerQuestion3() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 3!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauAusX = 300;
  let DrapeauAusY = 260;
  oDrapeauAus.largeur = 200;
  oDrapeauAus.hauteur = 200;

  oContexte.drawImage(
    oDrapeauAus.image,
    DrapeauAusX,
    DrapeauAusY,
    oDrapeauAus.largeur,
    oDrapeauAus.hauteur
  );
}

function dessinerQuestion4() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 4!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauBelX = 300;
  let DrapeauBelY = 260;
  oDrapeauBel.largeur = 200;
  oDrapeauBel.hauteur = 200;

  oContexte.drawImage(
    oDrapeauBel.image,
    DrapeauBelX,
    DrapeauBelY,
    oDrapeauBel.largeur,
    oDrapeauBel.hauteur
  );
}

function dessinerQuestion5() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 5!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauChnX = 300;
  let DrapeauChnY = 260;
  oDrapeauChn.largeur = 200;
  oDrapeauChn.hauteur = 200;

  oContexte.drawImage(
    oDrapeauChn.image,
    DrapeauChnX,
    DrapeauChnY,
    oDrapeauChn.largeur,
    oDrapeauChn.hauteur
  );
}

function dessinerQuestion6() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 6!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauGreX = 300;
  let DrapeauGreY = 260;
  oDrapeauGre.largeur = 200;
  oDrapeauGre.hauteur = 200;

  oContexte.drawImage(
    oDrapeauGre.image,
    DrapeauGreX,
    DrapeauGreY,
    oDrapeauGre.largeur,
    oDrapeauGre.hauteur
  );
}

function dessinerQuestion7() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 7!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauAntX = 300;
  let DrapeauAntY = 260;
  oDrapeauAnt.largeur = 200;
  oDrapeauAnt.hauteur = 200;

  oContexte.drawImage(
    oDrapeauAnt.image,
    DrapeauAntX,
    DrapeauAntY,
    oDrapeauAnt.largeur,
    oDrapeauAnt.hauteur
  );
}

function dessinerQuestion8() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 8!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauBolX = 300;
  let DrapeauBolY = 260;
  oDrapeauBol.largeur = 200;
  oDrapeauBol.hauteur = 200;

  oContexte.drawImage(
    oDrapeauBol.image,
    DrapeauBolX,
    DrapeauBolY,
    oDrapeauBol.largeur,
    oDrapeauBol.hauteur
  );
}

function dessinerQuestion9() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 9!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauVietX = 300;
  let DrapeauVietY = 260;
  oDrapeauViet.largeur = 200;
  oDrapeauViet.hauteur = 200;

  oContexte.drawImage(
    oDrapeauViet.image,
    DrapeauVietX,
    DrapeauVietY,
    oDrapeauViet.largeur,
    oDrapeauViet.hauteur
  );
}
function dessinerQuestion10() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 10!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauVatX = 300;
  let DrapeauVatY = 260;
  oDrapeauVat.largeur = 200;
  oDrapeauVat.hauteur = 200;

  oContexte.drawImage(
    oDrapeauVat.image,
    DrapeauVatX,
    DrapeauVatY,
    oDrapeauVat.largeur,
    oDrapeauVat.hauteur
  );
}
function dessinerQuestion11() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 11!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauTukX = 300;
  let DrapeauTukY = 260;
  oDrapeauTuk.largeur = 200;
  oDrapeauTuk.hauteur = 200;

  oContexte.drawImage(
    oDrapeauTuk.image,
    DrapeauTukX,
    DrapeauTukY,
    oDrapeauTuk.largeur,
    oDrapeauTuk.hauteur
  );
}
function dessinerQuestion12() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 12!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauSueX = 300;
  let DrapeauSueY = 260;
  oDrapeauSue.largeur = 200;
  oDrapeauSue.hauteur = 200;

  oContexte.drawImage(
    oDrapeauSue.image,
    DrapeauSueX,
    DrapeauSueY,
    oDrapeauSue.largeur,
    oDrapeauSue.hauteur
  );
}
function dessinerQuestion13() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 13!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauNzX = 300;
  let DrapeauNzY = 260;
  oDrapeauNz.largeur = 200;
  oDrapeauNz.hauteur = 200;

  oContexte.drawImage(
    oDrapeauNz.image,
    DrapeauNzX,
    DrapeauNzY,
    oDrapeauNz.largeur,
    oDrapeauNz.hauteur
  );
}
function dessinerQuestion14() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 14!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauNepX = 300;
  let DrapeauNepY = 260;
  oDrapeauNep.largeur = 200;
  oDrapeauNep.hauteur = 200;

  oContexte.drawImage(
    oDrapeauNep.image,
    DrapeauNepX,
    DrapeauNepY,
    oDrapeauNep.largeur,
    oDrapeauNep.hauteur
  );
}
function dessinerQuestion15() {
  let question = questions[questionActuelle];

  oContexte.drawImage(oFondInstructions, 0, 0, nLargeur, nHauteur);

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Question 15!", 100, 150);

  oContexte.font = "40px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(question.question, 305, 150);

  let boutonLargeur = 400;
  let boutonHauteur = 60;
  let boutonX = nLargeur - boutonLargeur - 190;
  let departY = 250;

  oContexte.font = "30px JetSet";

  for (let i = 0; i < question.choixReponses.length; i++) {
    let y = departY + i * (boutonHauteur + 20);

    oContexte.fillStyle = "black";
    oContexte.fillRect(boutonX, y, boutonLargeur, boutonHauteur);

    oContexte.fillStyle = "white";
    oContexte.fillText(question.choixReponses[i], boutonX + 100, y + 40);
  }

  oContexte.font = "30px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Score : " + score, 20, 40);

  let DrapeauPorX = 300;
  let DrapeauPorY = 260;
  oDrapeauPor.largeur = 200;
  oDrapeauPor.hauteur = 200;

  oContexte.drawImage(
    oDrapeauPor.image,
    DrapeauPorX,
    DrapeauPorY,
    oDrapeauPor.largeur,
    oDrapeauPor.hauteur
  );
}

function dessinerFin() {
  let boutonRetour = {
    x: 420,
    y: 490,
    largeur: 420,
    hauteur: 90,
  };

  oContexte.drawImage(oFondTitre, 0, 0, nLargeur, nHauteur);
  //bloc de retour à l'écran titre//
  oContexte.fillStyle = "black";
  oContexte.fillRect(
    boutonRetour.x,
    boutonRetour.y,
    boutonRetour.largeur,
    boutonRetour.hauteur
  );
  oContexte.font = "90px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText("Félicitations", 355, 250);

  oContexte.font = "25px JetSet";
  oContexte.fillStyle = "black";
  oContexte.fillText(
    "Vous avez répondu à toutes les questions du quiz!",
    305,
    400
  );

  oContexte.font = "28px JetSet";
  oContexte.fillStyle = "white";
  oContexte.fillText("Retour à l'écran titre", 470, 543);
}

window.addEventListener("load", initialiser);
