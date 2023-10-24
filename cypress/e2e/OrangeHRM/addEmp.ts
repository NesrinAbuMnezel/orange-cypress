import loginPage from "../../support/pageObjects/loginPage";
import addEmployee from "../../support/pageObjects/addEmployeePage";
const addEmpObj: addEmployee = new addEmployee();
const loginObj: loginPage = new loginPage();


let firstName:string;
let lastName:string;
let Id:number;
describe('Login Home Page', () => {
    beforeEach(function () {
        cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
        cy.fixture('empInfo').as('emp')

    })
    it('Add Employee',()=>{
        // cy.get('@emp').then((info:any)=>{
            // addEmpObj.addNewEmployee(info.firstName,info.MiddleName,info.LastName,info.username,info.password,info.confpass);
        // })

    //     loginObj.login('Admin', 'admin123')
        addEmpObj.addNewEmployee('test'," ","test","admin9909","123456a","123456a");
                
            })
        
   
})