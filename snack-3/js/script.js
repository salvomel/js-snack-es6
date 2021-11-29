/* Snack 3
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter. */

const names = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
const min = 2;
const max = 5;

// Svolgimento con forEach
const newArray_One = [];
names.forEach((element, index) => {
    
    if (index > min && index < max) {
        newArray_One.push(element);
    }
});
console.log(newArray_One);


// Svolgimento con filter
const newArray_Two = names.filter((element, index) => {
    return index > min && index < max;
});
console.log(newArray_Two);
