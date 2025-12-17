let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let oBoutonDemarrer = { x: nLargeurCanvas / 2 - 100, y: nHauteurCanvas - 100, largeur: 200, hauteur: 50, texte: ".Commencer", teinte: 0 };
let oDerriereIntro = {
    x: 0,
    y: 0,
    hauteur: oCanvasHTML.height,
    largeur: oCanvasHTML.width,
    texte: ".Commencer",
    teinte: 0,
    image: new Image(),
    src: "assets/images/backroundhexagon.png",
};
let oDecorMenu = {
    x: 0,
    y: 0,
    hauteur: oCanvasHTML.height,
    largeur: oCanvasHTML.width,
    teinte: 0,
    image: new Image(),
    src: "assets/images/pixelarttemple2.png",
};
oDecorMenu.image.src = oDecorMenu.src;

oDerriereIntro.image.src = oDerriereIntro.src;
// ==== Images et objets ====

let oFond = {
    x: 0,
    y: 0,
    hauteur: oCanvasHTML.height,
    largeur: oCanvasHTML.width,
    vitesse: 2,
    image: new Image(),
    src: "assets/images/sci_fi_floor_texture.jpg",
};
oFond.image.src = oFond.src;
let oFondMenu = {
    x: 0,
    y: 0,
    hauteur: oCanvasHTML.height,
    largeur: oCanvasHTML.width,
    teinte: 15,
};
// oTuileGazon.image.src = oTuileGazon.src;

let touches = {
    toucheChoisie: null,
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
};

let oJoueur = {
    nLaserSortis: 0,
    x: nLargeurCanvas / 2 - 96 / 2,
    y: nHauteurCanvas - 128,
    largeur: 50,
    hauteur: 50,
    vitesse: 10,
    vie: 5,
    points: 0,
    estBlesse: false,
    etatSaut: false,
    aSauter: false,
    bouge: false,
    fixe: false,
    phase: 1,
    phase1: false,
    phase2: false,
    phase3: false,
    image: new Image(),
    src: "assets/images/block.jpg",
    srcblesse: "assets/images/blockblesse.png",
};
oJoueur.image.src = oJoueur.src;

let oTextBox = {
    x: nLargeurCanvas / 2 - 96 / 2,
    y: -262,
    largeur: 150,
    hauteur: 60,
    vitesse: 10,
    angle: 0,
};
let olazerList = [
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "rouge",
        alt: "haut horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 512,
        x: 0,
        y: 512,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "rouge",
        alt: "bas horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "rouge",
        alt: "gauche vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2_vertical.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: false,
        cooldown: 0,
        basex: 512,
        basey: 0,
        x: 512,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "rouge",
        alt: "droite vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2_vertical.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: true,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "jaune",
        alt: "haut horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2jaune.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: true,
        cooldown: 0,
        basex: 0,
        basey: 512,
        x: 0,
        y: 512,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "jaune",
        alt: "bas horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2jaune.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: true,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "jaune",
        alt: "gauche vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2jaune_vertical.png",
    },
    {
        showLaser: false,
        bougeLaser: false,
        fixeLaser: true,
        cooldown: 0,
        basex: 512,
        basey: 0,
        x: 512,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "jaune",
        alt: "droite vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2jaune_vertical.png",
    },
    {
        showLaser: false,
        bougeLaser: true,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "bleu",
        alt: "haut horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2bleu.png",
    },
    {
        showLaser: false,
        bougeLaser: true,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 512,
        x: 0,
        y: 512,
        largeur: 512,
        hauteur: 70,
        vitesse: 1,
        couleur: "bleu",
        alt: "bas horizontal",
        image: new Image(),
        src: "assets/images/lazerbeam2bleu.png",
    },
    {
        showLaser: false,
        bougeLaser: true,
        fixeLaser: false,
        cooldown: 0,
        basex: 0,
        basey: 0,
        x: 0,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "bleu",
        alt: "gauche vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2bleu_vertical.png",
    },
    {
        showLaser: false,
        bougeLaser: true,
        fixeLaser: false,
        cooldown: 0,
        basex: 512,
        basey: 0,
        x: 512,
        y: 0,
        largeur: 70,
        hauteur: 512,
        vitesse: 1,
        couleur: "bleu",
        alt: "droite vertical",
        image: new Image(),
        src: "assets/images/lazerbeam2bleu_vertical.png",
    },
];
// ce olazer ne sert que pour son showlazer:true qui réassigne de nouveaux lazers selon leurs phase et qui le remet a false apres.
let oLaser = {
    sLaserFini: false,
    basex: -200,
    basey: 100,
    x: -200,
    y: 100,
    largeur: 900,
    hauteur: 600,
    vitesse: 15,
    showLaser: false,
    image: new Image(),
    src: "assets/images/lazerbeam2.png",
    nLaserSortis: 0,
};

