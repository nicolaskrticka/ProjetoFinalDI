// Conteúdo dos cartões. Para adicionar um conceito, basta acrescentar uma linha aqui.
// Campos: t = título, cat = categoria, ic = emoji, txt = explicação, ex = exemplo/detalhe
var conteudos = [
  { t:"HTTP", cat:"Protocolo", ic:"🌍", txt:"Protocolo da web. O navegador faz um pedido e o servidor devolve a página.", ex:"Porta 80" },
  { t:"HTTPS", cat:"Protocolo", ic:"🔒", txt:"HTTP com criptografia TLS. Protege senhas e dados contra espionagem.", ex:"Porta 443" },
  { t:"TCP", cat:"Protocolo", ic:"📦", txt:"Entrega os dados com confirmação, na ordem certa, e reenvia o que se perder.", ex:"Sites, e-mail, downloads" },
  { t:"UDP", cat:"Protocolo", ic:"⚡", txt:"Envia sem confirmar. É mais rápido e aceita pequenas perdas.", ex:"Chamadas de vídeo, jogos online" },
  { t:"IP", cat:"Protocolo", ic:"📍", txt:"Dá endereço aos dispositivos e define o caminho dos pacotes entre redes.", ex:"IPv4 e IPv6" },
  { t:"DNS", cat:"Protocolo", ic:"📖", txt:"A lista telefônica da internet: traduz nomes como google.com em endereços IP.", ex:"Porta 53" },
  { t:"DHCP", cat:"Protocolo", ic:"🎟️", txt:"Entrega IP, máscara e gateway automaticamente a quem entra na rede.", ex:"Portas 67 e 68" },
  { t:"FTP", cat:"Protocolo", ic:"📁", txt:"Transfere arquivos entre computadores. Sem criptografia; prefira SFTP.", ex:"Porta 21" },
  { t:"SMTP", cat:"Protocolo", ic:"📤", txt:"Envia e-mails entre servidores.", ex:"Portas 25 e 587" },
  { t:"IMAP e POP3", cat:"Protocolo", ic:"📥", txt:"Recebem e-mails. O IMAP mantém tudo no servidor; o POP3 baixa para o aparelho.", ex:"Portas 143 e 110" },
  { t:"SSH", cat:"Protocolo", ic:"🖥️", txt:"Acesso remoto seguro a outro computador pela linha de comando.", ex:"Porta 22" },
  { t:"ARP", cat:"Protocolo", ic:"🔎", txt:"Descobre o endereço MAC de um dispositivo a partir do seu IP, na rede local.", ex:"Camada 2/3" },
  { t:"ICMP", cat:"Protocolo", ic:"📡", txt:"Mensagens de teste e erro da rede. É o que o comando ping usa.", ex:"ping 8.8.8.8" },
  { t:"Par trançado", cat:"Cabo", ic:"🔌", txt:"Quatro pares de fios trançados que reduzem interferência. Conector RJ-45. Categorias: Cat5e (1 Gbps), Cat6 (até 10 Gbps em curta distância).", ex:"Alcance: 100 m" },
  { t:"Fibra óptica", cat:"Cabo", ic:"💡", txt:"Leva pulsos de luz. Imune a interferência elétrica. Monomodo vai a quilômetros; multimodo serve a prédios e data centers.", ex:"Alcance: km" },
  { t:"Cabo coaxial", cat:"Cabo", ic:"📺", txt:"Condutor central com blindagem metálica. Muito usado em TV a cabo e em redes antigas.", ex:"Uso: TV e internet a cabo" },
  { t:"Switch", cat:"Equipamento", ic:"🔀", txt:"Liga dispositivos da mesma rede e envia o quadro só para a porta do destino, usando o MAC.", ex:"Camada 2" },
  { t:"Roteador", cat:"Equipamento", ic:"🧭", txt:"Liga redes diferentes, como sua casa e a internet, e escolhe o melhor caminho pelo IP.", ex:"Camada 3" },
  { t:"Access Point", cat:"Equipamento", ic:"📶", txt:"Cria a rede Wi-Fi (padrão IEEE 802.11) e liga os aparelhos sem fio à rede cabeada.", ex:"Wi-Fi 5 e Wi-Fi 6" },
  { t:"Hub", cat:"Equipamento", ic:"⭕", txt:"Repete o sinal para todas as portas, gerando colisões. Foi substituído pelo switch.", ex:"Camada 1" },
  { t:"Estrela", cat:"Topologia", ic:"⭐", txt:"Todos os dispositivos ligam a um switch central. Se um cabo falha, só ele sai da rede. É a mais usada hoje.", ex:"Redes locais" },
  { t:"Barramento", cat:"Topologia", ic:"➖", txt:"Todos dividem um único cabo. É barato, mas uma falha no cabo derruba a rede inteira.", ex:"Redes antigas" },
  { t:"Anel", cat:"Topologia", ic:"🔄", txt:"Cada dispositivo liga a dois vizinhos, formando um círculo.", ex:"Token Ring, FDDI" },
  { t:"Malha", cat:"Topologia", ic:"🕸️", txt:"Vários caminhos entre os dispositivos. Muito resistente a falhas, mas cara. É a base da internet.", ex:"Backbone, Wi-Fi mesh" }
];
