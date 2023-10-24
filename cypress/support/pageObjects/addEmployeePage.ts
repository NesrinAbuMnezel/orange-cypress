class addEmployee
{
    elements={
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        createBtn:() => cy.get('.--label-right'),
        userName:()=> cy.get('.oxd-input'),
        password:()=> cy.get('.oxd-input'),
        confirmPass:() => cy.get('.oxd-input'),
        saveBtn:()=> cy.get('.oxd-button--secondary.orangehrm-left-space')
        
    }
    

    addNewEmployee(firstName:string, MiddleName:string, LastName:string,username:string,password:string,confpass:string){
     this.elements.MainMenuItems().contains('PIM').click();
     this.elements.AddEmp().eq(1).click()
     this.elements.EmployeeInputName().children().eq(0).type(firstName)
     this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
     this.elements.EmployeeInputName().children().eq(2).type(LastName)
     this.elements.createBtn().click()
     this.elements.userName().eq(5).type(username)
     this.elements.password().eq(6).type(password)
     this.elements.confirmPass().eq(7).type(confpass)
     this.elements.saveBtn().click()
    }

}
export default addEmployee;