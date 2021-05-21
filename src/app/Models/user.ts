export class Users {
    userId: number | undefined;
    id: number | undefined;
    title: string | undefined;
    body: string | undefined;
    
}   
export interface UsersAll{
     result : Users[]
     message : string
  
    
}

export class Driver_ {
    DriverID: number | undefined;
    TruckRegistration: string | undefined;
    DriverName: string | undefined;
    DriverSurname: string | undefined;
    DriverPhonenumber: string | undefined;
   
    
}
export interface UsersAll1{
     result1 : Driver_[]
     message1 : string
    
}