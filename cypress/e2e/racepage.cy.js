describe('Home/Instructional Page', () => {
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
      .visit('http://localhost:3000/');
  });

  it('starts the user on an instruction page', () => {
    cy.get('.formula-fun').contains('Welcome to Formula Fun!')
      .get('p').contains('Get ready to take on the racing world')
      .get('.see-team').contains('Build My Team');
  });

  it('allows users to click around each link in the header', () => {
    cy.get('nav > [href="/team"]').click().get('.default-driver').should('exist')
      .url('http://localhost:3000/team');
    cy.get('[href="/drivers"]').click().get('.full-rankings').should('exist')
      .url('http://localhost:3000/drivers');
  });

  it('should allow the user to click anywhere on the grey header to get back to the home page', () => {
    cy.get('nav > [href="/team"]').click()
      .url('http://localhost:3000/team')
      .get('.title').click()
      .get('.formula-fun').contains('Welcome to Formula Fun!')
      .url('http://localhost:3000/');
  });

  it('should not allow a user to access their results before they have chosen a team', () => {
    cy.get('.see-team').click().get('.constructors').should('not.exist');
  });

  it('should direct users to a team building page', () => {
    cy.get('.see-team').click().get('select').contains('Choose Your Driver...');
  });

  it('should display an error message for a failed API call', () => {
    cy.intercept('https://v1.formula-1.api-sports.io/rankings/drivers?season=2021', {
      body: {response: []}
    })
      .visit('http://localhost:3000/');

    cy.get('.error').contains('Into the pit lane! There was an error displaying your page. Please check back later!');

    cy.get('.foruma-fun').should('not.exist');
  });

  it('should show users an error message if they navigate to a bad URL', () => {
    cy.visit('http://localhost:3000/badURL')
      .get('.error').contains('No such page exists!');
  });
});

describe('Reset Page', () => {
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
      .visit('http://localhost:3000/');
  });

  it('should allow user to reset the page to choose new drivers', () => {
    cy.get('.see-team').click().get('select').select('Lewis Hamilton').get('.submit-driver').click()
      .get('select').select('Max Verstappen').get('.submit-driver').click()
      .get('.title').click()
      .get('.reset').should('exist')
      .get('.see-team').click().get('nav > [href="/team"]').click()
      .get('.default-driver').should('exist')
      .get('.selected-driver').should('not.exist');
  });
});