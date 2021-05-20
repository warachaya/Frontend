export class Users {
    userId: number | undefined;
    id: number | undefined;
    title: string | undefined;
    body: string | undefined;
    // A: string | undefined;
    // B: number | undefined;
    // C: number | undefined;
     // รอเติ้ล
}
export interface UsersAll{
     result : Users[]
     message : string
    // รอเติ้ล
    
}

export class Driver_ {
    DriverID: number | undefined;
    TruckRegistration: string | undefined;
    DriverName: string | undefined;
    DriverSurname: string | undefined;
    DriverPhonenumber: string | undefined;
   
    
}
export interface UsersAll{
     result : Driver_[]
     message : string
    
}