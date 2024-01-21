import { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { updatePassword } from "../../redux/actions/teacherAction"
import Loader from "../../components/Loading"
import {toast} from "react-toastify"

const UpdatePassword = () => {
  const dispatch = useDispatch()
  const {loading, success} = useSelector(state=>state.teacherAccess)

  const [oldPass, setOldPass] = useState()
  const [newPass, setNewPass] = useState()
  const [conPass, setConPass] = useState()

  const handleSubmit = ()=>{
    let data ={
      oldPassword : oldPass,
      nPassword : newPass,
      cPassword : conPass
    }
    dispatch(updatePassword(data))
  }
  
  useEffect(()=>{
    if(success){
      toast(success)
    }
  },[success])
    return (
      <div className="px-12 pt-20 flex justify-center">
       <div className="w-6/12 bg-blue-100  py-4 px-5">
          <p className="text-2xl text-blue-900 font-poppins text-center font-bold mb-5">Update Password</p>
          <div>
             <p className="text-blue-900 font-medium text-lg">Old Password</p>
             <input onChange={(e)=>setOldPass(e.target.value)} className="text-blue-900 w-full py-1 px-2 mb-4" type="password" placeholder="Enter your old password"/>
             <p className="text-blue-900 font-medium text-lg">New Password</p>
             <input onChange={(e)=>setNewPass(e.target.value)} className="text-blue-900 w-full py-1 px-2 mb-4" type="text" placeholder="Enter your new password"/>
             <p className="text-blue-900 font-medium text-lg">Confirm Password</p>
             <input onChange={(e)=>setConPass(e.target.value)} className=" text-blue-900 w-full py-1 px-2" type="password" placeholder="Reenter your new password"/>
          </div>
          <button onClick={handleSubmit} className=" bg-blue-900 px-5 py-1 mt-5 rounded-lg text-white">{loading?<Loader/>:"Submit"}</button>
  
      </div> 
      </div>
    );
  }
  
  export default UpdatePassword;
  