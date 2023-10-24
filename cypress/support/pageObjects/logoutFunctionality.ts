export default class LogoutPage {
    static elements = {
        dropDownPicker: () => cy.get('.oxd-userdropdown-name'),
        logoutBtn: () =>  cy.get('.oxd-dropdown-menu'),
    }
    static logout() {
        LogoutPage.elements.dropDownPicker().click().invoke('show')
        LogoutPage.elements.logoutBtn().contains('Logout').click()
    }
}