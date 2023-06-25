const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const newUser = new User({
    name:req.body.name,
    lastname:req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin:req.body.isAdmin
  });

 
  try {
    const saved = await newUser.save({
      writeConcern: { w: 2, wtimeout: 5000 },
    });
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong credentials!!!");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (originalpassword !== req.body.password) {
      res.status(401).json("wrong credentioals!!!!");
    } else {
      const accesstoken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "31d" }
      );

      const { password, ...others } = user._doc;
      res.status(200).json({ accesstoken, ...others });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
