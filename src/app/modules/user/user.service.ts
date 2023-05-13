import User from "./user.model";

export const createUserToDB = async () => {
  const user = await new User({
    id: "442",
    name: {
      firstName: "MR. Nuhan",
      middleName: "Mahmud",
      lastName: "Dihan",
    },
    role: "student",
    email: "abc@gmail.com",
    password: "amipass1df23",

    gender: "male",
    contactNo: "017888888",
    emergencyContact: "0185555555",
    presentAddress: "halishahar",
    permanentAddress: "sandwip",
  });
  await user.save();
  return user;
};
