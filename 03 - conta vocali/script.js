/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const isVowel = (letter) =>
{
    const tested = letter.toLowerCase();

    if(tested === 'a' || tested === 'e' || tested === 'i' || tested === 'o' || tested == 'u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

const numberOfVowels = (string) =>
{
    let result = 0;

    for(let i = 0; i < string.length; i++)
    {
        if(isVowel(string[i]))
        {
            result++;
        }
    }

    return result;
}

// Invoca la funzione qui e stampa il risultato in console

const numVowels = numberOfVowels(word);
console.log(numVowels);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)