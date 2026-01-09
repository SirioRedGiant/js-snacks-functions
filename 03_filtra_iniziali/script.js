/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const character = "A";
// Dichiara la funzione qui.

//! FUNZIONE TRADIZIONALE
/**
 *todo      FUNZIONE CHE DATO UN ARRAY E UNA LETTERA RESTITUISCE UN ARRAY CONTENENTE STRINGHE CHE INIZIANO CON LO STESSO CARATTERE
            Nel ciclo controllo che il carattere dato "firstCharacter" sia identico al carattere della stringa fornito. Se è identico lo aggiungo alla nuova lista "initial"
 *          @param {string[]} list 
 *          @param {string} firstCharacter 
 *          @returns {string[]}
 */
function wordInitialComparator(list, firstCharacter) {
  const initial = [];
  for (let i = 0; i < list.length; i++) {
    if (firstCharacter === list[i][0]) {
      initial.push(list[i]);
    }
  }
  return initial;
}
// Invoca la funzione qui e stampa il risultato in console
const initials = wordInitialComparator(names, character);
console.log(initials);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
