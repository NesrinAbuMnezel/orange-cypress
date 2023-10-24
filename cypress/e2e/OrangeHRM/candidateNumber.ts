import Candidate from "../../support/pageObjects/candidateNumberPage"
import loginPage from "../../support/pageObjects/loginPage";
const loginObj: loginPage = new loginPage();
let id:number;
describe('Recruitment', () => {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
    })
    it('Recruitment: candidate rows ', () => {
        Candidate.numberOfRows()
    })
   
    
})
