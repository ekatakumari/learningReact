import { useEffect, useState } from "react"

export const JobBoard=()=>{
    const [result,setresult]=useState([])
    useEffect(()=>{
         apicall()
    },[])
    const apicall=async()=>{
          const data=await fetch(" https://hacker-news.firebaseio.com/v0/jobstories.json")
          const response=await data.json()
          console.log(response)
    }
    const fetchData=()=>{
        
    }
   return <div className="job-board">
    <div className="container">
            
    </div>

   </div>
}