oLaser.image.src = oLaser.src;
// nombre de lasers
let nDessLazer = 0;

let njoueurX;
let njoueurY;
let sEtat = "intro";
let nTemps = 0;
let olazeri2cooldown = 0;
// ==== Musique et sons ====

let oSFX = {
    son: new Audio("assets/audio/explosion.flac"),
    explosion: "assets/audio/explosion.flac",
    findebut: new Audio("assets/audio/death2.mp3"),

    degat: "assets/audio/laser-weld-103309.mp3",
    mort: "assets/audio/explosion.flac",
};

// ==== Initialisation ====
function initialiser() {
    setInterval(boucleJeu, 1000 / 60);
    window.addEventListener("click", onClicCanvas);
    window.addEventListener("keydown", onToucheEnfoncee);
    window.addEventListener("keyup", onToucheRelachee);
}

//==== FONCTIONS D'ÉCOUTEUR D'ÉVÉNEMENTS ====
function onClicCanvas(evenement) {
    let curseurX = evenement.offsetX;
    let curseurY = evenement.offsetY;

    if (sEtat == "jeu") {
    } else if (sEtat == "fin") {
        sEtat = "jeu";
    }
    if (sEtat == "intro" && detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true) {
        sEtat = "jeu";
        musique.play();
        gererLaser();
    }
    // bouton pour restart le jeu ne marche pas
    // if (sEtat == "fin" && detecterClicObjet(curseurX, curseurY, oBoutonDemarrer) == true) {
    //     console.log("bouton cliqué");
    //     sEtat = "intro";
    //     resetJeu();

    // }
    if (sEtat == "gagne") {
        gagnejeu();
    }
}

function onToucheEnfoncee(evenement) {
    touches.toucheChoisie = evenement.key;
    njoueurX = oJoueur.x;
    njoueurY = oJoueur.y;
    if (evenement.key === "ArrowLeft") touches.ArrowLeft = true;
    if (evenement.key === "ArrowRight") touches.ArrowRight = true;
    if (evenement.key === "ArrowUp") touches.ArrowUp = true;
    if (evenement.key === "ArrowDown") touches.ArrowDown = true;

    if (evenement.key === " ") {
        etatSauter();
    }
}

function onToucheRelachee(evenement) {
    if (evenement.key === "ArrowLeft") touches.ArrowLeft = false;
    if (evenement.key === "ArrowRight") touches.ArrowRight = false;
    if (evenement.key === "ArrowUp") touches.ArrowUp = false;
    if (evenement.key === "ArrowDown") touches.ArrowDown = false;

    touches.toucheChoisie = null;
}

// ==== Gestion du saut ==== sert a start l'animation de saut.
function etatSauter() {
    if (oJoueur.etatSaut == false) {
        oJoueur.etatSaut = true;
        oJoueur.aSauter = true;
        // console.log("Saut déclenché");
    }
}

