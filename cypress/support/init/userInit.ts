import { ICreateEmployeePayload } from '../../e2e/API/payload/userAPIPayload'
import GenericHelper from '../helpers/genericFunctions'
export default class userInit {
    static initUser(): ICreateEmployeePayload {
        let createUserPayload: ICreateEmployeePayload = {
            user: {
                username: `nesrin${GenericHelper.genericRandomString()}`,
                email: `nesrin${GenericHelper.genericRandomString()}@test.com`,
                password: '24681'
            }
        }
        return createUserPayload
    }
}