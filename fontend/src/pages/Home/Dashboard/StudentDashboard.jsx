import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../../redux/actions/studentAction";
import { IoSearchOutline } from "react-icons/io5";
import { BsPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Routine from "../../StudentAccess/Routine";
import Blc from "../../../assets/images/blc.png";
import Portal from "../../../assets/images/portal.png";
import OfficailDIU from "../../../assets/images/graduated.png";
import { FaRegEdit ,  FaUserEdit} from "react-icons/fa";

import { MdOutlineBuildCircle } from "react-icons/md";
//import { RxAvatar } from "react-icons/rx";
import Proxy from "../../../assets/new.jpeg"

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const { teachers } = useSelector((state) => state.getStudentTeacher);
  const [ser, setSer] = useState()

  const sub = ()=>{
    dispatch(getTeachers(ser))
  }
  useEffect(() => {
    dispatch(getTeachers(" "));
  }, []);
  return (
    <div className="px-12 pt-20 ">
      {/* <div className="w-5/12 bg-emerald-100 text-emerald-600 rounded-s-lg m-auto flex items-center">
        <input
          type="text"
          placeholder="search your teacher"
          className="w-full bg-emerald-100 text-emerald-700 border-sky-600 rounded-s-lg p-2 "
        />
        <p className="p-2 text-xl text-emerald rounded-s-lg cursor-pointer">
        <IoSearchOutline />
        </p>
      </div> */}
      <div className="mt-6 flex items-start  ">
        {/* <div className="w-2/12 bg-emerald-100 p-4 rounded-s-3xl mt-1">
          <h4 className="text-emerald-700 font-semibold text-xl">Department of</h4>
          <div className="ml-5 mt-1 ">
            {finalDept &&
              finalDept.map((val, ind) => {
                return (
                  <li key={ind} className="cursor-pointer font-semibold">
                    <button>{val}</button>
                  </li>
                );
              })}
          </div>
        </div> */}
        <div className="w-2/12">

          <div className="drop-shadow-lg border-separate border-spacing-2 border border-blue-300 bg-blue-100 text-blue-900 rounded-s-lg flex items-center">

            <input
              type="text"
              placeholder="search your teacher"
              className="  w-full drop-shadow-xl bg-blue-100 text-blue-900  rounded-s-lg p-2 "
              onChange={(e)=>setSer(e.target.value)}
            />
            <p className="p-2 text-xl text-blue rounded-s-lg cursor-pointer" onClick={sub}> 
            <IoSearchOutline />
            </p>
          </div>
          <div className="bg-blue-100 text-blue-900 rounded-s-lg mt-5 flex items-center flex-col py-2">
          <Link to="/update/avatar" className="px-3 flex  items-center "><p className="text-3xl mt-3 text-blue-900"><FaUserEdit/></p></Link>
          <Link to="/update/profile" className="px-3 flex items-center "><p className="text-3xl mt-3 text-blue-900"><FaRegEdit/></p></Link>

            <Link to="/update/password" className="px-3 flex items-center"><p className="text-3xl mt-3 text-blue-900"><MdOutlineBuildCircle/></p></Link>
          <Link
              className="px-3 mt-2 items-center justify-center justify-items-center"
              target="_blank"
              to="https://elearn.daffodilvarsity.edu.bd"
            ><img className=" rounded-full mr-2 h-12  " src={Blc} />
              
            </Link>
            <Link
              className=" py-2 px-3"
              target="_blank"
              to="http://studentportal.diu.edu.bd"
            ><img className=" mr-2 h-10 sm:h-10 lg:h-10 " src={Portal} />
              
            </Link>
            <Link
              className="px-3 mb-2 items-center gap-2"
              target="_blank"
              to="https://daffodilvarsity.edu.bd/"
            ><img className=" mr-2 h-8  " src={OfficailDIU} />
              
            </Link>
          </div>
          <div className=" drop-shadow-xl bg-blue-100 text-blue-900 rounded-s-lg mt-5 px-5 py-5 flex items-center "><p className="mr-3  text-2xl "> <BsPatchQuestionFill /></p><Link className="font-poppins text-lg font-semibold" to="/all/question">Question Bank</Link></div>
        </div>
        <div className="rounded-e-xl  w-5/12 ml-2">
        <div className="rounded-lg ml-2  flex items-center flex-wrap gap-0">
              {teachers &&
                teachers.map((val, ind) => {
                  return (
                    <Link
                      key={ind}
                      to={`/get/teacher/${val._id}`}
                      className=" p-1  text-white mb-1 cursor-pointer rounded-md  w-6/12"
                    >
                      <div
                        className="bg-blue-100 text-blue-900 p-4 "
                        style={{ width: "99%" }}
                      >
                      {val.avatar?  <img
                          src={val.avatar.url}
                          className="h-40 w-full"
                        />:  <img
                        src={Proxy}
                        className="h-40 w-full"
                      />}
                        <div className="mt-2">
                          <p className="font-bold text-xs">{val.name}</p>
                          <p className="text-xs font-poppins">{val.dept ? val.dept : "Enter a Department"}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
        </div>
        <div className="ml-2 w-5/12 rounded-2xl">
          <Routine/>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
