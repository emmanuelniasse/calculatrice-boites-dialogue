let choice;
let firstNb;
let secondNb;
let resultat;

// functions

function addition(numberA, numberB){
    return numberA + numberB;
}

function multiplication(numberA, numberB){
    return numberA * numberB;
}

function soustraction(numberA, numberB){
    return numberA - numberB;
}

function division(numberA, numberB){
    if (numberB == 0){
        throw new Error(alert('Impossible de diviser par 0.'));
    }
    return numberA / numberB;
}


// choices

do{
    choice    = Number(prompt('Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n'));
} while (isNaN(choice) || choice > 4 || choice < 1);

do{
    firstNb  = Number(prompt('Choisissez votre premier nombre.'));
    secondNb  = Number(prompt('Choisissez votre deuxième nombre.'));
} while (isNaN(firstNb && secondNb));


// call the function

try {
    switch (choice){
        case 1 :
            resultat = addition(firstNb, secondNb);
            break;
        case 2 :
            resultat = multiplication(firstNb, secondNb);
            break;
        case 3 :
            resultat = soustraction(firstNb, secondNb);
            break;
        case 4 :
            resultat = division(firstNb, secondNb);
            break;
        default:
            throw new Error('Il y a une erreur.');
    }
    // show the result 
    alert('Voici le resultat : ' + resultat);
}
catch(error){

    // show the error
    alert(error.name);
}

