// initialize socket variable on client
const socket = io();

// tieni traccia del massimo delle volte che il bottone è stato premuto
let maxHeart = 0;
let accellerometerArray = [];

// ascolta il saluto del server
socket.on('greetings', (message) => {

    // stampa il messaggio in console
    console.log(message);

});

// bottone premuto
socket.on('buttonPressed', (message2) => {
    //console.log('bottonePremuto', message2);
     updateValues();
});

// accellerometro
socket.on('accellerometer', (message) => {
    //const accArray = message.split(', ');
    //const newAccValue = Math.max(...accArray);
    accellerometerArray.push(message);
     //console.log('acc', message);
});

// galvanico
socket.on('galvanic', (message) => {
    console.log('gal', message);
});

// battito
socket.on('heart', (message) => {
    if (+message > maxHeart) maxHeart = +message;
    console.log('nuovo battito massimo: ', maxHeart);
});

//document.querySelector('button').addEventListener('click', updateValues);

function updateValues () {
    // aggiorna il valore dell'accelerometro
    //document.querySelector('#accVal').textContent = accellerometerArray.join(', ');
    myChart.data.datasets[0].data = accellerometerArray;
    //myChart.options.scales.x.labels = accellerometerArray.map(function(value, index){return index * 10});
    myChart.options.scales.y.max = Math.max(...accellerometerArray) + 10;
    myChart.update();
    
}
