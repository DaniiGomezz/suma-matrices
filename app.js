import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/sumar', (req, res) => {
    const { matriz1, matriz2 } = req.body;
    const resultado = sumarMatrices(matriz1, matriz2);
    res.json({ resultado });
});

function sumarMatrices(matriz1, matriz2) {
    const resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        resultado.push([]);
        for (let j = 0; j < matriz1[i].length; j++) {
            resultado[i].push(matriz1[i][j] + matriz2[i][j]);
        }
    }
    return resultado;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
