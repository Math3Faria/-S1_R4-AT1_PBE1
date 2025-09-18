//atividade 03
app.get('/operacao/:tipo', (req, res) => {
  try {
    const { tipo } = req.params;
    const { numUm, numDois } = req.query;
    const n1 = parseFloat(numUm);
    const n2 = parseFloat(numDois);

    if (isNaN(n1) || isNaN(n2)) {
      return res.status(400).send('Erro: numUm e numDois devem ser números válidos.');
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
          return res.status(400).send('Erro: Não é possível dividir por zero.');
        }
        resultado = n1 / n2;
        break;
      default:
        return res.status(400).send('Erro: Tipo de operação inválido. Use soma, subtracao, multiplicacao ou divisao.');
    }

    res.send(`Resultado da ${tipo}: ${resultado}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});