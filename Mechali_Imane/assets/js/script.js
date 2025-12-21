//Volet_2 @Imane_Mechali

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d"); //détermine le type de canvas

////////////////////////Variables globales////////////////////////////

let nlargeurCanvas = oCanvasHTML.width;
let nhauteurCanvas = oCanvasHTML.height;
let posXCloud1 = 0; //position initiale du nuage 1
let posYCloud1 = 0;
let posXCloud2 = 0; //position initiale du nuage 2
let posYCloud2 = 0;
let posXbee = 0;
let posYbee = 0;
let sEtatJeu = "intro";
let minuterie1 = 2;                  //////////////
let minuterie2 = 5;             ///////////////////////
let tempsPasse = 0;           //////  ///////////  //////
let opacity = 1.0;          ///////   |//////////  |/////
let sTouche;              ////(                      )////////
let nNombreFleurs = 1;   ///(        i       i        )/////////
let score = 0;            //(        i       i         )///////////
let nouveauScore;          ///           <            )//////////
let interval;           ///////                       )///////

//////////////////////////////////CHARGER IMAGES INTRO DU JEU///////////////////////////////////////////////
let oFond = new Image();
oFond.src = "assets/images/sky.png";
let oArbre = new Image();
oArbre.src = "assets/images/arbre.png";
let oArbres1 = new Image();
oArbres1.src = "assets/images/arbres1.png";
let oArbres2 = new Image();
oArbres2.src = "assets/images/arbres2.png";
let oRuche = new Image();
oRuche.src = "assets/images/ruche.png";
let oCloud = new Image();
oCloud.src = "assets/images/cloud.png";
let oScoreFond = new Image();
oScoreFond.src = "assets/images/jeu/fondscore.png";
let oFlecheup = {
 x: 1000,
  y: 150,
   largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcArrowup: "assets/images/jeu/arrowup.png",
  baseLargeur: 300,
  baseHauteur: 200,
  animFrames: 0,
  animMax: 8
}
let oFlechedown = {
  x: 1000,
  y: 400,
  largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcArrowdown: "assets/images/jeu/arrrowdown.png",
  baseLargeur: 300,
  baseHauteur: 200,
  animFrames: 0,
  animMax: 8
}
let oVies = {
  x: 50,
  y: 615,
  largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcVies1: "assets/images/jeu/vies_1.png",
  srcVies2: "assets/images/jeu/vies_2.png",
  srcVies3: "assets/images/jeu/vies_3.png",
};
let oStart = { //bouton start
  x: 550,
  y: 500,
  largeur: 200,
  hauteur: 100,
  image : new Image(),
  srcStart: "assets/images/start.png"
};

let oReprendre = { 
  x: 300,
  y: 100,
  largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcReprendre: "assets/images/jeu/reprendre.png"
}


  let oMenu = { 
  x: 700,
  y: 100,
  largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcMenu: "assets/images/jeu/menu.png"
  };

  let oMenu1 = { 
  x: 600,
  y: 500,
  largeur: 300,
  hauteur: 200,
  image : new Image(),
  srcMenu1: "assets/images/jeu/menu.png"
  };
  let oMiel = {
 x: 50,
  y: 150,
  largeur: 100,
  hauteur: 100,
  image : new Image(),
  srcStory: "assets/images/miel.png"
  }

