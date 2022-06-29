describe('Test', () => {
    it('Open first page', () => {
        cy.visit('http://192.168.7.209:8080/Thingworx/FormLogin/Collins.LH.BDG.Organization')

        cy.get('[type="TEXT"]')
            .type('fadhil.syahad@caditglobal.com')

        cy.get('[type="PASSWORD"]')
            .type('password123456')
        
        cy.get('.login-buttons')
            .click()
        
        cy.get('#cell_Collins_LH_BDG_CM_LandingPageMenuButton_Mashup-1_ptcsbutton-11')
            .click()
        
        cy.get('#cell_Collins_LH_BDG_CM_MachineOverview_Collection_Mashup-3_ptcslabel-25')
            .should('contain','Mazak Variaxis 630-5X II')
    })
})