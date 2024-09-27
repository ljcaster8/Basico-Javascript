// FOR

// FOR indexado

for (let contador = 0; condator < 10; condador++) {
    console.log(contador);
}

let qtdProduto = +prompt("digite a qtd de produto q deseja exibir");

for (let i = 0; i < qtdProduto; i++) {
    console.log(`Produto ${i+1}`)

    //criar tags <p></p> de forma dinamica
    let pProuto = document.createElement("p");

    // <p> aqui é o innerHTML
    pProduto.innerHTML = `Produto ${i+1}`;

    document.body.appendChild(pProduto);
}