function gererSaut() {
    if (oJoueur.etatSaut) {
        if (oJoueur.aSauter) {
            // grandir le joueur
            oJoueur.largeur += 2;
            oJoueur.hauteur += 2;

            if (oJoueur.largeur >= 100) {
                oJoueur.aSauter = false; // commencer à rapetisser
            }
        } else {
            // rapetisser
            oJoueur.largeur -= 2;
            oJoueur.hauteur -= 2;

            if (oJoueur.largeur <= 50) {
                oJoueur.largeur = 50;
                oJoueur.hauteur = 50;
                oJoueur.etatSaut = false;
                // console.log("Le saut est terminé");
            }
        }
    }
}
let nSecondes = Number(0);
let nFrames = Number(0);
let viemax = 5;
let nLargeurVieMax = 190;
let nLargeurVie;
let nBarre;
let nTempsrestant = 180;
// musiques intro
let musiques = ["assets/audio/gamemusic1.mp3", "assets/audio/music2.mp3", "assets/audio/gamemusic1.mp3"];
let musiqueIndex = 0;
let musique = new Audio(musiques[musiqueIndex]);
//code trouvé sur le web pour de nouvelles musiques une fois la dernière terminée (par le copilot intégré de microsoft edge(oui jutilise brave et edge) )
musique.addEventListener("ended", () => {
    musiqueIndex = (musiqueIndex + 1) % musiques.length;
    musique.src = musiques[musiqueIndex];
    musique.load(); //jai du mettre ca car brave netait pas capable de jouer une musique lune apres lautre (donc load a chaque fois)
    musique.play();
});

// musique pendant le jeu

// ==== Boucle principale ====
function boucleJeu() {
    oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    if (sEtat == "intro") {
        afficherIntro();
        // code trouve sur le web qui gere laudio
    } else if (sEtat == "jeu") {
        // fait 60 frames par secondes qui serviront a mettre une seconde
        nFrames++;
        // console.log(nFrames + " nframes");
        // gere les phases
        if (nTemps < 60) {
            oJoueur.phase = 1;
        } else if (nTemps < 120) {
            oJoueur.phase = 2;
        } else {
            oJoueur.phase = 3;
        }

        if (nFrames >= 60) {
            nFrames = 0;
            nTemps++;
            nTempsrestant--;
        }

        gererSaut();
        dessinerFond();
        dessinerLaser();
        gererDommage();
        dessinerUI();
        dessinerJoueur();
    } else if (sEtat == "fin") {
        afficherFin();
    }
    if (sEtat == "gagne") {
        gagnejeu();
    }
    if (nTempsrestant <= 0) {
        nTempsrestant = 0;
        sEtat = "gagne";
    }

    // active la fin du jeu si
}

// fait vibrer le joueur quand il se prend des degats
function animationDegat() {
    setTimeout(() => {
        oJoueur.x += 4;
        oJoueur.y += 4;
    }, 100);
    setTimeout(() => {
        oJoueur.x -= 4;
        oJoueur.y -= 4;
    }, 200);
}
// ==== Dessins du fond du jeu qui bouge====
function dessinerFond() {
    oFond.y += oFond.vitesse;
    if (oFond.y > nHauteurCanvas) oFond.y = 0;
    oContexte.drawImage(oFond.image, oFond.x, oFond.y, nLargeurCanvas, nHauteurCanvas);
    oContexte.drawImage(oFond.image, oFond.x, oFond.y - nHauteurCanvas, nLargeurCanvas, nHauteurCanvas);
}
// dessine le joueur
function dessinerJoueur() {
    if (touches.ArrowLeft) {
        oJoueur.x -= oJoueur.vitesse;
        if (oJoueur.x < 0) oJoueur.x = 0;
    }
    if (touches.ArrowRight) {
        oJoueur.x += oJoueur.vitesse;
        if (oJoueur.x > nLargeurCanvas - oJoueur.largeur) oJoueur.x = nLargeurCanvas - oJoueur.largeur;
    }
    if (touches.ArrowUp) {
        oJoueur.y -= oJoueur.vitesse;
        if (oJoueur.y < 0) oJoueur.y = 0;
    }
    if (touches.ArrowDown) {
        oJoueur.y += oJoueur.vitesse;
        if (oJoueur.y > nHauteurCanvas - oJoueur.hauteur) oJoueur.y = nHauteurCanvas - oJoueur.hauteur;
    }

    oContexte.drawImage(oJoueur.image, oJoueur.x, oJoueur.y, oJoueur.largeur, oJoueur.hauteur);
}
// variables pour dessiner la barre de vie

