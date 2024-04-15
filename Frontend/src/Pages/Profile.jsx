import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { Usercontext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axiosBaseUrl from "../../Utils/baseurl";



const Profile = () => {
  const [image, setimage] = useState({ myFile:`${localStorage.getItem("image")!=null ? localStorage.getItem("image"):""}`})
  
  const [id, setid] = useState("")

  const [createFormtoggler, setcreateFormtoggler] = useState("")
  const [editFormtoggler, seteditFormtoggler] = useState(true)
  const[updatetoggler,setupdatetoggler]=useState(false)
  const [profileDatas, setprofileDatas] = useState({})
  const{setprofilestatus,imageName,setimageName}=useContext(Usercontext)
  const[loading,setloading]=useState(false)

  const [Updateddata,setUpdateddata]=useState({})

  let datas={};


  let token=localStorage.getItem("token")
  
  async function getUserId(){
        const config = {
          headers: { Authorization: `Bearer ${token}` }
      };
  try {

   

    await axiosBaseUrl.get("/get",config).then((res)=>{
      getProfile(res.data.data.id)
      
      setid(res.data.data.id)
     
      // fetchUser(res.data.data.id)
    
     
    }).catch((er)=>{
      console.log(er)
    })

    
  } catch (error) {
    console.log(error)
    
  }

  }

 async function getProfile(id){
    try {
      setloading(true)
      axiosBaseUrl.request({
        method:"POST",
        url:"get-profile",
        data:{
          id:id
        }
      }).then((res)=>{
       
       
        if(res.data.status!==200){
          setcreateFormtoggler(true)
         seteditFormtoggler(false)
         setupdatetoggler(false)
         setloading(false)
        }else{
           datas={...res.data.data};
          setprofilestatus("Profile")

          setprofileDatas(profileDatas=>({...profileDatas,...datas}))
          setloading(false)
         
        }

      })
   
      
    } catch (error) {
      console.log(error)
      
    }
  }

  

  useEffect(()=>{

    getUserId();
    

  },[createFormtoggler])
 
 const [formData, setformData] = useState({
        

        id:""   ,
        name:"",
        date:"2000/10/27",
        gender:"",
        father:"",
        mother:"",
        job:"",
        salary:"",
        religion:"",
        profile_img:""
       
      


 })

 
 const handleImage = async(e)=>{
  const file=e.target.files[0];
  const base64=await Convertbase64(file)


  
  setimage({...image,myFile:base64})
  setimageName(base64)
  
 
 

}


 function Convertbase64(file){
  return new Promise((resolve, reject) => {

    const fileReader= new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload=()=>{
      resolve(fileReader.result)
    }

    fileReader.onerror=(err)=>{
      reject(err)
    }
    
  })
 }


 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setformData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

const handleUpdatechange=(e)=>{
  const{name,value}=e.target;
  setUpdateddata((prev)=>({
    ...prev,
    [name]:value
  }))
 
}
const handleSubmit =async (e) => {
  e.preventDefault();
  formData.profile_img=image.myFile
  formData.id=id

  console.log(formData)
  try {

    const UpdatedProfile= await axiosBaseUrl.post("Profile",formData)
    const response = UpdatedProfile.data;
    console.log(response)
  
   
    toast.success(response.message)
    setcreateFormtoggler(false)
    seteditFormtoggler(true)
    
    


    
  } catch (error) {
    console.log(error)
    toast.error(error.response.data)
    
  }

 
 
};

const handleUpdateData=async(e)=>{
  e.preventDefault();

if(image.myFile!==""){
 Updateddata.profile_img=image.myFile
}
 console.log(imageName)
 console.log(Updateddata)
  
  try {
          const updatedProfile=await axiosBaseUrl.post(`update-profile/${profileDatas._id}`,Updateddata)
          console.log(updatedProfile.data)
          toast.success(updatedProfile.data.message)
          setupdatetoggler(false)
          seteditFormtoggler(true)
       
  } catch (error) {
    console.log(error)
    
  }
}


  return (
    <div className="container-fluid" style={{marginTop:'8rem'}}>
       <ToastContainer />
       { loading&&
          <ColorRing 
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{"width":"100%"}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
       }
    
     { createFormtoggler&& <form onSubmit={handleSubmit} className="p-5 fw-semibold">

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" name="name" value={formData.name} onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
                <input type="date" className="form-control" value={formData.date} name="date" onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="Gender">Select Gender</label>
                    <select className="form-select form-select-sm" aria-label="Small select example" name="gender" onChange={handleInputChange}>
                        <option selected>Choose Here</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Father Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" name="father" onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Mother Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp" name="mother" onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Job</label>
                <input type="text" className="form-control" name="job" onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Salary (Per/Month)</label>
                <input type="number" className="form-control" name="salary" onChange={handleInputChange}/>
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Profile Picture</label>
                <input type="file" accept=".jpeg, .jpg , .png" className="form-control" onChange={handleImage} 
                name="profile_img"
                />  
              
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Religion</label>
                <input type="text" className="form-control" name="religion" onChange={handleInputChange}/>
              
              </div>


              <button type="submit" className="btn btn-primary">Submit</button>
      </form>
}

{
  !loading &&
  editFormtoggler&&
  <div className="container-fluid d-flex flex-column">
    <div className="m-auto" style={{width:"15rem"}}>
      <img src={profileDatas.profile_img} alt=""  className="img-fluid"/>
    </div>
    <div className="mt-4 p-3">
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Name</span>
        <span>{profileDatas.name}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Date of Birth</span>
        <span>{profileDatas.date ? profileDatas.date.split("T")[0]:profileDatas.date}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Gender</span>
        <span>{profileDatas.gender}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Father Name</span>
        <span>{profileDatas.father}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Mother Name</span>
        <span>{profileDatas.mother}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Job</span>
        <span>{profileDatas.job}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Salary</span>
        <span>{profileDatas.salary}</span>
      </p>
      <p className="fw-bold text-center d-flex justify-content-between gap-3">
        <span>Religion</span>
        <span>{profileDatas.religion}</span>
      </p>
     
      
      

    </div>

    <button className="btn" style={{color:"darkblue",background:"bisque",fontWeight:"bold"}} onClick={()=>{seteditFormtoggler(false) ;setupdatetoggler(true)}}>Edit-Profile</button>
      <Link to={"/verified_profiles"}>Click here to visit Verified Profiles</Link>
  </div>
}

{
  updatetoggler&&

  <>
    <div className="m-auto" style={{width:"15rem"}}>
      <img src={profileDatas.profile_img} alt=""  className="img-fluid"/>
    </div>
  <form onSubmit={handleUpdateData} className="p-5 fw-semibold">

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" name="name" placeholder={profileDatas.name} onChange={handleUpdatechange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" placeholder={profileDatas.date.split("T")[0]} name="date" onChange={handleUpdatechange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="Gender">Select Gender</label>
        <select className="form-select form-select-sm" aria-label="Small select example" name="gender" onChange={handleUpdatechange}placeholder={profileDatas.gender}>
            <option selected>Choose Here</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Father Name</label>
    <input type="text" className="form-control" placeholder={profileDatas.father} aria-describedby="emailHelp" name="father" onChange={handleUpdatechange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Mother Name</label>
    <input type="text" className="form-control"  aria-describedby="emailHelp" name="mother" onChange={handleUpdatechange} placeholder={profileDatas.mother}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Job</label>
    <input type="text" className="form-control" name="job" onChange={handleUpdatechange} placeholder={profileDatas.job}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Salary (Per/Month)</label>
    <input type="number" className="form-control" name="salary" onChange={handleUpdatechange} placeholder={profileDatas.salary}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Profile Picture</label>
    <input type="file" accept=".jpeg, .jpg , .png" className="form-control" onChange={handleImage} 
    name="profile_img" 
    />  
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Religion</label>
    <input type="text" className="form-control" name="religion" onChange={handleUpdatechange} placeholder={profileDatas.religion}/>
  
  </div>


  <button type="submit" className="btn btn-primary">Update</button>
</form>
</>

}


    
    </div>
  )
}

export default Profile
