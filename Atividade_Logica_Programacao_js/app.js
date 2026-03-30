const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", function(req,res) {
    let valor = 100
    let porcent = valor * 0.10
    let novoValor = valor + porcent
    res.render("index", {
        aValor: valor,
        valor: novoValor
    });
});
app.get("/imc", function(req,res) {
    let peso = 70
    let altura = 1.79
    let imc = peso/(altura*altura)
    let condicao
    if (imc<=18.5){
        condicao = "Abaixo do peso"
    }
    else{
        if(imc>=18.6 && imc<=24.9){
            condicao = "Peso ideal (parabéns)"
        }
        else{
            if(imc>=25.0 && imc<=29.9){
                condicao = "Levemente acima do peso"
            }
            else{
                if(imc>=30.0 && imc<=34.9){
                    condicao = "Obesidade grau I"
                }
                else{
                    if (imc>=35.0 && imc<40){
                        condicao = "Obesidade grau II (severa)"
                    }
                    else{
                        condicao = "Obesidade grau III (mórbida)"
                    }
                }
            }
        }
    }
    res.render("imc", {
        imc: imc,
        condicao: condicao,
    });
});
app.get("/media", function(req,res) {
    let n1 = 8
    let n2 = 8
    let n3 = 8
    let n4 = 8
    let media = (n1+n2+n3+n4)/4
    let nota

    if(media>=7){
        nota = "aprovado"
    }
    else{
        nota = "reprovado"
    }
    
    res.render("media", {
       media: media,
       nota: nota
    });
});
app.get("/valor", function(req,res) {
    let valor = 50
    let nValor
    let aVistaouPix = true
    let cartaoDeCredito = false
    var formaDePagamento = 'Não especificado'
    
    if (aVistaouPix == true){
        nValor = valor - (valor * 0.15)
        formaDePagamento = 'A vista ou Pix'
    }
    else{
        if(cartaoDeCredito == true){
            nValor = valor - (valor * 0.1)
            formaDePagamento = 'Cartão de crédito'
        }
        else{
            nValor = valor
            formaDePagamento = 'Parcelado'
        }
    }
    res.render("valor", {
       valor: valor,
       novoValor: nValor,
       pagamento: formaDePagamento
    });
});
app.listen(8081, () =>
    console.log("Servidor na porta 8081")
);