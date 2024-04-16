/// <reference types ="cypress"/>

describe('funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar o quarto produto da lista usando o bloco de produto', () => {
        cy.get('.product-block').eq(3).click()
        cy.get('.woocommerce-tabs').should('contain', 'Descrição')
    });

    it('Deve selecionar o primeiro produto da lista usando o bloco de imagem', () => {
        cy.get('.block-inner >').first().click()
        cy.get('.product_title').should('exist')
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block').last().click()
        cy.get('.woocommerce-tabs').should('contain', 'Informação adicional')
    });

    it('Deve selecionar um produto pelo seu nome', () => {
        cy.get('.products > .row').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.sku_wrapper').should('contain', 'SKU: WH09')
    });
});