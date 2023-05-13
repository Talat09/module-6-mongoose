import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
//application routes
import userRoutes from "./app/modules/user/user.route";

//using cors
app.use(cors());
// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
export default app;

//inserting a test data into mongodb
/* 
  step1: crate interface
  step2: schema
  step3:Model
  step4: Database Query
  */

/* 
 Breakdown:
 interface ---> user.interface.ts
 schema & model ----> user.model.ts
 route ----->
 route-function --->controller.ts
 database query Function -----> service.ts
 */

// res.send("Hello World! from Mongoose");
// next();
