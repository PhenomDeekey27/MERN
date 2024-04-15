
import { useEffect } from "react";
import verifiedStyles from "../Styles/VerifiedProfile.module.css"
import axios from "axios"
import { useState } from "react";
import axiosBaseUrl from "../../Utils/baseurl";
const VerifiedProfiles = () => {
  const [profiles, setprofiles] = useState([])

  const projectData = [
    {
      name: "John Doe",
      dob: "1985-07-15",
      gender: "Male",
      qualification: "Master's Degree",
      motherName: "Mary Doe",
      fatherName: "Michael Doe",
      job: "Software Engineer",
      salary: 80000,
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      religion: "Christianity"
    },
    {
      name: "Jane Smith",
      dob: "1990-02-28",
      gender: "Female",
      qualification: "Bachelor's Degree",
      motherName: "Emily Smith",
      fatherName: "David Smith",
      job: "Data Analyst",
      salary: 60000,
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      religion: "Buddhism"
    },
    {
      name: "Emily Johnson",
      dob: "1988-11-10",
      gender: "Female",
      qualification: "PhD",
      motherName: "Laura Johnson",
      fatherName: "Robert Johnson",
      job: "Doctor",
      salary: 100000,
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
      religion: "Islam"
    },
    {
      name: "Michael Brown",
      dob: "1980-05-20",
      gender: "Male",
      qualification: "Bachelor's Degree",
      motherName: "Sarah Brown",
      fatherName: "James Brown",
      job: "Lawyer",
      salary: 90000,
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
      religion: "Judaism"
    }
  ];

  const verifiedProfiles=async()=>{
     
    await axiosBaseUrl.get("verified_profiles").then((res)=>{
      console.log(res.data.Data)
      setprofiles(...profiles,res.data.Data)
    })
    
    
  }

  useEffect(()=>{
    verifiedProfiles()

  },[])
  

  return (
    <div style={{marginTop:"7rem"}} className="container-fluid">
      <h1 className="text-center" style={{color:"darkblue"}}>Verified Profiles</h1>
      <div className="container-fluid d-flex justify-content-around gap-2 mt-5 flex-wrap" id={verifiedStyles.verified}>
    
      {
        projectData&&projectData.map((profile,id)=>{
          return(<div key={id} className="card" style={{width:"18rem",cursor:"pointer"}} >
          <img src={profile.photo} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bold">{profile.name}</p>
            <p className="card-text fw-semibold">{profile.job}</p>
            <p className="card-text fw-semibold">{profile.religion}</p>
           
          </div>
          </div>)
        })


       
      }


      {
        profiles&&profiles.map((profile,id)=>{
          return(<div key={id} className="card" style={{width:"18rem",cursor:"pointer"}}>
          <img src={profile.profile_img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text fw-bold">{profile.name}</p>
            <p className="card-text fw-semibold">{profile.job}</p>
            <p className="card-text fw-semibold">{profile.religion}</p>
           
          </div>
          </div>)
        })


       
      }



      </div>
     
    </div>
  )
}

export default VerifiedProfiles