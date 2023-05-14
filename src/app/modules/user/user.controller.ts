import { NextFunction, Request, Response } from "express";
import {
  createUserToDB,
  getAllAdminUsersFromDB,
  getUserByIdFromDB,
  getUsersFromDB,
} from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  console.log("hitted from getuserById", id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
//pattern
// ROute call dibe controller call dibe tar service ke
export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAllAdminUsersFromDB();
  console.log("hitted from getadminusers");
  res.status(200).json({
    status: "success",
    data: user,
  });
};
