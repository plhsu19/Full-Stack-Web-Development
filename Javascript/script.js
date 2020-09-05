// // -----------IIFE-------------
// var myApp = {}

// // j2 
// (funtion() {
//     myApp.add = function(a, b) {
//         return a + b;
//     }
// })();

//-------------common JS + Browserify--------------
// import the function in js1 script into js2 scirpt
// js1
// module.exports = function add(a, b) {
//     return a + b;
// } 

// // js2
// var add = require("./add");

//-------------ES6 + Webpack2---------------
// js1 (add.js)
// could export multiplee functions
export const add = (a, b) => a + b;
// export only 1 function
export default function add(a, b) {
    return a + b;
}
// import from js1
// could import multiple function
import {add} from './add'

// import 1 function when using 'default' keyword
import add from './add'

