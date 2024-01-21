import { useDispatch, useSelector } from "react-redux"
// import Loader from "../../components/Loading"
import { useEffect } from "react"
import { getStudentStatus } from "../../redux/actions/studentAction"
import DefaultImg from "../../assets/Avatar/Profile.png"

const TeacherStatus = () => {
    const dispatch = useDispatch()
    const {status}  = useSelector(state=>state.getStudentTeacher)
    console.log(status && status)
    useEffect(()=>{
        dispatch(getStudentStatus())
    },[])
  return (
    <>
   <div className="px-12 py-20 flex justify-center">
        <div className="w-6/12">
        {status && status.map((val, ind)=>{

const date = new Date(val.createdAt)
let sDate = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
const newDate = `${sDate}-${month}-${year}`
return <div key={ind} className="mt-5 bg-blue-100 px-4 py-5 rounded-lg">
<div className="flex  items-start">
<img  className="h-10 w-10" src={val.owner ? val.owner.avatar ? val.owner.avatar.url:DefaultImg : DefaultImg}/>

    <div className="ml-2">
        <p className=" text-lg font-semibold">{val.owner ? val.owner.name:"Teacher Not Found"}</p>
        <p className="font-medium text-xs">{newDate}</p>
    </div>

</div>
<p className="ml-11 mt-3 text-sm">{val.comment}</p>
</div>
})}
        </div>
        </div>
        
        </>
    
  )
}

export default TeacherStatus