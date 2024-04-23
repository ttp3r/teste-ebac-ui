/// <reference types ="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
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

    it('Deve selecionar um produto da lista - Page Ojects', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tbay-main-content').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso - Page Ojects', () => {
        let produto = 'Erica Evercool Sports Bra'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it.only('Deve visitar a página do produto pela url- Page Objects', () => {
        produtosPage.visitarProduto('Abominable Hoodie')
        cy.get('.product_title').should('contain', 'Abominable Hoodie')
    });
});