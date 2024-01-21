import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loading";
import {
  clearSuccess,
  clearError,
  getTeachers,
  createRoutine,
} from "../../redux/actions/adminAction";
import { toast } from "react-toastify";
import MetaData from "../../components/MetaData";

const CreateRoutine = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.adminRoutine
  );
  const { teachers } = useSelector((state) => state.teacher);

  const [code, setCode] = useState();
  const [title, setTitle] = useState();

  const [room, setRoom] = useState();
  const [section, setSection] = useState();
  const [dept, setDept] = useState();
  const [semester, setSemester] = useState();
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [teacher, setTeacher] = useState();
  const handleSubmit = () => {
    if (teacher) {
      let data = {
        code: code,
        room: room,
        section,
        dept: dept,
        semester,
        time: time,
        day: day,
        teacherId: teacher,
        title: title,
      };
      dispatch(createRoutine(data));
    } else {
      toast("Please Select A Teacher");
    }
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
        <h4 className="text-center text-blue-900 text-xl font-bold ">
          Create Routine
        </h4>
        <div className="mt-5">
          <p className="font-semibold text-blue-900 mt-3">Title </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a code"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900  mt-3">Code </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a code"
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Room </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a room"
            onChange={(e) => setRoom(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900  mt-3">Section </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a email"
            onChange={(e) => setSection(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900  mt-3">Department </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            onChange={(e) => setDept(e.target.value)}
            placeholder="type a department"
            required
          />
          <p className="font-semibold text-blue-900  mt-3">Semester</p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a semester"
            onChange={(e) => setSemester(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900  mt-3">Day</p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a day"
            required
            onChange={(e) => setDay(e.target.value)}
          />
          <p className="font-semibold text-blue-900  mt-3">Time</p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a day"
            required
            onChange={(e) => setTime(e.target.value)}
          />
          <p className="font-semibold text-blue-900  mt-3">Select A Teacher</p>
          <select
            className="w-full py-1 px-3"
            onChange={(e) => setTeacher(e.target.value)}
            required
          >
            <option>Choose A Teacher</option>
            {teachers &&
              teachers.map((val, ind) => {
                return (
                  <option key={ind} value={val._id}>
                    {val.name}
                  </option>
                );
              })}
          </select>
        </div>
        <button
          className="text-white bg-blue-900 rounded-lg   w-full mt-5 py-1"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CreateRoutine;
