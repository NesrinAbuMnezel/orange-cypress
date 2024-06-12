export interface ILeaveRequestResponse {
  
    data: {
        id: number,
        leaveType: {
            id: number,
            name: string,
            deleted: false
        },
        dateApplied: string
    },
    meta: {
        empNumber: number
    }
    
}
  
  