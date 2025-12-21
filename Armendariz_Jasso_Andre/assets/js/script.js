//Auteur: André Armendariz-Jasso

let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let nPosWhisky = 0;

let nPosTuile = 0;

let nVitesse = 2;

let nTempsPasse = 0;
let nMinuterie = 30;
let etatJeu = "present";

let instructuionStarted = false;

let GOActive = false;
let GOTimer = 0;

//flicker
let lumiereEst = true;
let flickerStarted = false;
let flickerRunning = false;

//fade variables
let fadeOpacity = 1;
let fadeInActive = false;

let introFade = 1;
let introFadingIn = true;

//Images

let oPresentIMG = new Image();
oPresentIMG.src = "assets/images/present.png";
let oImageDebut = new Image();
oImageDebut.src = "assets/images/ecranDebut.png";

let oFlyWhisky = new Image();
oFlyWhisky.src = "assets/images/whisky.png";

let oTuile = new Image();
oTuile.src = "assets/images/debutArriere.png";

let oVoisin = new Image();
oVoisin.src = "assets/images/voisinParle.png";

let oJeu = new Image();
oJeu.src = "assets/images/jeu.png";

let oJeuFlick = new Image();
oJeuFlick.src = "assets/images/jeuFlicker.png";

let oGOimg = new Image();
oGOimg.src = "assets/images/gameOver.png";

let oFinBath = new Image();
oFinBath.src = "assets/images/ecranFinBath.png";

let oFinSoup = new Image();
oFinSoup.src = "assets/images/ecranFinSoup.png";

let oRound2 = new Image();
oRound2.src = "assets/images/5gstRepartirDinner.png";

let oGoodEnding = new Image();
oGoodEnding.src = "assets/images/goodEnding.png";

//Audio
let oClick = new Audio();
oClick.src = "assets/audio/click.wav";

let oClickServe = new Audio();
oClickServe.src = "assets/audio/clickServe.wav";

let oClickGood = new Audio();
oClickGood.src = "assets/audio/clickGood.ogg";

let oClickJMP = new Audio();
oClickJMP.src = "assets/audio/jmp.mp3";

let oMusique = new Audio();
oMusique.src = "assets/audio/songGame.wav";
oMusique.loop = true;

let oBack1 = new Audio();
oBack1.src = "assets/audio/backgroundNoiseGame.flac";
oBack1.loop = true;

let oVoisinParle = new Audio();
oVoisinParle.src = "assets/audio/voisinRequest.wav";

let oLumiere = new Audio();
oLumiere.src = "assets/audio/lumiereFlickerGame.mp3";

let oNoiseGame = new Audio();
oNoiseGame.src = "assets/audio/backgroundNoiseGame.flac";

let oFinSonB1 = new Audio();
oFinSonB1.src = "assets/audio/fin3.flac";

let oFinSonS1 = new Audio();
oFinSonS1.src = "assets/audio/fin4.flac";

let finBathPlayed = false;
let finSoupPlayed = false;

let oBark = new Audio();
oBark.src = "assets/audio/bark.wav";

let oGOson = new Audio();
oGOson.src = "assets/audio/glitch.wav";

let oGoodSound = new Audio();
oGoodSound.src = "assets/audio/goodEnd.wav";

//Initialiser
function initialiser() {
  alert("Welcome to Gator Soup! Welcome to Gator Soup, a math game! Answer all the equations correctly before the timer ends to not convert your neighbourg's alligator into soup! KEEP THE TEMPERATURE 50");
  melangerTableau(questions);

  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", clicCanvas);
  oCanvasHTML.addEventListener("click", onClicCanvas);
}

//functions

