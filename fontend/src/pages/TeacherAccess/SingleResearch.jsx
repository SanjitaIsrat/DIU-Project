import { useDispatch, useSelector } from "react-redux"
import {Link} from "react-router-dom"
import Loading from "../../components/Loading"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { deleteResearch } from "../../redux/actions/teacherAction"

const SingleResearch = ({val}) => {
  const dispatch = useDispatch()
    const {loading, success, error} = useSelector(state=>state.teacherPersonal)

    useEffect(()=>{
      if(success){
        toast(success)
      }
      if(error){
        toast(error)
      }
    },[])
  return (
    <div className="mt-2 flex justify-between items-start bg-blue-100 px-5 py-3 text-blue-900 font-poppins">
    <div>
    <p className="text-lg font-medium ">{val.title}</p>
        <p className="text-xs font-poppins my-2">{val.desc}</p>
        <Link target="_blank" to={val.link} className="text-xs text-white rounded-lg hover:text-green-300  bg-blue-900 px-5 py-1">Show Publication</Link>
        <p className="mt-3 font-poppins font-light"><span className="  text-blue-900 font-bold">Category :</span> {val.category}</p>
    </div>
      <button className="hover:text-green-500" onClick={()=>dispatch(deleteResearch(val._id))}>{loading ?<Loading/>:"Delete"}</button>
  
      </div>

  )
}

export default SingleResearch