function dansPlage(nombre, min, max) {
	if (nombre < min ) {
        return false
    }

    else if (nombre > max) {
        return false
    }

    else {
        return true
    }
}

console.log(dansPlage(5, 1, 10)); // Résultat attendu : true
console.log(dansPlage(15, 1, 10)); // Résultat attendu : false