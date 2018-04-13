<h1>Watson Assistant</h1>


<h1>Passo a passo</h1>

<h3>Os primeiros passos serão relacionados a criação de conta no IBM Cloud, então se você já possui uma conta e já sabe como funciona, pode pular estes passos</h3>

<h2>Primeiro passo:</h2> Crie uma conta no IBM Cloud. Entre em www.bluemix.net e crie uma conta.
<h2>Segundo passo:</h2> Clique na parte de "catálogo". Assim que carregar, procure pela seção <b>"Watson"</b>, quando achar, clique no serviço "Watson Assistant". Deixe a página carregar e clique em "create". Clique em "Launch tool" para abrir a plataforma de criação de chatbot. Depois clique em "Log in with IBM ID". Pronto, agora você já possui um serviço de Conversation rodando, como este projeto não tem a intenção que você aprenda a usar Watson Assistan, deixarei dois tutoriais sobre a ferramenta: https://medium.com/botsbrasil/desenvolvendo-chatbots-com-watson-conversation-64a3b2cdbb30 e https://medium.com/botsbrasil/seja-bem-vindo-watson-assistant-ab7f8867da46</h3>
<h2>Terceiro passo:</h2> Vá até seu terminal e clone nosso projeto para sua máquina (ou baixe o ZIP, como preferir). Para isso, você irá rodar o comando:<h3> git clone https://github.com/smazon/watson_assistant </h3> logo após, digite cd watson_assistant e pronto, já estamos na pasta do nosso projeto.
<h2>Quarto passo:</h2>Com o seu editor de texto (visual studio code / sublime / vim / etc), abra o arquivo "config.js" que está na raiz do projeto. Neste arquivo, você verá que alguns campos estão indicando para que você insira algumas usernames e passwords. Essas credenciais são dos serviços que você criou no IBM Cloud. Para obte-lôs, vamos voltar para o IBM Cloud. Acesse novamente www.bluemix.net e você se deparará com o seu "dashboard", o seu dashboard deve conter os dois serviços que você criou. <h3>4.1:</h3>Precisaremos coletar as credenciais dos dois serviços, para isso, clique em cima do Discovery, espere um pouco e clique em "Service Credencials" (no canto superior esquerdo da tela). Se não houver nenhuma credencial criada, clique em "New credential" e abra o arquivo criado logo abaixo. Você observará que terá algumas linhas de JSON contendo um USERNAME, uma PASSWORD e uma URL, aqui nós apenas vamos nos importar com o USERNAME e com a PASSWORD. Copie as credenciais e cole no arquivo config.js no diretório do nosso projeto.
<h2>Quinto passo:</h2> Pronto, agora temos nosso projeto quase pronto para rodar. Volte ao terminal, na pasta raiz do projeto e rode o comando: <h3>npm install</h3> Isso irá instalar todos os módulos que são necessários.
<h2>Sexto passo:</h2> Agora sim, nosso projeto pode funcionar. Rode o comando: <h3>node app.js</h3> e ele estará funcionando no seu computador.
<h2>Sétimo e último passo:</h2>Acesse localhost:5000 e teste seu bot.

<h2>Valeu!</h2>
