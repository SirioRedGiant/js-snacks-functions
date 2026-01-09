/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const typeOfVowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.

//! FUNZIONE TRADIZIONALE

function vowelsCounter(term, vocoidList) {
  let vocoidCounter = 0;
  for (const char of term) {
    for (const charVocal of vocoidList) {
      if (charVocal === char) {
        vocoidCounter += 1;
      }
    }
  }
  return vocoidCounter;
}


// Invoca la funzione qui e stampa il risultato in console
const numberOfVowels = vowelsCounter(word, typeOfVowels);
console.log(numberOfVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
