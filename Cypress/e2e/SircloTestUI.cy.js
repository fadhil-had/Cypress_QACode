describe('Sirclo Test', () => {
  it('Open first page', () => {
    cy.visit('https://qa-interview.srcli.xyz/')

    cy.get('h1')
      .should('exist')
      .should('contain','Welcome!')
  })

  it('See Data (Before login)', () => {
    cy.visit('https://qa-interview.srcli.xyz/data')

    cy.get('form')
      .should('exist')
      .should('contain','Username')
      .should('contain','Password')
  })

  it('Login (Before login)', () => {
    cy.visit('https://qa-interview.srcli.xyz/login')

    cy.get('form')
      .should('exist')
      .should('contain','Username')
      .should('contain','Password')

    cy.get('[type="text"]')
      .type('root')
    
    cy.get('[type="password"]')
      .type('root123')
    
    cy.get('[type="submit"]')
      .should('exist')
      .should('contain','Login')
      .click()
    
    cy.get('h1')
      .should('exist')
      .should('contain','Welcome!')
  })

  it('See Data (After login)', () => {
    // Login

    cy.visit('https://qa-interview.srcli.xyz/login')

    cy.get('[type="text"]')
      .type('root')
    
    cy.get('[type="password"]')
      .type('root123')
    
    cy.get('[type="submit"]')
      .should('exist')
      .should('contain','Login')
      .click()

    // After login
    
    cy.visit('https://qa-interview.srcli.xyz/data')

    cy.get('body > :nth-child(1)')
      .should('exist')
      .should('contain','Pemasukan')
    cy.get('body > :nth-child(2)')
      .should('exist')
    cy.get('body > :nth-child(3)')
      .should('exist')
      .should('contain','Pengeluaran')
    cy.get('body > :nth-child(4)')
      .should('exist')

  })

  it('Logout', () => {
    // Login

    cy.visit('https://qa-interview.srcli.xyz/login')

    cy.get('[type="text"]')
      .type('root')
    
    cy.get('[type="password"]')
      .type('root123')
    
    cy.get('[type="submit"]')
      .should('exist')
      .should('contain','Login')
      .click()

    // After login
    
    cy.visit('https://qa-interview.srcli.xyz/logout')

    cy.get('h1')
      .should('exist')
      .should('contain','Welcome!')
  })
})