import addCandidate from "../../support/helpers/newCandidateHelper";
import loginPage from "../../support/pageObjects/loginPage";
const loginObj: loginPage = new loginPage();

let id: string;
describe('OrangeHRM ', () => {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
    })

    it('Recruitment: new candidate ', () => {
        addCandidate.candidatePage()
        addCandidate.addNewCandidateViaAPI().then((resolve) => {
            id = `${resolve}`
            addCandidate.makeShortlisted(id)
        })
        addCandidate.makeScheduleInterview()


    })
   

})
