import addEmployeePIM from "../../support/helpers/newEmployeeHelper";
import loginPage from "../../support/pageObjects/loginPage";
import LogoutPage from "../../support/pageObjects/logoutFunctionality";
const loginObj: loginPage = new loginPage();

let id: any;
let userName: string;
describe("OrangeHRM ", () => {
  beforeEach(function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    loginObj.login("Admin", "admin123");
  });

  it("PIM: add new employee ", () => {
    addEmployeePIM.addNewEmployeeViaAPI().then((resolve) => {
      id = `${resolve}`;
      addEmployeePIM.addNewUserViaAPI(id).then((resolve) => {
        userName = `${resolve}`;
        LogoutPage.logout()
        loginObj.login(userName,`1234567a`);
    
      });
    });
   
  });
});
