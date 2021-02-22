import axios from 'axios'

export const loginStudent =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:'STUDENT_LOGIN_REQUEST'
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/student/login',{email,password},config)

        dispatch({
            type:'STUDENT_LOGIN_SUCCESS',
            payload:data
        })

        localStorage.setItem('studentInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:'STUDENT_LOGIN_FAILED',
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}

export const logoutStudent =()=>(dispatch)=>{
    localStorage.removeItem('studentInfo')
    dispatch({type:'STUDENT_LOGOUT'})
}
