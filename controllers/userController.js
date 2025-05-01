const userModel = require("../models/userModel");

const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res
        .status(500)
        .send({ sucess: false, message: "Enter all fields" });
    }

    const existingUser = await new userModel.findOne({ email });
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
      .send({ success: false, message: "User registered sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Register API", error });
  }
};

module.exports = { registerController };
