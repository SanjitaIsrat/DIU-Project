import { Link } from "react-router-dom";
import { AiFillSetting } from 'react-icons/ai';
import { IoHome } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
// import { FaUserTie } from "react-icons/fa";
import OfficailDIU from "../../assets/images/graduated.png";
import Blc from "../../assets/images/blc.png";

const TeacherSidebar = ({showSidebar }) => {
  return <>
  {showSidebar && ( 
    <div className="h-screen fixed bg-emerald-100 text-emerald-600 font-semibold  w-2/12  flex flex-col py-20 px-1  top-0">
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/">
      <IoHome />Home
      </Link>
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/teacher/routine">
      <GrSchedules />Routine
      </Link>
      {/* <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/me/profile">
      <FaUserTie />Profile
      </Link> */}
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/student/routine">
      <AiFillSetting/>Setting
      </Link>
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/update/avatar/teacher">
        Update Avatar
      </Link>
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/update/profile/teacher">
        Update Profile
      </Link>
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/teacher/research">
        Research
      </Link>
      <Link className="hover:bg-emerald-600 hover:text-white flex items-center gap-2 py-2 px-3" to="/teacher/access/status">
        Status
      </Link>
  
      <div className="absolute flex flex-col bottom-4">
          <Link
            className="px-3 items-center justify-center justify-items-center"
            target="_blank"
            to="https://elearn.daffodilvarsity.edu.bd"
          ><img className=" rounded-full mr-2 h-16 sm:h-16 lg:h-12  " src={Blc} />
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
</>;
};

export default TeacherSidebar;
