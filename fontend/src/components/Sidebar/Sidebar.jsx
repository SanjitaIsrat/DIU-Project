import React from "react";
import AdminSidebar from "./AdminSidebar";
import TeacherSidebar from "./TeacherSidebar";
import StudentSidebar from "./StudentSidebar";
import { useSelector } from "react-redux";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  if (isAuthenticated) {
    if (user.role === "Admin") {
      return <AdminSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />;
    } else if (user.role === "Teacher") {
      return <TeacherSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />;
    } 
  }
};

export default Sidebar;
