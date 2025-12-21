
let oCanvasHTML = document.querySelector("canvas");
let oContexte = oCanvasHTML.getContext("2d");

let nHauteurCanvas = oCanvasHTML.height;
let nLargeurCanvas = oCanvasHTML.width;

let sEtat = "intro";
//////// img

let oArrierePlan = new Image();
oArrierePlan.src = "assets/img/fonds/italie.png";

let oSable = new Image();
oSable.src = "assets/img/element_fond_anime/sable.PNG";

let oEau = new Image();
oEau.src = "assets/img/element_fond_anime/eau.PNG";

let oHerbe = new Image();
oHerbe.src = "assets/img/element_fond_anime/herbe.PNG";

let oPlumeriag = new Image();

let oPlumeriap = new Image();

let oPlumeria = new Image();
oPlumeria.src = "assets/img/element_fond_anime/plumeria.PNG";

let oHibiscus = new Image();
oHibiscus.src = "assets/img/element_fond_anime/hibiscus.PNG";

let oHibiscusg = new Image();

let oHibiscusp = new Image();

let oClown = new Image();

let oPoisson = new Image();

let oMeduse = new Image();
// fond special

let oAustralie = new Image();
oAustralie.src = "assets/img/fonds/australie.png";

let oBreizh = new Image();
oBreizh.src = "assets/img/fonds/breizh.png";

let oBresil = new Image();
oBresil.src = "assets/img/fonds/bresil.png";

let oCanada = new Image();
oCanada.src = "assets/img/fonds/canada.png";

let oChi = new Image();
oChi.src = "assets/img/fonds/chine.png";

let oHawa = new Image();
oHawa.src = "assets/img/fonds/hawaii.png";

let oIn = new Image();
oIn.src = "assets/img/fonds/inde.png";

let oIta = new Image();
oIta.src = "assets/img/fonds/italie.png";

let oMada = new Image();
oMada.src = "assets/img/fonds/mada.png";

let oSahel = new Image();
oSahel.src = "assets/img/fonds/sahel-sahara.png";

let oSelection = new Image();
oSelection.src = "assets/img/fond_selection/2913127.jpg";
//////////////////////////////////////////////////////////////////// VARIABLES
let nPosX = 0;
let musiqueJouee = false;
let nVitesse = 0.5;
let nTempsPasse = 0;
let nMinuterie = 20;
let nVies = 3;
let nbEtatsJoues = 0;
let nbEtatsMax = 5;
//////////////////////////////////////////////////////////////////// VARIABLES
let sons = {
  general: new Audio("assets/audio/fond/mada.mp3"),
  bon: new Audio("assets/audio/interaction/bon.mp3"),
  click: new Audio("assets/audio/interaction/click_general.mp3"),
};

let oStart = {
  x: nLargeurCanvas / 2 - 100,
  y: 650,
  largeur: 200,
  hauteur: 50,
  texte: "Jouer!",
  teinte: 0,
};
let oContinue = {
  x: nLargeurCanvas / 2 - 100,
  y: 650,
  largeur: 200,
  hauteur: 50,
  texte: "Poursuivre",
};
let oCommencerTemporaire = {
  x: nLargeurCanvas / 2 - 200,
  y: 650,
  largeur: 400,
  hauteur: 50,
  texte: "Emmenez-moi loin!",
};
let oBoutonFin = {
  x: nLargeurCanvas / 2 - 200,
  y: 650,
  largeur: 400,
  hauteur: 50,
  texte: "Recommencer",
};
let oRanger = {
  x: 50,
  y: 700,
  hauteur: 200,
  largeur: 200,
  image: new Image(),
};
oRanger.image.src = "assets/img/rangers/ranger_matt/ranger.png";

let oIndice = {
  x: nLargeurCanvas / 2 - 200,
  y: 120,
  largeur: 1000,
  hauteur: 500,
  texte: "",
  texte2: "",
  estVisible: false,
};
//////////////////////////////////////////////////////////////////// VARIABLES


