describe('Test that we could register a new user. ', () => {
  it('passes if we could register', () => {
    // launch the app
    cy.visit('http://localhost:3000');
    // check the button with caption 'SIGN IN' exists
    cy.get('[aria-label="button-signIn"]').contains('SIGN IN').should('exist');
    // check the button with caption 'Don't have an account? Sign up' exists
    cy.get('[aria-label="button-signUp"]').contains("DON'T HAVE AN ACCOUNT? SIGN UP").should('exist');
    // click the button with caption 'Don't have an account? Sign up'
    cy.get('[aria-label="button-signUp"]').contains("DON'T HAVE AN ACCOUNT? SIGN UP").click();


    // test that the input box is updated correctly
    cy.get('[id="username"]').type('testUsername').should('have.value', 'testUsername');
    cy.get('[id="firstName"]').type('testFirstname').should('have.value', 'testFirstname');
    cy.get('[id="lastName"]').type('testLastname').should('have.value', 'testLastname');
    cy.get('[id="email"]').type('testEmail@seas.edu').should('have.value', 'testEmail@seas.edu');
    cy.get('[id="password"]').type('testPassword').should('have.value', 'testPassword');

    cy.get('[aria-label="button-signUp-confirm"]').contains('SIGN UP');
    cy.get('[aria-label="button-signUp-confirm"]').click();

    // check if we are in the main page.
    cy.get('[aria-label="main-userCard"]').contains('testUsername').should('exist');
    cy.get('[aria-label="main-userCard"]').contains('testFirstname').should('exist');
    cy.get('[aria-label="main-userCard"]').contains('testLastname').should('exist');

  })
})