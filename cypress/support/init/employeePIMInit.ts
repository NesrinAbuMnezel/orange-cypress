import { ICreateEmployeePIMPayload } from "../../e2e/API/payload/employeePIMAPIPayload";
import { ICreateUserPIMPayload } from "../../e2e/API/payload/userPIMAPIPayload";
import GenericHelper from "../helpers/genericFunctions";

export default class employeePIMInit {
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
  
}
