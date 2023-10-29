import loginPage from "../../support/pageObjects/loginPage";
import Post from "../../support/pageObjects/buzzPage";
const loginObj: loginPage = new loginPage();
let filePath:string='cypress/fixtures/test00.txt'
describe('OrangeHRM', () => {
    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginObj.login('Admin', 'admin123')
        cy.writeFile(filePath, 'hello world!!')
    })
    it('Buzz', (() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz')
        Post.writePost(filePath)
        Post.validatePost(filePath)
    }))
})



