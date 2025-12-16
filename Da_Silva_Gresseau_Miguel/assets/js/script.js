/* INITIALISATION CANVAS */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function redimensionnerCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
redimensionnerCanvas();
window.addEventListener("resize", redimensionnerCanvas);

/* CHARGEMENT IMAGES */
const imageAccueil = new Image();
imageAccueil.src = "assets/images/Accueil.jpg";

const imageFond = new Image();
imageFond.src = "assets/images/fond.jpg";

const imagePerso = new Image();
imagePerso.src = "assets/images/perso.png";

const imageCentaure = new Image();
imageCentaure.src = "assets/images/centaure.png";

const imageCrystal = new Image();
imageCrystal.src = "assets/images/crystal.png";

/* DÉCLARATION VARIABLES */
let imageActuelle = imageAccueil;
let imageSuivante = null;

let decalageX = 0;
const vitesseDefilement = 1;

let uneTransition = 0;
let transitionEnCours = false;
let fondStatique = false;

let persoX = canvas.width / 2;
const persoScale = 0.4;
const vitessePerso = 5;
let bougerGauche = false;
let bougerDroite = false;

let crystalVisible = false;
let jeuTermine = false;

const boutonDemarrer = document.getElementById("startButton");

// Titre
const titre = document.createElement("div");
titre.innerText = "Crystal & Forêt";
Object.assign(titre.style, {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
    color: "white",
    textAlign: "center",
    zIndex: 10,
    opacity: 1,
    transition: "opacity 1s"
});
document.body.appendChild(titre);

// Tableau des consignes
const consignes = document.createElement("div");
consignes.innerHTML = `
    <table style="color:white; font-size:1.2rem;">
        <tr><th>Consignes</th></tr>
        <tr><td>Déplacez le personnage avec A et D</td></tr>
        <tr><td>Dirigez vous vers le centaure pour lui parler</td></tr>
        <tr><td>Corrigez la phrase pour obtenir le cristal</td></tr>
        <tr><td>Cliquer sur le crystal pour terminer le jeu</td></tr>
    </table>
`;
Object.assign(consignes.style, {
    position: "absolute",
    top: "10%",
    left: "2%",
    zIndex: 10,
    opacity: 1,
    transition: "opacity 1s"
});
document.body.appendChild(consignes);

const musique = new Audio("assets/audio/son.mp3");

/* BOUTTON */
window.addEventListener("load", () => {
    setTimeout(() => {
        boutonDemarrer.style.opacity = 1;
    }, 200);
});

