
function premiereLettreMajuscule(chaine) {
    function strUcFirst(a) {
    return (a+'').charAt(0).toUpperCase() + (a+'').substr(1);
  }
       
       const words = chaine.split(' ');
       return strUcFirst(chaine)
     
  }
  
  console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"