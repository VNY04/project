import express from 'express'
import studentRoutes from './routes/studentRoutes.js'
import lenderRoutes from './routes/lenderRoutes.js'
import dotenv from 'dotenv'
const app=express()
app.use(express.json())
dotenv.config()

app.use('/student',studentRoutes)
app.use('/lender',lenderRoutes)

app.get('/',(req,res)=>{
    res.send('API is running...')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`))