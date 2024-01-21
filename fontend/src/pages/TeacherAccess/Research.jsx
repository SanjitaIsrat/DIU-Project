import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearError,  createResearch } from "../../redux/actions/teacherAction"
import Loading from "../../components/Loading"
import { toast } from "react-toastify"


const Research = ({setShowPopupR}) => {
  const dispatch = useDispatch()
  const {loading, success, error} = useSelector(state=>state.teacherPersonal)

  const [title, setTitle] = useState()
  const [desc, setDesc] = useState()
  const [file, setFile] = useState()
  const [link, setLink]  = useState()
  const [cate, setCate] =useState()
  const handleChange =(e)=>{
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const handleSubmit =()=>{
    const data = {
      title:title,
      desc:desc,
      file: file,
      link:link,
      category:cate
    }
    dispatch(createResearch(data))
   
  }
  
  useEffect(()=>{
    if(success){
      toast(success)
      // clearSuccess()
    }
    if(error){
      toast(error)
      clearError()
    }
  },[])
  return (
    <>
     <div className="w-full absolute h-screen  top-0 left-0 flex justify-center items-center">
      <div className="bg-blue-100 w-4/12 rounded-lg px-5 py-3 mt-12">
        <div className="flex justify-between items-center mb-5">
          <p className="font-bold text-md ">Create Publication</p>
          <button onClick={()=>setShowPopupR(false)} className="">Cancel</button>
        </div>
        <div>
          <p className="font-semibold text-sm my-1">TITLE</p>
          <input onChange={(e)=>setTitle(e.target.value)} className="w-full px-2 py-1" type="text" placeholder="Enter your title"/>
          <p className="font-semibold text-sm my-1">DESCRIPTION</p>
          <textarea onChange={(e)=>setDesc(e.target.value)} className="w-full " rows={5}/>
          <p className="font-semibold text-sm my-1">FILE</p>
          <input onChange={handleChange} className="w-full px-2 py-1 bg-blue-100" type="file" />
          <p className="font-semibold text-sm my-1">URL</p>
          <input  onChange={(e)=>setLink(e.target.value)} className="w-full px-2 py-1" type="text" placeholder="Enter your title"/>
          <p className="font-semibold text-sm my-1">CATEGORY</p>
          <input onChange={(e)=>setCate(e.target.value)} className="w-full px-2 py-1" type="text" placeholder="Enter your category"/>
          <button onClick={handleSubmit} className="w-full py-1  bg-blue-900 text-white mt-5">{loading ? <Loading/>:"Submit"}</button>
        </div>
      </div>
</div>
    </>
  )
}

export default Research