function remiseAZero() {
  nMinuterie = 30;
  nTempsPasse = 0;
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeur, nHauteur);

  oContexte.fillStyle = "black";
  oContexte.font = "20px Arial";
  oContexte.textAlign = "left";

  if (etatJeu !== "serveNow" && etatJeu !== "goodEnding") {
    updateCursor();
  }

  if (etatJeu !== "jeu") {
    //ext src: chatgpt
    if (!oNoiseGame.paused) oNoiseGame.pause();
    if (!oLumiere.paused) oLumiere.pause();
    //
  }

  if (etatJeu == "present") {
    present();
  } else if (etatJeu == "intro") {
    intro();
  } else if (etatJeu == "instruction") {
    instruction();
  } else if (etatJeu == "jeu") {
    jeu();
    dessinerQuestion();
    dessinerUI();
  } else if (etatJeu == "finBath") {
    finBath();
    //ext src: chatgpt -> pour ne pas repeter en boucle les sons
    if (!finBathPlayed) {
      oFinSonB1.play();
      finBathPlayed = true;
    }
    //
  } else if (etatJeu == "finSoup") {
    finSoup();
 
    if (!finSoupPlayed) {
      oFinSonS1.play();
      finSoupPlayed = true;
    }
  } else if (etatJeu == "serveNow") {
    serveNow();
  } else if (etatJeu == "goodEnding") {
    goodEnding();
    oGoodSound.play();
  } else if (etatJeu == "toobad") {
    toobad();
  }
}

/////jeu questions functions/variables round 1/////

let indexQuiz = 0;
let nPoints = 0;
let questions = [
  {
    nom: "The temperature dropped! Current temperature: 40°",
    reponse: "+10°",
    choix: ["+10°", "x2°", "+11°"],
    points: 1,
  },
  {
    nom: "The temperature increased! Current temperature: 64°",
    reponse: "-14°",
    choix: ["-13°", "-14°", "+14°"],
    points: 1,
  },
  {
    nom: "The temperature increased! Current temperature: 81°",
    reponse: "x1.62°",
    choix: ["-32°", "x0.61°", "x1.62°"],
    points: 1,
  },
  {
    nom: "The temperature dropped! Current temperature: -24°",
    reponse: "+74°",
    choix: ["+60°", "x5°", "+74°"],
    points: 1,
  },
  {
    nom: "The temperature dropped! Current temperature: 28°",
    reponse: "+22°",
    choix: ["+12°", "+22°", "x2°"],
    points: 1,
  },
  {
    nom: "The temperature increased! Current temperature: 120°",
    reponse: "÷2°",
    choix: ["÷2°", "-60°", "x0.5°"],
    points: 1,
  },
  {
    nom: "The temperature dropped! Current temperature: -72°",
    reponse: "x -0.69°",
    choix: ["+50°", "x -0.69°", "x1.69°"],
    points: 1,
  },
  {
    nom: "Extreme fluctuation! Current temperature: 315°",
    reponse: "x0.158°",
    choix: ["-157°", "x0.5°", "x0.158°"],
    points: 1,
  },
];

function dessinerUI() {
  oContexte.font = "10px Arial";
  oContexte.textAlign = "right";
  oContexte.fillStyle = "green";
  oContexte.fillText(nPoints, nLargeur - 60, 60);
}
function dessinerQuestion() {
  let premiereQuestion = questions[indexQuiz];

  oContexte.fillStyle = "red";
  oContexte.textAlign = "center";
  oContexte.font = "20px Candal";
  oContexte.fillText(premiereQuestion.nom, nLargeur / 2, nHauteur / 2 + 150);

  for (let i = 0; i < premiereQuestion.choix.length; i++) {
    let elementChoix = premiereQuestion.choix[i];

    oContexte.fillStyle = "lightgreen";
    oContexte.fillRect(i * (nLargeur / 3), nHauteur / 2 + 60, nLargeur / 3, 50);

    oContexte.font = "20px Arial";
    oContexte.fillStyle = "black";
    oContexte.textAlign = "center";
    oContexte.fillText(elementChoix, i * (nLargeur / 3) + (nLargeur / 6), nHauteur / 2 + 85);
  }
}

function melangerTableau(tableau) {
  tableau.sort(function (elementA, elementB) {
    return Math.random() * 2 - 1;
  });
}

