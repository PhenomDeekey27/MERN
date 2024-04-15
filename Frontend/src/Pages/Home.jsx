import Couple_img from "../assets/Couple.jpg"
import Flex_img_1 from "../assets/flex_img-1.jpg"
import Flex_img_2 from "../assets/flex_img_2.png"
import Flex_img_3 from "../assets/flex_img_3.jpg"
import Flex_img_4 from "../assets/flex_img_4.jpg"
import Home_styles from "../Styles/Home.module.css"
import Banner_img from "../assets/banner_img.jpg"

const Home = () => {
  return (
    <div>
        <div>
            <img src={Couple_img} alt="img-1" className="img-fluid" />
        </div>
        <div className="container-fluid">
            <p className="text-center fs-3 text fw-bold position-relative mt-4" >What you get</p>
            <div className="container-fluid d-flex justify-content-center p-5 ">
               
               
                <div className="d-flex flex-column align-items-center p-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 img-fluid w-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                    <p className="fs-4 text-md-fs3 fw-semibold">9000+ Members</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, possimus.</p>


                </div>

                <div className="d-flex flex-column align-items-center p-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 w-50" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                    <p className="fs-4 text fw-semibold">Personally Verified</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sequi.</p>


                </div>
                
                <div  className="d-flex flex-column align-items-center p-2 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 w-50">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <p className="fs-4 text fw-semibold">100% Privacy</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sequi.</p>

                </div>

            </div>
            <div className="container-fluid p-3 flex-sm-column" style={{backgroundColor:"yellow"}}>
                <p className="fs-3 fw-bold text-center">Marriage Story That Inspires</p>
                <div className="d-flex justify-content-between gap-2" id={Home_styles.flex_imgs}>
                    <div className="w-25" >
                        <img src={Flex_img_1} className="img-fluid" alt="" />
                        <p className="text-center fw-semibold">BrideName - GroomName</p>
                    </div>
                    <div className="w-25" >
                        <img src={Flex_img_2} className="img-fluid" alt="" style={{backgroundColor:"lightblue"}} />
                        <p className="text-center fw-semibold">BrideName - GroomName</p>

                    </div>
                    <div className="w-25">
                        <img src={Flex_img_3} className="img-fluid" alt="" />
                        <p className="text-center fw-semibold">BrideName - GroomName</p>

                    </div>
                    <div className="w-25">
                        <img src={Flex_img_4} className="img-fluid" alt="" />
                        <p className="text-center fw-semibold">BrideName - GroomName</p>

                    </div>
                </div>

            </div>
            <div className="p-5 row mt-2"  style={{backgroundColor:"bisque"}}>
                <p className="fs-3 text-center fw-bold">About Us</p>
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <img src={Banner_img} alt="" className="img-fluid rounded" style={{border:"5px solid darkblue"}} />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Voluptates autem ducimus harum officia corporis ipsam possimus placeat 
                        rem voluptatibus inventore. Eius nesciunt dolorem inventore? Voluptatem.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem accusamus veniam unde consequuntur optio perspiciatis!
                    </p>
                    <ul className={Home_styles.about_list}>
                        <li className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        </li>
                        <li className="d-flex align-items-center  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                        </li>
                        <li className="d-flex align-items-center  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                        </li>
                        <li className="d-flex align-items-center  gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-5 container-fluid mt-4 d-flex justify-content-around align-items-center" style={{backgroundColor:"yellow"}}>
                <div>
                    <p className="fs-3 fw-bold">It is Perfect time for the perfect Match</p>
                    <p className="fs-5">Join largest matrimony platform today</p>

                </div>
                <div>
                    <a className="btn" href="#" id={Home_styles.Register}>Register</a>

                </div>

            </div>

        </div>


    </div>
  )
}

export default Home