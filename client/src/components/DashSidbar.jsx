import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react"
import { useEffect, useState } from "react"
import { HiArrowSmRight, HiDocumentText, HiUser} from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom"
import { signOoutSuccess } from "../redux/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

function DashSidbar() {
    const location=useLocation()
    const [tab,setTab]=useState("")
    const dispatch=useDispatch()
    // ========================================================== add posts section to the admin dashbord
    const {currentUser}=useSelector((state)=>state.user)

    useEffect(()=>{
        const urlParams=new URLSearchParams(location.search)
        const tabFromUrl=urlParams.get("tab")
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
    },[location.search])






    // =========================================================== signout functionality
    const handleSignOut=async()=>{

        try{
          const res=await fetch("/api/user/sign-out",{
            method:"POST"
          })
    
          const data=await res.json()
    
          if(!res.ok){
            console.log(data.message)
          }else{
            dispatch(signOoutSuccess())
          }
        }catch(error){
          console.log(error)
        }
      }
     
    


  return (
    <Sidebar className=" w-full">
        <SidebarItems>
            <SidebarItemGroup className="flex flex-col gap-3">
                <Link to="/dashboard?tab=profile">
                    <SidebarItem
                    active={tab==="profile"}
                    icon={HiUser}
                    label={currentUser.isadmin ? "Admin":"User"}
                    labelColor="dark"
                    >
                        پروفایل
                    </SidebarItem>
                </Link>

                {currentUser.isadmin && (
                  <Link to="/dashboard?tab=posts">
                    <SidebarItem
                    active={tab==="posts"}
                    icon={HiDocumentText}
                    as="div"
                    >
                      پست ها
                    </SidebarItem>
                  </Link>
                )}

                <SidebarItem
                icon={HiArrowSmRight}
                className="cursor-pointer"
                onClick={handleSignOut}
                >
                    خارج شدن
                </SidebarItem>
            </SidebarItemGroup>
        </SidebarItems>
    </Sidebar>
  )
}

export default DashSidbar