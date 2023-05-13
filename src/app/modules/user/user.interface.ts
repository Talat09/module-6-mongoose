//step1: creating an interface
export interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  role: "student";
  email?: string;
  password: string;
  dateOfBirth?: string;
  gender: "male" | "female";
  contactNo: string;
  emergencyContact: string;
  presentAddress: string;
  permanentAddress: string;
}
