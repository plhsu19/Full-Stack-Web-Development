//Name: Pei-Lun Hsu
//Date: 25.10.2020
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(
    () => {
      resolve('success');
    }
    , 4000
  );
});
// #2) Run the above promise and make it console.log "success"
promise1.then((result) => { console.log(result) });
//or 
promise1.then(console.log)

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve( 
  setTimeout(() => {
    console.log('success');
  }, 4000)
)

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => { console.log('Ooops something went wrong') });

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swai.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map((url) => {
  return fetch(url).then(response => response.json())
}))
  .then(people => { people.forEach(console.log); })
  .catch((err) => { console.log('error occurs:', err); });

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
// console: error occurs
