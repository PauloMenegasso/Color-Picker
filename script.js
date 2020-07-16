window.addEventListener('load', start);
var valueRed = null;
var valueGreen = null;
var valueBlue = null;
var currentRed = null;
var currentGreen = null;
var currentBlue = null;
var root = document.documentElement;

function start() {
  var valueRed = document.querySelector('#valueRed');
  var valueGreen = document.querySelector('#valueGreen');
  var valueBlue = document.querySelector('#valueBlue');
  var currentRed = document.querySelector('#currentRed');
  var currentGreen = document.querySelector('#currentGreen');
  var currentBlue = document.querySelector('#currentBlue');

  valueRed.addEventListener('input', changeRed);
  valueGreen.addEventListener('input', changeGreen);
  valueBlue.addEventListener('input', changeBlue);
  function changeRed(event) {
    var valueRed = document.querySelector('#valueRed');
    console.log('mudei o vermelho');
    console.log(currentRed.value);
    currentRed.placeholder = valueRed.value;
    document.getElementById('currentRed').innerText = currentRed;
    root.style.setProperty('--R', valueRed.value);
  }
  function changeGreen(event) {
    var valueGreen = document.querySelector('#valueGreen');
    console.log('mudei o verde');
    console.log(valueGreen.value);
    currentGreen.placeholder = valueGreen.value;
    document.getElementById('currentGreen').innerText = currentGreen;
    root.style.setProperty('--G', valueGreen.value);
  }
  function changeBlue(event) {
    var valueBlue = document.querySelector('#valueBlue');
    console.log('mudei o azul');
    console.log(valueBlue.value);
    currentBlue.placeholder = valueBlue.value;
    document.getElementById('currentBlue').innerText = currentBlue;
    root.style.setProperty('--B', valueBlue.value);
  }
}
