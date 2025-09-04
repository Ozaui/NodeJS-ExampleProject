import Auth from "./model/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Bu email ile kaydolamazsınız" });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: "Şifre 8 karakterden az olamaz" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({
      userName: username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "OK",
      user: newUser,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Burada hata var" });
  }
};

export default register;
