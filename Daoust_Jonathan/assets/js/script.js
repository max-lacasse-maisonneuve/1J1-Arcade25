let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");
let nHauteur = oCanvasHTML.height;
let nLargeur = oCanvasHTML.width;

let sEtat = "intro";

let oImageIntro = new Image();
let oImageJeu = new Image();
let oImageFin = new Image();

let oSonIntro = new Audio();

let tableauAnimaux = [];
let nScore = 0;
let nTemps = 30; 


let nVitesseBase = 2;
let nVitesseActuelle = nVitesseBase;
let nDerniereSeconde = Date.now();

let nDelaiApparition = 1200; 
let nDerniereApparition = Date.now();
let nMaxAnimaux = 5; 

let nPosX = 0;
let nPosY = 0;
let nVitesse = 2;

function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    oCanvasHTML.addEventListener("click", clicCanvas);
    setInterval(() => {
    if (sEtat == "jeu" && tableauAnimaux.length < 2) {
        ajouterAnimal();
    }
}, 2000);
    
    
}

function remiseAZero() {
    nMinuterie = 10;
    nTempsPasse = 0;
}

function clicCanvas(e) {
    let rect = oCanvasHTML.getBoundingClientRect();
    let xClic = e.clientX - rect.left;
    let yClic = e.clientY - rect.top;

    if (sEtat == "intro") {
        sEtat = "jeu";
        return;
    }

    if (sEtat !== "jeu") return;

    for (let i = tableauAnimaux.length - 1; i >= 0; i--) {
    let a = tableauAnimaux[i];

    let touche = false;

    if (a.type == "domestique") {
        let dx = xClic - (a.x + a.rayon);
        let dy = yClic - (a.y + a.rayon);
        touche = Math.sqrt(dx * dx + dy * dy) < a.rayon;
    } else {
        touche =
            xClic > a.x &&
            xClic < a.x + a.taille &&
            yClic > a.y &&
            yClic < a.y + a.taille;
    }

    if (touche) {
    if (a.type == "domestique") {
        nScore++;
    } else if (a.type == "dangereux") {
        nScore--;
        if (nScore < 0) nScore = 0; 
    }

    tableauAnimaux.splice(i, 1);
    break;
}
}
}

function boucleJeu() {

    oContexte.clearRect(0, 0, nLargeur, nHauteur);

    
    if (sEtat == "intro") {
        afficherIntro();
        
        
    } else if (sEtat == "jeu") {
        afficherJeu();
        if (
    tableauAnimaux.length < nMaxAnimaux &&
    Date.now() - nDerniereApparition > nDelaiApparition
) {
    ajouterAnimal();
    nDerniereApparition = Date.now();
}
    } else {
        afficherFin();
    }

    if (sEtat == "jeu") {
    if (Date.now() - nDerniereSeconde >= 1000) {
        nTemps--;
        nVitesseActuelle += 0.21; 
        nDerniereSeconde = Date.now();

        if (nDelaiApparition > 400) {
    nDelaiApparition -= 50;
}

        if (nTemps <= 0) {
            sEtat = "fin";
        }
    }
}
}


function afficherIntro() {
    oImageIntro.src = "assets/imges/fondDebut.jpg";

    oSonIntro.src = "assets/audio/inn_music.mp3";
    
    oSonIntro.play();
    

    
    nPosX += nVitesse;

    if (nPosX > nLargeur) {
        nPosX = 0;
    }
    oContexte.drawImage(oImageIntro, nPosX,  0, nLargeur, nHauteur);
    oContexte.drawImage(oImageIntro, nPosX - nLargeur,  0, nLargeur, nHauteur);


    oContexte.font = "80px dum";
    oContexte.fillStyle = "turquoise";
    oContexte.textAlign = "center";
    oContexte.fillText(`Le méchant loup`, 550, 230);

    oContexte.font = "35px dum";
    oContexte.fillStyle = "black";
    oContexte.textAlign = "center";
    oContexte.fillText(`Appuyer si vous l'osez!`, 550, 360);

    oContexte.font = "18px dum";
    oContexte.fillStyle = "brown";
    oContexte.textAlign = "center";
    oContexte.fillText(`Cliquer sur les flocons de neiges(cyan)`, 550, 390);

    if (sEtat == "intro") {
        
    }

}


function afficherJeu() {
    oImageJeu.src = "assets/imges/GrotteChemin.jpg";

    oContexte.drawImage(oImageJeu, 0,  0, nLargeur, nHauteur);



    for (let i = tableauAnimaux.length - 1; i >= 0; i--) {
    let a = tableauAnimaux[i];

    a.y += nVitesseActuelle;

    if (a.type == "domestique") {
        oContexte.beginPath();
        oContexte.arc(
            a.x + a.rayon,
            a.y + a.rayon,
            a.rayon,
            0,
            Math.PI * 2
        );
        oContexte.fillStyle = "cyan";
        oContexte.fill();
    } else {
        oContexte.fillStyle = "blue";
        oContexte.fillRect(a.x, a.y, a.taille, a.taille);
    }

    if (a.y > nHauteur) {
        tableauAnimaux.splice(i, 1);
    }
}

    oContexte.font = "30px dum";
    oContexte.fillStyle = "white";
    oContexte.fillText("Temps : " + nTemps, 100, 40);
    oContexte.fillText("Sauvetages : " + nScore, 300, 40);
}

function afficherFin() {

    oContexte.fillStyle = "grey";
    oContexte.fillRect(0, 0, nLargeur, nHauteur);

    oContexte.font = "80px dum";
    oContexte.fillStyle = "Black";
    oContexte.textAlign = "center";
    oContexte.fillText(`${sEtat}`, 550, 230);

}

function creerAnimal() {
    let x;
    let espacementMin = 150;
    let tentative = 0;

    do {
        x = Math.random() * (nLargeur - 80);
        tentative++;
    } while (
        tableauAnimaux.some(a => Math.abs(a.x - x) < espacementMin) &&
        tentative < 10
    );

    return {
        x: x,
        y: -80,
        rayon: 25,
        taille: 55,
        type: Math.random() < 0.6 ? "domestique" : "dangereux"
    };
}


function ajouterAnimal() {
    let animal = creerAnimal();
    tableauAnimaux.push(animal);



}

function afficherFin() {
    oImageFin.src = "assets/imges/RocherGlacee.webp";

    oContexte.drawImage(oImageFin, 0,  0, nLargeur, nHauteur);

    oContexte.fillStyle = "darkgreen";
    oContexte.strokeStyle = "white";
    oContexte.lineWidth = 0.5; 
    oContexte.font = "80px dum";
    oContexte.textAlign = "center";
    oContexte.fillText("Bravo !", nLargeur / 2, 200);
    oContexte.strokeText("Bravo !", nLargeur / 2, 200);

    oContexte.font = "35px dum";
    oContexte.fillText(
        "Animaux sauvés : " + nScore,
        nLargeur / 2,
        300
    );
    oContexte.strokeText(
        "Animaux sauvés : " + nScore,
        nLargeur / 2,
        300
    );
}


window.addEventListener("load", initialiser);
