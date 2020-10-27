// fetch in the traditional promise way
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log);

// async await way to fetch
async function fetchTheUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}

// promise way to fetch multiple urls
const urls = [
    'https://jsonplaceholder.typicode.com/users',
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

// async await way to fetch multiple urls
const fetchURLs = async function () {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(response => response.json());
        }));
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch(err) {
        console.log(err);
    }
}