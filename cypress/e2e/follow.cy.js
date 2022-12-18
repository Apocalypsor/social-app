describe('Test that we could follow another user. ', () => {
    it('passes if we could follow another user', async () => {
        // launch the app
         cy.visit('http://localhost:3000');
        // check the button with caption 'Don't have an account? Sign up' exists

        // test that the input box is updated correctly
         cy.get("input").get('[aria-label="login-username"]').type('demo');
         cy.get("input").get('[aria-label="login-password"]').type('123456');


         cy.get('button').get('[aria-label="button-signIn"]').contains('Sign In');
         cy.get('button').get('[aria-label="button-signIn"]').click();


        // check if we are in the main page.


        cy.wait(5000).then(()=>{
            // cy.get('button').eq(13).click();
            cy.get('[aria-label="side-suggestion"] .follow-button').eq(0).click();
        });

        // cy.get()









    })
})