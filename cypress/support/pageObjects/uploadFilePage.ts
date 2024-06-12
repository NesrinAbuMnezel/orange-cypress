export default class UploadFile {
    static elements = {
        addBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--text'),
        uploadedFile: () => cy.get('input[type="file"]'),
        saveBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
    }
    static addFile(path:string) {
        this.elements.addBtn().click()
        this.elements.uploadedFile().selectFile(path, { force: true })
        this.elements.saveBtn().eq(1).click()
    }
}