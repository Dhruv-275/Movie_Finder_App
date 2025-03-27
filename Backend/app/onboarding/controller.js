const jwt = require("jsonwebtoken");
const userModel = require("../../schema/user");
const { hashPassword, dcryptPassword } = require("../../helper/bcrypt");
const { generateOTP } = require("../../helper/otpGentrator");
const sendMail = require("../../helper/mailer");
const userTokenModel = require("../../schema/tokenModel")

const signUp = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).send({ message: "User Already Exists" });
    }

    const hashedPassword = await hashPassword(password);


    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).send({ message: "User Added Successfully", user });
  } catch (error) {
    console.log("error=>", error);
    return res.status(500).send({ message: "Internal server error", error });
  }
};

const loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;

    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      return res.status(404).send({ message: "User not found" });
    }

    const passwordMatches = await dcryptPassword(password, userExists.password);
    if (!passwordMatches) {
      return res.status(400).send({ message: "Incorrect password" });
    }

    const payload = { id: userExists._id };
    const token = jwt.sign(payload, '12345');
    

    return res.status(200).send({ message: "Login Successful", data: userExists, token });
  } catch (err) {
    console.log("error", err.message);
    return res.status(400).send({ message: "Wrong Credentials", err });
  }
};
const forgetAndResetPassword = async function (req, res) {
  try {
    const { email, otp, password, confirmPassword } = req.body;

    if (email && !otp) {
      const userExists = await userModel.findOne({ email: email });
      if (userExists) {
        const otp = generateOTP(); 
        
        await userTokenModel.create({
          user_id: userExists._id,
          otp: otp,
        });

        // Send email 
        const mailOptions = {
            from: 'dhruv3chauhan@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            html: `
              <h2>Password Reset Request</h2>
              <p>Hi there,</p>
              <p>Your OTP is: <strong style="font-size: 18px;">${otp}</strong></p>
              <p>If you didn’t request this, you can ignore this email.</p>
              <br />
              <p>Regards,<br>Movie Review App Team</p>
            `
          };
        // console.log(email)
        sendMail(mailOptions); 

        return res
          .status(200)
          .send({ message: "OTP has been sent to your email", otp }); 
      } else {
        return res.status(404).send({ message: "User not found" });
      }
    }

    if (otp) {
      const otpExists = await userTokenModel.findOne({ otp: otp });
      if (!otpExists) {
        return res.status(400).send({ message: "Invalid or expired OTP" });
      }

      if (!password) {
        return res.status(400).send({ message: "Password is required" });
      }
      if (password !== confirmPassword) {
        return res.status(400).send({ message: "Passwords do not match" });
      }

      const hashedPassword = await hashPassword(password);
      await userModel.updateOne({ _id: otpExists.user_id }, { password: hashedPassword });

      // await userTokenModel.deleteOne({ _id: otpExists._id });

      return res.status(200).send({ message: "Password reset successfully" });
    }

    return res.status(400).send({ message: "Invalid request" });
  } catch (error) {
    console.log("error ", error);
    return res.status(500).send({ message: "Internal server error", error });
  }
};

module.exports = { signUp, loginUser ,forgetAndResetPassword};
