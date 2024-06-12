import keyVal from "../interfaces/keyVal";
export default class EditVacancy {

    static elements = {
        mainTable: () => cy.get('.oxd-table'),
        tableBody: () => cy.get('.oxd-table-body'),
        tableHeader: () => cy.get('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th')
    }
    static assertionFun(arr: keyVal[]) {
        let columnCount: any;
        let rowCount: any;
        let rowMatchesData = true;
        this.elements.mainTable().find('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').its('length').then((count) => {
            columnCount = count;
        });
        this.elements.tableBody().find(".oxd-table-card").its('length').then((count) => {
            rowCount = count;
        });
        for (let i = 0; i < arr.length; i++) {
            this.elements.mainTable().within(() => {
                const columnName = arr[i].key;
                let indexnum: any;
                let save: any;
                this.elements.tableHeader().each((th, mindex) => {
                    cy.wrap(th).invoke('text').then((text: any) => {
                        indexnum = text.indexOf('AscendingDescending')
                        if (indexnum != -1) {
                            text = text.slice(0, indexnum);
                        }
                        if (text === columnName) {
                            this.elements.tableBody().find(".oxd-table-card")
                                .each((th, index: any) => {
                                    cy.wrap(th).then(() => {
                                        if (rowMatchesData == true) {
                                            cy.get(`.oxd-table-card:eq(${index})`).find(`.oxd-table-cell.oxd-padding-cell > div:eq(${mindex})`)
                                                .each((th) => {
                                                    cy.wrap(th).invoke('text').then((text: any) => {
                                                        if (text == arr[i].value) {
                                                            save = index;
                                                            cy.get(`.oxd-table-card:eq(${index})`).find(`.oxd-table-cell.oxd-padding-cell > div:eq(${mindex})`).should('have.text', arr[i].value);
                                                            cy.get(`.oxd-table-card:eq(${index})`).find(`.oxd-table-cell.oxd-padding-cell > div:eq(${columnCount - 1}) > .oxd-icon-button.oxd-table-cell-action-space`).eq(1).click({ force: true });
                                                            rowMatchesData = false
                                                        }
                                                    })
                                                })
                                        }
                                    })
                                })
                        }
                    });
                });

            });
        }
    }
}