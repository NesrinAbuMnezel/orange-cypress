import { ICreateEmployeeResponse } from "../../e2e/API/response/userAPIResponse";
import candidateInit from "../init/candidateInit";
import candidatePage from "../pageObjects/candidatePage";
import scheduleInterview from "../pageObjects/scheduleInterviewPage";
const scheduleInterviewObj: scheduleInterview = new scheduleInterview()
const candidatePageObj: candidatePage = new candidatePage()

let Id: number;
export const URLs = {
    candidates: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates`,
}
export default class addCandidate {
    static candidatePage() {
        candidatePageObj.visitCandidatePage()
    }
    static addNewCandidateViaAPI() {
        return new Cypress.Promise((resolve, reject) => {
            cy.addNewCandidate('POST', URLs.candidates, candidateInit.initCandidate()).then((response) => {
                Id = response.data.id
                resolve(Id)
            })
        })

    }
    static makeShortlisted(id: string) {
        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${id}`)
        cy.addNewCandidate('PUT', `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${id}/shortlist`, candidateInit.shortlistCandidate())
    }
    static makeScheduleInterview() {
        scheduleInterviewObj.scheduleInterviewDetails()
        scheduleInterviewObj.verifyStatus()
    }



}


