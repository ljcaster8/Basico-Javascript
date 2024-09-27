document.addEventListener("DOMContentLoaded", function() {


    // Imagina que está fazendo uma requisição a uma API e retorna uma lista de produtos

    const produtos = [
        {nome: "Notebook Gamer", preco: 4500, categoria: "eletronicos"},
        {nome: "Smartphone", preco: 6500, categoria: "eletronicos"},
        {nome: "Churrasqueira", preco: 800, categoria: "Utilitarios"},
    ];

    console.log(produtos);
    console.log(produtos[0]);
    console.log(produtos[0].preco);
    console.log(produtos[0]["nome"]);

    function inserirProdutos () {
        let containerProdutos = document.getElementById("produtos");

        produtos.forEach(produto => {
            console.log(produto)
            let produtoDiv = document.createElement("div");

            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Categoria: R$ ${produto.categoria}</p>
            `;

            containerProdutos.appendChild(produtoDiv);
        })
    }

    inserirProdutos();
});