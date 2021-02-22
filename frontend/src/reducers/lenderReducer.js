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