//atividade 06
app.get('/imc', (req, res) => {
  try {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      return res.status(400).send('Erro: Peso e altura devem ser números válidos e a altura deve ser maior que zero.');
    }

    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    res.send(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta: ${port}`);
});
