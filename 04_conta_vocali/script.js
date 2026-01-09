/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
const typeOfVowels = ["a", "e", "i", "o", "u"];

// Dichiara la funzione qui.

//! FUNZIONE TRADIZIONALE
/**
 *todo      Funzione che data una stringa ed un array di vocali ritorna il numero di vocali presenti all'interno della stringa fornitogli
            definita la variabile con let perchè deve modificarsi ad ogni ciclo aumentando
            Utilizzo il doppio ciclo prendendo col ciclo esterno una lettera e con quello interno controllo se quella lettera coincide con una delle vocali
 *          @param {string} term 
 *          @param {string[]} vocoidList 
 *          @returns 
 */
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

//! ARROW FUNCTION
// /**
//  *todo      Funzione che data una stringa ed un array di vocali ritorna il numero di vocali presenti all'interno della stringa fornitogli
//             definita la variabile con let perchè deve modificarsi ad ogni ciclo aumentando
//             Utilizzo il doppio ciclo prendendo col ciclo esterno una lettera e con quello interno controllo se quella lettera coincide con una delle vocali
//  *          @param {string} terms
//  *          @param {string[]} vocoidList
//  *          @returns
//  */
//^  const vowelsCounter = (terms, vocoidList) => {
//^    let vocoidCounter = 0;
//^    for (const char of terms) {
//^      for (const charVocal of vocoidList) {
//^        if (charVocal === char) vocoidCounter += 1;
//^      }
//^    }
//^    return vocoidCounter;
//^  };

// Invoca la funzione qui e stampa il risultato in console
const numberOfVowels = vowelsCounter(word, typeOfVowels);
console.log(numberOfVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
