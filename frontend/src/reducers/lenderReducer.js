export const lenderLoginReducer=(state={ },action)=>{
    switch(action.type){
        case 'LENDER_LOGIN_REQUEST':
            return{loading:true}
        case 'LENDER_LOGIN_SUCCESS':
            return{loading:false,lenderInfo:action.payload}
        case 'LENDER_LOGIN_FAILED':
            return{loading:false,error:action.payload}
        case 'LENDER_LOGOUT':
            return{}
        default:
            return state
    }
}

export const lenderSignUpReducer=(state={},action)=>{
    switch(action.type){
        case 'LENDER_SIGNUP_REQUEST':
            return{loading:true}
        case 'LENDER_SIGNUP_SUCCESS':
            return{loading:false,lenderInfo:action.payload}
        case 'LENDER_SIGNUP_FAILED':
            return{loading:false,error:action.payload}
        default:
            return state
    }
}