
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { Usercontext } from "../Contexts/UserContext";
import axiosBaseUrl from "../../Utils/baseurl";

const Login = () => {
    
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const{setuserstatus}=useContext(Usercontext)

    function LocalStorageToken(token){
        const val=localStorage.getItem("token")
       
        if(val==null){
           localStorage.setItem("token",token)
        }else{
            localStorage.removeItem("token");
            localStorage.setItem("token",token)
        }
       
    }
   
    const navigate=useNavigate();

    const HandleSubmit=async(e)=>{
        e.preventDefault();
        try {

            const loggedUser=await axiosBaseUrl.post("/login",{
                email,password
            })

         
            if(loggedUser.data.status!==200){
                toast.error(loggedUser.data.message)
            }else{
                toast.success(loggedUser.data.message)
               
             
                // localStorage.setItem("token",token)
                LocalStorageToken(loggedUser.data.data.token)
                
                setuserstatus("Logout")
                
               

                setTimeout(()=>{
                    navigate("/profile")
                },1000)

            }
            
         




            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            
        }
    
    
        





    }
  return (
    <div className="p-4 mt-3">
        <ToastContainer></ToastContainer>
        <p className="fs-2 fw-bolder text-center">Login</p>
        <form onSubmit={HandleSubmit}>
        
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setemail(e.target.value)} style={{ border:"3px solid cornflowerblue"}}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} style={{ border:"3px solid cornflowerblue"}}/>
        </div>
        
 
        <button type="submit" className="btn btn-primary">Login</button>
</form>

<p className="text-center text-black">
    Don't have an account <span className="fw-bold" style={{color:"darkblue",cursor:'pointer'}} onClick={()=>navigate("/signup")}>Register</span> here
</p>
    </div>
  )
}

export default Login