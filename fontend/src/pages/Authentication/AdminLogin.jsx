import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import LoginSvg from "../../assets/login-svg.png";
import UserIcon from "../../assets/icons/user.png";
import LockIcon from "../../assets/icons/lock.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import MetaData from "../../components/MetaData";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  clearError,
  adminLogin,
} from "../../redux/actions/userAction";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const [errUser, setErrUser] = useState(" ");
  const [errPass, setErrPass] = useState(" ");

  const [paswordType, setPasswordType] = useState("password");

  //Password Show and Hide Function
  const handleShowPass = () => {
    if (paswordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  // Form Validation and Login Function
  const handleLogin = () => {
    if (id === undefined) {
      setErrUser("Enter your username.");
    } else if (id.length < 6) {
      setErrUser("Username should be upper 6 characters");
    } else if (id === undefined) {
      setErrPass("Enter your password.");
    } else if (password.length < 8) {
      setErrPass("Password should be upper 8 characters");
    } else {
      setErrUser(" ");
      setErrPass(" ");
      const data = {
        userName: id,
        password: password,
      };
      dispatch(adminLogin(data));
      // console.log(data);
    }
  };

  //User Role Array
  const roleOption = ["Student", "Teacher"];

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      return history(redirect);
    }
  }, [isAuthenticated, error]);
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <MetaData title={"Admin Login"} />
      <h4 className="text-3xl font-poppins font-medium uppercase">
        Admin Login
      </h4>
      <div className=" w-3/12">
        <div className="my-5">
          <div className="relative">
            <img src={UserIcon} alt="icon" className="absolute top-4 left-3" />
            <input
              type="text"
              className="h-9 w-full border border-black rounded-md my-2 pl-11 py-4 "
              placeholder="username"
              onChange={(e) => {
                setId(e.target.value), setErrUser("");
              }}
            />
            <p className="text-red-600 text-xs">{errUser}</p>
          </div>
          <div className="my-4 relative">
            <img src={LockIcon} alt="icon" className="absolute top-4 left-3" />
            {paswordType === "password" ? (
              <p className="cursor-pointer absolute top-4  right-3 text-xl">
                <AiFillEye onClick={handleShowPass} />
              </p>
            ) : (
              <p className="cursor-pointer absolute top-4  right-3 text-xl">
                <AiFillEyeInvisible onClick={handleShowPass} />
              </p>
            )}
            <input
              type={paswordType}
              className="h-9 w-full  border border-black rounded-md my-2 pl-11 py-4 "
              placeholder="PASSWORD"
              onChange={(e) => {
                setPassword(e.target.value), setErrPass("");
              }}
            />
            <p className="text-red-600 text-xs">{errPass}</p>
          </div>
        </div>
        <button
          className="cursor-pointer w-full bg-blue1 hover:bg-blue-600  py-2.5 rounded-md font-poppins font-semibold text-white shadow-btn"
          onClick={handleLogin}
        >
          {loading ? <Loading /> : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