function onClicCanvas(evenement) {
    if (etatJeu !== "jeu") return;

    let curseurX = evenement.offsetX;
    let curseurY = evenement.offsetY;

  console.log(curseurX, curseurY);
  for (let i = 0; i < 3; i++) {
    let bouton = {
      x: i * (nLargeur / 3),
      y: nHauteur / 2 + 60,
      largeur: nLargeur / 3,
      hauteur: 50,
    };

    let collision = detecterClicObjet(curseurX, curseurY, bouton);
    if (collision == true) {
      let premiereQuestion = questions[indexQuiz];

      if (premiereQuestion.reponse == premiereQuestion.choix[i]) {
        console.log("Bonne réponse");
        nPoints += premiereQuestion.points;
      } else {
        console.log("Mauvaise réponse");

        serveWrong.currentTime = 0;
        serveWrong.play();

        etatJeu = "toobad";
        return;
      }

      indexQuiz += 1;
      if (indexQuiz >= questions.length) {
        etatJeu = "finBath";
      }
    }
  }
}

//Utilitaires
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

//////////////////////////////////

/////jeu questions functions/variables round 2/////

let serveActive = true;

let serveIndex = 0;
let serveAudioPlayed = false;

let serveImageVisible = [true, true, true];

let serveWrong = new Audio("assets/audio/clickGood.ogg");
let serveRight = new Audio("assets/audio/clickServe.wav");

//choix images
let serveImgs = [
  { src: "assets/images/heart.png", x: 100, y: 500, w: 150, h: 150 },
  { src: "assets/images/brain.png", x: 250, y: 500, w: 150, h: 150 },
  { src: "assets/images/eye.png", x: 400, y: 500, w: 150, h: 150 },
];

serveImgs.forEach((img) => { 
  img.image = new Image();
  img.image.src = img.src;
});

//questions
let serveQuestions = [
  {
    text: "What makes you feel?",
    correctIndex: 0,
    audio: new Audio("assets/audio/feel.wav"),
  },
  {
    text: "What makes you think?",
    correctIndex: 1,
    audio: new Audio("assets/audio/think.wav"),
  },
  {
    text: "What makes you see?",
    correctIndex: 2,
    audio: new Audio("assets/audio/see.wav"),
  },
];

let oCook = new Image();
oCook.src = "assets/images/cook.png";

let oPlate = new Image();
oPlate.src = "assets/images/done.png";

let servePhase = 0;

function dessinerServeMiniGame() {
  oContexte.drawImage(oRound2, 0, 0, nLargeur, nHauteur);

  if (serveIndex >= serveQuestions.length) {
    oContexte.font = "30px Arial";
    oContexte.fillStyle = "red";
    oContexte.textAlign = "center";

    if (servePhase === 0) {
      oContexte.fillText("cook", nLargeur / 2, 150);
      oContexte.drawImage(oCook, 200, 220, 300, 250);
    } else if (servePhase === 1) {
      oContexte.fillText("serve", nLargeur / 2, 150);
      oContexte.drawImage(oPlate, 200, 220, 300, 250);
    }

    return;
  }

  oContexte.fillStyle = "white";
  oContexte.font = "32px Arial";
  oContexte.textAlign = "center";
  oContexte.fillText(serveQuestions[serveIndex].text, nLargeur / 2, 150);

  if (!serveAudioPlayed) {
    serveQuestions[serveIndex].audio.currentTime = 0;
    serveQuestions[serveIndex].audio.play();
    serveAudioPlayed = true;
  }

  for (let i = 0; i < serveImgs.length; i++) {
    if (serveImageVisible[i]) {
      let img = serveImgs[i];
      oContexte.drawImage(img.image, img.x, img.y, img.w, img.h);
    }
  }
}

