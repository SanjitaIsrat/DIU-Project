// import React from "react";
import { Link } from "react-router-dom";
import { AiFillSetting } from 'react-icons/ai';
import { IoHome } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Blc from "../../assets/images/blc.png";
import Portal from "../../assets/images/portal.png";
import OfficailDIU from "../../assets/images/graduated.png";

const StudentSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      {showSidebar && (
        <div className="h-screen fixed bg-emerald-100 text-emerald-600 font-semibold w-2/12  flex flex-col py-20 px-1  top-0">
          <Link  onClick={()=>setShowSidebar(false)}  className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/">
          <IoHome />Home
          </Link>
          <Link onClick={()=>setShowSidebar(false)}  className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/all/question">
          <BsFillPatchQuestionFill />Question Bank
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/student/routine">
          <GrSchedules />Routine
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/teacher/status">
          <GrSchedules />Teacher Status
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/me/profile">
          <FaUserTie />Profile
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/me/profile">
          <AiFillSetting/>Setting
          </Link>
  
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/update/avatar">
            Update Avatar
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/update/profile">
            Update Profile
          </Link>
          <Link  onClick={()=>setShowSidebar(false)} className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/update/password">
            Update Password
          </Link>
          <div className="absolute flex flex-col bottom-4">
            <Link
              className="px-3 items-center justify-center justify-items-center"
              target="_blank"
              to="https://elearn.daffodilvarsity.edu.bd"
            ><img className=" rounded-full mr-2 h-16 sm:h-16 lg:h-12  " src={Blc} />
              
            </Link>
            <Link
              className=" py-2 px-3"
              target="_blank"
              to="http://studentportal.diu.edu.bd"
            ><img className=" mr-2 h-10 sm:h-10 lg:h-10 " src={Portal} />
              
            </Link>
            <Link
              className="px-3  items-center gap-2"
              target="_blank"
              to="https://elearn.daffodilvarsity.edu.bd"
            ><img className=" mr-2 h-10 sm:h-10 lg:h-10 " src={OfficailDIU} />
              
            </Link>
            
          </div>
        </div>
      )}
    </>
  );
};

export default StudentSidebar;
