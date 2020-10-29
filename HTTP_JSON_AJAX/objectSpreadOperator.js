// object spread operator
const animals = {
    tiger: 25, 
    lion: 5,
    moneky: 2,
    bird: 30
}


function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

// to extract the instance variable from objects
const {tiger, lion, ...rest} = animals;

objectSpread(tigerX, lion, rest)



// ES6 spread the array
const array = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sum(...array))