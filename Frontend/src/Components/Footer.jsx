import Fb_icon from "../assets/facebook.png"
import wp_img from "../assets/whatsapp.png";
import twitter_img from "../assets/twitter.png"
import insta_img from "../assets/instagram.png"
import Footer_styles from "../Styles/Footer.module.css"
const Footer = () => {
  return (
    <div  className="mt-5 p-5 position-relative w-100 bottom-0" style={{backgroundColor:"bisque"} }>
        <div className="p-5 d-flex align-items-center gap-2 justify-content-between" id={Footer_styles.footer_main}>
            <div className="d-flex gap-2">
                <img src={Fb_icon} alt="" style={{width:"50px",color:"#080F75",cursor:"pointer"}}/>
                <img src={wp_img} alt="" style={{width:"50px",color:"#080F75",cursor:"pointer"}} />
                <img src={twitter_img} alt="" style={{width:"50px",color:"#080F75",cursor:"pointer"}}/>
                <img src={insta_img} alt="" style={{width:"50px",color:"#080F75",cursor:"pointer"}}/>
             
          
            </div>
            <div className="">
            <ul className="d-flex justify-content-around gap-2">
                            <li className="nav-item" style={{listStyle:"none"}}>
                                <a className="nav-link active fw-bolder" aria-current="page" href="#" style={{color:"#080F75"}}>Home</a>
                            </li>
                            <li className="nav-item" style={{listStyle:"none"}}>
                                <a className="nav-link fw-bolder" href="#" style={{color:"#080F75"}}>About</a>
                            </li>
                            <li className="nav-item" style={{listStyle:"none"}}>
                             <a className="nav-link fw-bolder" href="#" style={{color:"#080F75"}}>Contact</a>
                            </li>
                            <li className="nav-item" style={{listStyle:"none"}}>
                                <a className="nav-link fw-bolder" href="#" style={{color:"#080F75"}}>Signup</a>
                            </li>
                            <li className="nav-item" style={{listStyle:"none"}} >
                                <a className="nav-link fw-bolder" href="#"  style={{color:"#080F75"}}>Create-Profile</a>
                            </li>
            </ul>

            </div>
      

        </div>
    </div>
  )
}

export default Footer