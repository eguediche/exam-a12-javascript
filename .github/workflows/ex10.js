function filtrerNegatifs(tab) {
    if (tab < 0) {
        return [tab]
    }
  }
  
  console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]