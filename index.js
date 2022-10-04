import axios from "axios";
import express from 'express'

const app = express();
app.use(express.static('frontend'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    axios.get('https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json').then(response => {
    res.render('index', { candidates: response.data.cand });
    }).catch(error => {
        res.render('error', { error });
    });
});

app.listen(8080, () => {
    console.log('http://localhost:8080');
});