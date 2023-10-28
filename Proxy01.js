// Objeto Real

class ServicoReal {
    executar() {
      console.log("Executando o serviço real...");
    }
  }
  
  // Proxy
  
  class ProxyServico {
    constructor(){
    this.servicoReal = new ServicoReal();

    }
  
    executar() {
      console.log("Antes da execução do serviço.");
      this.servicoReal.executar();
      console.log("Depois da execução do serviço.");
    }
  }
  
  // Uso do proxy cliente
  
  const proxy = new ProxyServico();
  proxy.executar();
  