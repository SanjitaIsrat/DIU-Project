import { createReducer } from "@reduxjs/toolkit";
const initialState = {};

export const teacherReducer = createReducer(initialState, {
    UpdateAvatarRequest: (state) => {
      state.loading = true;
    },
    UpdateAvatarSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    UpdateAvatarFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  
    UpdatePasswordRequest: (state) => {
        state.loading = true;
      },
    UpdatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.success = action.payload;
      },
    UpdatePasswordFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  
    UpdateProfileRequest: (state) => {
        state.loading = true;
      },
    UpdateProfileSuccess: (state, action) => {
        state.loading = false;
        state.success = action.payload;
      },
    UpdateProfileFail: (state, action) => {
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
  
  
  export const informationReducer = createReducer(initialState, {
    CreateStatusRequest: (state) => {
      state.loading = true;
    },
    CreateStatusSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    CreateStatusFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  
    CreateResearchRequest: (state) => {
        state.loading = true;
      },
    CreateResearchSuccess: (state, action) => {
        state.loading = false;
        state.success = action.payload;
      },
    CreateResearchFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      
    DeleteStatusRequest: (state) => {
        state.loading = true;
      },
    DeleteStatusSuccess: (state, action) => {
        state.loading = false;
        state.success = action.payload;
      },
    DeleteStatusFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    DeleteResearchRequest: (state) => {
        state.loading = true;
      },
    DeleteResearchSuccess: (state, action) => {
        state.loading = false;
        state.success = action.payload;
      },
    DeleteResearchFail: (state, action) => {
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
  