//////////////////////////////////////////////////////////////////// ALEATOIRE
let aAnimauxAleatoire = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Foussa",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Foussa.png",
    src2: "assets/img/animaux-selection/Foussa.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Hibou",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Hibou.png",
    src2: "assets/img/animaux-selection/Hibou.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Dugong",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Dugong.png",
    src2: "assets/img/animaux-selection/Dugong.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Béluga",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/beluga.png",
    src2: "assets/img/animaux-selection/beluga.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Lynx",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/Lynx.png",
    src2: "assets/img/animaux-selection/Lynx.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Castor",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/Castor.png",
    src2: "assets/img/animaux-selection/Castor.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Capybara",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Capybara.png",
    src2: "assets/img/animaux-selection/Capybara.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Toucan",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Toucan.png",
    src2: "assets/img/animaux-selection/Toucan.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Oustiti de Scheneider",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Scheneider.png",
    src2: "assets/img/animaux-selection/Scheneider.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Dingo",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/Dingo.png",
    src2: "assets/img/animaux-selection/Dingo.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Quoll",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/Quoll.png",
    src2: "assets/img/animaux-selection/Quoll.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Échidné",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/echidne.png",
    src2: "assets/img/animaux-selection/echidne.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Rémora fuselé",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/fusele.png",
    src2: "assets/img/animaux-selection/fusele.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Requin Pélerin",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/pelerin.png",
    src2: "assets/img/animaux-selection/pelerin.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Loup de Mer",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/loupdemer.png",
    src2: "assets/img/animaux-selection/loupdemer.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Gazelle",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/gazelle.png",
    src2: "assets/img/animaux-selection/gazelle.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Giraffe",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/giraffe.png",
    src2: "assets/img/animaux-selection/giraffe.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Mouflon à Manchettes",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/mouflon.png",
    src2: "assets/img/animaux-selection/mouflon.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Panda de Qiling",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/panda.png",
    src2: "assets/img/animaux-selection/panda.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Singe doré",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/singedore.png",
    src2: "assets/img/animaux-selection/singedore.png",
  },

  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Héron",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/heron.png",
    src2: "assets/img/animaux-selection/heron.png",
  },

  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Pétrel",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/petrel.png",
    src2: "assets/img/animaux-selection/petrel.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Mangouste",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/Mangouste.png",
    src2: "assets/img/animaux-selection/Mangouste.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Raie Manta",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/Mantra.png",
    src2: "assets/img/animaux-selection/Mantra.png",
  },

  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Tigre",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/tigre.png",
    src2: "assets/img/animaux-selection/tigre.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Paon",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/paon.png",
    src2: "assets/img/animaux-selection/paon.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Rhinocéros",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/rhino.png",
    src2: "assets/img/animaux-selection/rhino.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Loutre d'Europe",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/loutre.png",
    src2: "assets/img/animaux-selection/loutre.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Bulot",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/remora.png",
    src2: "assets/img/animaux-selection/remora.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Pingouin Torda",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/pingouin.png",
    src2: "assets/img/animaux-selection/pingouin.png",
  },
];
//////////////////////////////////////////////////////////////////// ALEATOIRE
let aPays = [
  "australie",
  "breizh",
  "bresil",
  "chine",
  "canada",
  "hawaii",
  "inde",
  "mada",
  "sahel",
  "italie",
];

