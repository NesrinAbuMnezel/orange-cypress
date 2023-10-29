import timesheetInit from "../init/timesheetInit";
let timeId: any;
export const URLs = {
  getTimesheetId: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets/default?date=2023-10-25`,
};
export default class Timesheet{
  static TimeSheetId() {
    return new Cypress.Promise((resolve, reject) => {
      cy.TimeSheetId(
        "GET",
        URLs.getTimesheetId,
        ''
      ) .then((response) => {
        timeId = response.data.id;
        resolve(timeId);
      });
    });
  }
  static editTimeSheetViaAPI(timeId:number) {
      cy.addTimeSheet(
        "GET",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
        timesheetInit.editTimeSheetInit(timeId)
      )
  }
  static addTimeSheetViaAPI(timeId:number) {
      cy.addTimeSheet(
        "PUT",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets/${timeId}/entries`,
        timesheetInit.addTimeSheetInit()
      )
  }
  static sumbitTimeSheetViaAPI(timeId:number) {
      cy.addTimeSheet(
        "PUT",
        `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets/${timeId}`,
        timesheetInit.submitTimeSheetInit()
      )
  }
}
