import { useSelector } from "react-redux";
import Image from "../../assets/Image.jpg"


const Profile = () => {
    const {user} = useSelector(state=>state.user)

    let subdate = new Date(user.createdAt)
    let d = subdate.getDate()
    let m = subdate.getMonth() + 1
    let y = subdate.getFullYear()
    let date = `${d}-${m}-${y}`
    console.log(user)
    return <div className="px-12 py-20">{
      <div className="flex">
      <div className="w-6/12">
      <img className="w-full" style={{height:"450px"}} src={user.avatar ? user.avatar.url: Image} alt="Avatar Image"/>
  
      </div>
      <div className="w-6/12 ml-4">
        <div className="pb-2" style={{borderBottom:"2px solid grey"}}>
        <p className="text-2xl font-semibold font-poppins">{user.name}<span className="text-xs ml-3">({user.designation})</span></p>
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
          <p className="font-poppins text-medium font-medium">Department :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.dept}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Phone :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.phone}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Office :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.office}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Experience :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.experience}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Publication :</p>
          <p className="font-poppins text-medium font-light ml-2">{user.publication}</p>
        </div>
        <div className="flex items-center " style={{lineHeight:"35px"}}>
          <p className="font-poppins text-medium font-medium">Join Date:</p>
          <p className="font-poppins text-medium font-light ml-2">{date}</p>
        </div>
      </div>
      </div>
    }</div>;
}

export default Profile