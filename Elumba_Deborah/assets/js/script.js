// variables
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nLargeurCanvas = oCanvasHTML.width;
let nHauteurCanvas = oCanvasHTML.height;

let sEtat = "intro";
let sNomUtilisateur;
let nScore = 0;

let sExplication;
let sProchainEtat;
let sMessageFin;

// image
let oImageIntro = new Image();
oImageIntro.src = "assets/images/pointe.jpg";

let oImageEmoji = new Image();
oImageEmoji.src = "assets/images/cap.jpg";

let oImageEmoji2 = new Image();
oImageEmoji2.src = "assets/images/cry.png";

let oImageSpeed = new Image();
oImageSpeed.src = "assets/images/speed.jpg";

// audio
let oAudio = new Audio();
oAudio.src = "assets/audio/audio.mp3";

// multicolor titre
let couleurs = ["red", "orange", "yellow", "lightgreen", "cyan", "blue", "magenta"];
let indexCouleur = 0;

setInterval(function () {
    indexCouleur = indexCouleur + 1;
    if (indexCouleur >= couleurs.length) {
        indexCouleur = 0;
    }
}, 400);


// initialisation
function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    window.addEventListener("click", onClicCanvas);
    creerChampNom();
}

// boucle de jeu
function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);

    if (sEtat === "intro") afficherIntro();
    else if (sEtat === "jeu") afficherQuestion1();
    else if (sEtat === "question2") afficherQuestion2();
    else if (sEtat === "question3") afficherQuestion3();
    else if (sEtat === "explication") afficherExplication();
    else if (sEtat === "fin") afficherFin();
}

// intro
function afficherIntro() {
    // titre
    oContexte.textAlign = "center";
    oContexte.font = "50px Arial";
    oContexte.fillStyle = couleurs[indexCouleur];
    oContexte.fillText("GEN Z ULTIMATE QUIZ", nLargeurCanvas / 2, 80);

    // image
    if (oImageIntro.complete) {
        oContexte.drawImage(oImageIntro, (nLargeurCanvas - 200) / 2, 150, 200, 200);
    }

    // question
    oContexte.font = "26px Arial";
    oContexte.fillStyle = "black";
    oContexte.fillText("Quel est ton nom ?", nLargeurCanvas / 2, 150 + 200 + 40);
}

// champ pour nom utilisateur
function creerChampNom() {
    const input = document.getElementById("champNom");
    const button = document.getElementById("submitNom");
    
    button.addEventListener("click", function() {
        if (input.value.trim() !== "") {
            sNomUtilisateur = input.value;
            sEtat = "jeu";
            nScore = 0;
            oAudio.play();
            document.getElementById("nameContainer").style.display = "none";
        }
    });

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && input.value.trim() !== "") {
            sNomUtilisateur = input.value;
            sEtat = "jeu";
            nScore = 0;
            oAudio.play();
            document.getElementById("nameContainer").style.display = "none";
        }
    });
}

// question 1
let reponsesQ1 = [
    "Un mensonge",
    "Une simple casquette",
    "Une chaleur extrême",
    "Trop de casquettes"
];

function afficherQuestion1() {
    afficherQuestion(
        sNomUtilisateur + ", que signifie « cap » ?",
        oImageEmoji,
        reponsesQ1
    );
}

// question 2
let reponsesQ2 = [
    "Tristesse",
    "Un rire",
    "Confusion",
    "Colère"
];

function afficherQuestion2() {
    afficherQuestion(
        sNomUtilisateur + ", que signifie cet emoji ?",
        oImageEmoji2,
        reponsesQ2
    );
}

// question 3
let reponsesQ3 = [
    "Un acteur",
    "Un père de famille",
    "Un joueur de basket",
    "Un streamer"
];

function afficherQuestion3() {
    afficherQuestion(
        sNomUtilisateur + ", c’est qui lui ?",
        oImageSpeed,
        reponsesQ3
    );
}

