function greetings(isStudent) {
	if (isStudent === true) {
        return "Bienvenue cher élève"
    }
    
    else if (isStudent === false) {
        return "Bienvenue cher parent"
    }
}

console.log(greetings(true)); // Résultat attendu : "Bienvenue cher élève"
console.log(greetings(false)); // Résultat attendu : "Bienvenue cher parent"