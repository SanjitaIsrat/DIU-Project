import axios from "axios";
export const updateProfile = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "UpdateProfileRequest" });
  
      const { data } = await axios.put(
        `/api/v1/teacher/profile/update`, userData
      );
      dispatch({ type: "UpdateProfileSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "UpdateProfileFail",
        payload: err.response.data.message,
      });
    }
  };
  
  
  export const updateAvatar = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "UpdateAvatarRequest" });
  
      const { data } = await axios.put(
        `/api/v1/teacher/avatar/update`, userData
      );
      dispatch({ type: "UpdateAvatarSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "UpdateAvatarFail",
        payload: err.response.data.message,
      });
    }
  };
  
  export const updatePassword = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "UpdatePasswordRequest" });
  
      const { data } = await axios.put(
        `/api/v1/teacher/password/update`, userData
      );
      dispatch({ type: "UpdatePasswordSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "UpdatePasswordFail",
        payload: err.response.data.message,
      });
    }
  };
  

  export const createStatus = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "CreateStatusRequest" });
  
      const { data } = await axios.post(
        `/api/v1/create/status`, userData
      );
      dispatch({ type: "CreateStatusSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "CreateStatusFail",
        payload: err.response.data.message,
      });
    }
  };

  export const createResearch = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "CreateResearchRequest" });
  
      const { data } = await axios.post(
        `/api/v1/create/research`, userData
      );
      dispatch({ type: "CreateResearchSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "CreateResearchFail",
        payload: err.response.data.message,
      });
    }
  };

  export const deleteStatus = (id) => async (dispatch) => {
    try {
      dispatch({ type: "DeleteStatusRequest" });
  
      const { data } = await axios.delete(
        `/api/v1/delete/status/${id}`
      );
      dispatch({ type: "DeleteStatusSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "DeleteStatusFail",
        payload: err.response.data.message,
      });
    }
  };
  export const deleteResearch = (id) => async (dispatch) => {
    try {
      dispatch({ type: "DeleteResearchRequest" });
  
      const { data } = await axios.delete(
        `/api/v1/delete/research/${id}`
      );
      dispatch({ type: "DeleteResearchSuccess", payload: data.message });
    } catch (err) {
      dispatch({
        type: "DeleteResearchFail",
        payload: err.response.data.message,
      });
    }
  };
  //Clearing Errors
export const clearError = () => async (dispatch) => {
    dispatch({ type: "ClearErrors" });
  };
  
  //Clearing
  export const clearSuccess = () => async (dispatch) => {
    dispatch({ type: "ClearSuccess" });
  };
  