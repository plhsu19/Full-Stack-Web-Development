const fs = require('fs');

// Asynchronously read file
fs.readFile('./hello.txt', (err, data) => {
    console.time('executionTime')
    if (err) {
        console.log('errrrorrr!');
    }
    console.log('async read', data.toString('utf-8'));
    console.timeEnd('executionTime')
})

// Synchronously read files
const textFile = fs.readFileSync('./hello.txt');
console.log('sync read: ', textFile.toString());

// Append file
// fs.appendFile('./hello.txt', ' It is so convient!', (err) => {
//     if (err) console.log(err);
// })

// Write the given data into the path as binary codes (using the utf8 as default)
// fs.writeFile('./bye.txt', 'sad to see you go', err => {
//     if (err) {
//         console.log('errorrr: ', err);
//     }
// })

// Delete
// fs.unlink('./bye.txt', err => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('bye.txt deleted!')
// })