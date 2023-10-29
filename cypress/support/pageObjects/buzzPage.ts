export default class Post {
    static elements = {
        inputData: () => cy.get('.oxd-buzz-post-input'),
        postBtn: () => cy.get('[type=submit]'),
        confirmContent: () => cy.get(".oxd-text.oxd-text--p.orangehrm-buzz-post-body-text")
    }
    static writePost(filePath:string) {
        cy.readFile(filePath).then((fileContent) => {
            this.elements.inputData().type(fileContent)
        });
        this.elements.postBtn().click()
    }
    static validatePost(filePath:string) {
        cy.readFile(filePath).then((fileContent) => {
            this.elements.confirmContent().should('contain', fileContent)
        });

    }

}