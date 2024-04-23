# teste-ebac-ui

# Cypress EBAC M11-M12

## Módulo 11

### Aula 1

#### Overview sobre a ferramenta:

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
_Nessa etapa tive dificuldade com a configuração de inicialização do Cypress, que faz uma verificação no primeiro uso e apresentava o erro "Cypress verification timed out after 30000 milliseconds". Encontrei o link a seguir no próprio fórum da plataforma EBAC como resposta a um dos alunos que teve a mesma dificuldade e consegui resolver:_
<https://bobbyhadz.com/blog/cypress-verification-timed-out>

	* No dash do Cypress: Teste E2E, Electron

### Aula 2

#### Primeiro teste automatizado no [e-commerce de teste da EBAC] (https://lojaebac.ebaconline.art.br)

Cenário de teste positivo: login com massa de dados fixa

##### Estrutura de um teste automatizado

	1.	Capturar elemento: botão, campo, formulário, check, texto etc
	2.	Inserir uma ação para o elemento: clicar, arrastar, selecionar, checar, digitar etc
	3.	Resultado esperado: deve acontecer o que se espera

### Aula 3

	* Conhecendo snippets e auto complete
	* Cenários de teste negativos: login com dados inválidos
	* Rodando um único cenário com it.only