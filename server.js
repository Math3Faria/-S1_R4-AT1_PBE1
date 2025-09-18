//atividade 03
const express = require('express');
const app = express();
const port = 2600;

app.use(express.json());


app.get('/operacao/:tipo', (req, res) => {
  try {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);

    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).send('Erro: Insira dois números válidos');
    }

    let resultado;
    switch (tipo) {
      case 'soma':
        resultado = n1 + n2;
        break;
      case 'subtracao':
        resultado = n1 - n2;
        break;
      case 'multiplicacao':
        resultado = n1 * n2;
        break;
      case 'divisao':
        if (n2 === 0) {
          return res.status(400).send('Erro: Não pode dividir por zero');
        }
        resultado = n1 / n2;
        break;
      default:
        return res.status(400).send('Erro: Tipo de operação inválido. Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.status(200).send(`O resultado da ${tipo} é: ${resultado}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});

app.listen(port, () => {
  console.log(`O server está rodando na porta: ${port}`);
});
