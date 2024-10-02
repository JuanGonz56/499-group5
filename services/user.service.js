import User from "../model/user.js";

export const getUserByemail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

export const createNewUser = async (userData) => {
  await User.create(userData);
};

export const findUserAndUpdate = async (userEmail, userUpdatedData) => {
  await User.findOneAndUpdate({ userEmail }, userUpdatedData);
};
