import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/user", userRoute);

const mongoConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017");
  console.log("DB Connected");
};

mongoConnect();

app.listen(3000, () => console.log(" server started on port 3000"));
