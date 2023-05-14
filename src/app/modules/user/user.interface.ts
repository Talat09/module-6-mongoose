import { HydratedDocument, Model } from "mongoose";

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
// Put all user instance methods in this interface:
export interface IUserMethods {
  fullName(): string;
}
//statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
