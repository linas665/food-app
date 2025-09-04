import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id); // Pass user._id here
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const createToken = (id) => { // Expect the id to be passed here
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '24h' }); // JWT generation with expiration
  } catch (error) {
    console.error("Error signing JWT:", error);
    throw new Error("Token generation failed");
  }
};

// Register User
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // Checking if user already exists 
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists" });
    }

    // Validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter a Valid Email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please Enter a Strong password" });
    }

    // Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id); // Pass user._id here
    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};


export { loginUser, registerUser };
