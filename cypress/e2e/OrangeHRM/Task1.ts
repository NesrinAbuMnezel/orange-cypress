import loginPage from "../../support/pageObjects/loginPage";
import personalDetails from "../../support/pageObjects/personalDetailsPage";
import searchEmployee from "../../support/pageObjects/searchEmpPage";

const loginObj: loginPage = new loginPage();
const addInfoObj: personalDetails = new personalDetails()
const searchObj: searchEmployee = new searchEmployee();

let firstName: string;
let lastName: string;
let Id: number;
let empId: string;
describe('Login Home Page', () => {
    beforeEach(function () {
        cy.visit('/')
        loginObj.login('Admin', 'admin123')
        cy.fixture('empInfo').as('emp')
        cy.get('@emp').then((info: any) => {
            cy.request({
                method: 'POST',
                url: '/web/index.php/api/v2/pim/employees',
                body: {
                    firstName: info.firstName,
                    middleName: info.MiddleName,
                    lastName: info.LastName,
                    employeeId: `${Math.round(10000 * (Math.random()))}`
                }
            }).then((response) => {
                Id = response.body.data.empNumber;
                expect(response).property('status').to.equal(200);
            })
            cy.get('@emp').then((info: any) => {
                cy.request({
                    method: 'POST',
                    url: '/web/index.php/api/v2/admin/users',
                    body: {
                        username: info.username,
                        status: true,
                        empNumber: Id,
                        userRoleId: 2,
                        password: info.password
                    }
                }).then((response) => {
                    expect(response).property('status').to.equal(200);
                })
            })
        })
    })
    it.only('personal details', () => {
        cy.get('@emp').then((info: any) => {
            cy.request(`/web/index.php/api/v2/pim/employees/${Id}/personal-details`)
                .then((response) => {
                    firstName = response.body.data.firstName;
                    lastName = response.body.data.lastName;
                    empId = response.body.data.employeeId;
                    expect(response).property('status').to.equal(200);
                })
        })
        cy.get('@emp').then(() => {
            cy.get('@emp').then((info: any) => {
            cy.visit(`/web/index.php/pim/viewPersonalDetails/empNumber/${Id}`)
                .then(() => {
                    cy.get('.oxd-text.oxd-text--h6.--strong').should('contain', `${firstName} ${lastName}`)
                    addInfoObj.addInfo(info.dayBirth,info.monthBirth,info.yearBirth);
                })
                searchObj.searchemp([{ key: 'Id', value: empId }])

            })
        })
    })
})
afterEach(function () {
    cy.request({
        method: 'DELETE',
        url: '/web/index.php/api/v2/pim/employees',
        body: {
            ids: [Id]
        }
    })
        .then((response) => {
            expect(response).property('status').to.equal(200);
        })
    cy.request({
        method: 'DELETE',
        url: '/web/index.php/api/v2/admin/users',
        body: {
            ids: [Id]
        }
    })
        .then((response) => {
            expect(response).property('status').to.equal(200);
        })
})

