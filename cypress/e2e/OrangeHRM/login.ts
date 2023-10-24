import loginPage from "../../support/pageObjects/loginPage";
// import forgetPassword from "../../pageObjects/login";
const loginObj: loginPage = new loginPage();
// const passwordObj: forgetPassword = new forgetPassword();

let Id: number;
describe('Login Home Page', () => {
    beforeEach(function () {
        cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
        cy.fixture('loginInfo').as('user')

    })


   

})






// it.only('Verify Login Response', () => {
//     cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts')
//         .then((response) => {
//             expect(response).property('status').to.equal(200);
//         })
// })

// it.only('Verify  Response', () => {
//     cy.request('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts')
//         .then((response) => {
//             expect(response).property('status').to.equal(200);
//         })
// })

// it.only('Verify users', () => {
//     cy.request({
//         method:'POST',
//         url:'/web/index.php/api/v2/admin/users',
//         body:{
//             username:"ashlgdysydvdv",
//             password:"1234567a",
//             status:true,
//             userRoleId:2,
//             empNumber:7,
//         }
//     })
//         .then((response) => {
//             expect(response).property('status').to.equal(200);
//             Id=response.body.data.id;
//             console.log(Id);

//         })
// })

// afterEach(function(){
//     cy.request({
//         method:'DELETE',
//         url:'/web/index.php/api/v2/admin/users',
//         body:{
//           ids:[Id]
//         }
//     })
//         .then((response) => {
//             // console.log(response);
//             expect(response).property('status').to.equal(200);
//         })
// })


