const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(500)
        .send({ sucess: false, message: "All fields required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new userModel({ username, email, password });
    await newUser.save();

    res
      .status(201)
      .send({ success: true, message: "User registered sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Register API", error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not Found" });
    }
    res.status(200).send({ success: true, message: "Login Successful", user });
  } catch (error) {
    console.log("error");
    res.status(500).send({ success: false, message: "Login API", error });
  }
};
module.exports = { registerController, loginController };
