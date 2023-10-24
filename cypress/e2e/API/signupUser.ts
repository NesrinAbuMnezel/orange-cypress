import { resolve } from "cypress/types/bluebird"
import addUser from "../../support/helpers/signupHelper"

describe('Signup',{ tags: '@smoke' },()=>{
it('Signup: user should be able to create new user',()=>{
addUser.addNewUserViaAPI().then((resolve)=>{
cy.log(`${resolve}`)
})
})
})
