import forgetPassword from "../../support/pageObjects/forgetPasswordPage";
const passwordObj: forgetPassword = new forgetPassword();

let Id:number;
describe('Login Home Page', () => {
    beforeEach(function () {
        cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
  

    it('Forget Password',()=>{
        passwordObj.forget('Admin');
        // cy.get('.orangehrm-forgot-password-title').contains('link sent successfully');
        cy.get('.orangehrm-forgot-password-title').should('contain','link sent successfully');
    })
  
})