//////////////////////////////////////////////////////////////////// ZONES
let aAnimauxAustralie = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Dingo",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/Dingo.png",
    src2: "assets/img/animaux-selection/Dingo.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Quoll",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/Quoll.png",
    src2: "assets/img/animaux-selection/Quoll.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Échidné",
    estVisible: false,
    estSelectionne: false,
    pays: "australie",
    image: new Image(),
    src: "assets/img/animaux/echidne.png",
    src2: "assets/img/animaux-selection/echidne.png",
  },
];
let aAnimauxBreizh = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Loutre d'Europe",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/loutre.png",
    src2: "assets/img/animaux-selection/loutre.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Bulot",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/remora.png",
    src2: "assets/img/animaux-selection/remora.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Pingouin Torda",
    estVisible: false,
    estSelectionne: false,
    pays: "breizh",
    image: new Image(),
    src: "assets/img/animaux/pingouin.png",
    src2: "assets/img/animaux-selection/pingouin.png",
  },
];
let aAnimauxBresil = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Capybara",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Capybara.png",
    src2: "assets/img/animaux-selection/Capybara.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Toucan",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Toucan.png",
    src2: "assets/img/animaux-selection/Toucan.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Oustiti de Scheneider",
    estVisible: false,
    estSelectionne: false,
    pays: "bresil",
    image: new Image(),
    src: "assets/img/animaux/Scheneider.png",
    src2: "assets/img/animaux-selection/Scheneider.png",
  },
];
let aAnimauxCanada = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Béluga",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/beluga.png",
    src2: "assets/img/animaux-selection/beluga.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Lynx",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/Lynx.png",
    src2: "assets/img/animaux-selection/Lynx.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Castor",
    estVisible: false,
    estSelectionne: false,
    pays: "canada",
    image: new Image(),
    src: "assets/img/animaux/Castor.png",
    src2: "assets/img/animaux-selection/Castor.png",
  },
];
let aAnimauxChine = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Panda de Qiling",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/panda.png",
    src2: "assets/img/animaux-selection/panda.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Singe doré",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/singedore.png",
    src2: "assets/img/animaux-selection/singedore.png",
  },

  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Héron",
    estVisible: false,
    estSelectionne: false,
    pays: "chine",
    image: new Image(),
    src: "assets/img/animaux/heron.png",
    src2: "assets/img/animaux-selection/heron.png",
  },
];
let aAnimauxHawaii = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Pétrel",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/petrel.png",
    src2: "assets/img/animaux-selection/petrel.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Mangouste",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/Mangouste.png",
    src2: "assets/img/animaux-selection/Mangouste.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Raie Manta",
    estVisible: false,
    estSelectionne: false,
    pays: "hawaii",
    image: new Image(),
    src: "assets/img/animaux/Mantra.png",
    src2: "assets/img/animaux-selection/Mantra.png",
  },
];
let aAnimauxInde = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Tigre",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/tigre.png",
    src2: "assets/img/animaux-selection/tigre.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Paon",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/paon.png",
    src2: "assets/img/animaux-selection/paon.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Rhinocéros",
    estVisible: false,
    estSelectionne: false,
    pays: "inde",
    image: new Image(),
    src: "assets/img/animaux/rhino.png",
    src2: "assets/img/animaux-selection/rhino.png",
  },
];
let aAnimauxItalie = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Rémora fuselé",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/fusele.png",
    src2: "assets/img/animaux-selection/fusele.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Requin Pélerin",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/pelerin.png",
    src2: "assets/img/animaux-selection/pelerin.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Loup de Mer",
    estVisible: false,
    estSelectionne: false,
    pays: "italie",
    image: new Image(),
    src: "assets/img/animaux/loupdemer.png",
    src2: "assets/img/animaux-selection/loupdemer.png",
  },
];
let aAnimauxMada = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Foussa",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Foussa.png",
    src2: "assets/img/animaux-selection/Foussa.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Hibou",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Hibou.png",
    src2: "assets/img/animaux-selection/Hibou.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Dugong",
    estVisible: false,
    estSelectionne: false,
    pays: "mada",
    image: new Image(),
    src: "assets/img/animaux/Dugong.png",
    src2: "assets/img/animaux-selection/Dugong.png",
  },
];
let aAnimauxSahel = [
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Gazelle",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/gazelle.png",
    src2: "assets/img/animaux-selection/gazelle.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Giraffe",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/giraffe.png",
    src2: "assets/img/animaux-selection/giraffe.png",
  },
  {
    x: 0,
    y: 0,
    hauteur: 200,
    largeur: 200,
    nom: "Mouflon à Manchettes",
    estVisible: false,
    estSelectionne: false,
    pays: "sahel",
    image: new Image(),
    src: "assets/img/animaux/mouflon.png",
    src2: "assets/img/animaux-selection/mouflon.png",
  },
];
//////////////////////////////////////////////////////////////////// ZONES
let animauxAAfficher = [];


//////////////////////////////////////////////////////////////////// BASE
function initialiser() {
  sortAnimaux();
  setInterval(boucleJeu, 1000 / 60);
  oCanvasHTML.addEventListener("click", clicCanvas);
}

