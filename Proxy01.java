// Objeto Real
class ServicoReal {
    public void executar() {
        System.out.println("Executando o serviço real...");
    }
}
 
// Proxy
class ProxyServico {
    private ServicoReal servicoReal;
 
    public ProxyServico() {
        this.servicoReal = new ServicoReal();
    }
 
    public void executar() {
        System.out.println("Antes da execução do serviço.");
        servicoReal.executar();
        System.out.println("Depois da execução do serviço.");
    }
}
 
public class Proxy01 {
    public static void main(String[] args) {
        ProxyServico proxy = new ProxyServico();
        proxy.executar();
    }
}