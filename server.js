//atividade 02
app.get('/calculadora', (req, res) => {
  try {
    const { operacao, numUm, numDois } = req.query;
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);

    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).send('Erro: os dois números devem ser válidos:');
    }

    let resultado;
    let nomeDaOperacao;

    if (nomeDaOperacao == 'soma') {
      resultado = n1 + n2;
      nomeDaOperacao = 'soma';
    } else if (nomeDaOperacao == 'subtracao') {
      resultado = n1 - n2;
      nomeDaOperacao = 'subtração';
    } else if (nomeDaOperacao == 'multiplicacao') {
      resultado = n1 * n2;
      nomeDaOperacao = 'multiplicação';
    } else if (nomeDaOperacao == 'divisao') {
      if (n2 == 0) {
        return res.status(400).send('Erro: Não pode dividir por zero');
      }
      resultado = n1 / n2;
      nomeDaOperacao = 'divisão';
    } else {
      return res.status(400).send('Erro: Você escolheu uma forma não valida de operação, Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.send(`O resultado da: ${nomeDaOperacao} é: ${resultado}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});