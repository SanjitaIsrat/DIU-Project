import axios from "axios";

export const registerAdmin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateAdminRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/register/admin",
      userData,
      config
    );
    dispatch({ type: "CreateAdminSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CreateAdminFail", payload: err.response.data.message });
  }
};

export const registerTeacher = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateTeacherRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/register/teacher",
      userData,
      config
    );
    dispatch({ type: "CreateTeacherSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CreateTeacherFail", payload: err.response.data.message });
  }
};

export const registerStudent = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateStudentRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/register/student",
      userData,
      config
    );
    dispatch({ type: "CreateStudentSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CreateStudentFail", payload: err.response.data.message });
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    dispatch({ type: "GetStudentRequest" });

    const { data } = await axios.get("/api/v1/all/student");
    dispatch({ type: "GetStudentSuccess", payload: data.students });
  } catch (err) {
    dispatch({ type: "GetStudentFail", payload: err.response.data.message });
  }
};

export const getTeachers = () => async (dispatch) => {
  try {
    dispatch({ type: "GetTeacherRequest" });

    const { data } = await axios.get("/api/v1/all/teacher");
    dispatch({ type: "GetTeacherSuccess", payload: data.teachers });
  } catch (err) {
    dispatch({ type: "GetTeacherFail", payload: err.response.data.message });
  }
};

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: "GetAllQuestionRequest" });

    const { data } = await axios.get("/api/v1/all/question");
    dispatch({ type: "GetAllQuestionSuccess", payload: data.questions });
  } catch (err) {
    dispatch({ type: "GetAllQuestionFail", payload: err.response.data.message });
  }
};

export const getAdminStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleStudentAdminRequest" });

    const { data } = await axios.get(`/api/v1/student/${id}`);
    dispatch({ type: "GetSingleStudentAdminSuccess", payload: data.student });
  } catch (err) {
    dispatch({ type: "GetSingleStudentAdminFail", payload: err.response.data.message });
  }
};


export const getAdminTeacher = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GetSingleTeacherAdminRequest" });

    const { data } = await axios.get(`/api/v1/teacher/${id}`);
    dispatch({ type: "GetSingleTeacherAdminSuccess", payload: data.teacher });
  } catch (err) {
    dispatch({ type: "GetSingleTeacherAdminFail", payload: err.response.data.message });
  }
};

export const createRoutine = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateRoutineRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/create/routine",
      userData,
      config
    );
    dispatch({ type: "CreateRoutineSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CreateRoutineFail", payload: err.response.data.message });
  }
};

export const updateTeacherRoutine = (userData, id) => async (dispatch) => {
  try {
    dispatch({ type: "TeacherRoutineRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/teacher/routine/update/${id}`,
      userData,
      config
    );
    dispatch({ type: "TeacherRoutineSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "TeacherRoutineFail", payload: err.response.data.message });
  }
};
export const createQuestion = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "CreateQuestionRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/create/question",
      userData,
      config
    );
    dispatch({ type: "CreateQuestionSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "CreateQuestionFail", payload: err.response.data.message });
  }
};
export const getRoutines = (qry) => async (dispatch) => {
  try {
    dispatch({ type: "GetRoutineRequest" });
    const { data } = await axios.get(`/api/v1/all/routine?keyword=${qry}`);
    dispatch({ type: "GetRoutineSuccess", payload: data.routines });
  } catch (err) {
    dispatch({ type: "GetRoutineFail", payload: err.response.data.message });
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