function dessinerUI() {
    // pour ne pas que le rectangle soit dans le negatif

    // conteneur de barre de vie
    nLargeurVie = (oJoueur.vie / viemax) * nLargeurVieMax;
    oContexte.fillStyle = "rgba(255, 255, 255, 0.38)";
    oContexte.fillRect(155, 0, 200, 27);
    // barre de vie
    oContexte.fillStyle = "blue";
    oContexte.fillRect(160, 3, nLargeurVie, 20);
    if (nLargeurVie <= 0) {
        nLargeurVie = 0;
    }

    // montrer le temps restant

    oContexte.fillStyle = "rgba(255, 255, 255, 0.38)";

    //text, x, y, [maxWidth])
    oContexte.fillText("Temps restant: " + nTempsrestant, 250, 50);
}

let enDegat = false;

function gererDommage() {
    // variable globale pour savoir si le joueur touche a un lazer qui est dangeureux (qui lui fait des degats possiblement)
    let toucheLaserDangereux = false;

    if (touches.ArrowLeft == false && touches.ArrowUp == false && touches.ArrowRight == false && touches.ArrowDown == false) {
        oJoueur.fixe = true;
        oJoueur.bouge = false;

        // console.log("joueur bouge pas");
    }

    if (touches.ArrowLeft == true || touches.ArrowUp == true || touches.ArrowRight == true || touches.ArrowDown == true) {
        oJoueur.bouge = true;
        oJoueur.fixe = false;
        // console.log("joueur bouge");
    }

    for (let i = 0; i < olazerList.length; i++) {
        let olazeri2 = olazerList[i];
        if (olazeri2.showLaser == false) {
            continue;
        }
        if (detecterCollision(oJoueur, olazeri2) == false) {
            continue;
        }

        let laserDangereux = false;

        // ROUGE
        if (olazeri2.couleur === "rouge" && oJoueur.etatSaut == false) {
            laserDangereux = true;
        }

        // JAUNE (bouger = danger)
        if (olazeri2.couleur === "jaune" && oJoueur.bouge) {
            laserDangereux = true;
        }

        // BLEU (ne pas bouger = danger)
        if (olazeri2.couleur === "bleu" && oJoueur.fixe) {
            laserDangereux = true;
        }

        if (laserDangereux) {
            toucheLaserDangereux = true;
            olazeri2.cooldown++;

            if (olazeri2.cooldown % 10 === 0) {
                animationDegat();
                oJoueur.vie -= 0.25;
            }
        }
    }
    // SI LE JOUEUR TOUCHE LE LAZER ET QUIL CORRESPOND AU DANGER DU LAZER (BOUGE / NE BOUGE PAS) ALORS
    // IL PERDRA DES VIES

    if (toucheLaserDangereux == true && enDegat == false) {
        oSFX.degat.loop = true;
        oSFX.son.src = oSFX.degat;
        oSFX.son.play();
        enDegat = true;
        oJoueur.image.src = oJoueur.srcblesse;
    }

    if (toucheLaserDangereux == false && enDegat == true) {
        oSFX.son.pause();
        oSFX.son.currentTime = 0;
        enDegat = false;
        oJoueur.image.src = oJoueur.src;
    }
    // SI LE JOUEUR NA PLUS DE VIE, ALORS METTRE SETAT A FIN
    if (oJoueur.vie <= 0) {
        sEtat = "fin";
    }
}

