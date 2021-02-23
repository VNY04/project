import express from 'express'
import asyncHandler from 'express-async-handler'
import lenders from '../data/lenders.js'
const router=express.Router()



//@desc Auth Lender & get token
//@route Post /lender/login
//@access Public
const authLender=asyncHandler(async(req,res)=>{
    const {email,password}=req.body

    const user = lenders.find((lender)=>email===lender.email_address)
    if(user && user.password===password){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email_address,
            address:user.address,
            city:user.city,
            state:user.state,
            zipcode:user.zipcode,
            mobile_number:user.mobile_number,
            adhaar_number:user.adhaar_number,
            verified:user.verified,
            image:user.profile_image
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email or password')
    }
})


const signupLender=asyncHandler(async(req,res)=>{
    const {name,email,password,mobileNumber,adhaarNumber,address,city,state,zipCode}=req.body
    const userExists=await lenders.find((lender)=>email===lender.email_address)
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user={_id:lenders.length+1,name,email_address:email,password,address,city,state,zipcode:zipCode,mobile_number:mobileNumber,adhaar_number:adhaarNumber,verified:false,image:''}
    lenders.push(user)
    const new_user=lenders.find((lender)=>email===lender.email_address)

    if(new_user){
        res.status(201).json({
            _id:new_user._id,
            name:new_user.name,
            email:new_user.email_address,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user Data')
    }

})

router.route('/login').post(authLender)
router.route('/signup').post(signupLender)
export default router