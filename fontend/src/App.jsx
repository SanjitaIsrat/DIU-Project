import { Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import { loadUser } from "./redux/actions/userAction";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import RoleRoute from "./components/RoleRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/Authentication/ResetPassword";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/Authentication/AdminLogin";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateTeacher from "./pages/AdminAccess/CreateTeacher";
import CreateStudent from "./pages/AdminAccess/CreateStudent";
import AllStudent from "./pages/AdminAccess/AllStudent";
import AllTeacher from "./pages/AdminAccess/AllTeacher";
import Question from "./pages/StudentAccess/Question";
import CreateRoutine from "./pages/AdminAccess/CreateRoutine";
import AllRoutine from "./pages/AdminAccess/AllRoutine";
import Routine from "./pages/StudentAccess/Routine";
import StudentProfile from "./pages/StudentAccess/StudentProfile";
import UpdateAvatar from "./pages/StudentAccess/UpdateAvatar";
import UpdateProfile from "./pages/StudentAccess/UpdateProfile";
import UpdatePassword from "./pages/StudentAccess/UpdatePassword";
import SingleTeacher from "./pages/StudentAccess/SingleTeacher";
import CreateQuestion from "./pages/AdminAccess/CreateQuestion";
import TeacherStatus from "./pages/StudentAccess/TeacherStatus";
import SingleTeacherAdmin from "./pages/AdminAccess/SingleTeacher";
import SingleStudentAdmin from "./pages/AdminAccess/SingleStudent";
import AllQuestion from "./pages/AdminAccess/AllQuestion";

import UpdateAvatarTeacher from "./pages/TeacherAccess/UpdateAvatar";
import UpdateProfileTeacher from "./pages/TeacherAccess/UpdateProfile";
import Status from "./pages/TeacherAccess/Status";
import Research from "./pages/TeacherAccess/Research";
import TeacherRoutine from "./pages/TeacherAccess/Routine"
import UpdateRoutine from "./pages/AdminAccess/UpdateRoutine";
import Profile from "./pages/TeacherAccess/Profile";

function App() {
  const dispatch = useDispatch();
  // const { isAutenticated } = useSelector((state) => state.user);
  const [showSidebar, setShowSidebar] = useState(false);

  //Set Role Type for Forgot Authentication
  const [role, setRole] = useState("Student");
  const [roleType, setRoleType] = useState(true);

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div>
      <ToastContainer />
      <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              role={role}
              setRole={setRole}
              roleType={roleType}
              setRoleType={setRoleType}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword role={role} />}
        />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">Thats for testing</RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-student"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateStudent />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-routine"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateRoutine />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/all-student"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllStudent />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
           <Route
          path="/create-question"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <CreateQuestion />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
             <Route
          path="/all-question"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllQuestion />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/see-routine"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <AllRoutine />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/teacher/:id"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <SingleTeacherAdmin />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/routine/update"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                < UpdateRoutine/>
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/student/:id"
          element={
            <ProtectedRoute>
              <RoleRoute role="Admin">
                <SingleStudentAdmin />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/all/question"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <Question />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/status"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <TeacherStatus />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/routine"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <Routine />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/me/profile"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <StudentProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/update/avatar"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <UpdateAvatar />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/get/teacher/:id"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <SingleTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
           <Route
          path="/update/profile"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <UpdateProfile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
           <Route
          path="/update/password"
          element={
            <ProtectedRoute>
              <RoleRoute role="Student">
                <UpdatePassword />
              </RoleRoute>
            </ProtectedRoute>
          }
          
        />
        <Route
          path="/update/avatar/teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
                <UpdateAvatarTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/update/profile/teacher"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
                <UpdateProfileTeacher />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/me/profile"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
                <Profile />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/access/status"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
               <Status/>
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        s<Route
          path="/teacher/routine"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
               <TeacherRoutine/>
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/research"
          element={
            <ProtectedRoute>
              <RoleRoute role="Teacher">
                <Research />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
