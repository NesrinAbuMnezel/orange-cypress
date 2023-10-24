import employeePIMInit from "../init/employeePIMInit";
let Id: number;
let userName: string;
export const URLs = {
  employee: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees`,
  user: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users`,
};
export default class addEmployeePIM {
  static addNewEmployeeViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewEmployeePIM(
        "POST",
        URLs.employee,
        employeePIMInit.initEmployeePIM()
      ).then((response) => {
        Id = response.data.empNumber;
        resolve(Id);
      });
    });
  }

  static addNewUserViaAPI(id: any) {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewUserPIM("POST", URLs.user, employeePIMInit.initUserPIM(id)).then(
        (response) => {
          userName = response.data.userName;
          resolve(userName);
        }
      );
    });
  }
}
