import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;
//step2: create a schema corresponding to the document interface
export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
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
//static class ---> this .
userSchema.static("getAdminUsers", async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  return admins;
});
//
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

//crate a Model
const User = model<IUser, UserModel>("User", userSchema);
export default User;
// instance methods ----> instance er methods
//class --> instance + methods ---> instance methods
