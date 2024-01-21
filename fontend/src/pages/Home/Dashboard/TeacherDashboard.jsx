import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearError,   createStatus } from "../../../redux/actions/teacherAction"
import Loading from "../../../components/Loading"
import { toast } from "react-toastify"
import SingleStatus from "../../TeacherAccess/SingleStatus"
import { FaRegEdit,FaArrowsAlt  } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
//import { RxAvatar } from "react-icons/rx";
import { MdEditSquare } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";
import ProfileImage from "../../../assets/Avatar/Profile.png";
import SingleResearch from "../../TeacherAccess/SingleResearch"
import Research from "../../TeacherAccess/Research"

const TeacherDashboard = () => {
  const dispatch = useDispatch()
  const {loading, success, error} = useSelector(state=>state.teacherPersonal)
  const {user} = useSelector(state=>state.user)
  console.log(user)

  const [showPopup, setShowPopup] = useState(false)
  const [comment, setComment] = useState()
  const [showPopupR, setShowPopupR] = useState(false)


  const handleSubmit =()=>{
    const data = {
      comment : comment
    }
    dispatch(createStatus(data))
   
  }
  
  useEffect(()=>{
    if(success){
      toast(success)
      // clearSuccess()
    }
    if(error){
      toast(error)
      clearError()
    }
  },[])

  return <>
  <div  className="px-12 pt-20 flex justify-between">
    <div className="w-7/12" >
        <div className="flex gap-3">
          <Link className="bg-blue-100 rounded-2xl px-3 flex  items-center  hover:text-green-700 text-blue-900 font-poppins hover:rounded-md" to="/update/avatar/teacher"><span className=" text-3xl"><FaUserEdit /></span><span className="text-base  font-poppins ml-1">Update Avatar</span></Link>
          <Link className="bg-blue-100 rounded-2xl px-3 flex  items-center hover:text-green-700 text-blue-900 font-poppins  hover:rounded-md" to="/update/profile/teacher"><span className=" text-2xl"><MdEditSquare /></span><span className="text-base  font-poppins ml-1">Update Profile</span></Link>

          <Link to="/teacher/routine" className="px-12 py-3 flex  items-center bg-blue-100  hover:text-green-700 text-blue-900 font-poppins  rounded-2xl hover:rounded-md ml-2"><span className=" text-2xl"><MdOutlineUpdate/></span><span className="text-base  font-poppins ml-2">Routine</span></Link>
        </div>
        <div className="border-2 border-blue-100 drop-shadow-2xl  shadow-inner rounded mt-10 flex py-1 px-3">
          {user && user.avatar ? <img className="h-12 w-12 rounded-full" src={user.avatar.url}/>: <img className="h-12 w-12 rounded-full" src={ProfileImage}/>}
          <button className="border-slate-300 border-2 w-full ml-2 text-left px-3 rounded-full" onClick={()=>setShowPopup(true)}>What's On your brain?</button>
        </div>
        <div>
              {user && user.status && user.status.map((val, ind)=>{
                return <SingleStatus val={val} key={ind}/>
              })}
              {user && user.status.length<1 && <p className="mt-4 font-poppins text-lg font-semibold">No Status Created!</p>}
        </div>
    </div>
    <div className="shadow-indigo-500/50 shadow-inner bg-inherit rounded-lg gap-1  w-6/12 flex justify-end">
      <div className="w-11/12">
        <p className="text-center mt-3 text-blue-900 text-2xl font-sans hover:font-serif font-semibold">Publication</p>
        <div className="rounded-xl m-1 p-2 bg-blue-100 border-red-900">
          <button className="gap-2 text-slate-500 border-blue-900 flex items-center"  onClick={()=>setShowPopupR(true)}><span className=" text-blue-900 text-lg ml-2 rotate-180"><GiArchiveResearch /></span>Add your another publication </button>
        </div>
        <div className="mt-5"> 
          {user && user.research && user.research.map((val, ind)=>{
            return <SingleResearch val={val} key={ind}/>
          })}
          {user && user.research.length<1 && <p className="mt-4 font-poppins text-lg font-semibold">No Publication Created!</p>}
        </div>
      </div>
    </div>
  </div>
  {showPopup && <div className="w-full absolute h-screen  top-0 left-0 flex justify-center items-center">
<div className="bg-blue-100 w-4/12 rounded-lg px-5 py-3 mt-12">
  <div className="flex justify-between items-center mb-5">
    <p className="font-bold text-md ">Create Status</p>
    <button onClick={()=>setShowPopup(false)} className="">Cancel</button>
  </div>
  <div>
    <p className="font-semibold text-sm my-1">Comment</p>
    <textarea onChange={(e)=>setComment(e.target.value)} className="w-full px-2 py-1" rows={6}/>

    <button onClick={handleSubmit} className="w-full py-1  bg-blue-900 text-white mt-5">{loading ? <Loading/>:"Submit"}</button>
  </div>
</div>
</div>}
{showPopupR && <Research setShowPopupR={setShowPopupR}/>}
  </>
};

export default TeacherDashboard;
