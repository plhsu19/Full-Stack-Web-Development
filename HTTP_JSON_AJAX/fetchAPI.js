const urls = [
    'https://jsonplaceholde.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json());
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(console.log)