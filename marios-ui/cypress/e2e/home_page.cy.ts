describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })

  it('has a title', () => {
    cy.get('h1').contains('Marios')
  })
})
