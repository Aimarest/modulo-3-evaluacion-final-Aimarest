//Test que comprueba que el fetch trae 50 escenas de películas:

import getApiMovies from "../../src/services/MoviesApi"

describe('search the film scenes', () => {
  it('should get 50 scenes', () => {
    cy.visit('http://localhost:3000')
    cy.get('.MovieScene__card').should('have.length',50)
      })
  })


//Test que comprueba que el titulo de la landing page sea el correcto:

describe('check the title of the page', () => {
  it('should get the title and check it is the correct', () => {
    cy.visit('http://localhost:3000')
    cy.get('.Header__title').contains(`Owen wilson's "wow"`)
  })
})

//Test que comprueba que el input de filtrar búsqueda funciona:

describe('check the search input-text action', () => {
  it('should get the value of the input and check that search the correct scenes', () => {
    cy.intercept('GET','https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50', (req)=>{
      const moviesScenes = getApiMovies();
      req.reply({scene:moviesScenes })})
    cy.get('.search__input').type('bottle rocket').should('have.value', 'bottle rocket')
    cy.get('.MovieScene__name').contains('Bottle Rocket')
    })
   

  });



//Test que comprueba si el select para filtrar los años va bien:

describe('check the search select actions', () => {
  it('should get the value of the select and check that search the correct scenes', () => {
    cy.visit('http://localhost:3000')
    cy.get('select').select('1996').should('have.value', '1996')
    cy.get('.MovieScene__year').contains('1996')

  });
})

//Test que comprueba si al hacer click en la primera escena se dirije al detalle de la escena:

describe('check if clicking in movie scene the view shaw the scene detail', () => {
  it('should shaw the scene detail correctly ', () => {
    cy.visit('http://localhost:3000')
    cy.get('.MovieScene__Item:first').click('').go('forward')

  });
})

//Test que comprueba si al hacer click en el audio de la escena se abre en una pestaña nueva:

describe('check if clicking in the audio  the view shaws at new page', () => {
  it('should shaw the audio at new page ', () => {
    cy.visit('http://localhost:3000')
    cy.get('.search__input').type('Are You Here').should('have.value', 'Are You Here')
    cy.get('.MovieScene__card:first').click('')
    cy.get('.MovieSceneDetail__link').click('').location().should((loc)=>{
      expect(loc.href).have.not.to.eq('https://assets.ctfassets.net/bs8ntwkklfua/39Pjsj4HKXYIxjh7lXZJVU/535d60d67585551b1920b8e239ebd276/Are_You_Here_Wow_2.mp3')
    })

  });
})