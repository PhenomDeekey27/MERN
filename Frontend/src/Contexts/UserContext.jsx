import { createContext, useEffect } from "react";
import { useState } from "react";

export const Usercontext=createContext();


export default function UserProvider({children}){
   const [userstatus, setuserstatus] = useState("Signup")
   const [profilestatus, setprofilestatus] = useState('Create-Profile')
   const [imageName, setimageName] = useState('')


   useEffect(()=>{
    localStorage.setItem("status",userstatus)
    localStorage.setItem("image",imageName)
   },[userstatus,imageName])

   return (<Usercontext.Provider value={{userstatus,setuserstatus,profilestatus,setprofilestatus,setimageName,imageName}}>
            {
              children

            }
    </Usercontext.Provider>
   )
}
