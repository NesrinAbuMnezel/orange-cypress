import keyVal from "../interfaces/keyVal"
let length:number;
let i:number
class searchEmployee {
    elements = {
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        EId: () => cy.get(':nth-child(2) > .oxd-input'),
        empName: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input'),
        supervisorName: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input'),
        searchBtn: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
    }
    searchemp(arr: keyVal[]) {
        let val:any;
        this.elements.MainMenuItems().contains('PIM').click();
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].key == 'Id') {
               val= this.elements.EId().type(arr[i].value)
               this.elements.searchBtn().click({force:true})

            }
            //  else if (arr[i].key == 'EmployeeName') {
            //     this.elements.empName().type(arr[i].value)
            // } else if (arr[i].key == 'Supervisor Name') {
            //     this.elements.supervisorName().type(arr[i].value)
            // }
        }
        // this.elements.searchBtn().click({force:true})
    }
    }


export default searchEmployee