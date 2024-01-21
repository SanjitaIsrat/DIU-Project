import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const createAdminReducer = createReducer(initialState, {
  CreateAdminRequest: (state) => {
    state.loading = true;
  },
  CreateAdminSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateAdminFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const adminTeacherReducer = createReducer(initialState, {
  CreateTeacherRequest: (state) => {
    state.loading = true;
  },
  CreateTeacherSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateTeacherFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  GetTeacherRequest: (state) => {
    state.loading = true;
  },
  GetTeacherSuccess: (state, action) => {
    state.loading = false;
    state.teachers = action.payload;
  },
  GetTeacherFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetSingleTeacherAdminRequest: (state) => {
    state.loading = true;
  },
  GetSingleTeacherAdminSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
  },
  GetSingleTeacherAdminFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  
  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const adminStudentReducer = createReducer(initialState, {
  CreateStudentRequest: (state) => {
    state.loading = true;
  },
  CreateStudentSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateStudentFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetStudentRequest: (state) => {
    state.loading = true;
  },
  GetStudentSuccess: (state, action) => {
    state.loading = false;
    state.students = action.payload;
  },
  GetStudentFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetSingleStudentAdminRequest: (state) => {
    state.loading = true;
  },
  GetSingleStudentAdminSuccess: (state, action) => {
    state.loading = false;
    state.student = action.payload;
  },
  GetSingleStudentAdminFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});

export const adminRoutineReducer = createReducer(initialState, {
  CreateRoutineRequest: (state) => {
    state.loading = true;
  },
  CreateRoutineSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateRoutineFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetRoutineRequest: (state) => {
    state.loading = true;
  },
  GetRoutineSuccess: (state, action) => {
    state.loading = false;
    state.routines = action.payload;
  },
  GetRoutineFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  CreateQuestionRequest: (state) => {
    state.loading = true;
  },
  CreateQuestionSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  CreateQuestionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetAllQuestionRequest: (state) => {
    state.loading = true;
  },
  GetAllQuestionSuccess: (state, action) => {
    state.loading = false;
    state.questions = action.payload;
  },
  GetAllQuestionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  TeacherRoutineRequest: (state) => {
    state.loading = true;
  },
  TeacherRoutineSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload.message;
  },
  TeacherRoutineFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});
