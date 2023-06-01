const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "User Registered", newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //Checking for empty values
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Body is missing some of the required properties" });
    }

    //Checking if user is registered or not
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User does not exist!", isSuccess: false });
    }

    //Comparing the passwords
    const passwordIsTrue = await bcrypt.compare(password, user?.password);

    //Generating token
    const secretkey = "someprivatekey";
    const token = jwt.sign(
      { _id: user?._id, name: user?.username },
      secretkey,
      {
        expiresIn: 20000,
      }
    );

    if (passwordIsTrue) {
      return res.status(201).json({
        message: "User logged in successfully",
        username,
        token,
        isSuccess: true,
      });
    } else {
      return res.status(401).json({
        message: "Password is wrong!",
        isSuccess: false,
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, login };
