//atividade 06
const express = require('express');
const app = express();
const port = 2600;

app.use(express.json());


app.get('/imc', (req, res) => {
  try {
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      return res.status(400).send('Erro: Digite numeros para o peso e altura, e lembre-se que a altura nao pode ser 0');
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

    res.status(200).send(`Seu IMC é: ${imc.toFixed(2)}. é considerado um: ${classificacao}`);
  } catch (error) {
    res.status(500).send('Erro: Falha no servidor.');
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta: ${port}`);
});
