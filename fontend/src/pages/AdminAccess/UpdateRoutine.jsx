import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTeachers, updateTeacherRoutine } from "../../redux/actions/adminAction"
import { toast } from "react-toastify"
import Loading from "../../components/Loading"


const UpdateRoutine = () => {
    const dispatch = useDispatch()
    const {loading, success, error} = useSelector(state=>state.adminRoutine)
    const { teachers } = useSelector((state) => state.teacher);

    const [id, setId] = useState()
    const [routine, setRoutine] = useState()


    const handleChange = (e) => {
        if (e.target.name === "routine") {
          const reader = new FileReader();
          reader.onloadend = () => {
            if (reader.readyState === 2) {
              setRoutine(reader.result);
            }
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    const handleSubmit = ()=>{
        let data = { 
            routine: routine 
        }
        // console.log(data, id)
        dispatch(updateTeacherRoutine(data, id))
    }

    useEffect(()=>{
        if(success){
            toast(success)
        }
        if(error){
            toast(error)
        }

    dispatch(getTeachers());

    },[])
  return (
    <div className="px-12 pt-20 flex justify-center">
       <div className="w-4/12 bg-blue-100 text-blue-900 px-5 py-3">
        <div>
            <p className="items-center font-bold text-xl">Teacher Routine Update</p>
            </div>
            <div>
                <p className="mt-3 ">Teacher ID</p>
                <select onChange={(e)=>setId(e.target.value)}  className="w-full py-1 px-2 text-blue-900">
                  {teachers && teachers.map((val, ind)=>{
                    return <option value={val._id} key={ind} className="text-blue-900">{val.name}</option>
                  })}
                </select>
                <p className="mt-3 ">Select a Routine</p>
                <input onChange={handleChange}  className="w-full py-1 px-2 bg-blue-100"  type="file" name="routine"/>
            </div>
            <button onClick={handleSubmit} className="w-full bg-blue-900 text-white py-2 mt-6">{loading?<Loading/>:"Update Routine"}</button>

       </div>

    </div>
  )
}

export default UpdateRoutine