// affichage des questions
function afficherQuestion(texte, image, reponses) {
    const titreY = 60;
    const imageY = 100;
    const imageSize = 200;
    const yDepart = imageY + imageSize + 30;
    const largeurBouton = 480;

    oContexte.textAlign = "center";
    oContexte.font = "30px Arial";
    oContexte.fillStyle = "black";
    oContexte.fillText(texte, nLargeurCanvas / 2, titreY);

    if (image.complete) {
        oContexte.drawImage(image, (nLargeurCanvas - imageSize) / 2, imageY, imageSize, imageSize);
    }

    oContexte.font = "20px Arial";

    for (let i = 0; i < reponses.length; i++) {
        const y = yDepart + i * 70;
        oContexte.fillStyle = "lightgray";
        oContexte.fillRect((nLargeurCanvas - largeurBouton) / 2, y, largeurBouton, 50);

        oContexte.fillStyle = "black";
        oContexte.fillText(reponses[i], nLargeurCanvas / 2, y + 32);
    }
}

// clics
function onClicCanvas(e) {
    let rect = oCanvasHTML.getBoundingClientRect();
    let xC = e.clientX - rect.left;
    let yC = e.clientY - rect.top;

    const largeurBouton = 480;
    const x = (nLargeurCanvas - largeurBouton) / 2;
    const yDepart = 330; 

    if (sEtat === "jeu") {
        verifierClic(reponsesQ1, 0, "slang américain qui signifie un mensonge.", "question2", xC, yC);
    }
    else if (sEtat === "question2") {
        verifierClic(reponsesQ2, 1, "rire jusqu'à pleurer, plus accentué que l’emoji 😂.", "question3", xC, yC);
    }
    else if (sEtat === "question3") {
        verifierClic(reponsesQ3, 3, "IShowSpeed, un streamer très chaotique!", "fin", xC, yC);
    }
    else if (sEtat === "explication") {
        sEtat = sProchainEtat;
    }
    else if (sEtat === "fin") {
    sEtat = "intro";
    document.getElementById("nameContainer").style.display = "block";
    document.getElementById("champNom").value = "";
}


function verifierClic(reponses, bonneIndex, texteExplication, prochainEtat, xC, yC) {
    for (let i = 0; i < reponses.length; i++) {
        if (xC >= x && xC <= x + largeurBouton &&
            yC >= yDepart + i * 70 && yC <= yDepart + i * 70 + 50) {

            if (i === bonneIndex) nScore++;

            sExplication = texteExplication;
            sProchainEtat = prochainEtat;
            sEtat = "explication";

            if (prochainEtat === "fin") definirMessageFin();
        }
    }
}

}

// explication
function afficherExplication() {
    oContexte.textAlign = "center";
    oContexte.font = "26px Arial";
    oContexte.fillStyle = "black";
    oContexte.fillText(sExplication, nLargeurCanvas / 2, nHauteurCanvas / 2);

    oContexte.font = "18px Arial";
    oContexte.fillText("Clique pour continuer", nLargeurCanvas / 2, nHauteurCanvas / 2 + 50);
}

// fin
function definirMessageFin() {
    if (nScore === 3) {
        sMessageFin = "Wow bravo! 3/3";
    } else if (nScore === 2) {
        sMessageFin = "Presque! 2/3";
    } else {
        sMessageFin = "Bien essayé... " + nScore + "/3";
    }
}

function afficherFin() {
    oContexte.textAlign = "center";
    oContexte.font = "40px Arial";
    oContexte.fillStyle = "black";
    oContexte.fillText(sMessageFin, nLargeurCanvas / 2, nHauteurCanvas / 2);

    oContexte.font = "20px Arial";
    oContexte.fillText("Clique pour retourner à l’accueil", nLargeurCanvas / 2, nHauteurCanvas / 2 + 60);
}

// lancement
window.addEventListener("load", initialiser);
