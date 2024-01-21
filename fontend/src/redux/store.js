import { configureStore } from "@reduxjs/toolkit";
import { forgotPasswordReducer, userReducer } from "./reducers/userReducer";
import {
  adminRoutineReducer,
  adminStudentReducer,
  adminTeacherReducer,
  createAdminReducer,
} from "./reducers/adminReducer";
import { studentAccountReducer, studentReducer } from "./reducers/studentReducer";
import { informationReducer, teacherReducer } from "./reducers/teacherReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    createAdmin: createAdminReducer,
    teacher: adminTeacherReducer,
    student: adminStudentReducer,
    adminRoutine: adminRoutineReducer,
    getStudentTeacher: studentReducer,
    studentAccount :studentAccountReducer,

    teacherAccess:teacherReducer,
    teacherPersonal:informationReducer
  },
});

export default store;