function clickServeMiniGame(x, y) {
  if (serveIndex >= serveQuestions.length) {
    let postBox = { x: 260, y: 220, largeur: 300, hauteur: 250 };

    if (detecterClicObjet(x, y, postBox)) {
      servePhase++;

      if (servePhase >= 2) {
        etatJeu = "goodEnding";
        return;
      }
    }
    return;
  }

  for (let i = 0; i < serveImgs.length; i++) {
    if (!serveImageVisible[i]) continue;

    let img = serveImgs[i];
    let box = { x: img.x, y: img.y, largeur: img.w, hauteur: img.h };

    if (detecterClicObjet(x, y, box)) {
      let correct = serveQuestions[serveIndex].correctIndex;

      if (i === correct) {
        serveRight.currentTime = 0;
        serveRight.play();

        serveImageVisible[i] = false;
        serveIndex++;
        serveAudioPlayed = false;
      } else {
        serveWrong.currentTime = 0;
        serveWrong.play();
      }

      return;
    }
  }
}

//////////////////////////////////

function clicCanvas(evenement) {

  if (etatJeu == "present") {
    etatJeu = "intro";

    //ext src: chatgpt -> fondu du noir a l'etat
    fadeOpacity = 1;
    fadeInActive = true;
    //
  } else if (etatJeu == "intro") {
    oClick.currentTime = 0;
    oClick.play();

    etatJeu = "instruction";

    instructuionStarted = true;

    //ext src: chatgpt -> quand le dialogue termine, passer a l'etat suivant + fondu du noir au jeu + "lumiere clignotante" du jeu
    oVoisinParle.play();                    
    oVoisinParle.onended = function () {
      etatJeu = "jeu";

      fadeOpacity = 1;
      fadeInActive = true;

      if (!flickerStarted) {
        flickerStarted = true;
        flicker();
      }
    };
    //


  } else if (etatJeu == "instruction") {

    //ext src: chatgpt -> fondu et "lumiere clignotante" du jeu
    fadeOpacity = 1;
    fadeInActive = true;

    if (!flickerStarted) {
      flickerStarted = true;
      flicker();
    }
    //

  } else if (etatJeu == "jeu") {

  
    oClick.currentTime = 0;
    oClick.play();

    //ext src: chatgpt -> arreter la lumiere clignotante du jeu
    stopFlicker();
    flickerStarted = false;
    //

  } else if (etatJeu == "finBath") {
    window.location.reload(true);

    oClick.currentTime = 0;
    oClick.play();
  } else if (etatJeu == "finSoup") {
    oClickJMP.currentTime = 0;
    oClickJMP.play();

    etatJeu = "serveNow";

    //ext src: chatgpt -> changer de couleur (css) et de curseur
    document.body.classList.add("serveNowBG");
    oCanvasHTML.classList.add("serveNowBorder");
    document.body.classList.add("serveNowText");
    document.body.classList.add("serveNowInst");

    oCanvasHTML.style.cursor = "url('assets/images/serveCursor.png'), auto";
    //

  } else if (etatJeu == "serveNow") {
    oClickServe.currentTime = 0;
    oClickServe.play();

    //ext src: chatgpt
    document.body.classList.add("hideText"); 

    let x = evenement.offsetX;
    let y = evenement.offsetY;
  
    clickServeMiniGame(x, y);
    return;
    //

  } else if (etatJeu == "goodEnding") {
    oClickGood.currentTime = 0;
    oClickGood.play();
    oCanvasHTML.style.cursor = "url('assets/images/goodCursor.png'), auto";
  } else if (etatJeu == "toobad") {
    window.location.reload(true);
  }

  if (nMinuterie <= 0) {
    oGOson.pause();
    oGOson.currentTime = 0;
  }
}

function playBeep() {
  let oBeep = new Audio("assets/audio/beep.mp3");
  oBeep.play();
}

//ext src: chatgpt
function flicker() {
  if (!flickerRunning || etatJeu !== "jeu") {
    flickerRunning = false;
    return;
  }

  lumiereEst = !lumiereEst;

  let nextFlickerTime;
  if (lumiereEst) {
    nextFlickerTime = Math.random() * 600 + 600;
  } else {
    nextFlickerTime = Math.random() * 140 + 60;
  }

  setTimeout(flicker, nextFlickerTime);
}

