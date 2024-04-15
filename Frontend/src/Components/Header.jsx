import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Usercontext } from "../Contexts/UserContext"


const Header = () => {
    const {setuserstatus,profilestatus,setprofilestatus} =useContext(Usercontext);
    const navigate=useNavigate()
    let userstatus= localStorage.getItem("status") || "Signup"
    let token=localStorage.getItem("token");
    if(token==null){
        setprofilestatus("Create-Profile")
    }
    if(token!=null && userstatus==="Signup"){
        setuserstatus("Logout")
    }
    const Logout=()=>{
      
      localStorage.removeItem("token")
        localStorage.removeItem("status")
      setuserstatus("Login")
       
        

    }

    
  return (
    <div>
    <nav className="navbar navbar-expand-lg  navbar-expand-md navbar-expand-sm p-4 top-0 position-fixed w-100 z-3" style={{backgroundColor:"yellow"}}>
            <div className="container-fluid d-flex justify-between">
                <a className="navbar-brand" href="#">Phenom</a>
                <>
               
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active fw-bolder" aria-current="page" style={{color:"#080F75"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bolder"  style={{color:"#080F75"}}>About</a>
                            </li>
                            <li className="nav-item">
                             <Link to={"/contact"} className="nav-link fw-bolder"  style={{color:"#080F75"}}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                { userstatus!=="Logout" ?
                                    <Link to={`/${userstatus}`} className="nav-link fw-bolder" style={{color:"#080F75"}}>
                                    {
                                            userstatus 
                                    }
                                </Link>
                                :
                                <Link className="nav-link fw-bolder" style={{color:"#080F75"}} onClick={()=>Logout()} to={"/"}>Logout</Link>
                                    
                                }
                               
                            </li>
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link fw-bolder"   style={{color:"#080F75"}}>{profilestatus}</Link>
                            </li>
                        </ul>
                   
                    </div>
            </>

            </div>
    </nav>
    </div>
  )
}

export default Header