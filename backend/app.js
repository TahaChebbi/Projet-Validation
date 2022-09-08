// import express module
const express = require("express");
// import body parser module 
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require("mongoose");
// import bcrypt module
const bcrypt = require("bcrypt");
// connect app with Data Base (sportDB : DB Name)
mongoose.connect('mongodb://localhost:27017/ecoleDB')
// creates express application : app 
const app = express();
//  body-parser Configuration
// 1. Send response with JSON format
app.use(bodyParser.json());
// 2. Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));
const User = require("./models/user");

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });

// import user model



// **********************************************
// add user buisness logic
app.post("/user/signup",(req,res)=>{
    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {
            let user = req.body
            // insert user req.body into database (users)
            let userObj = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                cin: user.cin,
                Tel:user.phone,
                role: user.role,
                password: cryptedPwd,

            })

            userObj.save();
        }
    )



})
// login user buisness logic
// login par email
app.post("/user/login/email",(req,res)=>{ 
        User.findOne({ email: req.body.emailIdn})
        .then((response) => {
          if (!response) {
            res.json({ message: "0" });
          }
          return bcrypt.compare(req.body.password, response.password);
        })
        .then((responsePwd) => {
          if (!responsePwd) {
            res.json({ message: "1" });
          }
          User.findOne({ email: req.body.emailIdn}).then((finalResult) => {
           
                if (finalResult.role=="Student") {
                    res.json({ message: "Student" });
                }else if (finalResult.role=="Teacher") {
                  res.json({ message: "Teacher" });
                }
            
          });
        });
    
      
  })
  // login par Cin
  app.post("/user/login/idn",(req,res)=>{
        User.findOne({cin:req.body.emailIdn})
        .then((response) => {
          if (!response) {
            res.json({ message: "0" });
          }
          return bcrypt.compare(req.body.password, response.password);
        })
        .then((responsePwd) => {
          if (!responsePwd) {
            res.json({ message: "1" });
          }
          User.findOne({cin:req.body.emailIdn}).then((finalResult) => {
           
                if (finalResult.role=="Student") {  
                    res.json({ message: "Student" });
                }else if (finalResult.role=="Teacher") {
                  res.json({ message: "Teacher" });
                }
            
          });
        });
    
      
  })
// login admin
  app.post("/user/admin",(req,res)=>{ 
    User.findOne({ email: req.body.email})
    .then((response) => {
      if (!response) {
        res.json({ message: "0" });
      }
      return bcrypt.compare(req.body.password, response.password);
    })
    .then((responsePwd) => {
      if (!responsePwd) {
        res.json({ message: "1" });
      }
      User.findOne({ email: req.body.email}).then((finalResult) => {
       
            if (finalResult.role=="admin") {
               
                res.json({ message: "admin" });
            }
        
      });
    });

  
})







module.exports = app;