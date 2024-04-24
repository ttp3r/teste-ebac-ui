# teste-ebac-ui

# Cypress EBAC M11-M12

## Módulo 11

### Aula 1

#### Overview sobre a ferramenta: <https://www.cypress.io/>

* Documentação
* Suporte a multibrowsers
* Fácil depuração 
* Tipos de teste: unidade, componentes e UI

#### Preparação do ambiente:
 
* Instalar NodeJS na máquina: versão LTS 
* Preparar IDE: Visual Studio Code com os plugins Cypress Snippets e ES6 Mocha Snippets
* Criar repositório no Github adicionando o arquivo .gitignore com formatação Node
* Criar repositório local e clonar o repositório do Github nele
* Comando npm init -y para criar o arquivo package.jason
* Comando npm install cypress@13.6.0
* Comando npx cypress open
_Nessa etapa tive dificuldade com a configuração de inicialização do Cypress, que faz uma verificação no primeiro uso e apresentava o erro **"Cypress verification timed out after 30000 milliseconds"**. Encontrei o link a seguir no próprio fórum da plataforma EBAC como resposta a um dos alunos que teve a mesma dificuldade e consegui resolver:_
<https://bobbyhadz.com/blog/cypress-verification-timed-out>

* No dash do Cypress: Teste E2E, Electron

### Aula 2

#### Primeiro teste automatizado no [e-commerce de teste da EBAC](http://lojaebac.ebaconline.art.br/)

*Cenário de teste positivo: login com massa de dados fixa*

##### Estrutura de um teste automatizado:

1.	Capturar elemento: botão, campo, formulário, check, texto etc
2.	Inserir uma ação para o elemento: clicar, arrastar, selecionar, checar, digitar etc
3.	Resultado esperado: deve acontecer o que se espera

### Aula 3

* Conhecendo snippets e auto complete
* Cenários de teste negativos: login com dados inválidos
* Rodando um único cenário com it.only

### Aula 4

#### Massa de dados fake para testes dinâmicos:

*Instalando a [biblioteca faker-js](https://www.npmjs.com/package/@faker-js/faker)*

* Comando npm i @faker-js/faker@8.3.1
* ⁠Importando a biblioteca no arquivo abaixo do describe: import { faker } from '@faker-js/faker';
* ⁠configurando tempo de visualização após inserção de dados aleatórios: cy.wait(5000)

### Aula 5

#### Listas

* Selecionando produtos e adicionando-os ao carrinho com diferentes métodos

## Módulo 12

### Aula 1

#### Arquivo de dados

* Otimizando a url do cy.visit: jogar essa url em um arquivo de configuração global e manter no arquivo de testes apenas os endpoints (funcionalidade)
* No arquivo cypress.config.js adicionar baseUrl:'//',
* É possível mudar a massa de teste dentro da pasta fixtures

### Aula 2

#### Comandos Customizados

* Na pasta supports, adicionar comandos que podem ser usados em diferentes contextos ao arquivo commans.js

### Aula 3

*Page Objects Model: esconde informações que não são tão interessantes de serem exibidas num arquivo de teste, deixando o teste muito mais visível, limpo e fácil de entender. Se concentra em páginas separadas de funções.*

* Cada página recebe um arquivo ou uma página de page objects, que contém os elementos web e todos os métodos

### Aula 4

* Otimização dos testes com Page Objects
* Replace url
* Massa de dados em lista usando métodos e funções
* Importando massa de dados de um arquivo em outro

### Aula 5

#### Modo de execuções e relatórios

* Modo headless: executar os testes automatizados sem abrir o navegador / sem a interface gráfica.
* Ao invés de usar o comando npx cypress open, usar o npx cypress run
* Ativar gravação de vídeo para evidência de testes: dentro do arquivo cypress.config.js adicionar o video: true,
* Usar scripts no arquivo package.json para definir parâmetros. Para exdecutar: npm run //nome do script
* Configurando o [Cypress Cloud para produzir relatórios](https://docs.cypress.io/guides/cloud/introduction)
* Dica de como configurar relatórios na versão free do Cypress: na documentação, procurar por "reporters"
* Para acompanhar os relatórios sendo gerados em tempo real: <https://cloud.cypress.io/projects/t7cozn/runs/1/overview?roarHideRunsWithDiffGroupsAndTags=1>