let oHobee = new Image();
oHobee.src = "assets/images/hobee.png";
let oInstructions = new Image();
oInstructions.src = "assets/images/instructions.png";
let oArrowdown = new Image();
oArrowdown.src = "assets/images/arrowdown.png";
let oArrowup = new Image();
oArrowup.src = "assets/images/arrowup.png";
/////////////////////////////////////CHARGER IMAGES JEU///////////////////////////////////////////////
let oHive1 = new Image();
oHive1.src = "assets/images/jeu/hive1.png";
let oHive2 = new Image();
oHive2.src = "assets/images/jeu/hive2.png";
let oHive3 = new Image();
oHive3.src = "assets/images/jeu/hive3.png";
let oHive4 = new Image();
oHive4.src = "assets/images/jeu/hive4.png";
let oHive5 = new Image();
oHive5.src = "assets/images/jeu/hive5.png";
let oAbeillesFond = new Image();
oAbeillesFond.src = "assets/images/jeu/abeillesfond.png";
let oFleursFond = new Image();
oFleursFond.src = "assets/images/jeu/fleurfond.png";
let oMenuFond = new Image();
oMenuFond.src = "assets/images/jeu/menufond.png";
/////////////////////////////////////CHARGER IMAGES MENU///////////////////////////////////////////////
let oBurger = {
  x: nlargeurCanvas-200,
  y: 50,
  largeur: 150,
  hauteur: 150,
  image : new Image(),
  srcBurger: "assets/images/jeu/menuicon.png"

}
 let oClipPlay = { 
  x: 50,
  y: 50,
  largeur: 100,
  hauteur: 100,
  image : new Image(),
  srcClipPlay: "assets/images/clipplay.png"
}
let oClipVideo = {
  x: 0,
  y: 0,
  largeur: nlargeurCanvas,
  hauteur: nhauteurCanvas,
  video : document.createElement("video"),
  srcClipVideo: "assets/video/Hobeeclip.mp4"
}
let oClipLeaveVideo = {
  x: 50,
  y: 50,
  largeur: 100,
  hauteur: 100,
  image : new Image(),
  srcClipLeaveVideo: "assets/images/return.png"
}
let oCorrectSon = new Audio();
oCorrectSon.src = "assets/audio/correct.mp3";
let oWrongSon = new Audio();
oWrongSon.src = "assets/audio/wrong.wav";
let oClipSound = new Audio();
oClipSound.src = "assets/video/Hobeeclip.mp4";
let oScore = new Audio();
oScore.src = "assets/audio/victory.wav";
let oPop = new Audio();
oPop.src = "assets/audio/pop.mp3";
////////////////////////////////CHARGER SONS DU JEU///////////////////////////////////////////////
let oAbeillesSon = new Audio();
oAbeillesSon.src = "assets/audio/abeilles.wav";
oAbeillesSon.volume = 1;
let oWrong2Son = new Audio();
oWrong2Son.src = "assets/audio/wrong2.mp3";
let oClic1 = new Audio();
oClic1.src = "assets/audio/son_clic.wav";
let oClic2 = new Audio();
oClic2.src = "assets/audio/son_clic2.wav";
let oForestSon = new Audio();
oForestSon.src = "assets/audio/foret.wav";
////////////////////////liste des abeilles//////////////////////////////////////////////
let listeAbeilles = [
  {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
  {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    {
    x: 300,
    y: 100,
    largeur: 100,
    hauteur: 140,
    image: new Image(),
    Abeillesrc: "assets/images/jeu/bee.png",
    estVisbile: false,
  },
    
   
  
];
let oFleursNombre = {
    x: 250,
    y: 45,
    largeur: 800,
    hauteur: 800,
    image : new Image(),
    src0: "assets/images/jeu/fleur0.png",
    src1: "assets/images/jeu/fleur1.png",
    src2: "assets/images/jeu/fleur2.png",
    src3: "assets/images/jeu/fleur3.png",
    src4: "assets/images/jeu/fleur4.png",
    src5: "assets/images/jeu/fleur5.png",
    src6: "assets/images/jeu/fleur6.png",
    src7: "assets/images/jeu/fleur7.png",
    src8: "assets/images/jeu/fleur8.png",
    src9: "assets/images/jeu/fleur9.png",
    src10: "assets/images/jeu/fleur10.png",
    src11: "assets/images/jeu/fleur11.png",
    src12: "assets/images/jeu/fleur12.png",
    
  }
let nbChancesMax = 3;
let nbChances = nbChancesMax;
let attenteMinuterie = false;
///////////////////////////////////////////////////Initialisation du jeu//////////////////////////////////////////
//ctrl-E pour mettre la séléction en commentaire
function Initialiser() {
  melangerAbeilles();
  reinitialiser();
  interval = setInterval(boucleJeu, 1000 / 120);
  oCanvasHTML.addEventListener("click", clickCanvas);
   window.addEventListener("keydown", toucheEnfoncee);
    window.addEventListener("keyup", toucheRelachee);
} //fin Initialiser


function clickCanvas(evenement) {
  
    let curseurX = evenement.offsetX;
  let curseurY = evenement.offsetY;
  oAbeillesSon.play();

  if (sEtatJeu == "intro" && 
    detecterClicObjet(curseurX, curseurY, oStart) == true ) { //BOUTON START COLLISION
        oAbeillesSon.play();
              oForestSon.play();
        sEtatJeu = "instructions";
        oClic2.play();
}  else if (sEtatJeu == "instructions") {
  oClic2.play();
    sEtatJeu = "jeu";
  } 

if ((sEtatJeu == "jeu" ||  sEtatJeu == "attenteReponse") &&
    detecterClicObjet(curseurX, curseurY, oBurger) == true ) {
        oClic2.play();
        sEtatJeu = "menu";
    
    }
    if (sEtatJeu == "intro" && 
    (detecterClicObjet(curseurX, curseurY, oStart) == false && detecterClicObjet(curseurX, curseurY, oClipPlay) == false)     ) { //si pas de clic sur start ou sur le bouton
    // story : afficher son d'erreur
        oWrong2Son.play();
        
    
    } 
    if (sEtatJeu == "menu" && 
    detecterClicObjet(curseurX, curseurY, oReprendre) == true ) { //BOUTON REPRENDRE COLLISION
        oClic2.play();
        sEtatJeu = "jeu";} else if (sEtatJeu == "menu" && 
    detecterClicObjet(curseurX, curseurY, oMenu) == true ) {
       sEtatJeu = "intro"
       oAbeillesSon.play();  //BOUTON MENU COLLISION
        oClic2.play();}

   if (sEtatJeu == "intro" && 
    detecterClicObjet(curseurX, curseurY, oClipPlay) == true ) { //BOUTON INSTRUCTIONS COLLISION
     oAbeillesSon.pause();
     oForestSon.pause();
        sEtatJeu = "clipart"; //on definit afficherclipart comme etat du jeu sans le mettre dans la boucle de jeu pour que la video puisse se lancer
         afficherVideo();
        oClic2.play();
       
    }
    if (sEtatJeu == "clipart" && detecterClicObjet(curseurX, curseurY, oClipLeaveVideo) == true ) { //Bouton pour quitter la video
      sEtatJeu = "intro";
      oAbeillesSon.currentTime=0;
      oAbeillesSon.play()
    }
    if( sEtatJeu == "fin" && detecterClicObjet(curseurX, curseurY, oMenu1) == true){
      reinitialiser();
      console.log("ICI");
      
      sEtatJeu="intro"}
      if( sEtatJeu == "intro" && detecterClicObjet(curseurX, curseurY, oMiel) == true){
        oClic2.play();
        window.location.href = "assets/miel.htm";
      }


}

function boucleJeu() {
  //ÉTAT DU JEU
  oContexte.clearRect(0, 0, nlargeurCanvas, nhauteurCanvas);
  if (sEtatJeu == "intro") {
     
  
    afficherIntro();
   
  } 
  else if (sEtatJeu == "jeu") {
    
    afficherAbeilles();
    oAbeillesSon.pause();
  } 
  else if (sEtatJeu == "attenteReponse") {
    afficherReponse();
    console.log(nNombreAbeillesVisibles());
    
  }
  
   if (sEtatJeu == "menu"){
    afficherMenu();
  } 
   if (sEtatJeu == "instructions"){
    afficherInstructions();
  } 
   if (sEtatJeu == "clipart"){ //comme ca on enleve l'intro 
    afficherVideo();//ON RETIRE LE SON
  }
 if (sEtatJeu == "fin"){
    afficherScore();
  }


  
}
function augmenterFleurs(){
  nNombreFleurs += 1;
  nNombreFleurs = Math.min(nNombreFleurs, 12);
  oFlecheup.animFrames = oFlecheup.animMax;
}
function diminuerFleurs(){
  nNombreFleurs -= 1;
  nNombreFleurs = Math.max(nNombreFleurs, 1);
  oFlechedown.animFrames = oFlechedown.animMax;
}
/////////////////////////////////////////////////////affichage de l'intro//////////////////////////////////////////
function afficherIntro() {
 

  oContexte.drawImage(oFond, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oContexte.drawImage(
    oCloud,
    posXCloud1,
    posYCloud1,
    nlargeurCanvas / 2,
    nhauteurCanvas / 2
  );
  oContexte.drawImage(
    oCloud,
    posXCloud1 - 100,
    posYCloud1 - 50,
    nlargeurCanvas / 3,
    nhauteurCanvas / 3
  );
  oContexte.drawImage(
    oCloud,
    posXCloud2,
    posYCloud2,
    nlargeurCanvas,
    nhauteurCanvas
  );
  oContexte.drawImage(oArbres1, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oContexte.drawImage(oArbres2, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oContexte.drawImage(oArbre, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oContexte.drawImage(oRuche, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oStart.image.src = oStart.srcStart;
  oContexte.drawImage(oStart.image, oStart.x, oStart.y, oStart.largeur, oStart.hauteur);

  posXCloud1 += 0.05; //le premier nuage animation
  if (posXCloud1 > nlargeurCanvas) {
    posXCloud1 = -10;
  }
  posXCloud2 += 0.1; //le deuxieme nuage animation
  if (posXCloud2 > nlargeurCanvas) {
    posXCloud2 = -20;
  } //le nuage revient a sa place initiale
  oClipPlay.image.src = oClipPlay.srcClipPlay; //afficher le bouton play clipart
  oContexte.drawImage(oClipPlay.image, oClipPlay.x, oClipPlay.y, oClipPlay.largeur, oClipPlay.hauteur);
  afficherBoutonMiel();
  
}

function afficherVideo(){
  afficherClipart();
    // Charger la vidéo
    
   
}


function afficherInstructions(){//*****************AFFICHAGE iNSTRUCTIONS DU JEU */
 oContexte.drawImage(oInstructions, 0, 0, nlargeurCanvas, nhauteurCanvas);
  
  if (opacity > 0.1) { //animation opacité flèche
        opacity -= 0.01;
    } else if (opacity <= 0.1) {
        opacity = 1.0;
    }

    oContexte.globalAlpha = opacity;  
    oContexte.drawImage(oArrowdown, 0, 0, nlargeurCanvas, nhauteurCanvas);
    oContexte.drawImage(oArrowup, 0, 0, nlargeurCanvas, nhauteurCanvas);
 oContexte.globalAlpha = 1; //toujours remettre a 1 l'opacité après utilisation

}

function melangerAbeilles() {
    //melanger les abeilles aleatoirement
 for (let i = 0; i < listeAbeilles.length; i++) {
  let uneAbeille = listeAbeilles[i];
  uneAbeille.estVisible = false
 }

  for (let i = 0; i < listeAbeilles.length; i++) {
    let uneAbeille = listeAbeilles[i];
    let aleatoire = Math.floor(Math.random() * 4);
    
    if (aleatoire == 0) {
      uneAbeille.estVisible = true;
    } else if(aleatoire == 1){
      uneAbeille.estVisible = true;
    } else {
      uneAbeille.estVisible = false
    } 
  }
 
  
}

////////////////////////////////////////////////////////==========début du jeu================////////////////////////////////////////////////////////////////////

function afficherAbeilles() {
   
  //a remplir plus tard lors des autres volets
 oContexte.drawImage(oAbeillesFond, 0, 0, nlargeurCanvas, nhauteurCanvas);
 afficherVies(); 
  ///////////////////////////////////////////////////////timer///////////////////////
  afficherMenuBurger();
  tempsPasse++;

  // every ~60 frames (at 60fps) => ~1 second
  if (tempsPasse % 120 === 0) {
    if (minuterie1 > 0) {
      minuterie1--;
    }
    // when timer reaches 0, end the game (or change state as needed)
  }

  if (minuterie1 <= 0) {
    sEtatJeu = "attenteReponse";
    tempsPasse = 0;
    minuterie1 = 2; //minuterie affichage des abeilles
    return;
  }

 
  if (minuterie1 == 2) {
    oContexte.drawImage(oHive2, 50, 100, 200, 200);
  } else if (minuterie1 == 1) {
    oContexte.drawImage(oHive1, 50, 100, 200, 200);
  }
  

  for (let i = 0; i < listeAbeilles.length; i++) {
        let uneAbeille = listeAbeilles[i];
         let margeX = 500;
         let margeY=125;
        let tailleCase = 175;
        let tailleCaseY = 140;
        let rangee = Math.floor(i / 4 );
        let colonne = i % 4;
       
        // uneAbeille.x = colonne * uneAbeille.largeur;
        uneAbeille.x = colonne;
        // uneAbeille.y = (rangee * tailleCase) + ((tailleCase / 2) - (uneAbeille.hauteur /2));
        uneAbeille.y = rangee ;
        

        uneAbeille.image.src = uneAbeille.Abeillesrc;
 
        if (uneAbeille.estVisible == true) {
            oContexte.drawImage(uneAbeille.image, (uneAbeille.x * tailleCase)+margeX, (uneAbeille.y * tailleCaseY)+margeY, uneAbeille.largeur, uneAbeille.hauteur);
        }
    }
}
///////////////////////////////////========================réponse de l'utilisateur=====================////////////////////////////////////////////////
function afficherReponse() { 
  if(nbChances<=0){
    sEtatJeu="fin"
    
    return nbChances;
  }
  oContexte.drawImage(oFleursFond, 0, 0, nlargeurCanvas, nhauteurCanvas);
  afficherMenuBurger();
  afficherVies();

  tempsPasse++;

  //120 fps 
  if (tempsPasse % 120 === 0) {
    if (minuterie2 > 0) {
      minuterie2--;
    }
    
  }

  if (minuterie2 <= 0) {
    // valider les bon nombre d'abeilles
    if(nNombreFleurs==nNombreAbeillesVisibles()){
      //lorsque le choix est bon:
      score += 1;
      oCorrectSon.play();

    }else{
      //lorsque le choix est faux:
      nbChances -= 1;
      oWrongSon.play();
    }
    
    melangerAbeilles()
    tempsPasse = 0;
    minuterie2 = 5;
    sEtatJeu = "jeu";
  }
//dessiner la minuterie
  if (minuterie2 == 5) {
    oContexte.drawImage(oHive5, 50, 100, 300, 300);
    oClic1.play();
  } else if (minuterie2 == 4) {
    oContexte.drawImage(oHive4, 50, 100, 300, 300);
    oClic1.play();
  } else if (minuterie2 == 3) {
    oContexte.drawImage(oHive3, 50, 100, 300, 300);
    oClic1.play();
  } else if (minuterie2 == 2) {
    oContexte.drawImage(oHive2, 50, 100, 300, 300);
    oClic1.play();
  } else if (minuterie2 == 1) {
    oContexte.drawImage(oHive1, 50, 100, 300, 300);
    oClic1.play();
  }

  //source des fleurs nombre, qui correspond au nombre de fleurs sélectionnées par le joueur

    oFleursNombre.image.src = oFleursNombre[`src${nNombreFleurs}`];
  oContexte.drawImage(oFleursNombre.image, oFleursNombre.x, oFleursNombre.y, oFleursNombre.largeur, oFleursNombre.hauteur);
 //animation des fleches du jeu 
    oFlecheup.image.src = oFlecheup.srcArrowup;
   
    let drawUpW = oFlecheup.baseLargeur; 
    let drawUpH = oFlecheup.baseHauteur;
    if (oFlecheup.animFrames > 0) {
      let t = oFlecheup.animFrames / oFlecheup.animMax;
      let scale = 1 + 0.15 * t; 
      drawUpW = Math.round(oFlecheup.baseLargeur * scale);
      drawUpH = Math.round(oFlecheup.baseHauteur * scale);
      oFlecheup.animFrames--;
    }
    let drawUpX = oFlecheup.x - (drawUpW - oFlecheup.baseLargeur) / 2;
    let drawUpY = oFlecheup.y - (drawUpH - oFlecheup.baseHauteur) / 2;
    oContexte.drawImage(oFlecheup.image, drawUpX, drawUpY, drawUpW, drawUpH);

    oFlechedown.image.src = oFlechedown.srcArrowdown;
    // pour animer oFlechedown avec une courte animation d'agrandissement lorsqu'il est déclenché
    let drawDownW = oFlechedown.baseLargeur;
    let drawDownH = oFlechedown.baseHauteur;
    if (oFlechedown.animFrames > 0) {
      let t2 = oFlechedown.animFrames / oFlechedown.animMax;
      let scale2 = 1 + 0.15 * t2;
      drawDownW = Math.round(oFlechedown.baseLargeur * scale2);
      drawDownH = Math.round(oFlechedown.baseHauteur * scale2);
      oFlechedown.animFrames--;
    }
    let drawDownX = oFlechedown.x - (drawDownW - oFlechedown.baseLargeur) / 2;
    let drawDownY = oFlechedown.y - (drawDownH - oFlechedown.baseHauteur) / 2;
    oContexte.drawImage(oFlechedown.image, drawDownX, drawDownY, drawDownW, drawDownH);
  
}
function nNombreAbeillesVisibles(){
  let nombreAbeilles = 0;
  for (let i = 0; i < listeAbeilles.length; i++) {
    let uneAbeille = listeAbeilles[i];
    if (uneAbeille.estVisible == true) {
      nombreAbeilles += 1;
    }
  }
return nombreAbeilles
//affiche les abailles aleatoirement visibles
}

function reinitialiser() {
  tempsPasse = 0;
  minuterie1 = 4;
  minuterie2 = 5;
  nbChances = nbChancesMax;

}

function toucheEnfoncee(evenement) {
   sTouche = evenement.key
}
function toucheRelachee(evenement) {
if(sEtatJeu=="clipart" && evenement.key==' '){
  sEtatJeu="intro"
}
 if(sEtatJeu=="attenteReponse" && evenement.key=="ArrowUp"){
  augmenterFleurs();
  oPop.currentTime = 0; //remet a zero le son pour pouvoir le rejouer rapidement
  oPop.play();
 
 }
 if(sEtatJeu=="attenteReponse" && evenement.key=="ArrowDown"){
  diminuerFleurs();
  oPop.currentTime = 0; //remet le son a zero
  oPop.play(); //joue le son pop lorsque la touche arrowdown est relachée
 }
}

function detecterClicObjet(curseurX, curseurY, objet) {
  if ( //variable utilitaire pour detecter le clic sur un objet
    curseurX >= objet.x &&
    curseurX <= objet.x + objet.largeur &&
    curseurY >= objet.y &&
    curseurY <= objet.y + objet.hauteur
  ) {
    return true;
  }
  return false;
}

function afficherVies() {
  
 //permet d'afficher la barre de vie (celle en bas a gauche)
  
  if(nbChances==3){
    oVies.image.src = oVies.srcVies3;
  }else if (nbChances==2){
    oVies.image.src = oVies.srcVies2;
  }else {
    oVies.image.src = oVies.srcVies1;
  }
  oContexte.drawImage(oVies.image, oVies.x, oVies.y, oVies.largeur, oVies.hauteur);
  
}
function afficherMenu (){  
    oContexte.drawImage(oMenuFond, 0, 0, nlargeurCanvas, nhauteurCanvas);

    oReprendre.image.src = oReprendre.srcReprendre;
    oContexte.drawImage(oReprendre.image,oReprendre.x,oReprendre.y, oReprendre.largeur, oReprendre.hauteur);

    oMenu.image.src = oMenu.srcMenu;
    oContexte.drawImage(oMenu.image,oMenu.x,oMenu.y, oMenu.largeur, oMenu.hauteur);

}
function afficherMenuBurger(){
  oBurger.image.src = oBurger.srcBurger;
    oContexte.drawImage(oBurger.image,oBurger.x,oBurger.y, oBurger.hauteur, oBurger.largeur);
}

////////////////////////////////////////////////////////=====fonction afficher video====//////////////////////////
function afficherClipart() {
      
  sEtatJeu = "clipart";
    // Load video
    oClipVideo.video.src = oClipVideo.srcClipVideo; //permet de definir la source de la video
    oClipVideo.video.autoplay = true; //permet de lancer la video automatiquement
    oClipVideo.video.muted = true; //permet de couper le son de la video
    oClipVideo.video.loop = true;
   
    oClipVideo.video.style.display = "none"; 

    dessinerClip(); 
    oAbeillesSon.pause()
    oClipVideo.video.play();
    oClipSound.play();
    oClipSound.loop = false;
     oClipLeaveVideo.image.src = oClipLeaveVideo.srcClipLeaveVideo;
    oContexte.drawImage(oClipLeaveVideo.image,oClipLeaveVideo.x,oClipLeaveVideo.y, oClipLeaveVideo.largeur, oClipLeaveVideo.hauteur);
  
}

function dessinerClip() {
    oContexte.clearRect(0, 0, oCanvasHTML.width, oCanvasHTML.height);
    oContexte.drawImage(
        oClipVideo.video,
        0,
        0,
        oCanvasHTML.width,
        oCanvasHTML.height
    );
    
      requestAnimationFrame(dessinerClip);
    
}
function afficherScore(){
  oScore.play();
  oScore.loop = false;
  oContexte.drawImage(oScoreFond, 0, 0, nlargeurCanvas, nhauteurCanvas);
  oContexte.font = "100px 'Super Chiby', sans-serif";
  oContexte.fillStyle = "rgba(117, 98, 60, 1)";
  oContexte.fillText(`Score: ${score}`, nlargeurCanvas / 2 - 150, nhauteurCanvas / 2);
  oMenu1.image.src = oMenu1.srcMenu1;
    oContexte.drawImage(oMenu1.image,oMenu1.x,oMenu1.y, oMenu1.largeur, oMenu1.hauteur);
}
function afficherBoutonMiel(){
  oMiel.image.src = oMiel.srcStory;
  oContexte.drawImage(oMiel.image, oMiel.x, oMiel.y, oMiel.largeur, oMiel.hauteur);
}

window.addEventListener("load", Initialiser); //fin chargement de la page
