/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const character = "A";
// Dichiara la funzione qui.

//! FUNZIONE TRADIZIONALE

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
