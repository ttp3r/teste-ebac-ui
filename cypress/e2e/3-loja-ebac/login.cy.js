/// <reference types ="cypress"/>

describe ('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('talita.teste@teste.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'você pode ver suas compras recentes')
    })
})