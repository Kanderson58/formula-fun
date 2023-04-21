describe('template spec', () => {
  beforeEach('', () => {
    cy.intercept('https://v1.formula-1.api-sports.io/rankings/drivers?season=2021', {
      fixture: 'allDrivers.json'
    })
      .intercept('https://v1.formula-1.api-sports.io/drivers?name=Lewis%20Hamilton', {
        fixture: 'lewis.json'
      })
      .intercept('https://v1.formula-1.api-sports.io/drivers?name=Max%20Verstappen', {
        fixture: 'max.json'
      })
      .intercept('https://v1.formula-1.api-sports.io/rankings/teams?season=2021', {
        fixture: 'teams2021.json'
      })
      .visit('http://localhost:3000/')
  });

  
});