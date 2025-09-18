//atividade 02
const express = require('express');
const app = express();
const port = 2600;

app.use(express.json());

app.get('/calculadora', (req, res) => {
  try {
    const { operacao, numUm, numDois } = req.query;
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);

    if (isNaN(n1) || isNaN(n2)) {
      res.status(400).send('Erro:Insira dois números devem ser válidos:');
    }

    let resultado;

    if (operacao === 'soma') {
      resultado = n1 + n2;
    } else if (operacao === 'subtracao') {
      resultado = n1 - n2;
    } else if (operacao === 'multiplicacao') {
      resultado = n1 * n2;
    } else if (operacao === 'divisao') {
      if (n2 === 0) {
        res.status(400).send('Erro: Não pode dividir por zero');
      }
      resultado = n1 / n2;
    } else {
      res.status(400).send('Erro: Você escolheu uma forma não valida de operação, Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.status(200).send(`O resultado da: ${operacao} é: ${resultado}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});


app.listen(port, () => {
  console.log(`O server está rodando na porta: ${port}`);
});