function gererLaser() {
    //Si la phase1 est false et que nTemps est entre 0 et 15
    //2 lasers

    if (oLaser.showLaser == false) {
        if (oJoueur.phase == 1) {
            nDessLazer = 3;
        } else if (oJoueur.phase == 2) {
            nDessLazer = 3;
        } else if (oJoueur.phase == 3) {
            nDessLazer = 4;
        }

        // variables pour reccomencer les lazers SEULEMENT s'ils sont tous sortis
        oLaser.nLaserSortis = 0;
        oLaser.sLaserFini = 0;

        // Filtre les lazers dépendant de leurs couleurs et facultés
        for (let i = 0; i < olazerList.length; i++) {
            olazerList[i].showLaser = false;
            olazerList[i].cooldown = 0;
        }
        // gere les lazers de la phase 1 (premieres secondes)
        if (oJoueur.phase == 1) {
            for (let i = 0; i < nDessLazer; i++) {
                let nPositionAleatorie = Math.floor(Math.random() * olazerList.length);
                let oLaserAleatoire = olazerList[nPositionAleatorie];

                //Trouver le
                if (oLaserAleatoire.showLaser == true || oLaserAleatoire.couleur != "rouge") {
                    i--;
                    // console.log(oLaserAleatoire.alt, oLaserAleatoire.couleur, "pas pris");

                    continue;
                } else {
                    oLaser.nLaserSortis += 1;
                    oLaserAleatoire.showLaser = true;

                    oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 4.6) + 1);
                }
            }
        }

        if (oJoueur.phase == 2) {
            for (let i = 0; i < nDessLazer; i++) {
                let nPositionAleatorie = Math.floor(Math.random() * olazerList.length);
                let oLaserAleatoire = olazerList[nPositionAleatorie];

                if (oLaserAleatoire.showLaser == true || (oLaserAleatoire.fixeLaser == true && oLaserAleatoire.bougeLaser == false)) {
                    i--;
                    continue;
                } else {
                    oLaser.nLaserSortis += 1;
                    oLaserAleatoire.showLaser = true;
                    if (oLaserAleatoire.couleur == "rouge") {
                        oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 6) + 1);
                    } else {
                        oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 5) + 1);
                    }
                }
            }
        }

        if (oJoueur.phase == 3) {
            for (let i = 0; i < nDessLazer; i++) {
                let nPositionAleatorie = Math.floor(Math.random() * olazerList.length);
                let oLaserAleatoire = olazerList[nPositionAleatorie];

                if (oLaserAleatoire.showLaser == true || (oLaserAleatoire.fixeLaser == true && oLaserAleatoire.bougeLaser == true)) {
                    i--;
                    continue;
                } else {
                    oLaser.nLaserSortis += 1;
                    oLaserAleatoire.showLaser = true;
                    if (oLaserAleatoire.couleur == "rouge") {
                        oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 6) + 1);
                    } else {
                        oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 5) + 1);
                    }
                    if (oLaserAleatoire.couleur == "jaune") {
                        oLaserAleatoire.vitesse = Number(Math.floor(Math.random() * 4) + 1);
                    }
                }
            }
        }
        // réinitalise le gererlazer() premiere etape
        oLaser.showLaser = true;
    }
}

