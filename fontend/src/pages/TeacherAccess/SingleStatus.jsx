import { useDispatch, useSelector } from "react-redux"
// import {Link} from "react-router-dom"
import Loading from "../../components/Loading"
import { useEffect } from "react"
import { toast } from "react-toastify"
import {  deleteStatus } from "../../redux/actions/teacherAction"

const SingleStatus = ({val}) => {
  const dispatch = useDispatch()
    const {loading, success, error} = useSelector(state=>state.teacherPersonal)
    const {user}  =useSelector(state=>state.user)
console.log(val)

    let fdate = new Date(val.createdAt)
    let date = fdate.getDate()
    let month = fdate.getMonth()+1;
    let year = fdate.getFullYear()
    let finalDate = `${date}-${month}-${year}`
    useEffect(()=>{
      if(success){
        toast(success)
      }
      if(error){
        toast(error)
      }
    },[])
  return (
    <div className="mt-2 flex justify-between items-start bg-blue-100 px-5 py-3 text-blue-900 shadow-inner shadow-indigo-500/50 font-poppins">
    <div className="w-11/12">
      <div>
        <div className="flex items-center">
        {user && user.avatar ? <img className="h-12 w-12 rounded-full" src={user.avatar.url}/>: <img className="h-12 w-12 rounded" src={ProfileImage}/>}
        <div className="ml-2">
        <p>{user && user.name}</p>
        <p>{finalDate}</p>
        </div>
        </div>
      </div>
    <p className="text-sm font-medium mt-3 ml-1">{val.comment}</p>
       
    </div>
      <button className="hover:text-green-400" onClick={()=>dispatch(deleteStatus(val._id))}>{loading ?<Loading/>:"Delete"}</button>
  
      </div>
  )
}

export default SingleStatus