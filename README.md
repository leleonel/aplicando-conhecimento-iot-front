Sistema de Estacionamento em Tempo Real (meu-estacionamento)
Este projeto é uma parte do repositório aplicando-conhecimento-iot-front. Ele representa uma aplicação simples que mostra a quantidade de vagas disponíveis em um estacionamento em tempo real. O sistema utiliza MQTT para receber mensagens de "ENTRADA de veículo!" e "SAÍDA de veículo!" e atualiza a página web de acordo.

🚀 Funcionalidades
Conecta-se a um broker MQTT para ouvir mensagens relacionadas a entradas e saídas de veículos.
Atualiza a quantidade de vagas disponíveis em tempo real na página web.
Utiliza Node.js no back-end e vanilla JavaScript no front-end.
🛠 Tecnologias Utilizadas
Node.js: Para criar o servidor back-end.
MQTT: Protocolo de mensagens leve para pequenos sensores e dispositivos móveis.
Socket.io: Para comunicação em tempo real entre o servidor e a página web.
HTML/CSS: Para criar a página web.
📖 Como Executar
Clone o Repositório:

bash
Copy code
git clone https://github.com/leleonel/aplicando-conhecimento-iot-front.git
cd aplicando-conhecimento-iot-front/meu-estacionamento
Instale as Dependências:

bash
Copy code
npm install
Execute o Servidor:

bash
Copy code
node server.js
Acesse a Página Web:
Abra um navegador e acesse http://localhost:3000.

✉️ Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests. Todas as contribuições são bem-vindas!
