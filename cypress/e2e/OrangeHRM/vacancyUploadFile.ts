import loginPage from "../../support/pageObjects/loginPage";
import AddVacancy from "../../support/pageObjects/addVacancyPage";
import GenericHelper from "../../support/helpers/genericFunctions";
import EditVacancy from "../../support/pageObjects/editVacancyPage";
import UploadFile from "../../support/pageObjects/uploadFilePage";
const loginObj:loginPage=new loginPage;

let randomVacancyName=`test${GenericHelper.genericRandomString()}`
const pathFile='cypress/fixtures/test.txt'
let fileName = pathFile.lastIndexOf('/')
const dataToAssert1 = [{ key: 'Vacancy', value: randomVacancyName } ];
const dataToAssert2 = [{ key: 'File Name', value: pathFile.slice(fileName+1) } ];

describe('OrangeHRM',()=>{
    beforeEach(function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        loginObj.login("Admin", "admin123");
      });
    it('Scenario #2 : Upload File',()=>{
        //add vacancy
        AddVacancy.addVacancy(randomVacancyName)
        // sreach for vacancy in the table and click on edit btn
        EditVacancy.assertionFun(dataToAssert1)
        // upload file for that vacancy
        UploadFile.addFile(pathFile)
        // make assertion for a file name and click on download btn
        EditVacancy.assertionFun(dataToAssert2)
       
    })
})