import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loading";
import {
  clearSuccess,
  clearError,
  registerStudent,
} from "../../redux/actions/adminAction";
import { toast } from "react-toastify";
import MetaData from "../../components/MetaData";

const CreateStudent = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.student);
  const [name, setName] = useState();
  const [dept, setDept] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const data = {
      name: name,
      id: userName,
      password: password,
      email: email,
      dept: dept,
    };
    dispatch(registerStudent(data));
  };
  useEffect(() => {
    if (success) {
      toast(success);
    }
    if (error) {
      toast(error);
    }

    clearSuccess();
    clearError();
  }, []);
  return (
    <div className="flex items-center justify-center pt-20">
      <MetaData title={"Create Student"} />
      <div className="w-3/12 bg-blue-100 rounded px-4 py-5">
        <h4 className="text-center text-blue-900 text-xl font-bold ">
          Create Student
        </h4>
        <div className="mt-5">
          <p className="font-semibold text-blue-900 mt-3">Id </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a username"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Name </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Email </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Department </p>
          <input
            className="w-full py-1 px-3"
            type="text"
            placeholder="type a department"
            onChange={(e) => setDept(e.target.value)}
            required
          />
          <p className="font-semibold text-blue-900 mt-3">Password </p>
          <input
            className="w-full py-1 px-3"
            type="password"
            placeholder="type a password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="rounded-lg text-white bg-blue-900 w-full mt-5 py-1"
          onClick={handleSubmit}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CreateStudent;
