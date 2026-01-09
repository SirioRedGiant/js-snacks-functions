/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const whatTimeIsIt = prompt("What time is it? (e.g. 12.35 p.m.)", "13.05 p.m." );


// Dichiara la funzione qui.

//! TRADITIONAL FUNCTION

function GreetingBasedOnTime(user, time) {
    const whatHour = parseFloat(time)
    if (whatHour <= 13.00) {
        return `good morning ${user}`
    }
    else if (whatHour >= 13.00 && whatHour <= 17.00) {
        return `good afternoon ${user}`
    }
    else {
        return `good evening ${user}`
    }
}


// Invoca la funzione qui e stampa il risultato in console
const GreetOntime = GreetingBasedOnTime(name, whatTimeIsIt)
console.log(GreetOntime)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.