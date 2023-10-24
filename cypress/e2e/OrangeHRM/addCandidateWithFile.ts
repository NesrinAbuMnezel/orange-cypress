import CandidateWithFile from "../../support/pageObjects/addCandidateWithFilePage";
import loginPage from "../../support/pageObjects/loginPage";
const loginObj: loginPage = new loginPage();


describe('Login Home Page', () => {
    beforeEach(function () {
        cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
    })
    it('Add Candidate With Uploaded File', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate')
        CandidateWithFile.AddCandidateWithUploadFile('cypress/fixtures/test.txt')
        CandidateWithFile.assertionOnFileTitle('cypress/fixtures/test.txt')
    })

})


