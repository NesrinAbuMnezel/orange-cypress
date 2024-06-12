import { ICreateEmployeePIMPayload } from "../../e2e/API/payload/employeePIMAPIPayload";
import { ICreateUserPIMPayload } from "../../e2e/API/payload/userPIMAPIPayload";
import GenericHelper from "../helpers/genericFunctions";
import {ILeaveEntitlementPayload } from "../../e2e/API/payload/leaveEntitlementPayload";
import {ILeaveRequestPayload } from "../../e2e/API/payload/leaveRequestPayload";
import { IApproveRequestPayload } from "../../e2e/API/payload/approveRequestPayload";

export default class approveRequestInit {
  static initEmployeePIM(): ICreateEmployeePIMPayload {
    let createEmployeePIMPayload: ICreateEmployeePIMPayload = {
      empPicture: null,
      employeeId: `${GenericHelper.genericRandomString()}`,
      firstName: `admin${GenericHelper.genericRandomString()}`,
      lastName: `test${GenericHelper.genericRandomString()}`,
      middleName: " ",
    };
    return createEmployeePIMPayload;
  }
  static initUserPIM(empNum:number): ICreateUserPIMPayload {
    let createUserPIMPayload: ICreateUserPIMPayload = {
        empNumber: empNum,
        password: `1234567a`,
        status: true,
        userRoleId: 2,
        username: `admintest${GenericHelper.genericRandomString()}`,
    
    };
    return createUserPIMPayload;
  }
  static initLeaveEntitlements(empNum:number): ILeaveEntitlementPayload {
    let createLeaveEntitlementsPayload: ILeaveEntitlementPayload = {
      empNumber: empNum,
      entitlement: "22",
      fromDate: "2023-01-01",
      leaveTypeId: 8,
      toDate: "2023-12-31",
    
    };
    return createLeaveEntitlementsPayload;
  }
  static initLeaveRequest(): ILeaveRequestPayload {
    let createLeaveRequestPayload: ILeaveRequestPayload = {
      comment: null,
      duration: {type: "full_day"},
      fromDate: "2023-10-31",
      leaveTypeId: 8,
      toDate: "2023-10-31"
    
    };
    return createLeaveRequestPayload;
  }
  static initApproveRequest(): IApproveRequestPayload {
    let createApproveRequestPayload: IApproveRequestPayload = {
        action:"APPROVE"
    };
    return createApproveRequestPayload;
  }
}
