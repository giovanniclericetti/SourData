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
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'brief but fierce',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  },

  'dot2': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'Giorgia Fulghieri Totalissima Leggenda',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  },

  'dot4': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'Giorgia Fulghieri Totalissima Leggenda',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  },

  'dot5': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'Giorgia Fulghieri Totalissima Leggenda',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  },

  'dot8': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'Giorgia Fulghieri Totalissima Leggenda',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  },

  'dot9': {
    accellerometerArray : [20, 40, 45, 60, 45, 50, 55, 50, 55, 60, 70, 60, 80, 80, 75, 85, 90, 85, 90,  85, 85, 80, 85, 90, 75, 70, 60, 50, 70, 60, 55, 45, 40, 30, 20, 30, 10, 0],

    duration: 5,
    fraseminuti: 'Giorgia Fulghieri Totalissima Leggenda',

    punteggio: 160,
    freccina: 'a',
    numerinoscritto: +10,
    frasepunteggio: 'Io ci provo a sbagliare ma sono fortissimo',

  }

}


function readRecord(key) {
  const {accellerometerArray, duration, fraseminuti, punteggio, numerinoscritto, frasepunteggio} = records[key]

  myChart.data.datasets[0].data = accellerometerArray;
  //myChart.options.scales.x.labels = accellerometerArray.map(function(value, index){return index * 10});
  myChart.options.scales.y.max = Math.max(...accellerometerArray) + 10;
  myChart.update();

  document.getElementById('minuti-performance').innerText = duration,
  document.getElementById('fraseminuti').innerText = fraseminuti,


  document.getElementById('punteggiocambia').innerText = punteggio,
  document.getElementById('numerinoscritto').innerText = numerinoscritto,
  document.getElementById('frasepunteggio').innerText = frasepunteggio
}
