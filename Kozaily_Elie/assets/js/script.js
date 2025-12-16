////////////////////////////////////////////////////////////////
// === VARIABLES
////////////////////////////////////////////////////////////////

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
oContexte.imageSmoothingEnabled = false;

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let sEtat = "intro";

let tailleTexte = 40;
let taileTexteFinal = 15;
let positionTexte = oCanvasHTML.width / 2;
let directionPersonnage = 0.1;
let directionTexteFinal = 1
let positionCurseurX = 0;
let positionCurseurY = 0;

////////////////////////////////////////////////////////////////
// FONDS
//////////////////////////////////////////////////////////////////

let oFond = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  vitesse: 1,
  image: new Image(),
  src: "assets/images/Dk1nEb.png",
};


let oFondNiveau1 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "assets/images/niveau1.avif",
};


let oFondNiveau2 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "assets/images/niveau2.jpg",
};


let oFondNiveau3 = {
  x: 0,
  y: 0,
  hauteur: oCanvasHTML.height,
  largeur: oCanvasHTML.width,
  image: new Image(),
  src: "assets/images/niveau3.jpg",
};

////////////////////////////////////////////////////////////////
// VARIABLES IMAGES
////////////////////////////////////////////////////////////////

let oEngrenage = {
  x: 700,
  y: 10,
  image: new Image(),
  src: "assets/images/engrenage.jpg",
};

let oX = {
  x: 700,
  y: 10,
  image: new Image(),
  src: "assets/images/exit.png",
};

let oRetour = {
  x: 10,
  y: 10,
  image: new Image(),
  src: "assets/images/OIP.webp",
};

let oMusic = {
  x: 10,
  y: 10,
  image: new Image(),
  src: "assets/images/OIP (1).webp",
};

let oSonReduire = {
  x: 100,
  y: 350,
  image: new Image(),
  src: "assets/images/OIP (2).webp ",
};

let oSonMonte = {
  x: 600,
  y: 350,
  image: new Image(),
  src: "assets/images/OIP (3).webp",
};

let oBarreSon = {
  x: 220,
  y: 350,
  image: new Image(),
  src: "assets/images/R.jpg",
};

let oToucheSouris = {
  x: 100,
  y: 100,
  image: new Image(),
  src: "assets/images/souris.jpg",
};

let oToucheClavier = {
  x: 500,
  y: 100,
  image: new Image(),
  src: "assets/images/clavier.png",
};

let oBoutonNIveau = {
  x: 140,
  y: 160,
  hauteur: 10,
  largeur: 10,
  image: new Image(),
  src: "assets/images/button-seagreen.png",
};


let oBoutonNIveauRouge = {
  x: 140,
  y: 260,
  hauteur: 10,
  largeur: 10,
  image: new Image(),
  src: "assets/images/bouton_rouge.png",
};


////////////////////////////////////////////////////////////////
// VARIABLES PERSONNAGES
////////////////////////////////////////////////////////////////



let oPersonnage1 = {
  x: 300,
  y: 40,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 128,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  7,
  image: new Image(),
  src: "assets/images/sorcier_sprite.png",
};


let oPersonnage2 = {
  x: 300,
  y: 350,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 129,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  7,
  image: new Image(),
  src: "assets/images/sorcière_sprite (2).png ",
};




let oPersonnage3 = {
  x: 300,
  y: 350,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 129,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  8,
  image: new Image(),
  src: "assets/images/mechant_sprite.png",
};



let oPersonnage1Mort = {
  x: 300,
  y: 350,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 129,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  6,
  image: new Image(),
  src: "assets/images/Dead_sorcier.png",
  animationComplete : false
};

let oPersonnage2Mort = {
  x: 300,
  y: 350,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 129,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  5,
  image: new Image(),
  src: "assets/images/Dead__sorciere.png",
  animationComplete : false
};

let oPersonnage3Mort = {
  x: 300,
  y: 350,
  hauteur: 300,
  largeur: 300,
  largeurFrame : 128,
  hauteurFrame : 129,
  colonneFrame : 0,
  rangeeFrame : 0,
  frameMax :  4,
  image: new Image(),
  src: "assets/images/Dead_méchant.png",
  animationComplete : false
};






let personnageChoisi;
let oRectangle1 = oContexte.strokeRect(300,120,250,300);


////////////////////////////////////////////////////////////////
// VARIABLES INTRO
////////////////////////////////////////////////////////////////


let hauteurBaguette = 50;
let largeurBaguette = 150;
let oImageBaguette = new Image();
oImageBaguette.src = "assets/images/5531212.png";
let vitesse = 2.1;
let directionBaguette = 1;

let oImageStart = new Image();
oImageStart.src = "assets/images/bouton.png";
let hauteurStart = -500;
let largeurStart = 250;




////////////////////////////////////////////////////////////////
//VARIABLES NIVEAU 1
////////////////////////////////////////////////////////////////

nMinuterieNiveau1 = 0;
let nTempsRestant = 120;
let nTempsMax = 120;


let questions = [
    {
        question: "Combiens font 2+2",
        bonneReponse: "4",
        choixReponses: ["2", "4", "6"],
        
    },
    {
        question: "Combiens font 7*12",
        bonneReponse: "84",
        choixReponses: ["84", "120", "86"],
        
    },
    {
        question: "Combiens font 180/12",
        bonneReponse: "15",
        choixReponses: ["12", "15", "17"],
      
    },

    {
        question: "Combiens font 17+34",
        bonneReponse: "51",
        choixReponses: ["0", "51", "45"],
      
    },

    {
        question: "Combiens font 98-23",
        bonneReponse: "75",
        choixReponses: ["65", "85", "75"],
      
    },

    {
        question: "Combiens font 76/6",
        bonneReponse: "12.67",
        choixReponses: ["12.67", "14.15", "13"],
      
    },

        {
        question: "Combiens font 150*0.5",
        bonneReponse: "75",
        choixReponses: ["300", "75", "85"],
      
    },

    {
        question: "Combiens font 10+12",
        bonneReponse: "22",
        choixReponses: ["22", "26", "19"],
      
    },


    
    {
        question: "Combiens font 100*100",
        bonneReponse: "10 000",
        choixReponses: ["100 000", "1000", "10 000"],
      
    },

    
    {
        question: "Combiens font 1/0",
        bonneReponse: "erreur",
        choixReponses: ["0", "erreur", "1"],
      
    },

    
    {
        question: "Combiens font 48/8",
        bonneReponse: "6",
        choixReponses: ["6", "8", "12"],
      
    },

    
    {
        question: "Combiens font 2+5*12",
        bonneReponse: "62",
        choixReponses: ["72", "92", "62"],
      
    },


];

////////////////////////////////////////////////////////////////
// VARIABLES NIVEAU 2
////////////////////////////////////////////////////////////////