function dessinerLaser() {
    for (let i = 0; i < olazerList.length; i++) {
        if (olazerList[i].showLaser == true) {
            let olazeri = olazerList[i];
            olazeri.image.src = olazeri.src;

            if (olazeri.alt == "haut horizontal") {
                // haut vers bas
                olazeri.y += olazeri.vitesse;

                if (olazeri.y > nHauteurCanvas) {
                    olazeri.y = olazeri.basey;
                    olazeri.showLaser = false;
                    oLaser.sLaserFini += 1;
                }
            }
            if (olazeri.alt == "bas horizontal") {
                //bas vers haut
                olazeri.y -= olazeri.vitesse;

                if (olazeri.y < -20) {
                    olazeri.y = olazeri.basey;
                    olazeri.showLaser = false;
                    oLaser.sLaserFini += 1;
                }
            }

            if (olazeri.alt == "gauche vertical") {
                // gauche vers droite
                olazeri.x += olazeri.vitesse;

                if (olazeri.x > nLargeurCanvas) {
                    olazeri.x = olazeri.basex;
                    olazeri.showLaser = false;
                    oLaser.sLaserFini += 1;
                }
            }
            if (olazeri.alt == "droite vertical") {
                // droite vers gauche
                olazeri.x -= olazeri.vitesse;

                if (olazeri.x < 0) {
                    olazeri.x = olazeri.basex;
                    olazeri.showLaser = false;
                    oLaser.sLaserFini += 1;
                }
            }
            oContexte.drawImage(olazeri.image, olazeri.x, olazeri.y, olazeri.largeur, olazeri.hauteur);
            // si le nombre des lazers sortis sont égal aux nombres de lazers qui sont visibles alors reccomence gerer les lasers
        }

        // console.log(oJoueur.vie);
    }
    if (oLaser.sLaserFini == nDessLazer) {
        // active la boucle gererlazer pour ré associer de nouveaux lazers.
        oLaser.sLaserFini = 0;
        oLaser.nLaserSortis = 0;
        oLaser.showLaser = false; // permet de réactiver la boucle gérerlazer (processus de deux verifications)

        gererLaser();

        // console.log("gererlaser devrait etre rappelé");
    }
}
let sonFinJoue2;
function gagnejeu() {
    oLaser.showLaser == false;
    oContexte.drawImage(oDecorMenu.image, oDecorMenu.x, oDecorMenu.y, oDecorMenu.largeur, oDecorMenu.hauteur);
    oFond.image.src = "assets/images/gagnerbackround.webp";

    oFond.vitesse = 0;

    dessinerFond();
    if (sonFinJoue2 == false) {
        musique.pause();
        musique.currentTime = 0;

        oSFX.son.pause();
        oSFX.findebut.currentTime = 0;
        oSFX.findebut.src = "assets/audio/boss-attack-charge-384924.mp3";
        oSFX.findebut.play();

        sonFinJoue2 = true;
    }
    oContexte.font = "80px Impact";
    oContexte.textAlign = "center";
    oContexte.fillStyle = "white";
    oContexte.fillText(`Tu as gagné !`, nLargeurCanvas / 2, nHauteurCanvas / 2);
    oContexte.font = "30px Nasalization";
    oContexte.fillStyle = "white";
    oContexte.fillText(`Tu as survécu 3 minutes`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 60);
}
function afficherIntro() {
    oBoutonDemarrer.teinte++;
    oFondMenu.teinte++;
    if (oFondMenu.teinte >= 900) {
        oFondMenu.teinte = 0;
    }

    // fond blanc change couleur
    oContexte.fillStyle = `hsl(${oFondMenu.teinte}, 60%, 50%)`;
    oContexte.fillRect(oFondMenu.x, oFondMenu.y, oFondMenu.largeur, oFondMenu.hauteur);

    // image hexagon
    oContexte.drawImage(oDerriereIntro.image, oDerriereIntro.x, oDerriereIntro.y, oDerriereIntro.largeur, oDerriereIntro.hauteur);

    // image temple fond
    oContexte.drawImage(oDecorMenu.image, oDecorMenu.x, oDecorMenu.y, oDecorMenu.largeur, oDecorMenu.hauteur);

    // bouton demarrer
    oContexte.fillStyle = "rgba(0, 0, 0, 1)";
    oContexte.fillRect(oBoutonDemarrer.x, oBoutonDemarrer.y, oBoutonDemarrer.largeur, oBoutonDemarrer.hauteur);
    // Texte demarrer
    oContexte.fillStyle = "#ffffffff";
    oContexte.font = "bold 25px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText(
        oBoutonDemarrer.texte,
        oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
        oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
    );

    // rectangle derriere texte Titre
    oContexte.fillStyle = "rgba(0, 0, 0, 1)";
    oContexte.fillRect(nLargeurCanvas / 4 - 4, 0, 266, 80);
    // Titre
    oContexte.fillStyle = "white";
    oContexte.font = "bold 45px Arial";
    oContexte.textAlign = "center";
    oContexte.fillText("Lazer Mania", nLargeurCanvas / 2, 40);

    // Instructions

    oContexte.fillStyle = "white";
    oContexte.font = "20px Arial";
    oContexte.fillText("Survivre 3 minutes", nLargeurCanvas / 2, 70);
    oContexte.font = "30px Arial";
    oContexte.fillStyle = "yellow";
    oContexte.fillText("Bleu = Bouge", nLargeurCanvas / 2, 115);
    oContexte.fillText("Jaune = Bouge PAS", nLargeurCanvas / 2, 145);
    oContexte.fillText("Rouge = Saute", nLargeurCanvas / 2, 175);
    oContexte.fillStyle = "red";
    oContexte.font = "20px Impact";
    oContexte.fillText("FLÈCHES pour BOUGER", nLargeurCanvas / 2, 250);
    oContexte.fillText("ESPACE pour SAUTER", nLargeurCanvas / 2, 300);
}
let sonFinJoue = false;

