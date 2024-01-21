import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/actions/adminAction";
import MetaData from "../../components/MetaData";
import { Link } from "react-router-dom";

const AllTeacher = () => {
  const dispatch = useDispatch();
  const { teachers, loading } = useSelector((state) => state.teacher);
  console.log(teachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);
  return (
    <div className="pt-20 px-12">
      <MetaData title={"Teachers"} />
      <h4 className="text-blue-900 font-bold text-xl mb-5">All Teacher</h4>
      {loading ? (
        "Please Wait >>>>>>>>>"
      ) : (
        <div className="flex items-center flex-wrap">
          {teachers &&
            teachers.map((val, ind) => {
              return (
                <Link
                  key={ind}
                  to={`/admin/teacher/${val._id}`}
                  className="  w-3/12 text-blue-900  mt-1"
                >
                  <div  style={{width:"99%"}}  className="bg-blue-100 cursor-pointer rounded-md p-4">
                  <img
                    src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                    className="h-40"
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

export default AllTeacher;
