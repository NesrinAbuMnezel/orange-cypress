import { ICreateCandidatePayload } from '../../e2e/API/payload/candidateAPIPayload'
import GenericHelper from '../helpers/genericFunctions'
export default class candidateInit {
    static initCandidate(): ICreateCandidatePayload {
        let createCandidatePayload: ICreateCandidatePayload = {
            comment: null,
            consentToKeepData: false,
            contactNumber: null,
            dateOfApplication: "2023-11-14",
            email: `test${GenericHelper.genericRandomString()}@test.com`,
            firstName: `test${GenericHelper.genericRandomString()}`,
            keywords: null,
            lastName: `admin${GenericHelper.genericRandomString()}`,
            middleName: null,
            vacancyId: 1
        }
        return createCandidatePayload
    }
    static shortlistCandidate():any {
        let createCandidatePayload = {
            note: null
        }
        return createCandidatePayload
    }
}
