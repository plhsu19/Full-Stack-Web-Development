const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
]

// await way of multiple promises
Promise.all(urls.map((url) => {
    return fetch(url).then(response => response.json())
}))
    .then(people => {
        throw Error;
        people.forEach(console.log);
    })
    .catch((err) => { console.log('solve this error!!!', err); })
    .finally(() => console.log('extra'))
