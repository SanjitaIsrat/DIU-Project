import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const studentReducer = createReducer(initialState, {
  GetStudentTeacherRequest: (state) => {
    state.loading = true;
  },
  GetStudentTeacherSuccess: (state, action) => {
    state.loading = false;
    state.teachers = action.payload;
  },
  GetStudentTeacherFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetSingleTeacherRequest: (state) => {
    state.loading = true;
  },
  GetSingleTeacherSuccess: (state, action) => {
    state.loading = false;
    state.teacher = action.payload;
  },
  GetSingleTeacherFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetStudentQuestionRequest: (state) => {
    state.loading = true;
  },
  GetStudentQuestionSuccess: (state, action) => {
    state.loading = false;
    state.questions = action.payload;
  },
  GetStudentQuestionFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  GetStudentRoutineRequest: (state) => {
    state.eloading = true;
  },
  GetStudentRoutineSuccess: (state, action) => {
    state.eloading = false;
    state.routines = action.payload;
  },
  GetStudentRoutineFail: (state, action) => {
    state.eloading = false;
    state.error = action.payload;
  },


  GetStudentStatusRequest: (state) => {
    state.loading = true;
  },
  GetStudentStatusSuccess: (state, action) => {
    state.loading = false;
    state.status = action.payload;
  },
  GetStudentStatusFail: (state, action) => {
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


export const studentAccountReducer = createReducer(initialState, {
  UpdateStudentProfileRequest: (state) => {
    state.loading = true;
  },
  UpdateStudentProfileSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateStudentProfileFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UpdateStudentPasswordRequest: (state) => {
    state.loading = true;
  },
  UpdateStudentPasswordSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateStudentPasswordFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  UpdateStudentAvatarRequest: (state) => {
    state.loading = true;
  },
  UpdateStudentAvatarSuccess: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  UpdateStudentAvatarFail: (state, action) => {
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
