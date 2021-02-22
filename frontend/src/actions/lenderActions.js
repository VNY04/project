import axios from 'axios'

export const loginLender =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
            type:'LENDER_LOGIN_REQUEST'
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data} = await axios.post('/lender/login',{email,password},config)

        dispatch({
            type:'LENDER_LOGIN_SUCCESS',
            payload:data
        })

        localStorage.setItem('lenderInfo',JSON.stringify(data))
    }catch(error){
        dispatch({
            type:'LENDER_LOGIN_FAILED',
            payload:error.response && error.response.data.message?error.response.data.message:error.message
        })
    }
}

export const logoutLender =()=>(dispatch)=>{
    localStorage.removeItem('lenderInfo')
    dispatch({type:'LENDER_LOGOUT'})
}
