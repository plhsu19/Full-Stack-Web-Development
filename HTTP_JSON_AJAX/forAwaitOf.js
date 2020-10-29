// for await of
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// for of review
const loopThroughUrls = url => {
    for (let url of urls) {
        console.log(url);
    }
}

// multiple await promises:
const getData = async function () {
    try {
        const responses = await Promise.all(urls.map((url) => fetch(url)));
        const [users, posts, albums] = await Promise.all(responses.map((response) => response.json()));
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
    } catch (err) {
        console.log(err, 'oooooooops');
    }
};

// for await of (no need of using all() anymore)
const getData2 = async function () {
    // return an array of promises, no await
    const arrayOfPromises = urls.map(url => fetch(url));
    // loop through resolved results of promises in array awaitly
    for await (let response of arrayOfPromises) {
        const data = await response.json();
        console.log(data);
    }
} 