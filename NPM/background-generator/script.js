// import {without} from 'lodash'
var _ = require('lodash'); // node.js style import modules, need browserify to use this syntax in the browser

console.log(_.without);

var lodashArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer: ', _.without(lodashArray, 3));


var css = document.querySelector('h3');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var body = document.getElementById('gradient');

// Notion
function setGradient() {
    body.style.background = 
    'linear-gradient(to right, ' + input1.value + ', ' 
    + input2.value + ')';
    css.textContent = body.style.background + ';';
}

// Initial operations
body.style.background = 
'linear-gradient(to right, ' + input1.value + ', ' 
+ input2.value + ')';
css.textContent = body.style.background + ';';

input1.addEventListener('input', setGradient);
input2.addEventListener('input', setGradient);
