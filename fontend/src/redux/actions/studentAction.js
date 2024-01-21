import axios from "axios";

export const getTeachers = (ser) => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentTeacherRequest" });

    const { data } = await axios.get(`/api/v1/get/teachers?keyword=${ser}`);
    dispatch({ type: "GetStudentTeacherSuccess", payload: data.teachers });
  } catch (err) {
    dispatch({
      type: "GetStudentTeacherFail",
      payload: err.response.data.message,
    });
  }
};

export const getTeacher = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleTeacherRequest" });

    const { data } = await axios.get(`/api/v1/get/teacher/${id}`);
    dispatch({ type: "GetSingleTeacherSuccess", payload: data.teacher });
  } catch (err) {
    dispatch({
      type: "GetSingleTeacherFail",
      payload: err.response.data.message,
    });
  }
};

export const getQuestions = (keyword, category) => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentQuestionRequest" });

    let link = `/api/v1/get/questions?keyword=${keyword}`;

    if (category) {
      link = `/api/v1/get/questions?keyword=${keyword}&semester=${category}`;
    }
    const { data } = await axios.get(link);
    dispatch({ type: "GetStudentQuestionSuccess", payload: data.questions });
  } catch (err) {
    dispatch({
      type: "GetStudentQuestionFail",
      payload: err.response.data.message,
    });
  }
};

export const getRoutines = (section, dept) => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentRoutineRequest" });

    const { data } = await axios.get(
      `/api/v1/get/routines?section=${section}&dept=${dept}`
    );
    dispatch({ type: "GetStudentRoutineSuccess", payload: data.routines });
  } catch (err) {
    dispatch({
      type: "GetStudentRoutineFail",
      payload: err.response.data.message,
    });
  }
};

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateStudentProfileRequest" });

    const { data } = await axios.put(
      `/api/v1/student/profile/update`, userData
    );
    dispatch({ type: "UpdateStudentProfileSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "UpdateStudentProfileFail",
      payload: err.response.data.message,
    });
  }
};


export const updateAvatar = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateStudentAvatarRequest" });

    const { data } = await axios.put(
      `/api/v1/student/avatar/update`, userData
    );
    dispatch({ type: "UpdateStudentAvatarSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "UpdateStudentAvatarFail",
      payload: err.response.data.message,
    });
  }
};

export const updatePassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateStudentPasswordRequest" });

    const { data } = await axios.put(
      `/api/v1/student/password/update`, userData
    );
    dispatch({ type: "UpdateStudentPasswordSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "UpdateStudentPasswordFail",
      payload: err.response.data.message,
    });
  }
};


export const getStudentStatus = () => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentStatusRequest" });

    const { data } = await axios.get("/api/v1/get/student/status");
    dispatch({ type: "GetStudentStatusSuccess", payload: data.status });
  } catch (err) {
    dispatch({
      type: "GetStudentStatusFail",
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
