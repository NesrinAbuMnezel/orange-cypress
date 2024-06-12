export default class AddVacancy {
    static elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        vacanciesTab: () => cy.get('.oxd-topbar-body-nav-tab-item'),
        addBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary'),
        vacancyName: () => cy.get('.oxd-input'),
        jobTitle: () => cy.get('.oxd-select-text-input'),
        dropDownPicker: () => cy.get('.oxd-select-dropdown.--positon-bottom'),
        interviewerPicker: () => cy.get('[placeholder="Type for hints..."]'),
        interviewerOptions: () => cy.get('.oxd-autocomplete-dropdown'),
        saveBtn: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space'),
        tableRecord: () => cy.get('.orangehrm-horizontal-padding.orangehrm-vertical-padding'),
        editVacancy: () => cy.get('.oxd-text.oxd-text--h6.orangehrm-main-title')
    }
    static addVacancy(vacancyName:any) {
        cy.fixture('addVacancy').as('info')
        cy.get('@info').then((vacancyinfo: any) => {
        this.elements.MainMenuItems().contains('Recruitment').click();
        this.elements.vacanciesTab().eq(1).click()
        this.elements.addBtn().eq(1).click()
        this.elements.vacancyName().eq(1).type(vacancyName)
        this.elements.jobTitle().click({ force: true }).invoke('show')
        this.elements.dropDownPicker().contains(vacancyinfo.jobTitle).click()
        this.elements.interviewerPicker().type(vacancyinfo.hiringManagerPicker).invoke('show')
        this.elements.interviewerOptions().contains(vacancyinfo.hiringManager).click();
        this.elements.saveBtn().click()
        this.elements.editVacancy().should('contain', 'Edit Vacancy')
        this.elements.vacanciesTab().eq(1).click()
        })
    }
}