import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loading";
import {
  clearSuccess,
  clearError,
  getTeachers,
  createQuestion,
} from "../../redux/actions/adminAction";
import { toast } from "react-toastify";
import MetaData from "../../components/MetaData";

const CreateQuestion = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.adminRoutine
  );

  const [code, setCode] = useState();
  const [title, setTitle] = useState();

  
  const [dept, setDept] = useState();
  const [semester, setSemester] = useState();

  const [image, setImage] = useState()
  const handleChange = (e) => {
    if (e.target.name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  

  const handleSubmit = () => {
    let data = {
      code: code,
      dept: dept,
      semester:semester,
      title: title,
      image:image
    };
    dispatch(createQuestion(data));
    //     console.log(data);
  };
  useEffect(() => {
    if (success) {
      toast(success);
    }
    if (error) {
      toast(error);
    }

    dispatch(getTeachers());
    clearSuccess();
    clearError();
  }, [success, error]);
  return (
    <div className="flex items-center justify-center pt-20">
      <MetaData title={"Create Routine"} />
      <div className="w-3/12 bg-blue-100 rounded px-4 py-5">
        <h4 className="text-center text-blue-900 text-medium font-bold ">
          Create Question
        </h4>
        <div className="mt-5">
          <p className="font-semibold text-blue-900 mt-3">Title </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Code </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a code"
            onChange={(e) => setCode(e.target.value)}
            required
          />
         
          <p className="font-semibold text-blue-900 mt-3">Department </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            onChange={(e) => setDept(e.target.value)}
            placeholder="type a department"
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Semester</p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a semester"
            onChange={(e) => setSemester(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Choose Question Image</p>
          <input
            className="w-full bg-white
             py-1 px-3"
            type="file"
            onChange={handleChange}
            required
            name="image"
          />
        </div>
        <button
          className="text-white bg-blue-900 rounded-lg w-full mt-5 py-1"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
