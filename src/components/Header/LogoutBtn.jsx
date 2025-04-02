import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"
import {Button} from '../components'
function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logoutAccount()
    .then(()=>{
      dispatch(logoutAccount())
    })
    .catch((errror) => console.log(errror))
  }
  return (
    <Button onClick={logoutHandler} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
      Logout
    </Button>
  )
}

export default LogoutBtn
