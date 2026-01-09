/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function initialWordsTaker(list) {
  const initial = [];
  for (let i = 0; i < names.length; i++) {
    initial.push(list[i][0]);
  }
  return initial;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialWordsTaker(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
