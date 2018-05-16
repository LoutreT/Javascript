var essai = 0;
var minimum = 20;
var maximum = 80;
var random = Math.round(Math.random()*(maximum-minimum)+minimum);

console.log("essayez d'entrer un nombre entier entre 20 et 80 qui correspond au nombre surprise");
prompt("Etes vous prêt ?");


function test(){   //recommandé pour évite de faire une boucle infinie inutilement lorsqu'il y a un bug.
  var number = prompt("essayez d'entrer un nombre entier entre 20 et 80 qui correspond au nombre surprise");
  if (number == random);
      alert("vous avez gagné !");
      essai++;
      console.log("vous avez gagné et vous l'avez fait en "+essai+" fois");
      alert("vous avez gagné et vous l'avez fait en "+essai+" fois");
      essai=0;
      random = Math.round(Math.random()*(maximum-minimum)+minimum);
      test();    // recommandé par le formateur Bertrand qui informe que cette étape "test()" permet d'éviter de fonctionner en boucle infinie.
    }
    else if(number < 20 || number > 80){
      console.log("veuillez entrer un nombre entre entre 20 et 80");
      alert("veuillez entrer un nombre entre entre 20 et 80");
      essai++;
      test(); // recommandé par le formateur Bertrand qui informe que cette étape "test()" permet d'éviter de fonctionner en boucle infinie.
    }
    else if(number < random){
      console.log("C'est plus grand");
      alert("C'est plus grand");
      essai++;
      test();
    }
    else if(number > random){
      console.log("c'est moins grand");
      alert("c'est moins grand");
      essai++;
      test();
    }
}

test();