function startFlicker() {
  if (flickerRunning) return;
  flickerRunning = true;
  setTimeout(flicker, Math.random() * 50 + 100);
}

function stopFlicker() {
  flickerRunning = false;
}
//

function updateCursor() {
  oCanvasHTML.style.cursor = "url('assets/images/cursor.png'), auto";
}

//Etats de jeu

function present() {
  oContexte.drawImage(oPresentIMG, 0, 0, nLargeur, nHauteur);

  //ext src: chatgpt (fondu)
  if (introFadingIn) {
    oContexte.fillStyle = `rgba(0, 0, 0, ${introFade})`;
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    introFade -= 0.02;
    if (introFade <= 0) {
      introFade = 0;
      introFadingIn = false;
    }
  }
  //
}

function intro() {
  dessinerTuile();
  oContexte.drawImage(oImageDebut, 0, 0, nLargeur, nHauteur);
  oContexte.textAlign = "center";
  oContexte.fillText(`CLICK TO START`, nLargeur - 100, nHauteur - 210);

  dessinerWhisky();

  oMusique.play();
  oBack1.play();
  oMusique.volume = 0.3;

  //ext src:  (fondu)
  if (introFadingIn) {
    oContexte.fillStyle = `rgba(0, 0, 0, ${introFade})`;
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    introFade -= 0.02;
    if (introFade <= 0) {
      introFade = 0;
      introFadingIn = false;
    }
  }
  //

}

function dessinerTuile() {
  nPosTuile += nVitesse;

  if (nPosTuile > nLargeur) {
    nPosTuile = 0;
  }
  oContexte.drawImage(oTuile, nPosTuile, 0, nLargeur, nHauteur);

  oContexte.drawImage(oTuile, nPosTuile - nLargeur, 0, nLargeur, nHauteur);
}

function dessinerWhisky() {
  nPosWhisky += nVitesse;

  if (nPosWhisky > nLargeur) {
    nPosWhisky = 0;
  }

  oContexte.drawImage(oFlyWhisky, nPosWhisky, 0, nLargeur, nHauteur);

  oContexte.drawImage(oFlyWhisky, nPosWhisky - nLargeur, 0, nLargeur, nHauteur);
}

function instruction() {
  oMusique.pause();
  oContexte.drawImage(oVoisin, 0, 0, nLargeur, nHauteur);
}

function jeu() {
  nTempsPasse++;

  if (nTempsPasse % 60 == 0) {
    nMinuterie--;

    if (nMinuterie <= 0) {
      GOActive = false;
      oGOson.pause();
      oGOson.currentTime = 0;
      etatJeu = "finSoup";
    }

    if (nMinuterie <= 5 && nMinuterie > 0) {
      playBeep();

      if (nMinuterie === 1 && !GOActive) {
        GOActive = true;
        GOTimer = 60;
        oGOson.currentTime = 0;
        oGOson.play();
        oGOson.volume = 0.5;
      }
    }
  }

  let imageToDraw = lumiereEst ? oJeu : oJeuFlick;
  oContexte.drawImage(imageToDraw, 0, 0, nLargeur, nHauteur);

  if (GOActive && etatJeu === "jeu") {
    oContexte.drawImage(oGOimg, 0, 0, nLargeur, nHauteur);
    GOTimer--;
    if (GOTimer <= 0) {
      GOActive = false;
      oGOson.pause();
      oGOson.currentTime = 0;
    }
  }

  oContexte.fillStyle = "red";
  oContexte.font = "40px Arial";
  oContexte.textAlign = "left";
  oContexte.fillText(nMinuterie, 50, 50);

  //ext src: chatgpt (clignotant)
  if (!flickerRunning) startFlicker();

  if (fadeInActive) {
    oContexte.fillStyle = `rgba(0,0,0,${fadeOpacity})`;
    oContexte.fillRect(0, 0, nLargeur, nHauteur);
    fadeOpacity -= 0.02;
    if (fadeOpacity <= 0) fadeInActive = false;
  }

  if (oNoiseGame.paused) oNoiseGame.play();
  if (oLumiere.paused) oLumiere.play();
  oLumiere.volume = 0.6;
  //
}

