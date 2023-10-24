import loginPage from "../../support/pageObjects/loginFunPage";
// import forgetPassword from "../../pageObjects/login";
const login: loginPage = new loginPage();
// const passwordObj: forgetPassword = new forgetPassword();

let Id: number;
describe('Login Home Page', () => {
    beforeEach(function () {
        cy.intercept('/web/index.php/dashboard/index').as('LoginPage')
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        // loginObj.login('Admin', 'admin123')
        cy.fixture('loginInfo').as('user')

    })


    it('Vaild Username And Valid Password', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[0].username, userLogin[0].password);
            login.verfiyElem(userLogin[0].elertMsg);

            // cy.get('.oxd-topbar-header-breadcrumb').should('contain', userLogin[0].mainPageLabel);
        })
    })

    it('Vaild Username And Invalid Password', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[1].username, userLogin[1].password);
            login.verfiyElem(userLogin[1].elertMsg);

            // cy.get('.oxd-alert').should('contain', userLogin[1].errorMsg);
        })
    })

    it('Invaild Username And Valid Password ', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[2].username, userLogin[2].password);
            login.verfiyElem(userLogin[2].elertMsg);
            // cy.get('.oxd-alert').should('contain', userLogin[2].errorMsg);
        })
    })

    it('Invaild Username And Invalid Password', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[3].username, userLogin[3].password);
            login.verfiyElem(userLogin[3].elertMsg);

            // cy.get('.oxd-alert').should('contain', userLogin[3].errorMsg);
        })
    })

    it('Empty Username And Empty Password', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[4].username, userLogin[4].password);
            login.verfiyElem(userLogin[4].elertMsg);
            // cy.get('.oxd-input-field-error-message').should('contain', userLogin[4].errorMsg);
        })
    })
    it('Empty Username ', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[5].username, userLogin[5].password);
            login.verfiyElem(userLogin[5].elertMsg);

            // cy.get('.oxd-input-field-error-message').should('contain', userLogin[5].errorMsg);
        })
    })
    it('Empty Password', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[6].username, userLogin[6].password);
            login.verfiyElem(userLogin[6].elertMsg);

            // cy.get('.oxd-input-field-error-message').should('contain', userLogin[6].errorMsg);
        })
    })
    it('Lower Case Username', () => {
        cy.get('@user').then((userLogin: any) => {
            login.userLogin(userLogin[7].username, userLogin[7].password);
            login.verfiyElem(userLogin[7].elertMsg);

            // cy.get('.oxd-topbar-header-breadcrumb').should('contain', userLogin[0].mainPageLabel);
        })
    })
    it('Hidden Password', () => {
        cy.get('@user').then((userLogin: any) => {
            cy.get('input[name="password"]').type(userLogin[0].password).should('have.attr', 'type', 'password');

        })
    })

})



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

