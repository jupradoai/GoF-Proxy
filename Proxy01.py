# Objeto Real

class ServicoReal:
    def executar(self):
        print("Executando o serviço real...")

# Proxy

class ProxyServico:
    def __init__(self):
        self.servico_real = ServicoReal()

    def executar(self):
        print("Antes da execução do serviço.")
        self.servico_real.executar()
        print("Depois da execução do serviço.")

# Uso do proxy cliente

proxy = ProxyServico()
proxy.executar()
