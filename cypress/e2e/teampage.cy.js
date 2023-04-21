describe('Chosing Drivers Path', () => {
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
      .visit('http://localhost:3000/team')
  });

  it('should ask the user to choose one driver at a time', () => {
    cy.get('.driver-select').contains('Pick your driver:')
      .get('select').select('Lewis Hamilton')
      .get('.submit-driver').click()
      .get('.driver-select').should('exist');
  });

  it('should not allow a user to pick the same driver twice', () => {
    cy.get('select').select('Lewis Hamilton').get('.submit-driver').click()
      .get('select option:contains(Lewis Hamilton)').should('not.exist');
  });

  it('should not allow user to submit no driver and ask them to select one', () => {
    cy.get('.submit-driver').contains('Sign my driver!').click()
      .get('.submit-driver').contains('Please choose a driver!');
  });

  it('should only allow user to name the team once both drivers are selected', () => {
    cy.get('.team-header').should('not.exist')
      .get('select').select('Lewis Hamilton').get('.submit-driver').click()
      .get('select').select('Max Verstappen').get('.submit-driver').click()
      .get('.team-header').should('exist');
  });
});

describe('Naming Team and Getting Results Path', () => {
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
      .visit('http://localhost:3000/team')

    cy.get('select').select('Lewis Hamilton').get('.submit-driver').click()
      .get('select').select('Max Verstappen').get('.submit-driver').click()
  });

  it('should display the information for both drivers', () => {
    cy.get('.Lewis').contains('Lewis was born 1985-01-07 in Stevenage, United Kingdom')
      .get('.Max').contains('Max was born 1997-09-30 in Hasselt, Belgium');
  });

  it('should have a default message asking the user to give their team a name', () => {
    cy.get('.team-header').contains('Give Your Team A Name!');
  })

  it('should allow the user to change the team name', () => {
    cy.get('.edit').click()
      .get('.edit-mode').should('exist')
      .get('.name-input').click().type('Ham Sandwich').get('.name-submit').click()
      .get('.team-header').contains('Ham Sandwich');
  });

  it('should not allow the user to submit no name', () => {
    cy.get('.edit').click().get('.name-submit').click()
      .get('.name-input').should('have.attr', 'placeholder', 'Please choose a team name');
  });

  it('should ask the user if they are ready to see the results', () => {
    cy.get('.edit').click().get('.name-input').type('Max Attacks').get('.name-submit').click()
      .get('.get-results').contains('Let\'s See Max Attacks\'s Results...');
  });

  it('should show the results in the rankings for that team', () => {
    cy.get('.edit').click().get('.name-input').type('Max Attacks').get('.name-submit').click()
      .get('.get-results').click()
      .get('.user-team').contains('2 - Max Attacks')
      .get('.pts').contains('550');
  });
});