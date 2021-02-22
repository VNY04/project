import express from 'express'
import asyncHandler from 'express-async-handler'
import students from '../data/students.js'

const router=express.Router()


//@desc Auth Student & get token
//@route Post /api/student/login
//@access Public 

const authStudent=asyncHandler(async(req,res)=>{
    const {email,password}=req.body

    const user = students.find((student)=>email===student.email_address)
    if(user && user.password===password){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email_address,
            college_id:user.college_id,
            address:user.address,
            city:user.city,
            state:user.state,
            zipcode:user.zipcode,
            mobile_number:user.mobile_number,
            adhaar_number:user.adhaar_number,
            guardian_adhaar_number:user.guardian_adhaar_number,
            verified:user.verified,
            image:user.profile_image
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email or passwrod')
    }
})

router.post('/login',authStudent)

export default router