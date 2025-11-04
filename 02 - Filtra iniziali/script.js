/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const createArrayStartingWith = (array, character) =>
{
    const result = [];

    for(let i = 0; i < array.length; i++)
    {
        if(array[i].charAt(0).toLowerCase() === character.toLowerCase())
        {
            result.push(array[i]);
        }
    }

    return result;
}

// Invoca la funzione qui e stampa il risultato in console

const arrayStartingWith = createArrayStartingWith(names, "a");
console.log(arrayStartingWith);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]