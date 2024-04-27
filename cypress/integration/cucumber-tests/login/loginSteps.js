import {Dado, Quando, Então} from 'cypress-cucumber-preprocessor/steps'

Dado('Que o usuário entre na página de login', () => {
    cy.visit('file:///E:/JDD-PAIS/index_v2.html')
})

Quando('O usuário preencher os campos login e senha'), () => {
    cy.get('input[name="buton1"]').click()
}

Então('O usuário deve visualizar a página principal'), () => {
    cy.visit('https://www.fastshop.com.br/web/c/4611686018425141655/Churrasco')
}