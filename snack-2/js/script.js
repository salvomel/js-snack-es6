/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const teamsData = [
    {
        nome: 'Cremonese',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Brescia',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Ascoli',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Parma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Lecce',
        puntiFatti: 0,
        falliSubiti: 0
    }
];


// Genero numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti

for (let i=0; i<teamsData.length; i++) {
    const thisTeam = teamsData[i];

    const teamPoints = getRndInteger(0, 100);
    const teamFouls = getRndInteger(0, 300);
    
    thisTeam.puntiFatti = teamPoints;
    thisTeam.falliSubiti = teamFouls;
}

console.log(teamsData);

// Creo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampo tutto in console

const newTeamData = [];
for (let i=0; i<teamsData.length; i++) {
    const thisTeam = teamsData[i];

    const {nome, falliSubiti} = thisTeam;
    const newTeam = {
        nome,
        falliSubiti
    }

    newTeamData.push(newTeam);
}

console.log(newTeamData);


// FUNCTIONS
// Funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}