const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt =require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET="rajuisagoodb@oy";

// ROUTE 1: create a user using: POST "/api/auth/createUser". No login Required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //check whether the user with the same email exist already
    try {
        //catch a error
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
      }
      //Create a new User
      const salt =await bcrypt.genSalt(10);
      const secPass=await bcrypt.hash(req.body.password,salt);

      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      const data={
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      success=true;
      res.json({success,authToken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
  }
);

//ROUTER 2: Authenticate a user using: POST "/api/auth/login".login Required
router.post(
  '/login',
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannnot be blank").exists(),
  ],
  async (req, res) => {
     //if there are errors, return bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     const{email,password}=req.body;
     try{
      let user=await User.findOne({email});
      if(!user){
        return res.status(400).json({error:"Please try to login with correct credentials"});
      }
      const passwordCompare=await bcrypt.compare(password,user.password);
      if(!passwordCompare){
        success=false
        return res.status(400).json({success,error:"Please try to login with correct credentials"});
      }
      const data={
        user:{
          id:user.id
        }
      }
      const authToken=jwt.sign(data,JWT_SECRET);
      success=true
      res.json({success,authToken});
     }catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error occured");
    }
    
    });

    module.exports = router;