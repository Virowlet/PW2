const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
    const num1 = 4;
    const num2 = 2;
    const soma = num1 + num2;
    const multiplicacao = num1 * num2;
    const subtracao = num1 - num2;
    const divisao = num1 / num2;

    nomeProduto = "Vaso";
    const valor = 10;
    const quantidade = 200;
    dtaVen

    res.render("index", {
        num1: num1,
        num2: num2,
        resultadoSo: soma,
        resultadoSu: subtracao,
        resultadoMu: multiplicacao,
        resultadoDi: divisao
    });
});

app.listen(8081, () =>
    console.log("Servidor na porta 8081")
);