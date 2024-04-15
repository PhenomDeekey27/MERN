import Header from "./Components/Header"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile"
import { Routes,Route,BrowserRouter } from "react-router-dom"
import Login from "./Pages/Login"
import PrivateRoute from "./Components/PrivateRoute"
import VerifiedProfiles from "./Pages/VerifiedProfiles"



const App = () => {
  return (
    <div>
      <Header></Header>

     
   
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path="/profile" element={<Profile></Profile>}></Route>

          </Route>
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path="/verified_profiles" element={<VerifiedProfiles></VerifiedProfiles>}></Route>

          </Route>
         
        </Routes>

   

     
     
      
      <Footer></Footer>

    </div>
  )
}

export default App