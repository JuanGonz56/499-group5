import { Router } from "express";
import {
  getUserData,
  signup,
  updateUser,
} from "../controller/user.controller.js";
import checkUser from "../middleware/checkuser.middleware.js";

const userRoute = Router();

userRoute.get("/get-user/:id", checkUser, getUserData);
userRoute.post("/signup", signup);
userRoute.put("/update-user/:email", updateUser);

export default userRoute;
