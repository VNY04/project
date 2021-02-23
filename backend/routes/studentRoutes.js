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

const signupStudent=asyncHandler(async(req,res)=>{
    const {name,email,password,mobileNumber,collegeID,adhaarNumber,guardianAdhaarNumber,address,city,state,zipCode}=req.body
    const userExists=await students.find((student)=>email===student.email_address)
    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user={_id:students.length+1,name,email_address:email,password,college_id:collegeID,address,city,state,zipcode:zipCode,mobile_number:mobileNumber,adhaar_number:adhaarNumber,guardian_adhaar_number:guardianAdhaarNumber,verified:false,image:''}
    students.push(user)
    const new_user=students.find((student)=>email===student.email_address)

    if(new_user){
        console.log('user created');
        res.status(201).json({
            _id:new_user._id,
            name:new_user.name,
            email:new_user.email_address,
            college_id:new_user.college_id
        })
    }else{
        res.status(400)
        throw new Error('Invalid user Data')
    }

})

router.post('/login',authStudent)
router.post('/signup',signupStudent)
export default router