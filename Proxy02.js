// Objeto Real

class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

// Proxy -  CLASSE PROXY PRODUTO

class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }

    exibirDetalhes(){
        console.log("Aguardando autenticacao...");
        this.autenticar();
        this.produto.exibirDetalhes();
    }

    autenticar(){
        console.log("Autenticando usuario...");
        // INSERIR LOGICA DE AUTENTICACAO AQUI
        console.log("Usuário autenticado com sucesso");
    }
}

// Uso do proxy cliente

const produtoReal = new Produto("Camiseta", 39.90);
const proxyProduto = new ProxyProduto(produtoReal);

proxyProduto.exibirDetalhes();