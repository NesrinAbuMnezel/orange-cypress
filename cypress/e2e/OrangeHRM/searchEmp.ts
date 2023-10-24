import loginPage from "../../support/pageObjects/loginPage";
import searchEmployee from "../../support/pageObjects/searchEmpPage";
const loginObj: loginPage = new loginPage();
const searchObj: searchEmployee = new searchEmployee();

let Id:number;
describe('Login Home Page', () => {
    beforeEach(function () {
        // cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('/')
        // loginObj.login('Admin', 'admin123')

    })


     it('search for employee',()=>{
        loginObj.login('Admin','admin123')
        searchObj.searchemp([{key:'Id',value:'0046'}])
    })  
})