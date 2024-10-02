import { createNewUser, getUserByemail } from "../services/user.service.js";

export const getUserData = async (req, res) => {
  try {
    //const email = req.params.id;
    //const user = getUserByemail(email);

    res.status(200).json({ "status":"user fetched" });
  } catch (err) {
    console.log(err);
  }
};

export const signup = async (req, res) => {
  try {
    const user = req.body;

    await createNewUser(user);

    res.json({ status: "user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "Something went wrong" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedUserData = req.body;
    console.log(email, updatedUserData);

    await findUserAndUpdate(email, updatedUserData);

    res.status(200).json({ status: "User profile updated" });
  } catch (err) {
    console.log(err);
  }
};
