// // ========================
// QUESTIONS
// ========================
let questions = [
  // ----- Niveau 1 (Très Facile - 28 Questions) -----
  [
    // Sports (2)
    "Quelle est la couleur du maillot des Canadiens de Montréal ?",
    "Quelle est la couleur typique d'un terrain de football ?",
    // Mélange de couleurs (2)
    "Quelle couleur obtient-on en mélangeant le jaune et le rouge ?",
    "Quelle couleur obtient-on en mélangeant le rouge avec du blanc ?",
    // Nourriture (2)
    "Quelle est la couleur classique d'une fraise ?",
    "Quelle est la couleur d'un citron ?",
    // Nature (2)
    "Quelle teinte domine le ciel par une journée très claire ?",
    "Quelle est la couleur des feuilles d'arbre pendant l'été ?",
    // Art et Musique (2)
    "Quelle couleur sont les instruments de musique en général ?",
    "Quelle est la couleur associée au Simpson ?",
    // Émotions (2)
    "Quelle couleur représente souvent l'amour et la passion ?",
    "Quelle couleur est associée à la tristesse ?",
    // Pays et Provinces (2)
    "Quelle est la couleur principal du Drapeau Canadien ?",
    "Quelle est la couleur principal du Drapeau Québécois ?",
    // Animaux (2)
    "Quelle est la couleur de la fourrure des chimpanzés ?",
    "Quelle est la couleur dominante des grenouilles ?",
    // Espace (2)
    "Comment appelle ton la planète Mars (La planète ...)?",
    "Quelle couleur est le corps des satellites artificiels ?",
    // Légendes et Mythes (2)
    "Quelle est la couleur du vêtement du Père Noël ?",
    "Quelle est la couleur des cheveux de la sirène Ariel de Disney ?",
    // Jeu Vidéo (2)
    "Quelle couleur est le plus associée à Knuckles dans Sonic ?",
    "Quelle est la couleur de la casquette de Mario ?",
    // Films (4)
    "Quelle est la couleur de la peau du personnage de Hulk ?",
    "Quelle est la couleur du costume de Iron Man, à part le jaune ?",
    "Quelle couleur est la tenue de la fée Clochette ?",
    "Dans Le Monde de Nemo, de quelle couleur est Doris ?",
  ],

  // ----- Niveau 2 (Facile - 28 Questions) -----
  [
    // Sports (2)
    "Quelle est la couleur typique du ballon de basketball ?",
    "Quelle est la couleur de la terre battue au tennis ?",
    // Mélange de couleurs (2)
    "Quel mélange de couleurs primaires donne le vert ? (Bleu et...)",
    "Quel mélange de couleurs primaires donne le violet ? (Bleu et...)",
    // Nourriture (2)
    "Quelle est la couleur classique d'une pomme (exculant le rouge) ?",
    "Quelle est la couleur de la lime ?",
    // Nature (2)
    "Quelle est la couleur du tronc d'arbre et des branches ?",
    "Quelle est la couleur du la lune ?",
    // Art et Musique (2)
    "Quelle est la couleur d'un nuage de pollution (smog) ?",
    "Quelle couleur est le pantalon de Obélix?",
    // Émotions (2)
    "Quelle couleur est souvent utilisée pour un visage de colère ?",
    "Quelle couleur est associée au dégout ?",
    // Pays et Provinces (2)
    "Quelle couleur est le point du drapeau Japonais ?",
    "Quelle est la couleur du drapeau de l'Italie (... , Blanc et Rouge) ?",
    // Animaux (2)
    "Quelle est la couleur typique du plumage des flamants ?",
    "Quelle est la couleur d'un ours ?",
    // Espace (2)
    "De quelle couleur est le soleil représenté sur les dessins ?",
    "De quelle couleur sont les planètes à partir de la planète Uranus ?",
    // Légendes et Mythes (2)
    "Quelle est la couleur de la tenue de Peter Pan ?",
    "Quelle est la couleur d'un Minotaure ?",
    // Jeu Vidéo (2)
    "Quelle couleur est le plus souvent associée à Luigi ?",
    "Quelle est la couleur des souliers de Sonic ?",
    // Films (4)
    "De quelle couleur est le manteau de Paddington l'ours ?",
    "Quelle est la couleur de la robe de la Reine des Neiges, Elsa ?",
    "Quelle couleur est le costume de C-3PO dans Star Wars_ ?",
    "Quelle est la couleur du costume du Grinch (il est vert et...)?",
  ],

  // ----- Niveau 3 (Moyen - 28 Questions) -----
  [
    // Sports (2)
    "Quelle est la couleur du maillot de soccer de l'Argentine ?",
    "Quelle est la couleur de l'anneau olympique représentant la nature ?",
    // Mélange de couleurs (2)
    "Quelle couleur est associée au mélange du noir et du blanc ?",
    "Quelle couleur est associée au mélange du bleu et du blanc ?",
    // Nourriture (2)
    "Quelle est la couleur d'une carotte, avant d'être cuite ?",
    "Quel est la couleur de la peau extérieure d'un kiwi ?",
    // Nature (2)
    "Quelle couleur est associée à la pierre d'émeraude ?",
    "Quelle est la 7e couleur de l'arc-en-ciel (Haut vers le Bas) ?",
    // Art et Musique (2)
    "Quelle est la couleur lorsqu'on écrit à la mine ?",
    "Quelle est la couleur du cheval de Lucky Luke (Blanc et ...) ?",
    // Émotions (2)
    "Quelle couleur est associée à l'espoir et à la chance ?",
    "Quelle couleur est associée à l'énergie et à la chaleur ?",
    // Pays et Provinces (2)
    "De quelle couleur est la tour Eiffel ?",
    "Quelle est la couleur du Pont du Golden Gate ?",
    // Animaux (2)
    "Quelle est la couleur de la peau de la plupart des dauphins ?",
    "Quelle est la couleur d'un Ornithorynque ?",
    // Espace (2)
    "Quel est la coouleur représentant la planète Terre ?",
    "Quelle est la couleur d'une étoile filante en dessin ?",
    // Légendes et Mythes (2)
    "Quelle est la couleur de la peau des Ogres ?",
    "Quelle est la couleur de la créature mythique : Le Phénix ?",
    // Jeu Vidéo (2)
    "Quelle couleur est associée au Nether dans Minecraft (Rouge et ...) ?",
    "De quelle couleur est la jauge de vie dans les jeux vidéos ?",
    // Films (4)
    "Quelle est la couleur du costume de Peter Parker (Rouge et ...) ?",
    "Quelle est la couleur de la tenue de Donatello (Tortues Ninjas) ?",
    "Quelle couleur représente le mal dans Star Wars ?",
    "Quelle est la couleur de la robe de La Belle et la Bête pour la danse ?",
  ],

  // ----- Niveau 4 (Difficile - 28 Questions) -----
  [
    // Sports (2)
    "Quelle est la couleur du ballon de football américain ?",
    "De quelle couleur est une balle de Baseball (Blanc et ...) ?",
    // Mélange de couleurs (2)
    "Quelle couleur est souvent appelée 'magenta' ou 'fuchsia' ?",
    "Quelle couleur rouge et vert font-ils ensemble ?",
    // Nourriture (2)
    "Quelle est la couleur de la plupart des myrtilles ?",
    "Quelle est la couleur de la Barbe à Papa ?",
    // Nature (2)
    "Quelle couleur est souvent associée aux fleurs de lavande ?",
    "Quelle couleur est associée à l'hiver (Blanc et ...) ?",
    // Art et Musique (2)
    "Quelle couleur est associée à la chanson d'Eiffel 65 (I'm ... da be da) ?",
    "Quelle couleur est associée au desert ?",
    // Émotions (2)
    "Quelle couleur est souvent associée à la joie ?",
    "Quelle couleur est associée à la douceur, la tendresse et la féminité ?",
    // Pays et Provinces (2)
    "De quelle couleur était la Statue de la Liberté ?",
    "Quelle est la couleur de la planète au milieu du drapeau Brésilien ?",
    // Animaux (2)
    "Quelle est la couleur de la crinière du Lion ?",
    "Quelle couleur est la couleur d'une raie, un animal aquatique ?",
    // Espace (2)
    "Quelle couleur est associée à la plus petite planète du système solaire ?",
    "Quelle est la couleur des planètes gazeuses comme Jupiter ?",
    // Légendes et Mythes (2)
    "Quelle est la couleur des cheveux de Médusa dans la mythologie ?",
    "Quelle est la couleur du Monstre du Loch Ness ?",
    // Jeu Vidéo (2)
    "Quelle est la couleur du Dragon se nommmant Spyro ?",
    "Quelle est la couleur du Fantôme de Pac-Man nommé Blinky ?",
    // Films (4)
    "Quelle est la couleur des cheveux de la Schtroumpfette ?",
    "Quelle est la couleur du meilleur ami de SpongeBob (Patrick) ?",
    "Quelle est la coueur de l'emblème des Gryffondors (Or et ...) ?",
    "Quelle est la couleur de la peau du Chat Botté ?",
  ],

  // ----- Niveau 5 (Très Difficile - 28 Questions) -----
  [
    // Sports (2)
    "Quelle est la couleur représentant le danger dans les sports de course ?",
    "Quelle est la couleur qui représente la deuxieme place en sport ?",
    // Mélange de couleurs (2)
    "Quelle couleur est obtenue en mélangeant le jaune et le rouge ?",
    "Quelle couleur est souvent associée à un métal ?",
    // Nourriture (2)
    "Quelle couleur est associée aux olives de Kalamata ?",
    "Quel est la couleur du Pesto au Basilic ?",
    // Nature (2)
    "Quelle couleur est utilisée pour décrire le magma ?",
    "De quelle couleur sont les flocons de neige ?", 
    // Art et Musique (2)
    "Quelle couleur est associée aux vetements de Tintin et Haddock ?",
    "Quelle couleur est la pomme sur le tableau (Le Fils de l'homme) ?",
    // Émotions (2)
    "Quelle couleur est souvent associée à l'ennui ?",
    "Quelle couleur représente la peur ?",
    // Pays et Provinces (2)
    "Quelle est la couleur au centre sur le drapeau Suisse ?",
    "Quelle est la couleur du champ du drapeau de la Jamaïque ?",
    // Animaux (2)
    "Quelle est la couleur dominante sur les tigres ?",
    "Quelle est la couleur d'un fennec ?",
    // Bonus (2)
    "Bonus : Va sur la couleur rose !",
    "Bonus : Va sur la couleur rouge !",
    // Légendes et Mythes (2)
    "Quelle est la couleur de la maison de Baba Yaga ?",
    "Quelle est la couleur d'un farfadet ?",
    // Jeu Vidéo (2)
    "Quelle est la couleur de la tenue de la princesse Peach dans Mario ?",
    "De quelle couleur est la rareté épique dans le jeu Fortnite ?",
    // Films (4)
    "Quelle est la couleur du fameux lapin (Bugs Bunny) ?",
    "Quelle est la couleur du costume de Willy Wonka (Plus récent) ?",
    "Quelle est la couleur principal des personnages dans Avatar ?",
    "Quelle couleur est la fourrure du singe Abu dans Aladdin ?",
  ]
];


