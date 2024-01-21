import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar } from "../../redux/actions/studentAction";
import Loader from "../../components/Loading"
import {toast} from "react-toastify"


const UpdateAvatar = () => {
  const dispatch = useDispatch()
  const {loading, success}  = useSelector(state=>state.studentAccount)

  const [avatar, setAvatar] = useState();
  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = ()=>{
    let data = {
      avatar:avatar
    }
    dispatch(updateAvatar(data))
    // console.log(data)
  }

  useEffect(()=>{
    if(success){
      toast(success)
    }
  },[success])
  return (
    <div className="px-12 pt-20 flex justify-center">
     <div className="w-6/12 bg-blue-100  py-4 px-5">
        <p className="text-2xl font-poppins text-center font-bold mb-5">Update Avatar</p>
        <div>
            <p>Choose Your Avatar</p>
            <input className="w-6/12  bg-blue-100" type="file" onChange={handleChange} name="avatar"/>
        </div>
        <button onClick={handleSubmit} className=" bg-blue-900 px-5 py-1 mt-5 rounded-lg text-white">{loading ? <Loader/>:"Submit"}</button>

    </div> 
    </div>
  );
}

export default UpdateAvatar;
