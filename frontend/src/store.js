import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { studentLoginReducer } from './reducers/studentReducer'
import { lenderLoginReducer } from './reducers/lenderReducer'


const reducer=combineReducers({
    studentLogin:studentLoginReducer,
    lenderLogin:lenderLoginReducer  
})

const studentInfoFromStorage=localStorage.getItem('studentInfo')?JSON.parse(localStorage.getItem('studentInfo')):null
const lenderInfoFromStorage=localStorage.getItem('lenderInfo')?JSON.parse(localStorage.getItem('lenderInfo')):null

const initialState={
    studentLogin:{studentInfo:studentInfoFromStorage},
    lenderLogin:{lenderInfo:lenderInfoFromStorage}
}

const middleware=[thunk]
const store =createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store