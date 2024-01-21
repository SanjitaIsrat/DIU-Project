import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAdminStudent } from "../../redux/actions/adminAction"
import { useParams } from "react-router-dom"
import img from "../../assets/images/studing.jpg"


const SingleStudent = () => {
    const dispatch = useDispatch()
    const {student} = useSelector(state=>state.student)
    const {id} = useParams()
    console.log(student)
    useEffect(()=>{
        dispatch(getAdminStudent(id))
    },[id])
  return (
    <div className="px-12 pt-12 flex justify-center">
      <div className="w-4/12 bg-blue-100 p-6 rounded-xl mt-5">
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Name</label>
          <p className="border-2 border-blue-900 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {student && student.name  ? student.name : "No Name Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Email</label>
          <p className="border-2 border-blue-100 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {student && student.email  ? student.email : "No Email Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">ID</label>
          <p className="border-2 border-blue-100 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {student && student.id  ? student.id : "No ID Found!"}
          </p>
        </div>
        <div className="my-4">
        <label className="text-blue-900 font-poppins font-bold text-sm">Avatar</label>
         
          {student && student.avatar ? <img src={student.avatar.url} className="w-full h-46 rounded-lg"/>:<img src={img} className="w-full h-46 rounded-lg"/>}
        </div>
      </div>
    </div>
  )
}

export default SingleStudent