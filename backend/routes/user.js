const express = require('express');
const {signInBody,signUpBody, updateBody} = require('../types');

const {User, Account} = require( '../db')
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middlewares');
require('dotenv').config()
router.post('/signup', async (req,res)=>{
    const{username,firstname,lastname,password} = req.body

    const {success} = signUpBody.safeParse({username,firstname,lastname,password});
    if(!success) return res.status(400).json({msg:"Incorrect Inputs"});

    const existingUser = await User.findOne({username})
    if(existingUser) return  res.status(409).json({msg:"User Already Found"})

    const user = await User.create({
        username,
        firstname,
        lastname,
        password
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance:1+Math.random()*10000,
    })

    const token = jwt.sign({userId},process.env.JWT_SECRET)

    res.status(200).json({msg:"User Created",token})
})


router.post('/signin',async (req,res)=>{
    const {username,password} = req.body

    const {success} = signInBody.safeParse({username,password});
    if(!success) return res.status(411).json({msg:"Wrong Inputs"});

    const user = await User.findOne({username,password})
    console.log(user);
    if(!user) return res.status(404).json({msg:"User not found"});

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET)

    res.status(200).json({msg:"Login Success",token});

})

router.put('/',authMiddleware ,async (req,res)=>{
    const {username,firstname,lastname} = req.body

    const{success} = updateBody.safeParse({username,firstname,lastname});
    if(!success) return res.status(411).json({msg:"Error while updating information"});

    await User.updateOne({_id:req.id},{username,firstname,lastname})

    res.json({
        msg:"Updated Success"
    })

})

router.get('/bulk',async (req,res)=>{
    const name = req.query.filter || "";

    const data = await User.find({
        $or:[
            {firstname:{
                "$regex":name
            }},
            {lastname:{
                "$regex":name,
            }}
        ]
    })

    res.status(200).json({users:data})

})
module.exports = router;
