/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
//! FUNZIONE TRADIZIONALE
/**
 * Funzione che saluta il nuovo utente
 * @param {string} name
 * @returns {string}
 */
function greeter(name) {
  return "Ciao " + name + " è un piacere averti qui!";
}

/**
 *! FUNZIONE MODERNA
 *  todo l'uso di ${name} sostituisce la concatenzione classica il RETURN è implicito nelle arrow function con una sola riga di codice, si possono omettere anche le parentesi graffe 

 *? const greeter = (name) => `Ciao ${name} è un piacere averti qui!`
*/

// Invoca la funzione qui e stampa il risultato in console
console.log(greeter(name));
//Risultato atteso se si passa 'Mario': // ciao Mario
console.log(greeter(userName));
