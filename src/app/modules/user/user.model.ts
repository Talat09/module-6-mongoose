import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

//step2: create a schema corresponding to the document interface
export const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  role: {
    type: String,
    required: true,
  },
  email: { type: String },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  gender: { type: String, enum: ["male", "female"] },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContact: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});
//crate a Model
const User = model<IUser>("User", userSchema);
export default User;
