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


const records = {

  'dot1': {
    accellerometerArray : [0, 10, 15, 10, 20, 30, 25, 27, 29, 30, 32, 30, 29, 27, 25, 27, 30, 32, 27, 30, 27, 25, 27, 26, 27, 28, 30, 30, 31, 28, 30, 32, 34, 30, 29, 27, 25, 27, 30, 32, 27, 30, 27, 25, 27, 26, 25, 26, 28, 30, 28, 26, 30, 32, 30, 28, 25, 26, 24, 26, 28, 30, 32],

    duration: '9',
    fraseminuti: 'Neither great nor terrible',

    punteggio: '6.5',
    freccina: 'a',
    numerinoscritto: '-10%',
    frasepunteggio: 'It was an honest job',

  },

  'dot2': {
    accellerometerArray : [0, 30, 35, 40, 42, 45, 48, 47, 48, 50, 49, 48, 50, 52, 50, 48, 46, 50, 52,  50, 60, 46, 45, 47, 49, 51, 47, 45, 50, 55, 50, 53, 55, 52, 55, 52, 50, 52, 50, 40, 0],

    duration: 4,
    fraseminuti: 'Brief but fierce',

    punteggio: '8.0',
    freccina: 'A',
    numerinoscritto: '+15%',
    frasepunteggio: 'Must have been a while, huh?',

  },

  'dot4': {
    accellerometerArray : [0, 25, 27, 30, 32, 30, 32, 34, 35, 36, 37, 35, 20, 22, 25, 27, 30, 32, 34, 32, 30, 32, 34, 36, 38, 36, 34, 36, 37, 40, 40, 38, 40, 39, 40, 37, 35, 38, 35, 30, 27, 25, 27, 30, 35, 36, 37, 35, 36, 35, 34, 36, 37, 37, 35, 33, 36, 37, 38, 37, 35, 37, 39, 40 ],

    duration: 17,
    fraseminuti: 'Living on the edge',

    punteggio: '5.5',
    freccina: 'a',
    numerinoscritto: "-25%",
    frasepunteggio: 'To be honest, why even bother?',

  },

  'dot5': {
    accellerometerArray : [0, 20, 25, 28, 30, 32, 30, 28, 26, 29, 30, 35, 40, 42, 45, 48, 47, 48, 50, 49, 48, 50, 49, 50, 48, 46, 50, 48,  50, 46, 45, 47, 49, 48, 47, 48, 50, 49, 48, 50, 45, 50, 48, 46, 50, 49, 47, 45, 50, 35, 36, 35, 34, 36, 37, 37, 35, 33, 36, 37, 38, 37, 35, 37, 39, 40, 0],

    duration: 8,
    fraseminuti: 'Neither great nor terrible',

    punteggio: '6.5',
    freccina: 'A',
    numerinoscritto: '+10%',
    frasepunteggio: 'It was an honest job',

  },

  'dot8': {
    accellerometerArray : [0, 20, 25, 30, 32, 34, 32, 34, 36, 34, 36, 38, 40, 38, 38 , 37, 39, 37, 35, 38, 40, 42, 44, 42, 43, 44, 45, 46, 48, 46, 48, 50, 51, 52, 53, 55, 53, 52, 53, 55, 54, 52, 53, 51, 50, 49, 45, 47, 48, 46, 49, 50, 48, 46, 45, 44, 46, 48,  50, 49, 45, 47, 48, 46, 49, 50, 48, 46, 45, 44, 46, 48,],

    duration: 11,
    fraseminuti: 'Living on the edge',

    punteggio: '8.0',
    freccina: 'A',
    numerinoscritto: "+15%",
    frasepunteggio: 'Must have been a while, huh?',

  },

  'dot9': {
    accellerometerArray : [0, 10, 15, 20, 25, 30, 35, 36, 37, 35, 37, 35, 38, 39, 41, 42, 44, 46, 44, 46, 47, 46, 45, 44, 47, 48, 46, 48 , 50, 48, 46, 48, 46, 46, 45, 44, 42, 44, 40, 42, 44, 46, 44, 46, 47, 46, 45, 44, 30],

    duration: 5,
    fraseminuti: 'Neither great nor terrible',

    punteggio: '7.0',
    freccina: 'a',
    numerinoscritto: '-10%',
    frasepunteggio: 'It was an honest job',

  },

  'dotesame': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 2,
    fraseminuti: 'Brief but fierce',

    punteggio: '9.5',
    freccina: 'A',
    numerinoscritto: '+25%',
    frasepunteggio: 'Must have been a while, huh?',

  }

}


function readRecord(key) {
  const {accellerometerArray, duration, fraseminuti, punteggio, numerinoscritto, freccina, frasepunteggio} = records[key]

  myChart.data.datasets[0].data = accellerometerArray;
  //myChart.options.scales.x.labels = accellerometerArray.map(function(value, index){return index * 10});
  myChart.options.scales.y.max = Math.max(...accellerometerArray) + 10;
  myChart.update();

  document.getElementById('minuti-performance').innerText = duration,
  document.getElementById('fraseminuti').innerText = fraseminuti,


  document.getElementById('punteggiocambia').innerText = punteggio,
  document.getElementById('freccina').innerText = freccina,
  document.getElementById('numerinoscritto').innerText = numerinoscritto,
  document.getElementById('frasepunteggio').innerText = frasepunteggio
}
