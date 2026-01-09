/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
/**
 *  Funzione che dato un array passatogli restituisce un array con le iniziali delle parole dell'array fornito
 *  @param {string[]} list 
 *  le stringhe possono essere trattate quasi come se fossero array di caratteri. Aggiungendo un secondo [0], stai chiedendo il carattere alla posizione 0 della stringa appena trovata. 
    se list[i] è "Mario", allora list[i][0] è "M"
 *? initial.push(list[i][0]) => modo per accedere alla prima lettera
 *  @returns {string[]}
 */
function initialWordsTaker(list) {
  const initial = [];
  for (let i = 0; i < list.length; i++) {
    initial.push(list[i][0]);
  }
  return initial;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialWordsTaker(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
