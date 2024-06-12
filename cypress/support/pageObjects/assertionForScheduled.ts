import keyVal from "../interfaces/keyVal"

export default class SearchInTable {
    static elements = {
        mainTable: () => cy.get('.oxd-table'),
        tableHeader: () => cy.get('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th'),
    }
    static assertionFun(arr: keyVal[]) {
        let columnCount: any;
        SearchInTable.elements.mainTable().find('.oxd-table-header-cell.oxd-padding-cell.oxd-table-th').its('length').then((count) => {
            columnCount = count;
        });
        for (let i = 0; i < arr.length; i++) {
            const columnName = arr[i].key;
            SearchInTable.elements.tableHeader().each((th, index) => {
                cy.wrap(th).invoke('text').then((text: any) => {
                    if (text === columnName) {
                        cy.get(`.oxd-table-cell.oxd-padding-cell > div:eq(${index})`).should('contain', arr[i].value);
                    }
                });
            });
        }
    }
}