// // ========================
// // REPONSES
// // ========================
let reponses = [
  // Niveau 1 (Très Facile)
  [
    // Sports
    "red", // Canadiens de Montréal (Maillot principal)
    "green", // Terrain de football (herbe)
    // Mélange de couleurs
    "orange", // Jaune et rouge
    "pink", // Rouge avec du blanc (rose)
    // Nourriture
    "red", // Fraise classique
    "yellow", // Citron
    // Nature
    "royalblue", // Ciel très clair
    "green", // Feuilles d'arbre en été
    // Art et Musique
    "yellow", // Instruments de musique
    "yellow", // Les Simpson
    // Émotions
    "red", // Amour et passion
    "royalblue", // Tristesse (souvent bleu ou violet/purple)
    // Pays et Provinces
    "red", // Drapeau Canadien (bandes rouges, feuille d'érable)
    "royalblue", // Drapeau Québécois (fleur de lys sur fond bleu)
    // Animaux
    "saddlebrown", // Fourrure des chimpanzés
    "green", // Grenouilles
    // Espace
    "red", // Planète Mars
    "grey", // Corps des satellites artificiels (métal)
    // Légendes et Mythes
    "red", // Vêtement du Père Noël
    "red", // Cheveux d'Ariel
    // Jeu Vidéo
    "red", // Knuckles
    "red", // Casquette de Mario
    // Films
    "green", // Peau de Hulk
    "red", // Costume de Iron Man (rouge et jaune/or)
    "green", // Tenue de la fée Clochette
    "royalblue", // Dory (poisson-chirurgien bleu)
  ],

  // Niveau 2 (Facile)
  [
    // Sports
    "orange", // Ballon de basketball
    "red", // Terre battue (couleur brique/rougeâtre)
    // Mélange de couleurs
    "yellow", // Bleu et jaune donne vert
    "red", // Bleu et rouge donne violet
    // Nourriture
    "green", // Pomme (excluant le rouge)
    "green", // Lime
    // Nature
    "saddlebrown", // Tronc d'arbre et branches
    "grey", // Lune (dans le ciel)
    // Art et Musique
    "grey", // Nuage de pollution (smog)
    "royalblue", // Pantalon de Obélix
    // Émotions
    "red", // Visage de colère
    "green", // Dégoût (souvent vert ou bleu dans les représentations)
    // Pays et Provinces
    "red", // Point du drapeau Japonais
    "green", // Drapeau de l'Italie (Vert, Blanc, Rouge)
    // Animaux
    "pink", // Plumage des flamants
    "saddlebrown", // Ours (brun, couleur typique)
    // Espace
    "yellow", // Soleil représenté sur les dessins
    "royalblue", // Planètes à partir d'Uranus (glaces et gaz)
    // Légendes et Mythes
    "green", // Tenue de Peter Pan
    "saddlebrown", // Minotaure (corps de taureau)
    // Jeu Vidéo
    "green", // Luigi
    "red", // Souliers de Sonic
    // Films
    "royalblue", // Manteau de Paddington l'ours
    "royalblue", // Robe de la Reine des Neiges, Elsa
    "yellow", // Costume de C-3PO
    "red", // Costume du Grinch (vert et rouge)
  ],

  // Niveau 3 (Moyen)
  [
    // Sports
    "royalblue", // Maillot de soccer de l'Argentine (bleu ciel et blanc)
    "green", // Anneau olympique de l'Europe
    // Mélange de couleurs
    "grey", // Mélange du noir et du blanc (gris)
    "royalblue", // Mélange du bleu et du blanc
    // Nourriture
    "orange", // Carotte (avant d'être cuite, la couleur la plus typique)
    "saddlebrown", // Peau extérieure d'un kiwi
    // Nature
    "green", // Pierre d'émeraude
    "purple", // 7e couleur de l'arc-en-ciel (Haut vers le Bas) - VIOLET (ou INDIGO/royalblue pour l'avant-dernière) -> je choisis le VIOLET
    // Art et Musique
    "grey", // Écriture à la mine (gris foncé)
    "yellow", // Cheval de Lucky Luke (Blanc et Jaune/Sable)
    // Émotions
    "green", // Espoir et chance
    "rellow", // Énergie et chaleur
    // Pays et Provinces
    "saddlebrown", // Tour Eiffel 
    "red", // Pont du Golden Gate (orange-rouge, souvent appelé rouge)
    // Animaux
    "grey", // Peau de la plupart des dauphins
    "saddlebrown", // Ornithorynque
    // Espace
    "royalblue", // Planète Terre (dominant bleu et vert)
    "yellow", // Étoile filante en dessin (gris brillant/blanc)
    // Légendes et Mythes
    "green", // Peau des Ogres (comme Shrek)
    "red", // Le Phénix
    // Jeu Vidéo
    "orange", // Nether dans Minecraft (Rouge et Noir/Rouge et Brun)
    "green", // Jauge de vie
    // Films
    "royalblue", // Costume de Peter Parker (Rouge et Bleu)
    "purple", // Tenue de Donatello (Tortues Ninjas)
    "red", // Le mal dans Star Wars (Sabres laser sith rouges)
    "yellow", // Robe de La Belle et la Bête
  ],

  // Niveau 4 (Difficile)
  [
    // Sports
    "saddlebrown", // Ballon de football américain
    "red", // Balle de Baseball (lacets rouges sur fond blanc)
    // Mélange de couleurs
    "pink", // Magenta ou fuchsia (couleur proche du rose foncé/magenta)
    "saddlebrown", // Rouge et vert font brun
    // Nourriture
    "royalblue", // Myrtilles (souvent appelées "bleuets")
    "pink", // Barbe à Papa
    // Nature
    "purple", // Fleurs de lavande
    "royalblue", // Hiver (Blanc et Bleu, neige et glace)
    // Art et Musique
    "royalblue", // Eiffel 65 (I'm royalblue da ba dee)
    "yellow", // Associé au desert (Blanc et Jaune/Sable pour le désert de neige)
    // Émotions
    "yellow", // Joie
    "pink", // Douceur, tendresse et féminité
    // Pays et Provinces
    "green", // Statue de la Liberté (oxydée, donc vert-bleu/bleu)
    "royalblue", // Planète au milieu du drapeau Brésilien (cercle bleu entouré de vert)
    // Animaux
    "saddlebrown", // Crinière du Lion (jaune/sable/brun)
    "grey", // Raie, animal aquatique
    // Espace
    "red", // Plus petite planète (Mercure, souvent représentée brune/rouge)
    "saddlebrown", // Planètes gazeuses (Jupiter est marron/jaune/blanc)
    // Légendes et Mythes
    "green", // Cheveux de Médusa (serpents verts)
    "green", // Monstre du Loch Ness (souvent vert, mais ici jaune par défaut)
    // Jeu Vidéo
    "purple", // Dragon Spyro
    "red", // Fantôme de Pac-Man nommé Blinky
    // Films
    "yellow", // Cheveux de la Schtroumpfette
    "pink", // Meilleur ami de SpongeBob (Patrick)
    "red", // Emblème des Gryffondors (Or et Rouge)
    "orange", // Peau du Chat Botté
  ],

  // Niveau 5 (Très Difficile)
  [
    // Sports
    "yellow", // Danger dans les sports de course (Drapeau jaune)
    "grey", // Deuxième place en sport (argent/gris est 2e, mais vert est une alternative courante)
    // Mélange de couleurs
    "orange", // Violet et bleu (bleu-violet, je choisis 'bleu')
    "grey", // Associée à un métal (argent/gris)
    // Nourriture
    "purple", // Olives de Kalamata (violet foncé/pourpre)
    "green", // Pesto au Basilic
    // Nature
    "orange", // Magma
    "royalblue", // Flocons de neige (très souvent dessinés en blanc, mais ici par défaut saddlebrown)
    // Art et Musique
    "royalblue", // Vêtements de Tintin et Haddock (Pantalon de Tintin, Manteau de Haddock)
    "green", // Pomme sur le tableau (Le Fils de l'homme)
    // Émotions
    "grey", // Ennui
    "purple", // Peur (souvent jaune-vert)
    // Pays et Provinces
    "red", // Centre de l'emblème sur le drapeau de la Suisse
    "green", // Champ du drapeau de la Jamaïque
    // Animaux
    "orange", // Dominante sur les tigres
    "yellow", // Fennec
    // Bonus
    "pink", // Va sur la couleur rose !
    "red", // Va sur la couleur rouge !
    // Légendes et Mythes
    "saddlebrown", // Maison de Baba Yaga (gris/bois foncé)
    "green", // Farfadet
    // Jeu Vidéo
    "pink", // Tenue de la princesse Peach
    "purple", // Rareté épique dans Fortnite
    // Films
    "grey", // Lapin (Bugs Bunny)
    "red", // Costume de Willy Wonka
    "royalblue", // Personnages dans Avatar
    "saddlebrown", // Fourrure du singe Abu dans Aladdin
  ]
];
let manche=1;
let question="";
let reponse="";

