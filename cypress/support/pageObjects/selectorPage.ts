class selector{
    elements={
        timeSelector: ()=> cy.get('.oxd-text.oxd-text--span.orangehrm-attendance-card-fulltime'),
    }
    
 findSelector(){
   this.elements.timeSelector()
   this.elements.timeSelector().parents().eq(2)

 }
 
}
export default selector;
