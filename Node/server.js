// build a simple server using express
import express from 'express';

const app = express();

const pokemons = {
    pikachu: 'electircal_attack',
}
// middleware to parse the body of message in different form
// eg, urlencoded, raw(JSON)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/:id', (req, res) => {
    // access the query in the GET request
    // console.log(req.query); 

    // access the header of the request
    // console.log(req.headers);

    // access the parameter values of the URL => deprecated?
    console.log(req.params);

    // access the body of the request, pre-processed by middlewares
    // console.log(req.body );
    res.send('access root');
})

app.listen(3000)