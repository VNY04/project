export const studentLoginReducer=(state={},action)=>{
    switch(action.type){
        case 'STUDENT_LOGIN_REQUEST':
            return{loading:true}
        case 'STUDENT_LOGIN_SUCCESS':
            return{loading:false,studentInfo:action.payload}
        case 'STUDENT_LOGIN_FAILED':
            return{loading:false,error:action.payload}
        case 'STUDENT_LOGOUT':
            return{}
        default:
            return state
    }
}

export const studentSignUpReducer=(state={},action)=>{
    switch(action.type){
        case 'STUDENT_SIGNUP_REQUEST':
            return{loading:true}
        case 'STUDENT_SIGNUP_SUCCESS':
            return{loading:false,studentInfo:action.payload}
        case 'STUDENT_SIGNUP_FAILED':
            return{loading:false,error:action.payload}
        default:
            return state
    }
}