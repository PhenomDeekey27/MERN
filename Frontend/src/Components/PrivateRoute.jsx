import { Navigate,Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PrivateRoute(){
    const token=localStorage.getItem("token")

    if(token==null){
        console.log("Not Authorised")
        alert("Please Login to create your profile")

        return(
            <Navigate to={"/login"}></Navigate>
    
        )
    }

    return(
        <Outlet></Outlet>
    )
}

export default PrivateRoute