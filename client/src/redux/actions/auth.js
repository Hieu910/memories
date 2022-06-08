import * as api from "../../api"
import { AUTH } from "./actionTypes"
import { useNavigate } from "react-router-dom"


export const signup = (formData,navigate)=> async (dispatch)=>{
    try {
        const { data } = await api.signUp(formData)
       
        dispatch({
            type: AUTH,
            payload: data
        })
        navigate('/')
    } catch (error) {
        console.log(error)   
    }
}

export const signin = (formData,navigate)=> async (dispatch)=>{
    try {
        const { data } = await api.signIn(formData)
       
        dispatch({
            type: AUTH,
            payload: data
        })
        navigate('/')
    } catch (error) {
        console.log(error)   
    }
}