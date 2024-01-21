import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ showSidebar }) => {
  return (
    <>
      {showSidebar && (
        <div className="h-screen font-semibold bg-blue-100 text-blue-900 w-2/12  flex flex-col py-20 px-1 fixed top-0">
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/">
            Create Admin
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/create-teacher">
            Create Teacher
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg py-2 px-3" to="/create-student">
            Create Student
          </Link>

          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/all-teacher">
            All Teacher
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/all-student">
            All Student
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/create-question">
            Create Question
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/all-question">
            All Question
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/create-routine">
            Create Routine
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/see-routine">
            All Routine
          </Link>
          <Link className="hover:bg-blue-900 text-blue-900 hover:text-white rounded-lg  py-2 px-3" to="/teacher/routine/update">
            Teacher Routine
          </Link>
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
