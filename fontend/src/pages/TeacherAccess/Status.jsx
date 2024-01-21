import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearError,   createStatus } from "../../redux/actions/teacherAction"
import Loading from "../../components/Loading"
import { toast } from "react-toastify"
import SingleStatus from "./SingleStatus"


const Status = () => {
  const dispatch = useDispatch()
  const {loading, success, error} = useSelector(state=>state.teacherPersonal)
  const {user} = useSelector(state=>state.user)
  console.log(user)

  const [showPopup, setShowPopup] = useState(false)
  const [comment, setComment] = useState()

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
  return (
    <>
      <div className="px-12 py-20 flex justify-center" >
         <div className="w-6/12">
          <div className="flex justify-between bg-blue-200 px-5 py-1">
                <p className="text-lg font-semibold">Status</p>
                <button onClick={()=>setShowPopup(true)}>Create Status</button>
            </div>
            <div>
              {user && user.status && user.status.map((val, ind)=>{
                return <SingleStatus val={val} key={ind}/>
              })}
              {user && user.status.length<1 && <p className="mt-4 font-poppins text-lg font-semibold">No Status Created!</p>}
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
    </>
  )
}

export default Status