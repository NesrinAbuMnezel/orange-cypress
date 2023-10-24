// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { method } from "cypress/types/bluebird";
import { ICreateEmployeePayload } from "../../e2e/API/payload/userAPIPayload";
import { ICreateEmployeeResponse } from "../../e2e/API/response/userAPIResponse";
import { ICreateCandidatePayload } from "../../e2e/API/payload/candidateAPIPayload";
import { ICreateCandidateResponse } from "../../e2e/API/response/candidateAPIResponse";

declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
            addNewCandidate: (Method: string, requestUrl: string, employeePayload: ICreateCandidatePayload) => Chainable<ICreateCandidateResponse>

        }
    }
}
Cypress.Commands.add('addNewUser',(requestUrl:string,userPayload:ICreateEmployeePayload)=>{
   return cy.api({
    method:'POST',
    url:requestUrl,
    body:userPayload,
    // headers:{
    //     'Content-Type':'application/json'
    // }
   })
   .its('body')
})
Cypress.Commands.add('addNewCandidate', (Method: string, requestUrl: string, userPayload: ICreateCandidatePayload) => {
    return cy.request({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})
