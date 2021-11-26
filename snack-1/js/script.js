/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal nel DOM */

const bikesData = [
    {
        nome: 'Ciclocross',
        peso: 12
    },
    {
        nome: 'Endurance',
        peso: 9
    },
    {
        nome: 'Scatto fisso',
        peso: 7
    },
    {
        nome: 'Aeroad',
        peso: 10
    },
    {
        nome: 'Bmx',
        peso: 8
    }
];

// Trovo bici con peso minore

// Variabile
let lightestBike = bikesData[0];

// Ciclo for
for (let i=0; i<bikesData.length; i++) {
    const thisBike = bikesData[i];

    // Se peso di thisBike < della varibile
    if (thisBike.peso < lightestBike.peso) {
        lightestBike = thisBike;
    }
}

// Stampo con destructuring e template literal nel DOM
const {nome, peso} = lightestBike;

const bikeHTML = `
    <h3>Nome bici: ${nome}</h3>
    
    <h3>Peso: ${peso} kg</h3>
    
`;

document.getElementById('bikes-container').innerHTML = bikeHTML;