function toobad() {
  oContexte.fillStyle = "black";
  oContexte.fillRect(0, 0, nLargeur, nHauteur);

  oContexte.fillStyle = "red";
  oContexte.font = "40px Arial";
  oContexte.textAlign = "center";
  oContexte.fillText("TOO BAD!", nLargeur / 2, nHauteur / 2);

  oContexte.font = "15px Arial";
  oContexte.textAlign = "center";
  oContexte.fillStyle = "white";
  oContexte.fillText(`CLICK TO RESTART`, nLargeur / 2, nHauteur - 100);
}

function finBath() {
  oContexte.drawImage(oFinBath, 0, 0, nLargeur, nHauteur);
  textBath();
}

function finSoup() {
  oContexte.drawImage(oFinSoup, 0, 0, nLargeur, nHauteur);
  textSoup();
}

function textBath() {
  oContexte.font = "15px Arial";
  oContexte.textAlign = "center";
  oContexte.fillStyle = "white";
  oContexte.fillText(`CLICK TO CONTINUE`, nLargeur / 2, nHauteur - 100);
}

function textSoup() {
  oContexte.font = "15px Arial";
  oContexte.textAlign = "center";
  oContexte.fillStyle = "white";
  oContexte.fillText(`C̵̷̰̜̐̒͆̅̓ͬ́_̵̧̧͍͓̳͕̝͈̒ͪͩ͊ͪ̅̏̄Ḽ̸̡̣̞̗̩̫̹̠̹ͦ͗̋͂͋͗̈̒͂ͫ̈ͨͬ͘I̛͖̼͍̣̔ͥͅ_̢̧̡̗̭͎͖̰͍͇̘ͯ͑́͑ͩͣ̓̆͡C̆ͨͬ̔̚_̡̛̗͙̼͍͉̖͍͖̗͖̠̻̆̏̿̊͑͐̏̒̑̈́̿ͮ͗̕Ḳ̛͚̥̱̬̞̋͝͝ Ţ̶̵̨͍͔͇͇͇̻̯̬̺͑̊͂̌̌͐̈́̓̑̓͌̊͑ͣ̌̚͞O̶̝̘̩͇͇̰̭̺͉ͣ̆̏ͦ͆̄̏ͣ͞ continueC͔̪͖̗̼̺̫̺̎ͬ̍̍ͩͦͯ͢_̨͍͇̗̺̩̞͖̮͉͆̎ͭ̂̏ͪ̇͢͡Ǫ̸̸̵̧̲͉͎͔̩̳͕̠̰͍͛̑̐ͥͬ́̓̽̂̊͂̔ͭ̄ͯ̿̕̕͢͟͟N̲̈̈ͨ_̢̧̱̝̭͖̆ͣͯ̾̀̈́̚T̸̢̛͎̞͚͕͚̲̖̠̻̮͎̞͈̝͛̒́̋͌ͤ̎͌̑ͭ́͑̕͟͢I̻̎_̲̳̻̳͖̥̞̈́̒͒ͯ̏̀̇̈́̈̕͜N͔͔͍̼̙͖̻ͪ͊̐̀̚͜U̴͉̪͇̘̳ͨ͗̽̍̈̾̓͋͋_̮̖̯̯̘͒̀͌̎̃ͧ̂̐́̌̃̏̎ͥ͟͝Ȅ̱̝̱̖̩͈̩̐̆̐̾͜͡`, nLargeur / 2, nHauteur - 100);
  

  

setTimeout(delayTextSoup, 3000);//chatgpt
}

function serveNow() {
  oContexte.drawImage(oRound2, 0, 0, nLargeur, nHauteur);
  dessinerServeMiniGame();
}

function goodEnding() {
  oContexte.drawImage(oGoodEnding, 0, 0, nLargeur, nHauteur);
}

// Exécution
window.addEventListener("load", initialiser);