/* FONCTIONS */
function dessinerFondDefilant(image, alpha = 1) {
    ctx.globalAlpha = alpha;
    decalageX -= vitesseDefilement;
    if (decalageX <= -canvas.width) decalageX = 0;
    ctx.drawImage(image, decalageX, 0, canvas.width, canvas.height);
    ctx.drawImage(image, decalageX + canvas.width, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
}

function dessinerFondStatique(image, alpha = 1) {
    ctx.globalAlpha = alpha;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
}

function dessinerPersonnage() {
    if (!imagePerso.complete) return;
    const largeur = imagePerso.width * persoScale;
    const hauteur = imagePerso.height * persoScale;
    const y = canvas.height - hauteur - 40;
    if (persoX < 0) persoX = 0;
    if (persoX + largeur > canvas.width) persoX = canvas.width - largeur;
    ctx.drawImage(imagePerso, persoX, y, largeur, hauteur);
}

function dessinerCentaure() {
    if (!imageCentaure.complete) return;
    const scale = 2;
    const largeur = imageCentaure.width * scale;
    const hauteur = imageCentaure.height * scale;
    const x = canvas.width - largeur - 50;
    const y = canvas.height - hauteur - 40;
    ctx.drawImage(imageCentaure, x, y, largeur, hauteur);
}

function dessinerCrystal() {
    if (!imageCrystal.complete || !crystalVisible) return;
    const scale = 0.6;
    const largeur = imageCrystal.width * scale;
    const hauteur = imageCrystal.height * scale;
    const x = canvas.width / 2 - largeur / 2;
    const y = canvas.height / 2 - hauteur / 2;
    ctx.drawImage(imageCrystal, x, y, largeur, hauteur);
}

function reinitialiserJeu() {
    imageActuelle = imageAccueil;
    imageSuivante = null;
    decalageX = 0;
    uneTransition = 0;
    transitionEnCours = false;
    fondStatique = false;
    persoX = canvas.width / 2;
    bougerGauche = false;
    bougerDroite = false;
    crystalVisible = false;
    jeuTermine = false;

    boutonDemarrer.style.display = "block";
    boutonDemarrer.style.opacity = 1;
    titre.style.display = "block";
    titre.style.opacity = 1;
    consignes.style.display = "block";
    consignes.style.opacity = 1;
}

function verifierCollisionPersoCentaure() {
    if (crystalVisible || jeuTermine || !fondStatique) return;

    const scaleC = 2;
    const largeurC = imageCentaure.width * scaleC;
    const hauteurC = imageCentaure.height * scaleC;
    const xC = canvas.width - largeurC - 50;
    const yC = canvas.height - hauteurC - 40;

    const largeurPerso = imagePerso.width * persoScale;
    const hauteurPerso = imagePerso.height * persoScale;
    const yPerso = canvas.height - hauteurPerso - 40;

    if (
        persoX < xC + largeurC &&
        persoX + largeurPerso > xC &&
        yPerso < yC + hauteurC &&
        yPerso + hauteurPerso > yC
    ) {
        const reponse = prompt("Le Centaure vous laissera passer seulement si vous corrigez correctement la phrase suivante : Je sui a la recherch d'un crystale dans une foret.");
        if (reponse === "Je suis à la recherche d'un crystal dans une forêt.") {
            crystalVisible = true;
        } else {
            alert("Phrase incorrecte, vous ne pouvez pas passer!");
            reinitialiserJeu();
        }
    }
}

function animer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (fondStatique) {
        if (bougerGauche) persoX -= vitessePerso;
        if (bougerDroite) persoX += vitessePerso;
    }

    const largeurPerso = imagePerso.width * persoScale;
    if (persoX < 0) persoX = 0;
    if (persoX + largeurPerso > canvas.width) persoX = canvas.width - largeurPerso;

    if (transitionEnCours && imageSuivante) {
        dessinerFondDefilant(imageActuelle, 1 - uneTransition);
        dessinerFondStatique(imageSuivante, uneTransition);
        uneTransition += 0.02;
        if (uneTransition >= 1) {
            imageActuelle = imageSuivante;
            imageSuivante = null;
            transitionEnCours = false;
            uneTransition = 0;
            fondStatique = true;
        }
    } else {
        if (fondStatique) {
            dessinerFondStatique(imageActuelle);
            dessinerPersonnage();
            if (!crystalVisible) dessinerCentaure();
            dessinerCrystal();

            verifierCollisionPersoCentaure();
        } else {
            dessinerFondDefilant(imageActuelle);
        }
    }

    requestAnimationFrame(animer);
}


imageAccueil.onload = () => {
    animer();
};

//DÉMARRAGE
boutonDemarrer.addEventListener("click", () => {
    imageSuivante = imageFond;
    transitionEnCours = true;
    decalageX = 0;

    musique.play().catch(() => {});

    const sonTrouver = new Audio("assets/audio/trouver.mp3");
    sonTrouver.play().catch(() => {});

    
    boutonDemarrer.style.opacity = 0;
    titre.style.opacity = 0;
    consignes.style.opacity = 0;

    setTimeout(() => {
        boutonDemarrer.style.display = "none";
        titre.style.display = "none";
        consignes.style.display = "none";
    }, 1000);
});

/* TOUCHES CLAVIER ET CLICK */
window.addEventListener("keydown", (e) => {
    if (!fondStatique) return;
    if (e.key === "a" || e.key === "A") bougerGauche = true;
    if (e.key === "d" || e.key === "D") bougerDroite = true;
});

window.addEventListener("keyup", (e) => {
    if (e.key === "a" || e.key === "A") bougerGauche = false;
    if (e.key === "d" || e.key === "D") bougerDroite = false;
});

canvas.addEventListener("click", (e) => {
    if (!fondStatique || jeuTermine || !crystalVisible) return;

    const clickX = e.clientX;
    const clickY = e.clientY;

    const scaleCr = 0.6;
    const largeurCr = imageCrystal.width * scaleCr;
    const hauteurCr = imageCrystal.height * scaleCr;
    const xCr = canvas.width / 2 - largeurCr / 2;
    const yCr = canvas.height / 2 - hauteurCr / 2;

    if (clickX >= xCr && clickX <= xCr + largeurCr &&
        clickY >= yCr && clickY <= yCr + hauteurCr) {
        alert("Félicitations ! Vous avez correctment écrit la phrase ! Vous pouvez maintenant passer au niveau suivant à l'aide du crystal !");
        jeuTermine = true;
        reinitialiserJeu();
    }
});
