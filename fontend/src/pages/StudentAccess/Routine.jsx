import  {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutines } from "../../redux/actions/studentAction";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { FaBook, FaFileCode } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import {Link} from "react-router-dom"


const Routine = () => {
  const dispatch = useDispatch();
  const { eloading, routines } = useSelector((state) => state.getStudentTeacher);

  const [section, setSection] = useState();
  const [dept, setDept] = useState();
  //   console.log(routines && routines);

  let sat = routines && routines.filter((val) => val.day === "Sat");
  let sun = routines && routines.filter((val) => val.day === "Sun");
  let mon = routines && routines.filter((val) => val.day === "Mon");
  let tue = routines && routines.filter((val) => val.day === "Tue");
  let wed = routines && routines.filter((val) => val.day === "Wed");
  let thu = routines && routines.filter((val) => val.day === "Thu");

  const [routineData, setRoutineData] = useState()
  const [routineDataShow, setRoutineDataShow] = useState(false)
  let array = [
    {
      cap: sat,
      type: "Sat",
    },
    {
      cap: sun,
      type: "Sun",
    },
    {
      cap: mon,
      type: "Mon",
    },
    {
      cap: tue,
      type: "Tue",
    },
    {
      cap: wed,
      type: "Wed",
    },
    {
      cap: thu,
      type: "Thu",
    },
  ];
  console.log(array);

  const deptArrayData = ["CSE", "SWE", "BBA"];
  const sectionArrayData = ["55_S", "55_A"];

  const handleSubmit = () => {
    if (dept) {
      if (section) {
        dispatch(getRoutines(section, dept));
      } else {
        toast("Please Select A Section");
      }
    } else {
      toast("Please Select A Department");
    }
    setRoutineDataShow(true)
  };

  const handleFilter =(data)=>{
    setRoutineData(data)
  }
  //   useEffect(() => {}, []);
  return (
    <div className="">
        <div className="px-5 py-3 bg-blue-100">
          <p className="mt-2 font-medium text-blue-900 mb-1">
            Select a Department
          </p>
          <select
            onChange={(e) => setDept(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option>Choose a Department</option>
            {deptArrayData.map((val, ind) => {
              return (
                <option value={val} key={ind}>
                  {val}
                </option>
              );
            })}
          </select>
          <p className="mt-5 font-medium text-blue-900 mb-1">Select a Section</p>
          <select
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-3 py-2"
          >
            <option>Choose a Section</option>
            {sectionArrayData.map((val, ind) => {
              return (
                <option value={val} key={ind}>
                  {val}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleSubmit}
            className=" rounded-2xl w-full px-3 py-2 bg-blue-900 text-white  mt-4"
          >
            {eloading ? <Loading /> : "Find your Schedule"}
          </button>
        </div>
        {routineDataShow && routines && (
          <div className="mt-5">
            <div className="flex justify-center">
            {/* <button className=" bg-slate-400 mr-5  px-5 py-2 rounded-lg text-white font-medium">All</button> */}
              {array.map((val, ind) => {
                return (
                  <div key={ind}>
                    {val.cap && val.cap.length > 0 && (
                      <button onClick={()=>handleFilter(val.cap)} className=" bg-blue-100 mr-5 px-5 py-2 rounded-2xl text-blue-900 font-medium">
                        {val.type}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              {routineData &&
                routineData.map((val, ind) => {
                  console.log(val)
                  return <div key={ind} className="bg-blue-100 text-blue-900 mt-1 px-5 py-3">
                    <div className="flex items-center ">
                      <p><FaBook/></p>
                      <p className="text-xl font-poppins font-semibold ml-1">{val.title}</p>
                    </div>
                    <div className="flex items-center ">
                      <p><FaFileCode/></p>
                      <p className="font-poppins font-semibold ml-2">{val.code}</p>
                    </div>
                  
                   <div className="flex items-center ">
                    <p className=""><IoLocationOutline/></p>
                    <p className="font-poppins font-semibold ml-2">{val.room}</p>
                   </div>
                    <div className="flex items-center ">
                      <p><FiWatch/></p>
                    <p className="font-poppins font-bold ml-2">{val.time}</p>
                    </div>
                    <Link to={`/get/teacher/${val.teacher._id}`}>{val.teacher.name}</Link>
                  </div>;
                })}
            </div>
          </div>
        )}
      </div>
  );
};

export default Routine;
