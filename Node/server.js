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

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('success');
})

app.listen(3000)