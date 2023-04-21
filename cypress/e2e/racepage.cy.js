describe('template spec', () => {
  beforeEach('', () => {
    cy.intercept('https://v1.formula-1.api-sports.io/rankings/drivers?season=2021', {
      fixture: 'allDrivers.json',
      headers: {
        'x-apisports-key': 'fbb044d1ec06d67febe82ad0fecb8ff5',
        "x-rapidapi-host": "v1.formula-1.api-sports.io"
      }
    })
      .intercept('https://v1.formula-1.api-sports.io/rankings/drivers?name=Lewis', {
        fixture: 'lewis.json',
        headers: {
          'x-apisports-key': 'fbb044d1ec06d67febe82ad0fecb8ff5',
          "x-rapidapi-host": "v1.formula-1.api-sports.io"
        }
      })
      .intercept('https://v1.formula-1.api-sports.io/rankings/drivers?name=Max', {
        fixture: 'max.json',
        headers: {
          'x-apisports-key': 'fbb044d1ec06d67febe82ad0fecb8ff5',
          "x-rapidapi-host": "v1.formula-1.api-sports.io"
        }
      })
      .intercept('https://v1.formula-1.api-sports.io/rankings/teams?season=2021', {
        fixture: 'teams2021.json',
        headers: {
          'x-apisports-key': 'fbb044d1ec06d67febe82ad0fecb8ff5',
          "x-rapidapi-host": "v1.formula-1.api-sports.io"
        }
      })
      .visit('http://localhost:3000/')
  });

  it('starts the user on an instruction page', () => {
    cy.get('.formula-fun').contains('Welcome to Formula Fun!')
      .get('p').contains('Get ready to take on the racing world')
      .get('.see-team').contains('Build My Team');
  });

  it('allows users to click around each link in the header', () => {
    cy.get('nav > [href="/team"]').click().get('.default-driver').should('exist');
    cy.get('[href="/drivers"]').click().get('.full-rankings').should('exist');
  });

  it('should not allow a user to access their results before they have chosen a team', () => {
    cy.get('.see-team').click().get('.constructors').should('not.exist');
  });
})