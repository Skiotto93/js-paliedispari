/*---------------
    MAIN
---------------*/
//Chiedo all'utente di inserire una parola
const word = prompt("Inserisci la parola")

if (palindrome(word)) {
    alert("la parola è palindroma")
} else {
    alert("la parola non è palindroma")
}
/*---------------
    FUNCTIONS
---------------*/

//Data la parola inserita dall'utente verificare che la parola sia palindroma

function palindrome(word) {
    let wordreverse = "";
    for (let i = word.length - 1; i >= 1; i--) {
        wordreverse += word[i];
    } 
    if (word === wordreverse) {
        return true;
    }
    return false;
}