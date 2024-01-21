import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSuccess, updateProfile } from "../../redux/actions/studentAction";
import Loader from "../../components/Loading"
import {toast} from "react-toastify"

const UpdateProfile = () => {
  const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const {loading, success} = useSelector(state=>state.studentAccount)

    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)

    const handleSubmit =()=>{
      let data = {
        name:name,
        email:email
      }
      dispatch(updateProfile(data))
    }

    useEffect(()=>{
      if(success){
        toast(success)
      }
      clearSuccess()
    },[])
    return (
      <div className="px-12 pt-20 flex justify-center">
       <div className="w-6/12 bg-blue-100  py-4 px-5">
          <p className="text-2xl text-blue-900 font-poppins text-center font-bold mb-5">Update Profile</p>
          <div>
             <p>Name</p>
             <input className="w-full py-1 px-2 mb-4"src="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
             <p>Email</p>
             <input className="w-full py-1 px-2 mb-4"src="email" placeholder="Reenter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <p>Student ID</p>
             <p className="w-full py-1 px-2 bg-white">{user.id}</p>
          </div>
          <button onClick={handleSubmit} className=" bg-blue-900 px-5 py-1 mt-5 rounded-lg text-white">{loading?<Loader/>:"Submit"}</button>
  
      </div> 
      </div>
    );
  }
  
  export default UpdateProfile;
  