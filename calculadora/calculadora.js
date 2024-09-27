document.getElementById("somar").addEventListener("click", function () {
    let primeirNum = +document.getElementById("primeiro-numero").value;
    let segundoNum = +document.getElementById("segundo-numero").value;
    
    let soma = primeirNum + segundoNum;
    
    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da soma é: ${soma}`;
})

function subtrair() {
    let primeirNum = +document.getElementById("primeiro-numero").value;
    let segundoNum = +document.getElementById("segundo-numero").value;
    
    let sub = primeirNum - segundoNum;
    
    let pResultado = document.getElementById("resultado");
    pResultado.innerHTML = `O resultado da subtração é: ${sub}`;
}

// desafio : divisao com verificação de numero 0

