describe('Test that we could post a new comment. ', () => {
    it('passes if we post a new comment', async () => {
        // launch the app
         cy.visit('http://localhost:3000');
        // check the button with caption 'Don't have an account? Sign up' exists

        // test that the input box is updated correctly
         cy.get("input").get('[aria-label="login-username"]').type('demo');
         cy.get("input").get('[aria-label="login-password"]').type('123456');


         cy.get('button').get('[aria-label="button-signIn"]').contains('Sign In');
         cy.get('button').get('[aria-label="button-signIn"]').click();


        // check if we are in the main page.
        // cy.get("link").get('[aria-label="userCard-username"]').should('exist');

        cy.wait(5000).then(()=>{
            cy.get('button').eq(13).click();
        });








    })
})