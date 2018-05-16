//Exercice : Minimum et maximum

//Déclarez les variables suivantes :

//La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
var lepluspetit = (Math.min(7, 5, -12, 6, 32, 18, 14, -2)); 	//Returns the value of x rounded up to its nearest integer
console.log(lepluspetit);
// = -12

//La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
var valeurlaplusgrande = (Math.max(-3, 9, 21, 36, 27, 54, 17, 35));	 // Renvoie le nombre avec la valeur la plus élevée
console.log(valeurlaplusgrande);
// = 54

//La valeur est égal a l'addition des deux précédentes variables
console.log(lepluspetit+valeurlaplusgrande);
// = 42



//Exercice : Aléatoire 1

//Faire une variable floatBateau dont la valeur est 10.4
var floatBateau = 10.4;
console.log (floatBateau);
// testé, il répond 10.4. Goood!

//Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
var couleboat =(Math.floor(10.4));
console.log(couleboat);
// testé, il répond 10. Goood!

//Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut
var couleboat =(Math.ceil(10.4));
console.log(couleboat);
// testé, il répond 11. Goood!



//Exercice : Aléatoire 2

//Déclarez les variables suivantes :

//La valeur aléatoire entre 50 et 100
var aleatoire=((Math.random()*50)+50);
console.log(aleatoire);
// testé, il répond de 50 à 100. Goood!

//La valeur aléatoire peut être seulement 0 ou 1
var zeroetun=Math.round(Math.random());
console.log(zeroetun);
// testé, il répond ou 0 ou 1. Goood!

//La valeur aléatoire peut aller de 0 à 10 inclu
var zeroadix=Math.floor((Math.random()*10)+0);
console.log(zeroadix);
// testé, il répond de 0 à 10 ! Goood!



//Exercice : aléatoire 3

//crée un tableau qui contetient les valeurs suivantes : Goro, Johnny Cago, Kano, Liu Kano, Raiden, Reptil, Scorpion, Shang Tsun, Sonya, Sub-Zero
/*let personnages=["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]*/
let personnages=['Goro', 'Johnny Cago', 'Kano', 'Liu Kano', 'Raiden', 'Reptil', 'Scorpion', 'Shang Tsun', 'Sonya', 'Sub-Zero']
//choisir un personnage aléatoirement dans le tableau :
var randomValue = personnages[Math.floor(personnages.length * Math.random()*10)];
console.log(randomValue);
// testé, il répond aléatoirement ! mais il y a moyen de faire mieux.
