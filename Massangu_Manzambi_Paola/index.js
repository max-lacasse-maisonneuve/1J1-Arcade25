///////////////////////////////////////////////////////      VARIABLES     //////////////////////////////////////////////////////////////////
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let nPosX = 0;
let minuterie = 10;
let tempsPasse = 0;
let points = 0;
let nombresMaxQuestions = 10;
let questionActuelle = 0;
let afficherPoints = 0;
let sEtat = "intro";
let nPoints = 0;

/////////////////////////////////   AUDIO       ////////////////////////////////////////

let oError = new Audio();
oError.src = "assets/audio/error.wav";

let oGood = new Audio();
oGood.src = "assets/audio/good.wav";

//////////////////////////////      IMAGE      ////////////////////////////////////////
let oCiel = new Image();
oCiel.src = "assets/images/ciel.png";

let oBackground = new Image();
oBackground.src = "assets/images/class.png";

let oBackgroundQuestion = new Image();
oBackgroundQuestion.src = "assets/images/backgroundQuestion.png";

///////////////////////      BOUTON START MESURE    ///////////////////////////////////

let boutonStart = {
    x: 270,
    y: 234,
    largeur: 257,
    hauteur: 100,
};

////////////////////////////    Questions      ////////////////////////////////////

let questions = [
    //On peut mettre une liste dans une liste
    {
        nom: "Le TDAH est t-il un trouble de la personnalité ou un trouble neurodéveloppemental?",
        reponse: "      Trouble neurodéveloppemental",
        choix: ["     Trouble de la personnalité", "      Trouble neurodéveloppemental"],
        points: 1,
    },
    {
        nom: "Est-ce qu'une personne ayant le TDAH peut en guérir?",
        reponse: " Non, c'est un trouble neurodéveloppemental",
        choix: [" Non, c'est un trouble neurodéveloppemental", "   Oui avec médication"],
        points: 1, //entre rectangle c'est des listes
    }, //toujous mettre une virgule après chaque propriété
    {
        nom: "Est-ce que l'hyperactivité est le seul type de TDAH?",
        reponse: "Non, il y en a d'autres",
        choix: ["Oui c'est le seul", "Non, il y en a d'autres"],
        points: 1,
    },
    {
        nom: "Est-ce que les personnes ayant un TDAH ont seulement des problèmes d'innatention?",
        reponse: "Non, ils ont aussi l'hyperconcentration",
        choix: ["Non, ils ont aussi l'hyperconcentration", "Oui, c'est le seul symptôme"],
        points: 1,
    },

    {
        nom: "Est-ce que La majorité des personne ayant un TDAH s'en sortent bien à l'école sans médication?",
        reponse: "Non, ils sont à risque élevé d'échec",
        choix: ["Non, ils sont à risque élevé d'échec", "Oui"],
        points: 1,
    },

    {
        nom: "Le TDAH est plus diagnostiqués chez les garçons ou les filles?",
        reponse: "Chez les garçons",
        choix: ["Chez les garçons", "Chez les filles"],
        points: 1,
    },

    {
        nom: "Le TDAH affecte t-il les adultes ou seulement les enfants?",
        reponse: "Les deux",
        choix: ["Seulement les enfants", "Les deux"],
        points: 1,
    },

    {
        nom: "Les docteurs confondent souvent le TDAH avec quel autre troubles mentaux?",
        reponse: "Bipolarité, depression, anxiété et autisme",
        choix: ["Bipolarité, depression, anxiété et autisme", "Antisocial, schizoide, narcissique, histrionique"],
        points: 1,
    },
];
let indexQuiz = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// === FONCTION D'INITIALISATION DU JEU ===
function initialiser() {
    melangerTableau(questions);
    setInterval(boucleJeu, 1000 / 60);
    oCanvasHTML.addEventListener("click", onClicCanvas);
}

// === Boucle de jeu ===
function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    if (sEtat == "intro") {
        afficherIntro();
    } else if (sEtat == "jeu") {
        dessinerQuestion();
        dessinerUI();
    } else if (sEtat == "fin") {
    }
}

