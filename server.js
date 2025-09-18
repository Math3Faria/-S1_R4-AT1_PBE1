//atividade 02
app.get('/calculadora', (req, res) => {
  try {
    const { operacao, numUm, numDois } = req.query;
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);

    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).send('Erro: numUm e numDois devem ser números válidos.');
    }

    let resultado;
    let operacaoNome;

    if (operacao === 'soma') {
      resultado = n1 + n2;
      operacaoNome = 'soma';
    } else if (operacao === 'subtracao') {
      resultado = n1 - n2;
      operacaoNome = 'subtração';
    } else if (operacao === 'multiplicacao') {
      resultado = n1 * n2;
      operacaoNome = 'multiplicação';
    } else if (operacao === 'divisao') {
      if (n2 === 0) {
        return res.status(400).send('Erro: Não é possível dividir por zero.');
      }
      resultado = n1 / n2;
      operacaoNome = 'divisão';
    } else {
      return res.status(400).send('Erro: Operação inválida. Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.send(`Resultado da ${operacaoNome}: ${resultado}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});