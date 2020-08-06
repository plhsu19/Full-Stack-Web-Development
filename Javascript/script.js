var toDos = [
    'clean room',
    'practive JS',
    'exercise',
    'wash teeth',
    'eat healthy'
];
var toDos2 = [
    'clean room!',
    'practive JS!',
    'exercise!',
    'wash teeth!',
    'eat healthy!'
];
var len = toDos.length;
// for (var i = 0; i < len; i++) {
//     toDo.pop();
// }

// var count = 10;
// while (count > 10) {
//     console.log('while' + count);
//     count -= 1;
// }

// var count2 = 10;
// do {
//     console.log(count2);
//     console.log('this is in do statememt'); 
//     count2 -= 1;
// } while (count2 > 10)
function lambda(toDo, i) {
    console.log(toDo, i);
}

toDos.forEach(lambda);
toDos2.forEach(lambda);























