// const express = require('express');

// const User = require('../Models/User');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');

// //create a user using :post "/api/auth". doesn't require auth
// router.post('/',[
//     body('name','enter a valid name').isLength({ min: 3 }),
//     body('password','enter a valid password').isLength({ min: 5 }),
//     body('email','enter a valid email').isEmail()
// ],(req,res)=>{
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // User.create({
//     //     name: req.body.name,
//     //     password: req.body.password,
//     //     email: req.body.email,
//     //   }).then(user => res.json(user))
//     //   .catch(err=>console.log(err));
//     User.create({
//         name: req.body.name,
//         password: req.body.password,
//         email:req.body.email,
//       }).then(user => res.json(user));
// })
// module.exports = router
const express = require('express');
const User = require('../models/User');
const  router = express.Router() ; 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = 'Ajayisagoodboi';
// Route -1 create a user using: POST "/api/auth/createuser" . Doesnt require auth 
router.post('/createuser', [
    body('name', "enter a valid name").isLength({min:3}), 
    body('email', "the email is incorrect").isEmail(), 
    body('password',"the password must have minimun 5 length").isLength({min:5})
] , async (req , res)=>{

    let success = false;

//   console.log(req.body);
//   const user = User(req.body);
//   user.save();
// if there are errors, return bad request and the error
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ success,errors: errors.array() });
}

// chehck whether the user exists already 
try {
let user  = await User.findOne({email: req.body.email});
if(user){
    return res.status(400).json({success,error:" soory a user with email already exist"})
}
const salt = await bcrypt.genSalt(10);
const secPass = await bcrypt.hash(req.body.password, salt);
user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: secPass,
  })
//   .then(user => res.json(user))
//   .catch(err=>{console.log(err)
//  res.json({error:'please enter a unique value',message: err.message})
// })
//   ;

//   res.send(req.body);
const data = {
    user:{
        id:user.id
    }
}
const authtoken = jwt.sign(data, JWT_SECRET);
success = true;
res.json({success,authtoken})
} catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
}
})


// Route-2 Authenticate a user using: POST "/api/auth/login".no login required
router.post('/login', [
    body('email', "the email is incorrect").isEmail(), 
    body('password',"password cant be blank").exists()
] , async (req , res)=>{
    //if there are errors, return bad requst and the errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const {email,password} = req.body;
try {
    let user  = await User.findOne({email});
    if(!user){
        success = false;
        return res.status(400).json({error:"please try to login with coorect credential"})
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
        success = false;
        return res.status(400).json({ success, error:"please try to lopgin with correct credential"})
    }
    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({success, authtoken})
}
catch(error){
    console.log(error.message);
    res.status(500).send("internal server error");
}
})

// Route-2 Get logged in user detail using: POST "/api/auth/getuser".login required
router.post('/getuser', fetchuser,async (req , res)=>{
    try {
        userId =req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("internal server error");
    }
})
module.exports = router 

