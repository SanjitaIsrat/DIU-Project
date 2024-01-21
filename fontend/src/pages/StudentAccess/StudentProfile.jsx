import { useSelector } from "react-redux";
import Image from "../../assets/Image.jpg"


const StudentProfile = () => {
    const {user} = useSelector(state=>state.user)
    let subdate = new Date(user.createdAt)
    let d = subdate.getDate()
    let m = subdate.getMonth() + 1
    let y = subdate.getFullYear()
    let date = `${d}-${m}-${y}`
    // console.log(user.createdAt)
  return (
    <div className="px-12 pt-20">
      <div className="flex">
      <div className="w-6/12">
      <img className="w-full" style={{height:"450px"}} src={user.avatar ? user.avatar.url: Image} alt="Avatar Image"/>

      </div>
      <div className="w-6/12 ml-4">
        <div className="pb-2" style={{borderBottom:"2px solid grey"}}>
        <p className="text-2xl font-semibold font-poppins">{user.name}</p>
        </div>
        <div className="flex items-center mt-3 " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Email :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.email}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">ID :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.id}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Join Date:</p>
          <p className="font-poppins text-medium font-light ml-2">{date}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default StudentProfile;