function boucleJeu() {
  oContexte.clearRect(0, 0, nLargeurCanvas, nHauteurCanvas);
  sons.general.play();
  if (sEtat == "intro") {
    dessinerIntro();
  } else if (sEtat == "commandes") {
    dessinerSelection();
  } else if (sEtat == "selection") {
    dessinerCommencer();
    dessinerCommencerTemporaire();
  } else if (sEtat == "australie") {
    dessinerFondAus();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "breizh") {
    dessinerBreizh();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "bresil") {
    dessinerBresil();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "canada") {
    dessinerCanada();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "chine") {
    dessinerChine();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "hawaii") {
    dessinerHawaii();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
     dessinerVies();
  } else if (sEtat == "inde") {
    dessinerInde();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "italie") {
    dessinerItalie();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "mada") {
    dessinerMada();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "sahel") {
    dessinerSahel();
    afficherAnimaux();
    dessinerRanger();
    dessinerIndice();
    dessinerVies();
  } else if (sEtat == "fin") {
    dessinerFin();
  }
}

function clicCanvas(evenement) {
  let positionCurseurX = evenement.offsetX;
  let positionCurseurY = evenement.offsetY;

  if (
    sEtat == "intro" &&
    detecterClicObjet(positionCurseurX, positionCurseurY, oStart) == true
  ) {
    sEtat = "commandes";
  } else if (
    sEtat == "commandes" &&
    detecterClicObjet(positionCurseurX, positionCurseurY, oContinue) == true
  ) {
    sEtat = "selection";
  } else if (
    sEtat == "selection" &&
    detecterClicObjet(positionCurseurX, positionCurseurY, oContinue) == true
  ) {
    let positionPays = Math.floor(Math.random() * aPays.length);
    sEtat = aPays[positionPays];
    nbEtatsJoues += 1;
    remiseAzero();
    aleatoireAnimaux();
  } else if (
    sEtat == "australie" ||
    sEtat == "breizh" ||
    sEtat == "bresil" ||
    sEtat == "canada" ||
    sEtat == "chine" ||
    sEtat == "hawaii" ||
    sEtat == "inde" ||
    sEtat == "italie" ||
    sEtat == "mada" ||
    sEtat == "sahel"
  ) {
    for (let i = 0; i < animauxAAfficher.length; i++) {
      let animal = animauxAAfficher[i];
      let collision = detecterClicObjet(
        positionCurseurX,
        positionCurseurY,
        animal
      );

      if (collision == true) {
        sons.bon.play();
        animal.estSelectionne = true;
        let reponse = validerReponse(animal.nom, sEtat);
        if (reponse == true) {
          nVies += 0;
        } else if (reponse == false){
          nVies -=1;
        }
      }
    }
if (nbEtatsJoues >= 5 || nVies <= 0) {
  sEtat = "fin";
  return;
}
  } else if (
    (sEtat == "australie" ||
      sEtat == "breizh" ||
      sEtat == "bresil" ||
      sEtat == "canada" ||
      sEtat == "chine" ||
      sEtat == "hawaii" ||
      sEtat == "inde" ||
      sEtat == "italie" ||
      sEtat == "mada" ||
      sEtat == "sahel") &&
    detecterClicObjet(positionCurseurX, positionCurseurY, oRanger)
  ) {
  }
  if (detecterClicObjet(positionCurseurX, positionCurseurY, oRanger)) {
    oIndice.estVisible = !oIndice.estVisible;
    sons.general.play();
    nVies -=0.5;
    if (sEtat == "australie") {
      oIndice.texte = "Nous sommes que terrestres, Nous sommes quadripèdes.";
      oIndice.texte2 = "Un Quoll, Un Dingo et Un Échidné sont présents. ";
    } else if (sEtat == "breizh") {
      oIndice.texte = "Nous adorons l'eau, un de nous ressemble pas a un animal!";
      oIndice.texte2 = "Un pingouim, un crustacé et une Loutre est présente";
    } else if (sEtat == "bresil") {
      oIndice.texte = "Nous sommes tous tropicales. Un des nous a été populaire récemment.";
      oIndice.texte2 = "Un capybara, un toucan et un Oustit sont présents.";
    } else if (sEtat == "canada") {
      oIndice.texte = "Un de nous 3 ne dépend pas de l'eau";
      oIndice.texte2 = "Un béluga, un castor et un lynx sont présents.";
    } else if (sEtat == "chine") {
      oIndice.texte = "Un de nous 3 est plumé.";
      oIndice.texte2 = "Un héron, un panda et un Singe doré sont présents.";
    } else if (sEtat == "hawaii") {
      oIndice.texte = "Un de nous 3 ne vit pas près de l'eau";
      oIndice.texte2 = "Une mangouste, Raie Manta et un Pétrel sont présents. ";
    } else if (sEtat == "inde") {
      oIndice.texte = "Nous sommes tous terrestres. Un de nous 3 à des plumes.";
      oIndice.texte2 = "Un paon, un tigre et un Rhino sont présents.";
    } else if (sEtat == "italie") {
      oIndice.texte = "Nous sommes que marin!";
      oIndice.texte2 = "Un poisson fuselé, un loup de mer et un Requin pélerin sont présents. ";
    } else if (sEtat == "mada") {
      oIndice.texte = "Un de nous trois est marin.";
      oIndice.texte2 = "Un Foussa, un Hibou de Madagscar et un Dugong sont présents.";
    } else if (sEtat == "sahel") {
      oIndice.texte = "Nous sommes quadripèdes.";
      oIndice.texte2 = "Une girraffe, un Mouflon à Manchettes et une Gazelles sont présents.";
    }
  } 
  

if(sEtat == "fin" && detecterClicObjet(positionCurseurX, positionCurseurY, oBoutonFin)) {
sEtat = "intro";
remiseAzeroFinale();
}

}

