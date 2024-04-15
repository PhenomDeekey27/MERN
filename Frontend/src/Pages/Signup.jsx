
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Usercontext } from "../Contexts/UserContext";
import axiosBaseUrl from "../../Utils/baseurl";


const Signup = () => {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const navigate=useNavigate();
    const{setuserstatus}=useContext(Usercontext)
    
   
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const newData = await axiosBaseUrl.post("/register",{
                name,email,password
            })

            if(newData.data.status!==201){
                toast.error(newData.data.message)
            }
            toast.success(newData.data.message)
            setuserstatus("login")
            navigate("/login")
            
        } catch (error) {
            toast.error(error.response.data)
            
        }

    }
  return (
    <div className="p-4 mt-3">
          <ToastContainer />
        <p className="fs-2 fw-bolder text-center">Signup</p>
        <form onSubmit={HandleSubmit}>
        <div className="mb-3">
            <label for="exampleInputName1" className="form-label">Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setname(e.target.value)} style={{ border:"3px solid cornflowerblue"}}/>
           
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setemail(e.target.value)} style={{ border:"3px solid cornflowerblue"}}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} style={{ border:"3px solid cornflowerblue"}}/>
        </div>
        
 
        <button type="submit" className="btn btn-primary">Register</button>
</form>

<p className="text-center text-black">
    Already have an account <span className="fw-bold" style={{color:"darkblue",cursor:'pointer'}} onClick={()=>navigate("/login")}>Login</span> here
</p>


    </div>
  )
}

export default Signup