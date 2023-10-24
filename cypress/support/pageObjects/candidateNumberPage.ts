export default class Candidate {
    static elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        mainTable: () => cy.get('.oxd-table-body'),
    }
    static numberOfRows() {
        let numOfRows: number;
        this.elements.MainMenuItems().contains('Recruitment').click();
        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?**').as("candidates")
        cy.wait("@candidates").then((response) => {
            numOfRows = response.response?.body.meta.total;
        })
        this.elements.mainTable().find(".oxd-table-card")
            .then((row) => {
                cy.get('.oxd-table-card').should('have.length', numOfRows)
            });


    }
}