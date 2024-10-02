import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
});

const User = model("User", UserSchema);

export default User;
