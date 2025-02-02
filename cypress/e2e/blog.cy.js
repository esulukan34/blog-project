describe('Blog Sayfası Testi', () => {
    beforeEach(() => {
        cy.visit('https://esulukan34.github.io/blog-project/');
    });

    it('Emre Sulukan yazısı görünür olmalı', () => {
        cy.get('h1', { timeout: 2000 }).should('be.visible');
        cy.get('h1').should('contain', 'Emre Sulukan');
    });

    it('Ana sayfa, Hakkımda gibi başlıkların görünür olduğunu kontrol et', () => {
        cy.get('nav').contains('Ana Sayfa').should('be.visible');
        cy.get('nav').contains('Hakkımda').should('be.visible');
        cy.get('nav').contains('Deneyim').should('be.visible');
        cy.get('nav').contains('Yetenekler').should('be.visible');
        cy.get('nav').contains('Projeler').should('be.visible');
        cy.get('nav').contains('İletişim').should('be.visible');
        cy.get('nav').contains('CV').should('be.visible');
    });

    it('Hakkımda butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('Hakkımda').click();
        cy.get('#about').should('be.visible');
    });

    it('Deneyim butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('Deneyim').click();
        cy.get('#experience').should('be.visible');
    });

    it('Yetenekler butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('Yetenekler').click();
        cy.get('#skills').should('be.visible');
    });

    it('Projeler butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('Projeler').click();
        cy.get('#projects').should('be.visible');
    });

    it('İletişim butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('İletişim').click();
        cy.get('#contact').should('be.visible');
    });

    it('CV butonuna tıklanarak ilgili yer açılmalı', () => {
        cy.get('nav').contains('CV').click();
        cy.get('#resume').should('be.visible');
    });

    it('Dark modu açmalı', () => {
        cy.get('.fa-moon').click();
        cy.get('body').should('have.class', 'dark-mode');
    });
});
