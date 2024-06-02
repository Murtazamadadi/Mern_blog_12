import { useLocation } from "react-router-dom"
import DashProfile from "../components/DashProfile"
import DashSidbar from "../components/DashSidbar"
import { useEffect, useState } from "react"


function Dashboard() {
  const location=useLocation()
  const [tab,setTab]=useState("")

  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search)
    console.log(urlParams)
    const tabFromUrl=urlParams.get("tab")
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  },[location.search])

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidbar/>
      </div>
<<<<<<< HEAD

      {tab==="profile" && <DashProfile/>}
=======
      <div>
        {tab==="profile" && <DashProfile/>}
      </div>
>>>>>>> 2eb4e3d2ff0a533d595f9eee08eac4ee6e904fa6
    </div>
  )
}

export default Dashboard