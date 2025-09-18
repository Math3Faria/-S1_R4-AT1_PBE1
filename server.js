//atividade 04  
app.get('/ano/:ano', (req, res) => {
  try {
    const ano = parseInt(req.params.ano);

    if (isNaN(ano)) {
      return res.status(400).send('Erro: Digite um ano válido.');
    }

    const bissexto = (ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0;

    if (bissexto) {
      res.send(`O ano ${ano} é bissexto.`);
    } else {
      res.send(`O ano ${ano} não é bissexto.`);
    }
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});
