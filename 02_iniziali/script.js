/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

//!FUNZIONE TRADIZIONALE

/**
 *  Funzione che dato un array passatogli restituisce un array con le iniziali delle parole dell'array fornito
 *  @param {string[]} arraysString 
 *  le stringhe possono essere trattate quasi come se fossero array di caratteri. Aggiungendo un secondo [0], stai chiedendo il carattere alla posizione 0 della stringa appena trovata. 
    se arraysString[i] è "Mario", allora arraysString[i][0] è "M"
    
 *? initial.push(arraysString[i][0]) => modo per accedere alla prima lettera
 *  @returns {string[]}
 */
function initialWordsTaker(arraysString) {
  const initial = [];
  for (let i = 0; i < arraysString.length; i++) {
    initial.push(arraysString[i][0]);
  }
  return initial;
}

//!FUNZIONE MODERNA => arrow function
/**
 *todo  Funzione che dato un array passatogli restituisce un array con le iniziali delle parole dell'array fornito
 *      @param {string[]} arraysString
 **      Qui utilizzo il ciclo "for....of" per ogni iterazione:
 *          È l'equivalente del for name in names: di Python.
 *          La funzione prende un elemento dall'array arraysString
 *          E lo assegna temporaneamente alla variabile locale arrayString
 **      Estrazione carattere e aggiunta alla nuova lista:
 *          arrayString[0]: Accede al primo carattere della stringa corrente (posizione 0)
 *          .push(...): Prende quel carattere e lo aggiunge alla fine dell'array INITIAL
 *      @returns {string[]}
 */
const initialWordsTaker = (arraysString) => {
  const initial = [];
  for (const arrayString of arraysString) {
    initial.push(arrayString[0]);
  }
  return initial;
};
// Invoca la funzione qui e stampa il risultato in console
const initials = initialWordsTaker(names);
console.log(initials);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
