describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.qa-practice.com/')

      cy.contains('li').first()

      //cy.get('li').first().click()
    })
  })