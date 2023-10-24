class loginPage {
    elements = {
        userName: () => cy.get('[placeholder="Username"]'),
        // userName: () => cy.getByCy("Username"),
        password: () => cy.get('[placeholder="Password"]'),
        // password: () => cy.getByCy("Password"),
        loginBtn: () => cy.get('button'),
        MainMenuItems: () => cy.get('.oxd-sidepanel-body')

    }
   

    login(userName: string, password: string) {
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginBtn().click();
        cy.get('.oxd-topbar-header-breadcrumb-module').should('contain','Dashboard');
        this.elements.MainMenuItems().contains('PIM').click();

    }
    




}
export default loginPage;
