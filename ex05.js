function compterVoyelles(chaine) {
    let number = 0;
    let voyelles = ["a", "e", "i", "o", "u"]
    if (chaine == voyelles) {
        number++
    }
    return number
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3