function afficherIntro() {
    oContexte.drawImage(oCiel, nPosX, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oCiel, nPosX - nLargeurCanvas, 0, nLargeurCanvas, nHauteurCanvas);
    nPosX += 0.2;
    if (nPosX > nLargeurCanvas) {
        nPosX = 0;
    }
    oContexte.drawImage(oBackground, 0, 0, nLargeurCanvas, nHauteurCanvas);
}

function dessinerUI() {
    oContexte.font = "30px Arial";
    oContexte.textAlign = "right";
    oContexte.fillStyle = "blue";
    oContexte.fillText(`Nombre de points :`, nLargeurCanvas - 60, 60);
    oContexte.fillStyle = "lightblue";
    oContexte.fillText(nPoints, nLargeurCanvas - 40, 60);

    oContexte.textAlign = "left";
    oContexte.fillStyle = "light";
    oContexte.fillText(minuterie, 35, 60);
}

function dessinerQuestion() {
    tempsPasse += 1;
    if (tempsPasse % 60 === 0) {
        if (minuterie > 0) {
            minuterie--;
        }

        if (minuterie <= 0) {
            indexQuiz++;
            minuterie = 10;
            if (indexQuiz > questions.length) {
                sEtat = "fin";
            }
        }
    }

    oContexte.fillStyle = "#ffffff33";

    oContexte.drawImage(oBackgroundQuestion, 0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.fillRect(95, 0, 600, 600);
    oContexte.fillStyle = "black";

    let premiereQuestion = questions[indexQuiz];
    oContexte.textAlign = "center";
    oContexte.font = "18px Arial";
    oContexte.fillText(premiereQuestion.nom, nLargeurCanvas / 2, nHauteurCanvas / 2.3);
    for (let i = 0; i < premiereQuestion.choix.length; i++) {
        let elementChoix = premiereQuestion.choix[i];
        oContexte.fillStyle = "#9c4100d9";
        oContexte.fillRect(i * (nLargeurCanvas / 2), nHauteurCanvas / 2 + 60, nLargeurCanvas / 2.5, 60);

        oContexte.font = "18px times new romans";
        oContexte.fillStyle = "white";
        oContexte.textAlign = "left";
        oContexte.fillText(elementChoix, i * (nLargeurCanvas / 2), nHauteurCanvas / 2 + 95);
    }

    //console.log(premiereQuestion.nom, premiereQuestion.reponse,premiereQuestion.choix )
}

function melangerTableau(tableau) {
    tableau.sort(function (elementA, elementB) {
        return Math.random() * 2 - 1;
    });
}

//=== FONCTIONS D'ÉCOUTEURs D'ÉVÉNEMENTS ===
function onClicCanvas(evenement) {
    let curseurX = evenement.offsetX;
    let curseurY = evenement.offsetY;

    if (sEtat == "intro" && detecterClicObjet(curseurX, curseurY, boutonStart)) {
        sEtat = "jeu";
    } else if (sEtat == "jeu") {
        for (let i = 0; i < 3; i++) {
            let bouton = {
                x: i * (nLargeurCanvas / 3),
                y: nHauteurCanvas / 2 + 60,
                largeur: nLargeurCanvas / 3,
                hauteur: 50,
            };

            let collision = detecterClicObjet(curseurX, curseurY, bouton);
            console.log(collision, i);
            if (collision == true) {
                let premiereQuestion = questions[indexQuiz];
                if (premiereQuestion.reponse == premiereQuestion.choix[i]) {
                    console.log("Bonne réponse :)");
                    oGood.play();
                    nPoints += premiereQuestion.points;
                } else {
                    console.log("Mauvaise réponse :(");
                    oError.play();
                    nPoints -= premiereQuestion.points;
                }

                indexQuiz += 1;
                if (indexQuiz >= questions.length) {
                    sEtat = "fin";
                }
            }
        }
    } else if (sEtat == "fin") {
        sEtat = "intro";
    }
}

//afficherFin();
//  return dessinerQuestion();

// === FONCTIONS D'AFFICHAGE DES ÉLÉMENTS DE JEU ===
// === FONCTIONS UTILITAIRES ===

function detecterClicObjet(curseurX, curseurY, objet) {
    if (curseurX >= objet.x && curseurX <= objet.x + objet.largeur && curseurY >= objet.y && curseurY <= objet.y + objet.hauteur) {
        return true;
    }
    return false;
}

window.addEventListener("load", initialiser);
