import ApproveRequest from "../../support/helpers/approveRequestHelper";
import loginPage from "../../support/pageObjects/loginPage";
import LogoutPage from "../../support/pageObjects/logoutFunctionality";
import SearchInTable from "../../support/pageObjects/assertionForScheduled";
const loginObj: loginPage = new loginPage();

let id: any;
let leaveId: any;
let userName: string;
describe("OrangeHRM ", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginObj.login("Admin", "admin123");
  });

  it("Scenario #1 : Approve Leave Request ", () => {
    ApproveRequest.addNewEmployeeViaAPI().then((resolve) => {
      id = `${resolve}`;
      ApproveRequest.addNewUserViaAPI(id).then((resolve) => {
        userName = `${resolve}`;
        ApproveRequest.addLeaveEntitlementsViaAPI(id);
        LogoutPage.logout();
        loginObj.login(userName, `1234567a`);
        ApproveRequest.addLeaveRequestViaAPI().then((resolve) => {
          leaveId = `${resolve}`;
          LogoutPage.logout();
          loginObj.login("Admin", "admin123");
          ApproveRequest.approveLeaveRequestViaAPI(leaveId);
        });
        LogoutPage.logout();
        loginObj.login(userName, `1234567a`);
      });
    });
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveList");
    SearchInTable.assertionFun([{ key: 'Status', value: 'Scheduled' }])
  });
});
