class candidatePage {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body')
    }
   
    visitCandidatePage() {
        this.elements.MainMenuItems().contains('Recruitment').click();

    }
}
export default candidatePage;
