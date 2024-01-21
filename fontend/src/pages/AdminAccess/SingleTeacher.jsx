import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useParams } from "react-router-dom";
import { getAdminTeacher } from "../../redux/actions/adminAction";


//import Image from "../../assets/Image.jpg"



const SingleTeacher = () => {
    const dispatch = useDispatch()
    const {id} = useParams()


    const {teacher} = useSelector(state=>state.teacher)
     console.log(teacher)

    const [showRoutine, setShowRoutine] = useState(false)
    const [showStatus, setShowStatus] = useState(false)
    const [showResearch, setShowResearch] = useState(false)

    
    useEffect(()=>{
        dispatch(getAdminTeacher(id))
    },[])
  return (
    <>
    <div className="px-12 pt-20 flex justify-center">
      <div className="w-4/12 bg-blue-100 p-6 rounded-xl">
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Name</label>
              <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
                {teacher && teacher.name ? teacher.name : "No Name Found!"}
              </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Email</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.email  ? teacher.email : "No Email Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Phone</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.phone ? teacher.phone : "No Phone Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">ID</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.id}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Office</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.office ? teacher.office : "No Office Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Department</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.dept ? teacher.dept : "No Department Found!"}
          </p>
        </div>

        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Publication</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.publication ? teacher.publication : "No publication Found!"}
          </p>
        </div>
        <div className="my-2">
          <label className="text-blue-900 font-poppins font-bold text-sm">Teaching Experience</label>
          <p className="border-2 border-slate-300 px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2">
            {teacher && teacher.experience ? teacher.experience : "No Experience Found!"}
          </p>
        </div>
        <button  className="w-full bg-blue-900 text-white px-5 py-2 font-poppins font-medium text-sm  rounded-xl mt-2" onClick={()=>setShowRoutine(true)}>Show Routine</button>
        <div className="flex mt-3 justify-between">
          <button onClick={()=>setShowStatus(true)} style={{width:"49%"}} className="bg-blue-900  py-1 text-white rounded-lg">Show Status</button>
          <button onClick={()=>setShowResearch(true)} style={{width:"49%"}} className="bg-blue-900  py-1 text-white rounded-lg">Show Publication</button>
        </div>
      </div>
    </div>
   {showRoutine &&  <div  className="w-full pt-16 fixed top-0 left-0 h-screen flex items-center justify-center ">
    <div className=" bg-green-400 w-5/12 p-4 rounded-md">
      <div className="flex justify-between">
        <p className="font-poppins font-medium text-lg">Routine</p>
        <button onClick={()=>setShowRoutine(false)}>Cancel</button>
      </div>
      <div className="mt-4">
        {teacher && teacher.routine? <img style={{width:"100%", height:"450px"}} className="  h-fit" src={teacher.routine}/>:<p>Routine Not Found!</p>}
      </div>
    </div>
    </div>}
    {showStatus &&  <div  className="w-full pt-16 fixed top-0 left-0 h-screen flex items-center justify-center ">
    <div className=" bg-green-400 w-5/12 p-4 rounded-md">
      <div className="flex justify-between">
        <p className="font-poppins font-medium text-lg">Status</p>
        <button onClick={()=>setShowStatus(false)}>Cancel</button>
      </div>
      <div className="overflow-y-auto h-56">

      {teacher && teacher.status && teacher.status.map((val, ind)=>{
              const statusDate =  new Date(val.createdAt);
              let date = statusDate.getDate()
              let month = statusDate.getMonth() +1;
              let year = statusDate.getFullYear()
              const finalDate = `${date}-${month}-${year}`
        return<div key={ind} className=" bg-blue-100 mt-4 px-5 py-1">
            <p className="text-sm font-poppins font-bold"><span>Date : </span>{finalDate}</p>
            <p>{val.comment}</p>
        </div>
      })}
      {teacher  && teacher.status.length<1 && <p>No Status Found!</p>}
      </div>
    </div>
    </div>}
    {showResearch &&  <div  className="w-full pt-16 fixed top-0 left-0 h-screen flex items-center justify-center ">
    <div className=" bg-green-400 w-5/12 p-4 rounded-md">
      <div className="flex justify-between mb-4">
        <p className="font-poppins font-medium text-lg">Research</p>
        <button onClick={()=>setShowResearch(false)}>Cancel</button>
      </div>
      <div className="  overflow-y-auto h-80">
      {teacher && teacher.research && teacher.research.map((val, ind)=>{
  
  return <div key={ind} className=" bg-blue-100 mb-4 px-5 py-1">
    {/* <p>{finalDate}</p> */}
    <div>
      <p className="text-lg font-medium ">{val.title}</p>
      <p className="text-xs font-poppins my-2">{val.desc}</p>
      <Link target="_blank" to={val.link} className="text-xs bg-green-400 px-5 py-1">Show Research</Link>
      <p className="mt-3 font-poppins font-light"><span className="  text-blue-900 font-bold">Category :</span> {val.category}</p>
    </div>
  </div>
})}
{teacher  && teacher.research.length<1 && <p>No Research Found!</p>}
      </div>
    </div>
    </div>}
    </>

  );
}


export default SingleTeacher;


