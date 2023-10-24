class forgetPassword {
    elements = {
        password: () => cy.get('.orangehrm-login-forgot-header'),
        userName:()=>cy.get('[placeholder="Username"]'),
        // userName:()=>cy.getByCy('Username'),
        forgetPassword:()=>cy.get('.orangehrm-forgot-password-button--reset')
    }
    forget(userName:string) {
        this.elements.password().click();
        this.elements.userName().type(userName);
        this.elements.forgetPassword().click();
        cy.get('.orangehrm-forgot-password-title').should('contain','link sent successfully');

    }
}
export  default forgetPassword;