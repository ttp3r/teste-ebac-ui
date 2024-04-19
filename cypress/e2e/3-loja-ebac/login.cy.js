/// <reference types ="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe ('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('talita.teste@teste.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'você pode ver suas compras recentes')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type('talita.@teste.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist', 'e-mail desconhecido') 
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        
        cy.get('#username').type('talita.teste@teste.com')
        cy.get('#password').type('senha54321')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Perdeu a senha?')
    });

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'você pode ver suas compras recentes')
    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'você pode ver suas compras recentes')
        })
    });

    it('Deve fazer login com sucesso usando comandos customizados', () => {
        cy.login('talita.teste@teste.com', 'senha123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'você pode ver suas compras recentes')
    });
})