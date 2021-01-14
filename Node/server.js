// build a simple server using express
import express from 'express';

const app = express();

const pokemon = {
    pikachu: 'electircal_attack',
}
// express automatically fillout the content/type for as according 
// to the content we give to it
// * req and res are common naming in express
app.post('/', (req, res) => {
    res.send(pokemon);
})

app.listen(3000)