import { ICreateEmployeeResponse } from "../../e2e/API/response/userAPIResponse";
import userInit from "../init/userInit";

const baseUrl = Cypress.config().baseUrl;
export const URLs = {
    users: `${baseUrl}/api/users`
}
export default class addUser {
    static conduitNewAccountAPI(username: string, email: string, password: string) {
        return cy.api({
            method: 'POST',
            url: URLs.users,
            body: {
                user: {
                    username: username,
                    email: email,
                    password: password
                }
            }
        })
    }
    static conduitNewAccount(payload: any) {
        return cy.api({
            method: 'POST',
            url: URLs.users,
            body: payload
        })
    }
    static addNewUserViaAPI(){
        return new Cypress.Promise<ICreateEmployeeResponse>((resolve,reject)=>{
            cy.addNewUser(URLs.users,userInit.initUser()).then(()=>{
                // resolve('Done!')
            })

        })
    }

}
