//atividade 05
const express = require('express');
const app = express();
const port = 2600;

app.use(express.json());

app.get('/saudacao/:nome', (req, res) => {
  try {
    const nome = req.params.nome;
    const hora = parseInt(req.query.hora);

    if (isNaN(hora) || hora < 0 || hora > 23) {
      return res.status(400).send('Erro: A hora deve ser um número entre 0 e 23.');
    }

    let saudacao;
    if (hora >= 6 && hora < 12) {
      saudacao = 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
      saudacao = 'Boa tarde';
    } else {
      saudacao = 'Boa noite';
    }

    res.status(200).send(`${saudacao}, ${nome}!`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});

app.listen(port, () => {
  console.log(`O server está rodando na porta: ${port}`);
});
