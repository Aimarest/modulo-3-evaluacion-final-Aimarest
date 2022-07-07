//Test que comprueba que el fetch trae 50 escenas de películas:

describe('search the film scenes', () => {
  it('should get 50 scenes', () => {
    cy.request('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(50)
  })
})}
)

//Test que comprueba que el titulo de la landing page sea el correcto:

describe('check the title of the page', () => {
  it('should get the title and check it is the correct', () => {
    cy.visit('http://localhost:3000')
    cy.get('.Header__title').contains(`Owen wilson's "wow"`)
  })
})

//Test que comprueba que el input de búsqueda funciona:

    describe('check the search input-text action', () => {
      it('should get the value of the input and check that search the correct scenes', () => {
        cy.visit('http://localhost:3000')
        cy.get('.search__input').type('bottle rocket').should('have.value','bottle rocket')
        cy.get('.MovieScene__name').contains('Bottle Rocket')
      
        });})