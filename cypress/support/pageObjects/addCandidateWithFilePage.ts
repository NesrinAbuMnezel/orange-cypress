export default class CandidateWithFile {
    static elements = {
        firstlastName: () => cy.get('.--name-grouped-field'),
        email: () => cy.get('.oxd-input.oxd-input'),
        uploadedFile: () => cy.get('input[type="file"]'),
        saveBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
        resumefile: () => cy.get('.oxd-text.oxd-text--p.orangehrm-file-name')
    }
    static AddCandidateWithUploadFile(filePath:string) {
        CandidateWithFile.elements.firstlastName().children().eq(0).type('admin')
        CandidateWithFile.elements.firstlastName().children().eq(2).type('test')
        CandidateWithFile.elements.email().eq(4).type('admin@gmail.com')
        CandidateWithFile.elements.uploadedFile().selectFile(filePath, { force: true })
        CandidateWithFile.elements.saveBtn().click()
    }
    static assertionOnFileTitle(filePath:string) {
        let fileName = filePath.lastIndexOf('/')
        CandidateWithFile.elements.resumefile().should('contain',filePath.slice(fileName+1))
    }
}