let questions2 = [
    {
        question: "Quelle est la valeur de 5 à la 2?",
        bonneReponse: "25",
        choixReponses: ["50", "10", "25"],
        
    },
    {
        question: "Quelle est la racine carrée de 81 ?",
        bonneReponse: "9",
        choixReponses: ["9", "8", "7"],
        
    },
    {
        question: "Combiens vaut x dans : 2x + 4 = 10",
        bonneReponse: "3",
        choixReponses: ["3", "2", "6"],
      
    },

    {
        question: "Combiens font 7 x 8",
        bonneReponse: "56",
        choixReponses: ["54", "56", "42"],
      
    },

    {
        question: "Quelle est la pante de la droite y = 3x + 2",
        bonneReponse: "3",
        choixReponses: ["2", "3", "1/3"],
      
    },

    {
        question: "Combiens font 12/3",
        bonneReponse: "4",
        choixReponses: ["3", "2", "4"],
      
    },

        {
        question: "Quelle est la valeur de X si x/5 = 7",
        bonneReponse: "35",
        choixReponses: ["12", "2", "35"],
      
    },

    {
        question: "Quelle est la valeur de 3 à la 3?",
        bonneReponse: "27",
        choixReponses: ["9", "26", "27"],
      
    },


    
    {
        question: "Combiens font 1/2 + 1/4",
        bonneReponse: "3/4",
        choixReponses: ["3/4", "1/2", "1/3"],
      
    },

    
    {
        question: "Quelle est l’aire d’un carré de côté 6 ?",
        bonneReponse: "36",
        choixReponses: ["6", "12", "36"],
      
    },

    
    {
        question: "Quelle est la valeur de X si 4x = 20",
        bonneReponse: "5",
        choixReponses: ["2", "4", "5"],
      
    },

    
    {
        question: "Combiens font 2+5*12",
        bonneReponse: "62",
        choixReponses: ["72", "92", "62"],
      
    },


];





nMinuterieNiveau2 = 0;
let nTempsRestant2 = 3000;
let nTempsMax2 = 3000;
let nTempsPasse2 = 0;

////////////////////////////////////////////////////////////////
// VARIABLES NIVEAU 3
////////////////////////////////////////////////////////////////

let questions3 = [
    {
        question: "Quelle est la dérivée de f(x) = 5x³ ?",
        bonneReponse: "15x²",
        choixReponses: ["5x²", "15x²", "3x²"],
        
    },
    {
        question: "Résous l'équation 4x + 2 = 10.",
        bonneReponse: "x = 2",
        choixReponses: ["x = 3", "x = 2", "x = 4"],
        
    },
    {
        question: "Quelle est la valeur de cos(0°)",
        bonneReponse: "1",
        choixReponses: ["1", "-1", "0"],
      
    },

    {
        question: "Quelle est la solution de x² - 9 = 0 ?",
        bonneReponse: "x = ±3",
        choixReponses: ["x = 9", "x = 9", "x = ±3"],
      
    },

    {
        question: "Quelle est la valeur de log base⁡10(100)",
        bonneReponse: "2",
        choixReponses: ["2", "10", "4"],
      
    },

    {
        question: "Quelle est la solution de 2x + 5 = 11",
        bonneReponse: "3",
        choixReponses: ["3", "-3", "6"],
      
    },

        {
        question: "Quelle est la valeur de sin(90°)",
        bonneReponse: "1",
        choixReponses: ["0", "-1", "1"],
      
    },

    {
        question: "Quelle est la racine carrée de 144 ?",
        bonneReponse: "12",
        choixReponses: ["12", "10", "14"],
      
    },


    
    {
        question: "Quelle est la limite de 1 𝑥 quand 𝑥 → + ∞?",
        bonneReponse: "0",
        choixReponses: ["0", "1", "∞"],
      
    },

    
    {
        question: "Quelle est l’aire d’un carré de côté 6 ?",
        bonneReponse: "36",
        choixReponses: ["6", "12", "36"],
      
    },

    
    {
        question: "Quelle est l’intégrale de ∫(2𝑥+3) 𝑑𝑥?",
        bonneReponse: "𝑥 à la 2+3𝑥+𝐶",
        choixReponses: ["𝑥 à la 2+3𝑥+𝐶", "2x + 3x + c", "5x"],
      
    },

    
    {
        question: "Quelle est la solution de 2 à la x = 32?",
        bonneReponse: "5",
        choixReponses: ["2", "4", "5"],
      
    },


];

nMinuterieNiveau3 = 0;
let nTempsRestant3 = 3000;
let nTempsMax3 = 3000;
let nTempsPasse3 = 0;

////////////////////////////////////////////////////////////////
// RESTE VARIABLES
////////////////////////////////////////////////////////////////

let CoeurVIde = {
  x: 140,
  y: 260,
  hauteur: 10,
  largeur: 10,
  image: new Image(),
  src: "assets/images/coeur_vide.png",
};


let CoeurMoitie = {
  x: 140,
  y: 260,
  hauteur: 10,
  largeur: 10,
  image: new Image(),
  src: "assets/images/coeur_moitié.png",
};

let Coeur = {
  x: 140,
  y: 260,
  hauteur: 10,
  largeur: 10,
  image: new Image(),
  src: "assets/images/coeur.png",
};



let vie = 60;
let vieEnnemi = 60;


let vie2 = 60;
let vieEnnemi2 = 60;
let questionActuelle = 0;

let questionActuelle2 = 0;



let questionActuelle3 = 0

let vie3 = 60;
let vieEnnemi3 = 60;





////////////////////////////////////////////////////////////////
// VARIABLES TEXT
////////////////////////////////////////////////////////////////


let textNiveau = ""
let motAAfficher1 = "NIVEAUX"
let posLettre = 0;

let nTempsPasse = 0;
let nMinuterie = 10;



let tailletexte2 = 30;
let tailletexte3 = 30;
let tailleBouton = 50;

let directionBouton = 1;

tempspersonnage = 0;


let hauteurTexteintro = -100;

////////////////////////////////////////////////////////////////
// ==== Musique / son
////////////////////////////////////////////////////////////////

let barreSon = 3;

let oSonMusicIntro = new Audio();
oSonMusicIntro.src = "assets/audio/intro.wav";
oSonMusicIntro.volume = 0.2;
oSonMusicIntro.loop = true;


let oSonBonneReponse = new Audio
oSonBonneReponse.src = "assets/audio/bonne_reponse.mp3";
oSonBonneReponse.volume = 1;
oSonBonneReponse.loop = false;

let oSonMauvaiseReponse = new Audio
oSonMauvaiseReponse.src = "assets/audio/mauvaise_reponse.mp3";
oSonMauvaiseReponse.volume = 1;
oSonMauvaiseReponse.loop = false;



let oSonVictoire = new Audio
oSonVictoire.src = "assets/audio/victoire.mp3";
oSonVictoire.volume = 1;
oSonVictoire.loop = false;


let oSonDefaite = new Audio
oSonDefaite.src = "assets/audio/defaite.mp3";
oSonDefaite.volume = 1;
oSonDefaite.loop = false;



//////////////////////////////////////////////////////////////////////////////////////////////////////////

function initialiser() {
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", onClicCanvas);
  oCanvasHTML.addEventListener("mousemove", mouvementSouris);
} 

function mouvementSouris(evenement) {
  // console.log("déplacement souris", positionCurseurX, positionCurseurY);
  positionCurseurX = evenement.offsetX;
  positionCurseurY = evenement.offsetY;

}