function QuestionAleatoire () {
    if (manche == 1 || manche == 2) {
        let questions12 = questions[0]
     
    let positionQuestion12 = Math.floor(Math.random() * questions12.length)
    question= questions12[positionQuestion12]
    reponse = reponses[0][positionQuestion12]
    }

     else if (manche == 3 || manche == 4) {
        let questions34 = questions[1]
     
    let positionQuestion34 = Math.floor(Math.random() * questions34.length)
    question= questions34[positionQuestion34]
    reponse = reponses[1][positionQuestion34]
    console.log(question);
    }

     else if (manche == 5 || manche == 6) {
        let questions56 = questions[2]
     
    let positionQuestion56 = Math.floor(Math.random() * questions56.length)
    question= questions56[positionQuestion56]
    reponse = reponses[2][positionQuestion56]
    }

    else if (manche == 7 || manche == 8) {
        let questions78 = questions[3]
     
    let positionQuestion78 = Math.floor(Math.random() * questions78.length)
    question= questions78[positionQuestion78]
    reponse = reponses[3][positionQuestion78]
    }

     else if (manche == 9 || manche == 10) {
        let questions910 = questions[4]
     
    let positionQuestion910 = Math.floor(Math.random() * questions910.length)
    question= questions910[positionQuestion910]
    reponse = reponses[4][positionQuestion910]
    }

     let casePresente = false;
  for (let i = 0; i < oCasesJeu.length; i++) {
    let uneCase = oCasesJeu[i];
    if (uneCase.couleur == reponse) {
      casePresente = true;
      break;
    }
  }

  if(casePresente==false){
    debugger;
    let caseAleatoire =  Math.floor(
      Math.random() * ReponseCouleur.length
    );
    oCasesJeu[caseAleatoire].couleur = reponse;
  }
    
}