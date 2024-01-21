import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { getRoutines } from "../../redux/actions/adminAction";

const AllRoutine = () => {
  const dispatch = useDispatch();
  const { routines, loading } = useSelector((state) => state.adminRoutine);

  const [qry, setQry] = useState("");
  const handleSubmit = () => {
    dispatch(getRoutines(qry));
  };
  useEffect(() => {
    dispatch(getRoutines(qry));
  }, []);
  return (
    <div className="px-12 pt-20">
      <div className="w-5/12  m-auto flex items-center">
        <input
          type="text"
          placeholder="search a question title"
          className="w-full bg-blue-100 p-2 text-blue-900"
          onChange={(e) => setQry(e.target.value)}
        />
        <p
          className="bg-blue-100 p-3 text-blue-900 cursor-pointer"
          onClick={handleSubmit}
        >
          <FaSearch />
        </p>
      </div>
      <div className="mt-6 flex items-start  ">
        <div className="w-full ml-1">
          {!loading &&
            routines &&
            routines.length < 1 &&
            "No Question Found! 404"}
          {loading ? (
            <p>Please Wait.......</p>
          ) : (
            <div className="flex items-center flex-wrap">
              {routines &&
                routines.map((val, ind) => {
                  return (
                    <div
                      key={ind}
                      className="  text-blue-900  cursor-pointer rounded-md  w-3/12 min-h-64 mt-2"
                    >
                      <div
                        className="bg-blue-100  h-full p-4"
                        style={{ width: "99%" }}
                      >
                        <div className="mt-2">
                          <p className="font-semibold text-sm">
                            Title : {val.title}
                          </p>
                          <p className="font-semibold text-sm">
                            Time : {val.time}
                          </p>
                          <p className="font-semibold text-sm">
                            Room : {val.room}
                          </p>
                          <p className="font-semibold text-sm">
                            Code : {val.code}
                          </p>
                          <p className="font-semibold text-sm">
                            Teacher :
                            {val.teacher
                              ? val.teacher.name
                              : "Teacher Not Found"}
                          </p>
                          <p className="font-semibold text-sm">Section : {val.section}</p>
                          <p className="font-semibold text-sm">Day : {val.day}</p>

                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRoutine;
