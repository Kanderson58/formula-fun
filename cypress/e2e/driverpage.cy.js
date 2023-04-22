describe('Driver Stats Page', () => {
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
      .visit('http://localhost:3000/drivers')
  });

  it('should instruct a viewer to select a driver to view', () => {
    cy.get('.selected-driver').contains('Click on a driver to see their stats!');
  });

  it('should list all the drivers that were in the season and their points', () => {
    cy.get('#1').contains('1) Lewis Hamilton').get('#1').contains('350 points')
      .get('#2').contains('2) Max Verstappen').get('#2').contains('200 points');
  });

  it('should allow the user to click on each driver and display that driver\'s information', () => {
    cy.get('#1').click()
      .get('.selected-driver').contains('Lewis was born 1985-01-07 in Stevenage, United Kingdom');
  });

  it('should allow the user to click on a different driver and display that driver\'s information', () => {
    cy.get('#2').click()
    .get('.selected-driver').contains('Max was born 1997-09-30 in Hasselt, Belgium');
  });

  it('should present an error message in case of a failed fetch', () => {
    cy.intercept('https://v1.formula-1.api-sports.io/drivers?name=Lewis%20Hamilton', {
      body: {response: []}
    })
      .visit('http://localhost:3000/drivers');

    cy.get('#1').click().get('.selected-driver').should('not.exist')
      .get('.error').contains('Uh oh, red flag! We could not find that driver. Please try again later!');
  });
});