////////////////////////////////////////////////////////////////
//==== FONCTIONS D'ÉCOUTEUR D'ÉVÉNEMENTS
////////////////////////////////////////////////////////////////

function onClicCanvas(evenement) {
  if (sEtat == "intro") {
    // bouton start jeu
    let collision = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      500,
      300,
      300
    );

    if (collision == true && nMinuterie < 5) {
      sEtat = "selectionPersonnage";
    }

    let collisionEngrenage = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      700,
      10,
      50,
      50
    );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (collisionEngrenage == true) {
      sEtat = "option";
    }

    let collisionMusic = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      10,
      10,
      50,
      50
    );

    if (collisionMusic == true) {
      oSonMusicIntro.play();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else if (sEtat == "jeu") {
  } else if (sEtat == "option") {
    let collisionRetour = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      10,
      10,
      50,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionRetour == true) {
      sEtat = "intro";
    }

    let collisionSon = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      360,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionSon == true) {
      sEtat = "son";
    }

    let collisionBouton_ = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      460,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionBouton_ == true) {
      sEtat = "bouton";
    }

    let collisionHistoire = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      560,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionHistoire == true) {
      sEtat = "histoire";
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
  } else if (sEtat == "son") {
    let collisionAugmenter = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionAugmenter == true) {
      oSonMusicIntro.volume += 0.1;
      barreSon += 1;
    }

    let collisionReduire = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      560,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionReduire == true) {
      oSonMusicIntro.volume -= 0.1;
      barreSon -= 1;
    }

    let collisionRetour = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      10,
      10,
      50,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionRetour == true) {
      sEtat = "option";
    }
  } else if (sEtat == "bouton") {
    let collisionRetour = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      10,
      10,
      50,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionRetour == true) {
      sEtat = "option";
    }
  } else if (sEtat == "histoire") {
    let collisionRetour = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      10,
      10,
      50,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionRetour == true) {
      sEtat = "option";
    }
  } else if (sEtat == "selectionPersonnage"){
    
    let collisionRevenir = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      440,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionRevenir == true){
      sEtat = "selectionPersonnage"
    }
  
    let collisionX = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      700,
      10,
      50,
      50
    );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionX == true){
      sEtat = "sortir"
    }

    let collisionQuitter = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      460,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (collisionQuitter == true){
      sEtat = "intro"
    }

      let passerPersonnage1 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      300,
      120,
      250,
      300
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (passerPersonnage1 == true){
      personnageChoisi = oPersonnage1
      sEtat = "niveau"
      nTempsPasse=0
    }
  

      let passerPersonnage2 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      300,
      450,
      250,
      320

    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (passerPersonnage2 == true){
      personnageChoisi = oPersonnage2
      sEtat = "niveau"
      nTempsPasse=0
    }

  } else if (sEtat == "sortir"){
    let collisionRevenir = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      560,
      300,
      50
    );

  } else if (sEtat == "niveau"){
     let boutonNIveau1 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      160, 
      300,
      50

    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (boutonNIveau1 == true){
      sEtat = "niveau1"
      tempspersonnage =0;


      
    }




  } else if (sEtat == "niveau1"){

    for (let i = 0; i < 3; i++) {
        let zone = {
            x: i * (nLargeurCanvas / 3),
            y: 300,
            largeur: nLargeurCanvas / 3,
            hauteur: 50,
        };
        
        let collision = verifierCollision(positionCurseurX, positionCurseurY, zone.x, zone.y, zone.largeur, zone.hauteur);
        

        if (collision == true) {
            //Récupère l'infos de la question
            let questionAAfficher = questions[questionActuelle];
            let choixReponses = questionAAfficher.choixReponses;
            let reponseChoisie = choixReponses[i];
            let bonneReponse = questionAAfficher.bonneReponse;


            //Compare le choix de réponse avec la bonne réponse
            if (reponseChoisie == bonneReponse) {
                //Jouer un son de succès
                vieEnnemi -= 10;
                oSonBonneReponse.play();
            }

            if(reponseChoisie != bonneReponse){
              vie -= 10
              oSonMauvaiseReponse.play();
            }
            questions.splice(questionActuelle,1)
            questionActuelle = Math.floor(Math.random()*questions.length);
           
        }
    }
    
    let collisionNiveauSuivant1 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(collisionNiveauSuivant1 == true &&  vieEnnemi <= 0 ){
      sEtat = "niveau2"
      oPersonnage3Mort.animationComplete = false;
      oPersonnage3Mort.colonneFrame =0;
    }


    let collisionRecommencer = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );

   if(collisionRecommencer == true && vie <= 0 ){
     window.location.reload();
   }

    
  } else if (sEtat == "niveau2"){

    for (let i = 0; i < 3; i++) {
        let zone = {
            x: i * (nLargeurCanvas / 3),
            y: 300,
            largeur: nLargeurCanvas / 3,
            hauteur: 50,
        };
        
        let collision = verifierCollision(positionCurseurX, positionCurseurY, zone.x, zone.y, zone.largeur, zone.hauteur);
        

        if (collision == true) {
            //Récupère l'infos de la question
            let questionAAfficher = questions2[questionActuelle2];
            let choixReponses = questionAAfficher.choixReponses;
            let reponseChoisie = choixReponses[i];
            let bonneReponse = questionAAfficher.bonneReponse;


            //Compare le choix de réponse avec la bonne réponse
            if (reponseChoisie == bonneReponse) {
                //Jouer un son de succès
                vieEnnemi2 -= 10;
                oSonBonneReponse.play();
            }

            if(reponseChoisie != bonneReponse){
              vie2 -= 10
              oSonMauvaiseReponse.play();
            }
            questions2.splice(questionActuelle2,1)
            questionActuelle2 = Math.floor(Math.random()*questions2.length);
           
        }
    }

        
    let collisionNiveauSuivant2 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    if(collisionNiveauSuivant2 == true &&  vieEnnemi2 <= 0 ){
      sEtat = "niveau3"
      oPersonnage3Mort.animationComplete = false;
      oPersonnage3Mort.colonneFrame =0;
    }


    let collisionRecommencer = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );

   if(collisionRecommencer == true && vie2 <= 0 ){
     window.location.reload();
   }
  } else if (sEtat == "niveau3"){

    for (let i = 0; i < 3; i++) {
        let zone = {
            x: i * (nLargeurCanvas / 3),
            y: 300,
            largeur: nLargeurCanvas / 3,
            hauteur: 50,
        };
        
        let collision = verifierCollision(positionCurseurX, positionCurseurY, zone.x, zone.y, zone.largeur, zone.hauteur);
        

        if (collision == true) {
            //Récupère l'infos de la question
            let questionAAfficher = questions3[questionActuelle3];
            let choixReponses = questionAAfficher.choixReponses;
            let reponseChoisie = choixReponses[i];
            let bonneReponse = questionAAfficher.bonneReponse;


            //Compare le choix de réponse avec la bonne réponse
            if (reponseChoisie == bonneReponse) {
                //Jouer un son de succès
                vieEnnemi3 -= 10;
                oSonBonneReponse.play();
            }

            if(reponseChoisie != bonneReponse){
              vie3 -= 10
              oSonMauvaiseReponse.play();
            }
            questions3.splice(questionActuelle3,1)
            questionActuelle3 = Math.floor(Math.random()*questions3.length);
           
        }
    }

        
    let collisionNiveauSuivant3 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );

    if(collisionNiveauSuivant3 == true &&  vieEnnemi3 <= 0 ){
      sEtat = "fin"
    }


    let collisionRecommencer = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      250,
      260,
      300,
      50
    );

   if(collisionRecommencer == true && vie3 <= 0 ){
     window.location.reload();
   }
  } else if (sEtat == "fin"){
  
    let collisionRecommencer = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      500, 
      600, 
      300, 
      50
    );

   if(collisionRecommencer == true){
     window.location.reload();
   }
    
    
  }
  

    
  
} 


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// === Boucle jeu
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  if (sEtat == "intro") {
    dessinerFondIntro();
    intro();
    dessinerEngrenage();
    music();
  
 
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "option") {
    option();
    boutonRetour();
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "jeu") {
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "selectionPersonnage"){
    selectionPersonnage();
    //sortir();
    let passerPersonnage1 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      300,
      120,
      250,
      300
    );

    if (passerPersonnage1 == true){
      tailletexte2.vitesse = 0.5;
      tailletexte2 += directionPersonnage;


      if(tailletexte2 > 30){
          directionPersonnage *= -1;
      }else if (tailletexte2 < 20){
          directionPersonnage *= -1
      }
      }
    

      let passerPersonnage2 = verifierCollision(
      positionCurseurX,
      positionCurseurY,
      300,
      450,
      250,
      320

    );

    if (passerPersonnage2 == true){
      tailletexte3.vitesse = 0.5;
      tailletexte3 += directionPersonnage;


      if(tailletexte3 > 30){
          directionPersonnage *= -1;
      }else if (tailletexte3 < 20){
          directionPersonnage *= -1
      }
      }
    
    

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "sortir"){
    sortir__();

  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "son") {
    son();
    boutonRetour();
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "bouton") {
    bouton();
    boutonRetour();
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "histoire") {
    histoire();
    boutonRetour();
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "niveau"){
    nTempsPasse++


   niveau_total();
    console.log(nTempsPasse);
    
  if(nTempsPasse%30==0){
    if(posLettre<motAAfficher1.length){
        textNiveau += motAAfficher1[posLettre]
        posLettre++
      }
    
    }
     oContexte.fillStyle="white"
     oContexte.fillText(textNiveau, nLargeurCanvas/2, 50 )
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(sEtat == "niveau1"){
    nMinuterieNiveau1++
    boutonRetour();
    niveau1();
    if(vie > 0 && vieEnnemi > 0){
      afficherQuestion();  
     
    }

    if(vie <= 0 || vieEnnemi <= 0){

    }

    if(vie <= 0 ){
      Recommencer();
      oSonDefaite.play();
    } else if (vieEnnemi <= 0){
      oPersonnage3Mort.animationComplete=false
      ProchainNiveau();
      oSonVictoire.play()
    }

      if (personnageChoisi == oPersonnage1 && vie > 0){
      if(tempspersonnage % 7 == 0){
        oPersonnage1.colonneFrame +=1;
    }
    oPersonnage1.image.src = oPersonnage1.src;
    if(oPersonnage1.colonneFrame >= oPersonnage1.frameMax){
        oPersonnage1.colonneFrame =0;
    }

    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1.image, oPersonnage1.colonneFrame * oPersonnage1.largeurFrame, oPersonnage1.rangeeFrame * oPersonnage1.hauteurFrame, oPersonnage1.largeurFrame, oPersonnage1.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();

    } else if (personnageChoisi == oPersonnage2 && vie > 0){
    
      if(tempspersonnage % 7 == 0){
        oPersonnage2.colonneFrame +=1;
    }
    oPersonnage2.image.src = oPersonnage2.src;
    if(oPersonnage2.colonneFrame >= oPersonnage2.frameMax){
        oPersonnage2.colonneFrame =0;
    }
    
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2.image, oPersonnage2.colonneFrame * oPersonnage2.largeurFrame, oPersonnage2.rangeeFrame * oPersonnage2.hauteurFrame, oPersonnage2.largeurFrame, oPersonnage2.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
        }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (sEtat == "niveau2"){
    niveau2();
    tempspersonnage++;
    
    if(vie2 > 0 && vieEnnemi2 > 0){
      afficherQuestion2();
     
    }

    if(vie2 <= 0 || vieEnnemi2 <= 0){
       
    }

     if(vie2 <= 0 ){
      Recommencer();
     oSonDefaite.play()
    } else if (vieEnnemi2 <= 0){
      ProchainNiveau();
      oSonVictoire.play()
    }

    if (personnageChoisi == oPersonnage1 && vie2 > 0){
      if(tempspersonnage % 7 == 0){
        oPersonnage1.colonneFrame +=1;
    }
    oPersonnage1.image.src = oPersonnage1.src;
    if(oPersonnage1.colonneFrame >= oPersonnage1.frameMax){
        oPersonnage1.colonneFrame =0;
    }

    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1.image, oPersonnage1.colonneFrame * oPersonnage1.largeurFrame, oPersonnage1.rangeeFrame * oPersonnage1.hauteurFrame, oPersonnage1.largeurFrame, oPersonnage1.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();

    } else if (personnageChoisi == oPersonnage2 && vie2 > 0){
    
      if(tempspersonnage % 7 == 0){
        oPersonnage2.colonneFrame +=1;
    }
    oPersonnage2.image.src = oPersonnage2.src;
    if(oPersonnage2.colonneFrame >= oPersonnage2.frameMax){
        oPersonnage2.colonneFrame =0;
    }
    
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2.image, oPersonnage2.colonneFrame * oPersonnage2.largeurFrame, oPersonnage2.rangeeFrame * oPersonnage2.hauteurFrame, oPersonnage2.largeurFrame, oPersonnage2.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
        }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
 if (sEtat == "niveau3"){
    niveau3();
    tempspersonnage++;
    
    if(vie3 > 0 && vieEnnemi3 > 0){
      afficherQuestion3();
     
    }

    if(vie3 <= 0 || vieEnnemi3 <= 0){
       
    }

     if(vie3 <= 0 ){
      Recommencer();
      oSonDefaite.play()
    } else if (vieEnnemi3 <= 0){
      ProchainNiveau();
      oSonVictoire.play()
    }

    if (personnageChoisi == oPersonnage1 && vie3 > 0){
      if(tempspersonnage % 7 == 0){
        oPersonnage1.colonneFrame +=1;
    }
    oPersonnage1.image.src = oPersonnage1.src;
    if(oPersonnage1.colonneFrame >= oPersonnage1.frameMax){
        oPersonnage1.colonneFrame =0;
    }

    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1.image, oPersonnage1.colonneFrame * oPersonnage1.largeurFrame, oPersonnage1.rangeeFrame * oPersonnage1.hauteurFrame, oPersonnage1.largeurFrame, oPersonnage1.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();

    } else if (personnageChoisi == oPersonnage2 && vie3 > 0){
    
      if(tempspersonnage % 7 == 0){
        oPersonnage2.colonneFrame +=1;
    }
    oPersonnage2.image.src = oPersonnage2.src;
    if(oPersonnage2.colonneFrame >= oPersonnage2.frameMax){
        oPersonnage2.colonneFrame =0;
    }
    
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2.image, oPersonnage2.colonneFrame * oPersonnage2.largeurFrame, oPersonnage2.rangeeFrame * oPersonnage2.hauteurFrame, oPersonnage2.largeurFrame, oPersonnage2.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
        }
  }

  

  function dessinerEngrenage() {
    oEngrenage.image.src = oEngrenage.src;
    oContexte.drawImage(oEngrenage.image, oEngrenage.x, oEngrenage.y, 50, 50);
  }

  if(sEtat == "fin"){
    dessinerFondIntro();
    afficherFIn();
  }

 
  
  

  function dessinerFondIntro() {
    oFond.image.src = oFond.src;
    oFond.y += oFond.vitesse;
    if (oFond.y > nHauteurCanvas) {
      oFond.y = 0;
    }
    oContexte.drawImage(
      oFond.image,
      oFond.x,
      oFond.y,
      nLargeurCanvas,
      nHauteurCanvas
    );
    oContexte.drawImage(
      oFond.image,
      oFond.x,
      oFond.y - nHauteurCanvas,
      nLargeurCanvas,
      nHauteurCanvas
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function intro() {
  oContexte.drawImage(
    oImageBaguette,
    largeurBaguette,
    hauteurBaguette,
    200,
    200
  );

  nTempsPasse += 1;

  if (nTempsPasse % 60 == 0) {
    nMinuterie -= 1;
  }

  hauteurBaguette += vitesse * directionBaguette;

  if (hauteurBaguette >= 150) {
    directionBaguette = -1;
  } else if (hauteurBaguette <= 50) {
    directionBaguette = 1;
  }

  if (nMinuterie < 7) {
    hauteurBaguette = 150;
    hauteurTexteintro += vitesse * 2;
    hauteurTexteintro *= +1;
  }

  if (nMinuterie < 5) {
    hauteurStart = 500;
  }

  if (hauteurTexteintro >= 400) {
    hauteurTexteintro = 400;
  }

  oContexte.font = `${tailleTexte}px Momo`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "white";
  oContexte.fillText(
    `Sortilège mathématique`,
    nLargeurCanvas / 2 + 100,
    hauteurTexteintro
  );

  oContexte.drawImage(oImageStart, largeurStart, hauteurStart, 300, 300);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function dessinerMinuterie() {
  oContexte.font = "48px Arial";
  oContexte.fillText(nMinuterie, 100, 300);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function verifierCollision(
  positionCurseurX,
  positionCurseurY,
  positionXElement,
  positionYElement,
  largeurElement,
  hauteurElement
) {
  if (
    positionCurseurX > positionXElement &&
    positionCurseurX < positionXElement + largeurElement &&
    positionCurseurY > positionYElement &&
    positionCurseurY < positionYElement + hauteurElement
  ) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function option() {
  oContexte.font = `100px Arial`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "black";
  oContexte.fillText(`PARAMÈTRE`, nLargeurCanvas / 2, nHauteurCanvas / 2 - 200);

  oContexte.font = `50px Arial`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "black";
  oContexte.fillText(`son`, nLargeurCanvas / 2, nHauteurCanvas / 2);
  oContexte.strokeRect(250, 360, 300, 50);
  oContexte.fillText(`bouton`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 100);
  oContexte.strokeRect(250, 460, 300, 50);
  oContexte.fillText(`histoire`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 200);
  oContexte.strokeRect(250, 560, 300, 50);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function boutonRetour() {
  oRetour.image.src = oRetour.src;
  oContexte.drawImage(oRetour.image, oRetour.x, oRetour.y, 50, 50);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function music() {
  oMusic.image.src = oMusic.src;
  oContexte.drawImage(oMusic.image, oMusic.x, oMusic.y, 50, 50);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function son() {
  oContexte.fillText(
    `augmenter`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 100,
    200,
    200
  );
  oContexte.strokeRect(250, 260, 300, 50);

  oContexte.fillText(
    `réduire`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 + 200,
    200,
    200
  );
  oContexte.strokeRect(250, 560, 300, 50);

  oSonMonte.image.src = oSonMonte.src;
  oContexte.drawImage(oSonMonte.image, oSonMonte.x, oSonMonte.y, 50, 50);

  oSonReduire.image.src = oSonReduire.src;
  oContexte.drawImage(oSonReduire.image, oSonReduire.x, oSonReduire.y, 50, 50);

  oBarreSon.image.src = oBarreSon.src;

  if (barreSon == 1) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
  }

  if (barreSon == 2) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
  }

  if (barreSon == 3) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
  }

  if (barreSon == 4) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 340, oBarreSon.y, 70, 70);
  }

  if (barreSon == 5) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 340, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 380, oBarreSon.y, 70, 70);
  }

  if (barreSon == 6) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 340, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 380, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 420, oBarreSon.y, 70, 70);
  }

  if (barreSon == 7) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 340, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 380, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 420, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 460, oBarreSon.y, 70, 70);
  }

  if (barreSon >= 8) {
    oContexte.drawImage(oBarreSon.image, oBarreSon.x, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 260, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 300, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 340, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 380, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 420, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 460, oBarreSon.y, 70, 70);
    oContexte.drawImage(oBarreSon.image, 500, oBarreSon.y, 70, 70);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton() {
  oToucheSouris.image.src = oToucheSouris.src;
  oContexte.drawImage(
    oToucheSouris.image,
    oToucheSouris.x,
    oToucheSouris.y,
    200,
    200
  );
  oContexte.strokeRect(70, 305, 260, 50);

  oContexte.font = "20px Arial";
  oContexte.fillText(`Selectionner quelque chose`, 200, 330);

  oToucheClavier.image.src = oToucheClavier.src;
  oContexte.drawImage(
    oToucheClavier.image,
    oToucheClavier.x,
    oToucheClavier.y,
    200,
    200
  );
  oContexte.strokeRect(470, 305, 260, 50);

  oContexte.font = "20px Arial";
  oContexte.fillText(`Écrire`, 600, 330);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function histoire() {
  oContexte.strokeRect(150, 50, 500, 700);

  oContexte.font = "50px Arial";
  oContexte.fillText(`À FAIRE ...`, 400, 100);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////


function selectionPersonnage() {
  tempspersonnage++
  oContexte.font = `30px Momo`;
  oContexte.textAlign = "center";
  oContexte.fillText(
    `Veuillez choisir votre personnage`, 400, 100);

  oContexte.strokeRect(300, 120, 250, 300)
  oContexte.font = `${tailletexte2}px Momo`;
  oContexte.fillText(`PERSONNAGE 1`, 135, 165 )

  if(tempspersonnage % 7 == 0){
       oPersonnage1.colonneFrame +=1;
  }
  oPersonnage1.image.src = oPersonnage1.src;
  if(oPersonnage1.colonneFrame >= oPersonnage1.frameMax){
      oPersonnage1.colonneFrame =0;
  }
  oContexte.drawImage(oPersonnage1.image, oPersonnage1.colonneFrame * oPersonnage1.largeurFrame, oPersonnage1.rangeeFrame * oPersonnage1.hauteurFrame, oPersonnage1.largeurFrame, oPersonnage1.hauteurFrame, oPersonnage1.x, oPersonnage1.y, oPersonnage1.largeur, oPersonnage1.hauteur);
  
  oContexte.strokeRect(300, 450, 250, 320)
  oContexte.font = `${tailletexte3}px Momo`;
  oContexte.fillText(`PERSONNAGE 2`, 135, 500 )
  if(tempspersonnage % 7 == 0){
       oPersonnage2.colonneFrame +=1;
  }
  oPersonnage2.image.src = oPersonnage2.src;
  if(oPersonnage2.colonneFrame >= oPersonnage2.frameMax){
      oPersonnage2.colonneFrame =0;
  }
  oContexte.drawImage(oPersonnage2.image, oPersonnage2.colonneFrame * oPersonnage2.largeurFrame, oPersonnage2.rangeeFrame * oPersonnage2.hauteurFrame, oPersonnage2.largeurFrame, oPersonnage2.hauteurFrame, oPersonnage2.x, oPersonnage2.y, oPersonnage2.largeur, oPersonnage2.hauteur);


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function sortir(){
  oX.image.src = oX.src;
  oContexte.drawImage(oX.image, oX.x, oX.y, 50, 50);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function sortir__(){
  oContexte.font = `100px Arial`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "black";

  oContexte.font = `50px Arial`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "black";
  oContexte.fillText(`QUITTER`, nLargeurCanvas / 2, nHauteurCanvas / 2 - 200);
  oContexte.fillText(`sortir`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 100);
  oContexte.strokeRect(250, 460, 300, 50);
  oContexte.fillText(`revenir`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 200);
  oContexte.strokeRect(250, 560, 300, 50);

}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function niveau_total(){ 

  

    
  oBoutonNIveau.image.src = oBoutonNIveau.src;
  oContexte.drawImage(oBoutonNIveau.image, oBoutonNIveau.x, oBoutonNIveau.y, 50, 50);
  oBoutonNIveauRouge.image.src = oBoutonNIveauRouge.src;
  oContexte.drawImage(oBoutonNIveauRouge.image, oBoutonNIveauRouge.x, oBoutonNIveauRouge.y, 50, 50);
  oContexte.drawImage(oBoutonNIveauRouge.image, oBoutonNIveauRouge.x, 360, 50, 50);
  oContexte.drawImage(oBoutonNIveauRouge.image, oBoutonNIveauRouge.x, 460, 50, 50);
  oContexte.drawImage(oBoutonNIveauRouge.image, oBoutonNIveauRouge.x, 560, 50, 50);
  oContexte.font = `50px Arial`;
  oContexte.textAlign = "center";
  oContexte.fillStyle = "black";
  oContexte.fillText(`Niveau 1`, nLargeurCanvas / 2, nHauteurCanvas / 4);
  oContexte.strokeRect(250, 160, 300, 50);
  oContexte.fillText(`Niveau 2`, nLargeurCanvas / 2, nHauteurCanvas / 4 + 100);
  oContexte.strokeRect(250, 260, 300, 50);
  oContexte.fillText(`Niveau 3`, nLargeurCanvas / 2, nHauteurCanvas / 4 + 200);
  oContexte.strokeRect(250, 360, 300, 50);
  oContexte.fillText(`Niveau 4`, nLargeurCanvas / 2, nHauteurCanvas / 4 + 300);
  oContexte.strokeRect(250, 460, 300, 50);
  oContexte.fillText(`Niveau 5`, nLargeurCanvas / 2, nHauteurCanvas / 4 + 400);
  oContexte.strokeRect(250, 560, 300, 50);


     
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function niveau1(){

    nMinuterieNiveau1 += 1;
    tempspersonnage++


    if(nMinuterieNiveau1 %60 == 0){
        nTempsRestant -= 1;


    }

  oFondNiveau1.image.src = oFondNiveau1.src;
    oContexte.drawImage(
      oFondNiveau1.image,
      oFondNiveau1.x,
      oFondNiveau1.y,
      nLargeurCanvas,
      nHauteurCanvas
    );


    oContexte.fillStyle = "lightgreen"
    oContexte.fillRect(0, 0, 800, 30)


    oContexte.fillStyle = "green"
    let largeurRec = (nTempsRestant / nTempsMax) * 800
    oContexte.fillRect (0, 0, largeurRec, 30);

    if(tempspersonnage % 7 == 0){
       oPersonnage3.colonneFrame +=1;
  }
  oPersonnage3.image.src = oPersonnage3.src;
  if(oPersonnage3.colonneFrame >= oPersonnage3.frameMax){
      oPersonnage3.colonneFrame =0;
  }

  if (nTempsRestant == 0){
  vie = 0;
  }
  

  if(vieEnnemi>0){
    oContexte.drawImage(oPersonnage3.image, oPersonnage3.colonneFrame * oPersonnage3.largeurFrame, oPersonnage3.rangeeFrame * oPersonnage3.hauteurFrame, oPersonnage3.largeurFrame, oPersonnage3.hauteurFrame, -100, 300, 500, 500);

  }
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie ennemie


  if(vieEnnemi == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi == 50){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi == 40){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi == 30){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi == 20){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  }  else if (vieEnnemi == 10){
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi == 0){
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } 

  tailletexte3 = 10;

  if (vieEnnemi <= 0) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`Victoire`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;
    oPersonnage3Mort.image.src = oPersonnage3Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage3Mort.animationComplete == false){
       oPersonnage3Mort.colonneFrame +=1;
  }
    if (oPersonnage3Mort.colonneFrame >= oPersonnage3Mort.frameMax) {
      oPersonnage3Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.drawImage(oPersonnage3Mort.image, oPersonnage3Mort.colonneFrame * oPersonnage3Mort.largeurFrame, oPersonnage3Mort.rangeeFrame * oPersonnage3Mort.hauteurFrame, oPersonnage3Mort.largeurFrame, oPersonnage3Mort.hauteurFrame, -100, 300, 500, 500);
  }

  
  

  



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie joueur

  if(vie == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 660 , 400 , 100, 100);
  } else if (vie == 50){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 660 , 400 , 100, 100);

    } else if (vie == 40){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie == 30){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie == 20){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie == 10){
        
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie == 0){
        
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } 
  
  
  if (vie <= 0 && personnageChoisi == oPersonnage1) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage1Mort.image.src = oPersonnage1Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage1Mort.animationComplete == false){
       oPersonnage1Mort.colonneFrame +=1;
  }
    if (oPersonnage1Mort.colonneFrame >= oPersonnage1Mort.frameMax) {
      oPersonnage1Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1Mort.image, oPersonnage1Mort.colonneFrame * oPersonnage1Mort.largeurFrame, oPersonnage1Mort.rangeeFrame * oPersonnage1Mort.hauteurFrame, oPersonnage1Mort.largeurFrame, oPersonnage1Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  
  if (vie <= 0 && personnageChoisi == oPersonnage2) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage2Mort.animationComplete == false){
       oPersonnage2Mort.colonneFrame +=1;
  }
    if (oPersonnage2Mort.colonneFrame >= oPersonnage2Mort.frameMax) {
      oPersonnage2Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2Mort.image, oPersonnage2Mort.colonneFrame * oPersonnage2Mort.largeurFrame, oPersonnage2Mort.rangeeFrame * oPersonnage2Mort.hauteurFrame, oPersonnage2Mort.largeurFrame, oPersonnage2Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  



//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
  
}


function afficherQuestion() {
  
    let questionAAfficher = questions[questionActuelle];
    let texteQuestion = questionAAfficher.question;
    let choixReponses = questionAAfficher.choixReponses;

    oContexte.fillStyle = "red";
    oContexte.font = "50px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(texteQuestion, nLargeurCanvas / 2, 200);

    for (let i = 0; i < choixReponses.length; i++) {
        let element = choixReponses[i];

        oContexte.fillStyle = "black";
        let largeurBouton = nLargeurCanvas / 3;
         oContexte.fillRect(i * largeurBouton, 300, largeurBouton, 50);

      
        oContexte.fillStyle = "red";
        oContexte.font = "20px Arial";
        oContexte.fillText(element, i * largeurBouton + largeurBouton / 2, 330);
    }


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function ProchainNiveau(){
    oContexte.fillStyle = "black";
    oContexte.fillRect(250, 260, 300, 50);
    oContexte.fillStyle = "red";
    oContexte.font = "20px Arial";
    oContexte.fillText(
    `Niveau suivant`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 100,
    200,
    200
  );


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////




function Recommencer(){
    oContexte.fillStyle = "black";
    oContexte.fillRect(250, 260, 300, 50);
    oContexte.fillStyle = "red";
    oContexte.font = "20px Arial";
    oContexte.fillText(
    `Recommencer`,
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 100,
    200,
    200
  );


}

function niveau2(){
  nTempsPasse2++;
  // tempspersonnage ++;

    if(nMinuterieNiveau2 %60 == 0){
        nTempsRestant2 -= 1;


    }

  oFondNiveau2.image.src = oFondNiveau2.src;
    oContexte.drawImage(
      oFondNiveau2.image,
      oFondNiveau2.x,
      oFondNiveau2.y,
      nLargeurCanvas,
      nHauteurCanvas
    );


    oContexte.fillStyle = "lightgreen"
    oContexte.fillRect(0, 0, 800, 30)


    oContexte.fillStyle = "green"
    let largeurRec = (nTempsRestant2 / nTempsMax2) * 800
    oContexte.fillRect (0, 0, largeurRec, 30);

    if(tempspersonnage % 7 == 0){
       oPersonnage3.colonneFrame +=1;
  }
  oPersonnage3.image.src = oPersonnage3.src;
  if(oPersonnage3.colonneFrame >= oPersonnage3.frameMax){
      oPersonnage3.colonneFrame =0;
  }

  if (nTempsRestant2 == 0){
    vie2 = 0;
  }
  

  if(vieEnnemi2>0){
    oContexte.drawImage(oPersonnage3.image, oPersonnage3.colonneFrame * oPersonnage3.largeurFrame, oPersonnage3.rangeeFrame * oPersonnage3.hauteurFrame, oPersonnage3.largeurFrame, oPersonnage3.hauteurFrame, -100, 300, 500, 500);

  }
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie ennemie


  if(vieEnnemi2 == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi2 == 50){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi2 == 40){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi2 == 30){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi2 == 20){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  }  else if (vieEnnemi2 == 10){
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi2 == 0){
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } 

  tailletexte3 = 10;

  if (vieEnnemi2 <= 0) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }

    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`Victoire`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;
    oPersonnage3Mort.image.src = oPersonnage3Mort.src;



    if (tempspersonnage % 10 == 0 && oPersonnage3Mort.animationComplete == false) {
      oPersonnage3Mort.colonneFrame += 1;
    }
    if (oPersonnage3Mort.colonneFrame >= oPersonnage3Mort.frameMax) {
      oPersonnage3Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }


    oContexte.drawImage(oPersonnage3Mort.image, oPersonnage3Mort.colonneFrame * oPersonnage3Mort.largeurFrame, oPersonnage3Mort.rangeeFrame * oPersonnage3Mort.hauteurFrame, oPersonnage3Mort.largeurFrame, oPersonnage3Mort.hauteurFrame, -100, 300, 500, 500);

  }




  



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie joueur

  if(vie2 == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 660 , 400 , 100, 100);
  } else if (vie2 == 50){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 660 , 400 , 100, 100);

    } else if (vie2 == 40){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie2 == 30){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie2 == 20){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie2 == 10){
        
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie2 == 0){
        
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } 
  
  
  if (vie2 <= 0 && personnageChoisi == oPersonnage1) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage1Mort.image.src = oPersonnage1Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage1Mort.animationComplete == false){
       oPersonnage1Mort.colonneFrame +=1;
  }
    if (oPersonnage1Mort.colonneFrame >= oPersonnage1Mort.frameMax) {
      oPersonnage1Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1Mort.image, oPersonnage1Mort.colonneFrame * oPersonnage1Mort.largeurFrame, oPersonnage1Mort.rangeeFrame * oPersonnage1Mort.hauteurFrame, oPersonnage1Mort.largeurFrame, oPersonnage1Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  
  if (vie2 <= 0 && personnageChoisi == oPersonnage2) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage2Mort.animationComplete == false){
       oPersonnage2Mort.colonneFrame +=1;
  }
    if (oPersonnage2Mort.colonneFrame >= oPersonnage2Mort.frameMax) {
      oPersonnage2Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2Mort.image, oPersonnage2Mort.colonneFrame * oPersonnage2Mort.largeurFrame, oPersonnage2Mort.rangeeFrame * oPersonnage2Mort.hauteurFrame, oPersonnage2Mort.largeurFrame, oPersonnage2Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function afficherQuestion2() {

  
  let questionAAfficher = questions2[questionActuelle2];
    let texteQuestion = questionAAfficher.question;
    let choixReponses = questionAAfficher.choixReponses;

    oContexte.fillStyle = "red";
    oContexte.font = "30px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(texteQuestion, nLargeurCanvas / 2, 200);

    for (let i = 0; i < choixReponses.length; i++) {
        let element = choixReponses[i];

        oContexte.fillStyle = "black";
        let largeurBouton = nLargeurCanvas / 3;
        oContexte.fillRect(i * largeurBouton, 300, largeurBouton, 50);

        oContexte.fillStyle = "red";
        oContexte.font = "20px Arial";
        oContexte.fillText(element, i * largeurBouton + largeurBouton / 2, 330);
    }

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  function niveau3(){
  nTempsPasse3 ++;


    if(nMinuterieNiveau3 %60 == 0){
        nTempsRestant3 -= 1;


    }

  oFondNiveau3.image.src = oFondNiveau3.src;
    oContexte.drawImage(
      oFondNiveau3.image,
      oFondNiveau3.x,
      oFondNiveau3.y,
      nLargeurCanvas,
      nHauteurCanvas
    );


    oContexte.fillStyle = "lightgreen"
    oContexte.fillRect(0, 0, 800, 30)


    oContexte.fillStyle = "green"
    let largeurRec = (nTempsRestant3 / nTempsMax3) * 800
    oContexte.fillRect (0, 0, largeurRec, 30);

    if(tempspersonnage % 7 == 0){
       oPersonnage3.colonneFrame +=1;
  }
  oPersonnage3.image.src = oPersonnage3.src;
  if(oPersonnage3.colonneFrame >= oPersonnage3.frameMax){
      oPersonnage3.colonneFrame =0;
  }

  if (nTempsRestant3 == 0){
    vie3 = 0;
  }
  

  if(vieEnnemi3>0){
    oContexte.drawImage(oPersonnage3.image, oPersonnage3.colonneFrame * oPersonnage3.largeurFrame, oPersonnage3.rangeeFrame * oPersonnage3.hauteurFrame, oPersonnage3.largeurFrame, oPersonnage3.hauteurFrame, -100, 300, 500, 500);

  }
  


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie ennemie


  if(vieEnnemi3 == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi3 == 50){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi3 == 40){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi3 == 30){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi3 == 20){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  }  else if (vieEnnemi3 == 10){
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } else if (vieEnnemi3 == 0){
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 10 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 90 , 400 , 100, 100);

    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 170 , 400 , 100, 100);
  } 

  tailletexte3 = 10;

  if (vieEnnemi3 <= 0) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`Victoire`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;
    oPersonnage3Mort.image.src = oPersonnage3Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage3Mort.animationComplete == false){
       oPersonnage3Mort.colonneFrame +=1;
  }
    if (oPersonnage3Mort.colonneFrame >= oPersonnage3Mort.frameMax) {
      oPersonnage3Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.drawImage(oPersonnage3Mort.image, oPersonnage3Mort.colonneFrame * oPersonnage3Mort.largeurFrame, oPersonnage3Mort.rangeeFrame * oPersonnage3Mort.hauteurFrame, oPersonnage3Mort.largeurFrame, oPersonnage3Mort.hauteurFrame, -100, 300, 500, 500);
  }

  
  

  



  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// vie joueur

  if(vie3 == 60){
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 660 , 400 , 100, 100);
  } else if (vie3 == 50){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 660 , 400 , 100, 100);

    } else if (vie3 == 40){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie3 == 30){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie3 == 20){
        
    Coeur.image.src = Coeur.src;
    oContexte.drawImage(Coeur.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie3== 10){
        
    CoeurMoitie.image.src = CoeurMoitie.src;
    oContexte.drawImage(CoeurMoitie.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } else if (vie3 == 0){
        
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 500 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 580 , 400 , 100, 100);

    
    CoeurVIde.image.src = CoeurVIde.src;
    oContexte.drawImage(CoeurVIde.image, 660 , 400 , 100, 100);

    } 
  
  
  if (vie3 <= 0 && personnageChoisi == oPersonnage1) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage1Mort.image.src = oPersonnage1Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage1Mort.animationComplete == false){
       oPersonnage1Mort.colonneFrame +=1;
  }
    if (oPersonnage1Mort.colonneFrame >= oPersonnage1Mort.frameMax) {
      oPersonnage1Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage1Mort.image, oPersonnage1Mort.colonneFrame * oPersonnage1Mort.largeurFrame, oPersonnage1Mort.rangeeFrame * oPersonnage1Mort.hauteurFrame, oPersonnage1Mort.largeurFrame, oPersonnage1Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  
  if (vie3 <= 0 && personnageChoisi == oPersonnage2) {
    taileTexteFinal += 0.1 * directionTexteFinal
    if (taileTexteFinal >= 50 || taileTexteFinal <= 10) {
      directionTexteFinal *= -1;
    }
    
    oContexte.font = `${taileTexteFinal}px Momo`;
    oContexte.fillText(`DÉFAITE`, nLargeurCanvas / 2, nHauteurCanvas / 2)
    oPersonnage2Mort.image.src = oPersonnage2Mort.src;

 if(tempspersonnage % 10 == 0 &&  oPersonnage2Mort.animationComplete == false){
       oPersonnage2Mort.colonneFrame +=1;
  }
    if (oPersonnage2Mort.colonneFrame >= oPersonnage2Mort.frameMax) {
      oPersonnage2Mort.animationComplete = true
      // oPersonnage3Mort.colonneFrame = 0;
    }
    oContexte.save();
    oContexte.translate(650,300);
    oContexte.scale(-1,1);
    oContexte.translate(-650,-300);
    oContexte.drawImage(oPersonnage2Mort.image, oPersonnage2Mort.colonneFrame * oPersonnage2Mort.largeurFrame, oPersonnage2Mort.rangeeFrame * oPersonnage2Mort.hauteurFrame, oPersonnage2Mort.largeurFrame, oPersonnage2Mort.hauteurFrame, 400, 300, 500, 500);
    oContexte.restore();
  } 
  
  

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

function afficherQuestion3() {

  
  let questionAAfficher = questions3[questionActuelle3];
    let texteQuestion = questionAAfficher.question;
    let choixReponses = questionAAfficher.choixReponses;

    oContexte.fillStyle = "red";
    oContexte.font = "30px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(texteQuestion, nLargeurCanvas / 2, 200);

    for (let i = 0; i < choixReponses.length; i++) {
        let element = choixReponses[i];

        oContexte.fillStyle = "black";
        let largeurBouton = nLargeurCanvas / 3;
        oContexte.fillRect(i * largeurBouton, 300, largeurBouton, 50);

        oContexte.fillStyle = "red";
        oContexte.font = "20px Arial";
        oContexte.fillText(element, i * largeurBouton + largeurBouton / 2, 330);
    }

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  function afficherFIn(){

    oContexte.drawImage(
    oImageBaguette,
    largeurBaguette,
    hauteurBaguette,
    200,
    200
  );

    oContexte.font = `70px Momo`;
    oContexte.textAlign = "center";
    oContexte.fillStyle = "white";
    oContexte.fillText(
    `VICTOIRE !!!`,
    nLargeurCanvas / 2 + 100,
    nHauteurCanvas / 2
  );


    oContexte.font = `20px Momo`;
    oContexte.textAlign = "center";
    oContexte.fillStyle = "white";
    oContexte.fillText(
    `Plus de niveaux à venir dans le 2`,
    200,
    700
  );

    oContexte.fillStyle = "red";
    oContexte.fillRect(500, 600, 300, 50);
    oContexte.fillStyle = "white";
    oContexte.font = "20px Arial";
    oContexte.fillText(
    `Recommencer`,
    650,
    630,
    200,
    200
  );

    oSonMusicIntro.play()

  }


window.addEventListener("load", initialiser);


