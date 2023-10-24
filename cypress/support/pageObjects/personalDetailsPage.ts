class personalDetails {
    elements = {
        checkBox: () => cy.get('[type="checkbox"]'),
        dateOfBirthPicker: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > div > div > input'),
        dateOfBirthOptions: () => cy.get('.oxd-date-wrapper'),
        dropDownList: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(2) > div > div > div.oxd-select-text-input'),
        dropListOptions: () => cy.get('.oxd-select-wrapper'),
        saveBtn: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div.oxd-form-actions > button')
    }

    dropDownListFun() {
        cy.fixture('MaritalStatus').as('status')
        cy.get('@status').then((maritalstatus: any) => {
            this.elements.dropDownList().click({ force: true })
            this.elements.dropListOptions().contains(maritalstatus[1]).click();
        })
    }
    addInfo(day:string,month:string,year:string) {
        this.elements.dateOfBirthPicker().click();
        cy.get('.oxd-calendar-selector-month-selected').click();
        cy.get('.oxd-calendar-dropdown--option').contains(month).click();
        cy.get('.oxd-calendar-selector-year-selected').click(); 
        cy.get('.oxd-calendar-dropdown--option').contains(year).click();
        cy.get('.oxd-calendar-dates-grid').contains(day).click();
        this.dropDownListFun()
        this.elements.checkBox().eq(0).check({ force: true });
        this.elements.saveBtn().click();
    }
}
export default personalDetails;
