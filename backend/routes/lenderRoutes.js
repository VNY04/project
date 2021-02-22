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

router.route('/login').post(authLender)

export default router