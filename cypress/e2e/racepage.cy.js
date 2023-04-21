describe('template spec', () => {
  beforeEach('', () => {
    cy.intercept('https://v1.formula-1.api-sports.io/rankings/drivers?season=2021', {
      fixture: 'allDrivers.json'
    })
      .intercept('https://v1.formula-1.api-sports.io/rankings/drivers?search=Lewis Hamilton', {
        fixture: 'lewis.json'
      })
      .intercept('https://v1.formula-1.api-sports.io/rankings/drivers?search=Max Verstappen', {
        fixture: 'max.json'
      })
      .intercept('https://v1.formula-1.api-sports.io/rankings/teams?season=2021', {
        fixture: 'teams2021.json'
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