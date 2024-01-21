import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../redux/actions/adminAction";
import MetaData from "../../components/MetaData";
import { Link } from "react-router-dom";

const AllStudent = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(getStudents());
  }, []);
  return (
    <div className="pt-20 px-12">
      <MetaData title={"Teachers"} />
      <h4 className="text-blue-900 font-bold text-xl mb-5">All Student</h4>
      {loading ? (
        "Please Wait >>>>>>>>>"
      ) : (
        <div className="flex items-center flex-wrap ">
          {students &&
            students.map((val, ind) => {
              return (
                <Link
                  key={ind}
                  to={`/admin/student/${val._id}`}
                  className=" w-3/12 mt-1"
                >
                  <div className=" bg-blue-100 text-blue-900 ml-1 cursor-pointer rounded-md p-4">
                  <img
                    src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                    className="items-center h-40"
                  />
                  <div className="mt-2">
                    <p className="font-semibold">{val.name}</p>
                    <p>{val.dept ? val.dept : "Enter a Department"}</p>
                  </div>
                  </div>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AllStudent;
