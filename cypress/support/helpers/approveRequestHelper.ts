import approveRequestInit from "../init/leaveRequestInit";
let Id: number;
let userName: string;
let leaveId: number;
export const URLs = {
  employee: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees`,
  user: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users`,
  leaveEntitlements: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-entitlements`,
  leaveRequest: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/leave-requests`,
};
export default class ApproveRequest {
  static addNewEmployeeViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewEmployeePIM("POST", URLs.employee, approveRequestInit.initEmployeePIM()).then((response) => {
        Id = response.data.empNumber;
        resolve(Id);
      });
    })
  }

  static addNewUserViaAPI(id: any) {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewUserPIM("POST", URLs.user, approveRequestInit.initUserPIM(id)).then(
        (response) => {
          userName = response.data.userName;
          resolve(userName);
        }
      );
    });
  }
  static addLeaveEntitlementsViaAPI(id: any) {
      cy.addLeaveEntitlements(
        "POST",
        URLs.leaveEntitlements,
        approveRequestInit.initLeaveEntitlements(id)
      )
  }
  static addLeaveRequestViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addLeaveRequest(
        "POST",
        URLs.leaveRequest,
        approveRequestInit.initLeaveRequest()
      ).then((response) => {
        leaveId = response.data.id;
        resolve(leaveId);
      });
    });
  }
  static approveLeaveRequestViaAPI(id: any) {
      cy.approveLeaveRequest(
        "PUT",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests/${id}`,
        approveRequestInit.initApproveRequest()
      )
  }
}
