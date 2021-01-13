import http from 'http';

const responseJSON = {
    name: 'Pikachu',
    skill: 'electrical attack',
}

const server = http.createServer((request, response) => {
    // console.log('request header: ', request.headers);
    // console.log('request url: ', request.url);
    // console.log('request method: ', request.method);
    // response.setHeader('Content-Type', 'application/json');
    // response.end(JSON.stringify(responseJSON));

    response.setHeader('Content-Type', 'text/html');
    response.end('<h1> Hello Server World!!!');
})

server.listen(3000);