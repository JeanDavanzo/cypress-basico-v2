Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Jean')
    cy.get('#lastName').type('Michel')
    cy.get('#email').type('jean@exemplo.com')
    cy.get('#phone').type('12323')
    cy.get('#open-text-area').type('test')
    cy.contains('button', 'Enviar').click()


})