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
import { ICreateUserPIMPayload } from "../../e2e/API/payload/userPIMAPIPayload";
import { ICreateEmployeePIMPayload } from "../../e2e/API/payload/employeePIMAPIPayload";
import { ICreateEmployeePIMResponse } from "../../e2e/API/response/employeePIMAPIResponse";
import { ICreateUserPIMResponse } from "../../e2e/API/response/userPIMAPIResponse";
import {ILeaveEntitlementPayload } from "../../e2e/API/payload/leaveEntitlementPayload";
import {ILeaveRequestPayload } from "../../e2e/API/payload/leaveRequestPayload";
import { ILeaveRequestResponse } from "../../e2e/API/response/leaveRequestResponse";
import { IApproveRequestPayload } from "../../e2e/API/payload/approveRequestPayload";

declare global{
    namespace Cypress{
        interface Chainable{
            addNewUser:(requestUrl:string,employeePayload:ICreateEmployeePayload)=>Chainable<ICreateEmployeeResponse>
            addNewCandidate: (Method: string, requestUrl: string, employeePayload: ICreateCandidatePayload) => Chainable<ICreateCandidateResponse>
            addNewEmployeePIM: (Method: string, requestUrl: string, employeePayload: ICreateEmployeePIMPayload) => Chainable<ICreateEmployeePIMResponse>
            addNewUserPIM: (Method: string, requestUrl: string, employeePayload: ICreateUserPIMPayload) => Chainable<ICreateUserPIMResponse>
            addLeaveEntitlements: (Method: string, requestUrl: string, employeePayload: ILeaveEntitlementPayload) => Chainable
            addLeaveRequest: (Method: string, requestUrl: string, employeePayload: ILeaveRequestPayload) => Chainable<ILeaveRequestResponse>
            approveLeaveRequest: (Method: string, requestUrl: string, employeePayload: IApproveRequestPayload) => Chainable


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
Cypress.Commands.add('addNewEmployeePIM', (Method: string, requestUrl: string, userPayload: ICreateEmployeePIMPayload) => {
    return cy.api({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})
Cypress.Commands.add('addNewUserPIM', (Method: string, requestUrl: string, userPayload: ICreateUserPIMPayload) => {
    return cy.api({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})
Cypress.Commands.add('addLeaveEntitlements', (Method: string, requestUrl: string, userPayload: ILeaveEntitlementPayload) => {
    return cy.api({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})
Cypress.Commands.add('addLeaveRequest', (Method: string, requestUrl: string, userPayload: ILeaveRequestPayload) => {
    return cy.api({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})
Cypress.Commands.add('approveLeaveRequest', (Method: string, requestUrl: string, userPayload: IApproveRequestPayload) => {
    return cy.api({
        method: Method,
        url: requestUrl,
        body: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .its('body')
})