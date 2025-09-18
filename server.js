const express = require('express');
const app = express();
const port = 2600;

app.use(express.json());

app.get('/soma/:numUm/:numDois', (req, res) => {
  try {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
      return res.status(400).send('Digite números');
    }

    const resultado = numUm + numDois;
    res.send(`Soma: ${resultado}`);
  } catch (error) {
    res.status(500).send('Server falhou');
  }
});

app.get('/subtracao/:numUm/:numDois', (req, res) => {
  try {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
      return res.status(400).send('Digite números');
    }

    const resultado = numUm - numDois;
    res.send(`Subtração: ${resultado}`);
  } catch (error) {
    res.status(500).send('Server falhou');
  }
});

app.get('/multiplicacao/:numUm/:numDois', (req, res) => {
  try {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
      return res.status(400).send('Digite números');
    }

    const resultado = numUm * numDois;
    res.send(`Multiplicação: ${resultado}`);
  } catch (error) {
    res.status(500).send('Server falhou');
  }
});

app.get('/divisao/:numUm/:numDois', (req, res) => {
  try {
    const numUm = parseFloat(req.params.numUm);
    const numDois = parseFloat(req.params.numDois);

    if (isNaN(numUm) || isNaN(numDois)) {
      return res.status(400).send('Digite números');
    }

    if (numDois === 0) {
      return res.status(400).send('Não da pra dividir por zero');
    }

    const resultado = numUm / numDois;
    res.send(`Divisão: ${resultado}`);
  } catch (error) {
    res.status(500).send('Server falhou');
  }
});

app.listen(port, () => {
  console.log(`O server está rodando na porta: ${port}`);
});

