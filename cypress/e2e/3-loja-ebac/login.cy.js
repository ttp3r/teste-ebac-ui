/// <reference types ="cypress"/>

describe ('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
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
})