////////////////////////////////////////////////////////////////////BASE

//////////////////////////////////////////////////////////////////// 0
function remiseAzero() {
  nTempsPasse = 0;
  nMinuterie = 25;
  for (let i = 0; i < animauxAAfficher.length; i++) {
    animauxAAfficher[i].estVisible = false;
    animauxAAfficher[i].estSelectionne = false;
  }
  animauxAAfficher = [];
  nVies = 3;
  nbEtatsJoues = 0;
}
function remiseAzeroFinale() {
    nTempsPasse = 0;
    nMinuterie = 25;
    for (let i = 0; i < animauxAAfficher.length; i++) {
      animauxAAfficher[i].estVisible = false;
      animauxAAfficher[i].estSelectionne = false;
    }
  animauxAAfficher = [];
  nVies = 3;
  nbEtatsJoues = 0;
}
//////////////////////////////////////////////////////////////////// 0

//////////////////////////////////////////////////////////////////// DESSINER
function dessinerFondAus() {
  oContexte.drawImage(oAustralie, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Australie!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerBreizh() {
  oContexte.drawImage(oBreizh, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Bretagne!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerBresil() {
  oContexte.drawImage(oBresil, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes au : Brésil!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerCanada() {
  oContexte.drawImage(oCanada, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes au : Canada!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerChine() {
  oContexte.drawImage(oChi, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Chine!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerHawaii() {
  oContexte.drawImage(oHawa, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Hawaii!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerInde() {
  oContexte.drawImage(oIn, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Inde!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerItalie() {
  oContexte.drawImage(oIta, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#1a2027ff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes en : Italie!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerMada() {
  oContexte.drawImage(oMada, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes à : Madagascar!", 300, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerSahel() {
  oContexte.drawImage(oSahel, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#fff";
  oContexte.font = "50px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Nous sommes au : Sahara!", 320, 60);
  nTempsPasse++;
  if (nTempsPasse % 60 == 0) {
    nMinuterie--;
  }
  if (nMinuterie <= 0) {
    sEtat = "selection";
  }
  oContexte.fillStyle = "#fff";
  oContexte.font = "75px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(nMinuterie, nLargeurCanvas - 50, 80);
}
function dessinerIntro() {
  paraElements();
}
function dessinerCommandes() {
  oContexte.drawImage(oIn, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#00000071";
  oContexte.fillRect(0, 0, nLargeurCanvas, nHauteurCanvas);

  oContexte.fillStyle = `#082f5cff`;
  oContexte.fillRect(
    oContinue.x,
    oContinue.y,
    oContinue.largeur,
    oContinue.hauteur
  );
  oContexte.fillStyle = "#fff";
  oContexte.font = "bold 24px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oContinue.texte,
    oContinue.x + oContinue.largeur / 2,
    oContinue.y + oContinue.hauteur / 2 + 8
  );
  oContexte.fillStyle = "#fff";
  oContexte.textAlign = "center";
  oContexte.font = "25px chat";
  oContexte.fillText(
    "Cliquez sur le ranger pour un indice et recliquez sur lui pour le cacher! Mais vous perdrez 1 vie...",
    nLargeurCanvas / 2,
    nHauteurCanvas - 50
  );
  oContexte.fillStyle = "#fff";
  oContexte.textAlign = "center";
  oContexte.font = "30px chat";
  oContexte.fillText(
    "Après 5 rounds sans perdre toutes vos vies, vous avez fini! Sinon attendez le counter apres 3 bons choix.",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2 - 80
  );
  oContexte.fillStyle = "#fff";
  oContexte.textAlign = "center";
  oContexte.font = "30px chat";
  oContexte.fillText(
    "En moins de 30 secondes vous devez cliquez les 3 bon animaux. Vous avez 3 vies!",
    nLargeurCanvas / 2,
    nHauteurCanvas / 2
  );
}
function dessinerSelection() {
  dessinerCommandes();
}
function dessinerCommencer() {
  oContexte.drawImage(oSelection, 0, 0, nLargeurCanvas, nHauteurCanvas);
}
function dessinerCommencerTemporaire() {
  oContexte.fillStyle = `#082f5cff`;
  oContexte.fillRect(
    oCommencerTemporaire.x,
    oCommencerTemporaire.y,
    oCommencerTemporaire.largeur,
    oCommencerTemporaire.hauteur
  );
  oContexte.fillStyle = "#fff";
  oContexte.font = "bold 24px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oCommencerTemporaire.texte,
    oCommencerTemporaire.x + oCommencerTemporaire.largeur / 2,
    oCommencerTemporaire.y + oCommencerTemporaire.hauteur / 2 + 8
  );
}
function paraElements() {
  oPlumeriag.src = "assets/img/element_fond_anime/plumeriag.png";
  oPlumeriap.src = "assets/img/element_fond_anime/plumeriap.png";
  oHibiscusg.src = "assets/img/element_fond_anime/hibiscusg.PNG";
  oHibiscusp.src = "assets/img/element_fond_anime/hibiscusp.png";
  oClown.src = "assets/img/element_fond_anime/clown.PNG";
  oPoisson.src = "assets/img/element_fond_anime/poisson.PNG";
  oMeduse.src = "assets/img/element_fond_anime/meduse.PNG";

  oContexte.drawImage(oArrierePlan, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oSable, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oEau, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.drawImage(oMeduse, nPosX - 500, 700);
  oContexte.drawImage(oHerbe, 0, 0, nLargeurCanvas, nHauteurCanvas);
  nPosX += nVitesse;

  if (nPosX > nLargeurCanvas + 100) {
    nPosX = -200;
  }

  oContexte.drawImage(oPoisson, nPosX - 400, 300);
  oContexte.drawImage(oClown, nPosX, 300);

  oContexte.drawImage(oHibiscusg, -0.1, 720);
  oContexte.drawImage(oPlumeriag, 1, 800);
  oContexte.drawImage(oPlumeriap, 100, 800);

  oContexte.drawImage(oHibiscusg, 1300, 700);
  oContexte.drawImage(oPlumeriag, 1300, 740);
  oContexte.drawImage(oPlumeriap, 1400, 800);
  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "140px Plante";
  oContexte.textAlign = "center";
  oContexte.fillText("Les", nLargeurCanvas / 2, 350);

  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "140px chat";
  oContexte.textAlign = "center";
  oContexte.fillText("Zanimaux", nLargeurCanvas / 2, 500);

  oContexte.fillStyle = "#082f5cff";
  oContexte.font = "60px Plante";
  oContexte.textAlign = "center";
  oContexte.fillText("de la faune!", nLargeurCanvas / 2, 600);

  oContexte.fillStyle = `#082f5cff`;
  oContexte.fillRect(oStart.x, oStart.y, oStart.largeur, oStart.hauteur);
  oContexte.fillStyle = "#fff";
  oContexte.font = "bold 24px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(
    oStart.texte,
    oStart.x + oStart.largeur / 2,
    oStart.y + oStart.hauteur / 2 + 8
  );

  oContexte.drawImage(oPoisson, nPosX - nLargeurCanvas, 300);
  oContexte.drawImage(oClown, nPosX - nLargeurCanvas, 300);
}
function dessinerFin() {
  oContexte.drawImage(oIn, 0, 0, nLargeurCanvas, nHauteurCanvas);
  oContexte.fillStyle = "#00000071";
  oContexte.fillRect(0, 0, nLargeurCanvas, nHauteurCanvas);
if (nVies <= 0) {
    oContexte.fillStyle = "#fff";
  oContexte.font = "24px chat";
  oContexte.textAlign = "center";
    oContexte.fillText("Game over... Vous avez pas survécu!", nLargeurCanvas / 2, nHauteurCanvas / 2 - 80);
  } else if (nbEtatsJoues >= 5) {
      oContexte.fillStyle = "#fff";
  oContexte.font = "24px chat";
  oContexte.textAlign = "center";
    oContexte.fillText("Vous avez survécu! La faune n'est pas si méchante...", nLargeurCanvas / 2, nHauteurCanvas / 2 - 80);
  }
  
    oContexte.fillStyle = `#082f5cff`;
  oContexte.fillRect(
     oBoutonFin.x,
     oBoutonFin.y,
     oBoutonFin.largeur,
     oBoutonFin.hauteur
  );
  oContexte.fillStyle = "#fff";
  oContexte.font = "bold 24px chat";
  oContexte.textAlign = "center";
  oContexte.fillText(
     oBoutonFin.texte,
     oBoutonFin.x +  oBoutonFin.largeur / 2,
     oBoutonFin.y +  oBoutonFin.hauteur / 2 + 8
  );
}
function dessinerVies() {
  oContexte.fillText(nVies, nLargeurCanvas - 50, 280);
}
function dessinerIndice() {
  if (oIndice.estVisible == true) {
    oContexte.fillStyle = "#00000071";
    oContexte.fillRect(0, 0, nLargeurCanvas, nHauteurCanvas);
    oContexte.fillStyle = "#fff";
    oContexte.textAlign = "center";
    oContexte.font = "30px chat";
    oContexte.fillText(
      oIndice.texte,
      oIndice.x + oIndice.largeur / 2 - 300,
      oIndice.y + oIndice.hauteur / 4 + 8
    );
    oContexte.fillText(
      oIndice.texte2,
      oIndice.x + oIndice.largeur / 2 - 300,
      oIndice.y + oIndice.hauteur / 4 + 100
    );
  }
}
function dessinerRanger() {
  oContexte.drawImage(
    oRanger.image,
    oRanger.x,
    oRanger.y,
    oRanger.largeur,
    oRanger.hauteur
  );
}
////////////////////////////////////////////////////////////////////DESSINER

//////////////////////////////////////////////////////////////////// EVENTS
function detecterClicObjet(positionCurseurX, positionCurseurY, objet) {
  if (
    positionCurseurX >= objet.x &&
    positionCurseurX <= objet.x + objet.largeur &&
    positionCurseurY >= objet.y &&
    positionCurseurY <= objet.y + objet.hauteur
  ) {
    return true;
  }
  return false;
}
//////////////////////////////////////////////////////////////////// EVENTS

////////////////////////////////////////////////////////////////////logique jeu
function aleatoireAnimaux() {
  animauxAAfficher = [];

  let animauxCorrect = aAnimauxAleatoire.filter((animal) => {
    return animal.pays != sEtat;
  });

  for (i = 0; i < 7; i++) {
    let choix = Math.floor(Math.random() * animauxCorrect.length);
    let animal = animauxCorrect[choix];

    animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
    animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

    animal.estSelectionne = false;
    animal.estVisible = true;

    animauxAAfficher.push(animal);
  }
  if (sEtat == "australie") {
    for (i = 0; i < 4; i++) {
      let choix = Math.floor(Math.random() * aAnimauxAustralie.length);
      let animal = aAnimauxAustralie[choix];
      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;

      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "breizh") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxBreizh.length);
      let animal = aAnimauxBreizh[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "bresil") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxBresil.length);
      let animal = aAnimauxBresil[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "canada") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxCanada.length);
      let animal = aAnimauxCanada[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "chine") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxChine.length);
      let animal = aAnimauxChine[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "hawaii") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxHawaii.length);
      let animal = aAnimauxHawaii[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "inde") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxInde.length);
      let animal = aAnimauxInde[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "italie") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxItalie.length);
      let animal = aAnimauxItalie[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "mada") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxMada.length);
      let animal = aAnimauxMada[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
  if (sEtat == "sahel") {
    for (i = 0; i < 3; i++) {
      let choix = Math.floor(Math.random() * aAnimauxSahel.length);
      let animal = aAnimauxSahel[choix];

      animal.x = Math.random() * (nLargeurCanvas - animal.largeur);
      animal.y = Math.random() * (nHauteurCanvas - animal.hauteur);

      animal.estSelectionne = false;
      animal.estVisible = true;
      animauxAAfficher.push(animal);
    }
  }
}
function afficherAnimaux() {
  for (let i = 0; i < animauxAAfficher.length; i++) {
    const animal = animauxAAfficher[i];

    if (animal.estSelectionne == true) {
      animal.image.src = animal.src2;
    } else {
      animal.image.src = animal.src;
    }

    oContexte.drawImage(
      animal.image,
      animal.x,
      animal.y,
      animal.largeur,
      animal.hauteur
    );
  }
}
function sortAnimaux() {
  aAnimauxAleatoire.sort(function () {
    return Math.random() * 2 - 1;
  });
}
function cinqEtats() {
  if (nbEtatsJoues >= nbEtatsMax) {
    sEtat = "fin";
  } else {
    sEtat = "selection";
  }
}
function validerReponse(nomAnimal, etat) {
  if (nomAnimal == "Foussa" && etat == "mada") {
    return true;
  }
  if (nomAnimal == "Hibou" && etat == "mada") {
    return true;
  }
  if (nomAnimal == "Dugong" && etat == "mada") {
    return true;
  }

  if (nomAnimal == "Béluga" && etat == "canada") {
    return true;
  }
  if (nomAnimal == "Lynx" && etat == "canada") {
    return true;
  }
  if (nomAnimal == "Castor" && etat == "canada") {
    return true;
  }

  if (nomAnimal == "Capybara" && etat == "bresil") {
    return true;
  }
  if (nomAnimal == "Toucan" && etat == "bresil") {
    return true;
  }
  if (nomAnimal == "Oustiti de Scheneider" && etat == "bresil") {
    return true;
  }

  if (nomAnimal == "Dingo" && etat == "australie") {
    return true;
  }
  if (nomAnimal == "Quoll" && etat == "australie") {
    return true;
  }
  if (nomAnimal == "Échidné" && etat == "australie") {
    return true;
  }

  if (nomAnimal == "Rémora fuselé" && etat == "italie") {
    return true;
  }
  if (nomAnimal == "Requin Pélerin" && etat == "italie") {
    return true;
  }
  if (nomAnimal == "Loup de Mer" && etat == "italie") {
    return true;
  }

  if (nomAnimal == "Gazelle" && etat == "sahel") {
    return true;
  }
  if (nomAnimal == "Giraffe" && etat == "sahel") {
    return true;
  }
  if (nomAnimal == "Mouflon à Manchettes" && etat == "sahel") {
    return true;
  }

  if (nomAnimal == "Panda de Qiling" && etat == "chine") {
    return true;
  }
  if (nomAnimal == "Singe doré" && etat == "chine") {
    return true;
  }
  if (nomAnimal == "Héron" && etat == "chine") {
    return true;
  }

  if (nomAnimal == "Pétrel" && etat == "hawaii") {
    return true;
  }
  if (nomAnimal == "Mangouste" && etat == "hawaii") {
    return true;
  }
  if (nomAnimal == "Raie Manta" && etat == "hawaii") {
    return true;
  }

  if (nomAnimal == "Tigre" && etat == "inde") {
    return true;
  }
  if (nomAnimal == "Paon" && etat == "inde") {
    return true;
  }
  if (nomAnimal == "Rhinocéros" && etat == "inde") {
    return true;
  }

  if (nomAnimal == "Loutre d'Europe" && etat == "breizh") {
    return true;
  }
  if (nomAnimal == "Bulot" && etat == "breizh") {
    return true;
  }
  if (nomAnimal == "Pingouin Torda" && etat == "breizh") {
    return true;
  }

  return false;
}
////////////////////////////////////////////////////////////////////logique jeu

window.addEventListener("load", initialiser);
