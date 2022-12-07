describe('Test that we could register a new user. ', () => {
  it('passes if we could register', () => {
    // launch the app
    cy.visit('http://localhost:3000');
    // check the button with caption 'Don't have an account? Sign up' exists
    cy.get("button").get('[aria-label="button-signUp"]').contains("Don't have an account? Sign Up").should('exist');
    // click the button with caption 'Don't have an account? Sign up'
    cy.get("button").get('[aria-label="button-signUp"]').contains("Don't have an account? Sign Up").click();


    // test that the input box is updated correctly
    cy.get("input").get('[aria-label="register-username"]').type('testUsername');
    cy.get("input").get('[aria-label="register-firstName"]').type('testFirstname');
    cy.get("input").get('[aria-label="register-lastName"]').type('testLastname');
    cy.get("input").get('[aria-label="register-email"]').type('testEmail@seas.edu');
    cy.get("input").get('[aria-label="register-password"]').type('testPassword');

    cy.get('button').get('[aria-label="register-submit"]').contains('Sign Up');
    cy.get('button').get('[aria-label="register-submit"]').click();

    // check if we are in the main page.
    cy.get("link").get('[aria-label="userCard-username"]').should('exist');

  })
})