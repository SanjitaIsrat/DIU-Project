import {useSelector} from "react-redux"

const Routine = () => {
    const {user} = useSelector(state=>state.user)
  return (
    <div className="px-12 pt-20 flex justify-center">
        {user && user.routine ? <img style={{width:"750px", height:"550px"}} src={user.routine}/> : "No Routine Found"}
    </div>
  )
}

export default Routine