// ==== Fin du jeu ====
function afficherFin() {
    oContexte.drawImage(oDecorMenu.image, oDecorMenu.x, oDecorMenu.y, oDecorMenu.largeur, oDecorMenu.hauteur);
    oFond.image.src = "assets/images/bg3.png";
    oSFX;
    oFond.vitesse = 0.2;

    dessinerFond();
    if (sonFinJoue == false) {
        musique.pause();
        musique.currentTime = 0;

        oSFX.son.pause();
        oSFX.findebut.currentTime = 0;
        oSFX.findebut.play();

        sonFinJoue = true;
    }
    oContexte.font = "80px Impact";
    oContexte.textAlign = "center";
    oContexte.fillStyle = "red";
    oContexte.fillText(`Vous Êtes Mort`, nLargeurCanvas / 2, nHauteurCanvas / 2);
    oContexte.font = "30px Nasalization";
    oContexte.fillStyle = "white";
    oContexte.fillText(`Temps restant: ${nTempsrestant}`, nLargeurCanvas / 2, nHauteurCanvas / 2 + 60);

    // ne marche pas car le bouton narrive pas a senclencher quand on clique dessus
    // bouton restart
    // oContexte.fillStyle = "rgba(0, 0, 0, 1)";
    // oContexte.fillRect(oBoutonDemarrer.x, oBoutonDemarrer.y, oBoutonDemarrer.largeur, oBoutonDemarrer.hauteur);
    // // Texte demarrer
    // oContexte.fillStyle = "#ffffffff";
    // oContexte.font = "bold 25px Arial";
    // oContexte.textAlign = "center";
    // oContexte.fillText(
    //     "rejouer",
    //     oBoutonDemarrer.x + oBoutonDemarrer.largeur / 2,
    //     oBoutonDemarrer.y + oBoutonDemarrer.hauteur / 2 + 8
    // );
}
// function resetJeu() {
//     // reset letat jeu
//     sEtat = "intro";
//     /// enleve son fin
//     sonFinJoue = false;

//     // remet le timer a zero
//     nTemps = 0;
//     nFrames = 0;
//     nTempsrestant = 180;

//     // reset joueur (phase aussi)
//     oJoueur.vie = 5;
//     oJoueur.phase = 1;
//     oJoueur.x = nLargeurCanvas / 2 - oJoueur.largeur / 2;
//     oJoueur.y = nHauteurCanvas - 128;
//     oJoueur.image.src = oJoueur.src;

//     // reset les lazers
//     oLaser.showLaser = false;
//     oLaser.sLaserFini = 0;
//     oLaser.nLaserSortis = 0;

//     // audio
//     musique.currentTime = 0;
//     musique.play();
// }
// ==== Détection de collision ====
function detecterCollision(objet1, objet2) {
    if (
        // jai changer le return pour true / false a la place de return tout l'objet
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
function detecterClicObjet(curseurX, curseurY, objet) {
    if (curseurX >= objet.x && curseurX <= objet.x + objet.largeur && curseurY >= objet.y && curseurY <= objet.y + objet.hauteur) {
        return true;
    }
    return false;
}

window.addEventListener("load", initialiser);
