# Objeto Real

class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def exibir_detalhes(self):
        print(f"Produto: {self.nome}, Preço: R$ {self.preco:.2f}")

# Proxy - CLASSE PROXY PRODUTO

class ProxyProduto:
    def __init__(self, produto):
        self.produto = produto

    def exibir_detalhes(self):
        print("Aguardando autenticação...")
        self.autenticar()
        self.produto.exibir_detalhes()

    def autenticar(self):
        print("Autenticando usuário...")
        # INSERIR LOGICA DE AUTENTICACAO AQUI
        print("Usuário autenticado com sucesso")

# Uso do proxy cliente

produto_real = Produto("Camiseta", 39.90)
proxy_produto = ProxyProduto(produto_real)

proxy_produto.exibir_detalhes()