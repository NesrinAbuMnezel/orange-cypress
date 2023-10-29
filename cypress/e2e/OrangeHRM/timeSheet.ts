import loginPage from "../../support/pageObjects/loginPage";
import addEmployeePIM from "../../support/helpers/newEmployeeHelper";
import LogoutPage from "../../support/pageObjects/logoutFunctionality";
import EditVacancy from "../../support/helpers/commonHelper";
import Timesheet from "../../support/helpers/timesheetHelper";
const loginObj: loginPage = new loginPage();
let userName: string;
let timeId: any;
describe('OrangeHRM ', () => {
    beforeEach(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('timesheet').as('info')
        cy.get('@info').then((info: any) => {
        loginObj.login(info.adminUser, info.adminPassword);
        })
    });
    it('TIME : The employee adds the timesheet', () => {
        cy.get('@info').then((info: any) => {
        addEmployeePIM.addNewEmployeeViaAPI().then((resolve: any) => {
            const [val1, val2, val3] = resolve;
            addEmployeePIM.addNewUserViaAPI(val1).then((resolve) => {
                userName = `${resolve}`;
                LogoutPage.logout()
                loginObj.login(userName,info.empPassword);
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet')
                Timesheet.TimeSheetId().then((resolve) => {
                    timeId = resolve;
                    Timesheet.editTimeSheetViaAPI(timeId)
                    Timesheet.addTimeSheetViaAPI(timeId)
                    Timesheet.sumbitTimeSheetViaAPI(timeId)
                })
                LogoutPage.logout()
                loginObj.login(info.adminUser, info.adminPassword);
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
                EditVacancy.assertionFun([{ key: info.key, value: `${val2}   ${val3}` }])
            });
        });
    })
    })
})