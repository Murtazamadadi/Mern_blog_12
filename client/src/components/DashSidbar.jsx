import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react"
import { useEffect, useState } from "react"
import { HiArrowSmRight, HiUser} from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom"

function DashSidbar() {
    const location=useLocation()
    const [tab,setTab]=useState("")

    useEffect(()=>{
        const urlParams=new URLSearchParams(location.search)
        const tabFromUrl=urlParams.get("tab")
        if(tabFromUrl){
            setTab(tabFromUrl)
        }
    },[location.search])


  return (
    <Sidebar className=" w-full">
        <SidebarItems>
            <SidebarItemGroup className="flex flex-col gap-1">
                <Link to="/dashboard?tab=profile">
                    <SidebarItem
                    active={tab==="profile"}
                    icon={HiUser}
                    label="User"
                    labelColor="dark"
                    >
                        پروفایل
                    </SidebarItem>
                </Link>

                <SidebarItem
                icon={HiArrowSmRight}
                className="cursor-pointer"
                >
                    خارج شدن
                </SidebarItem>
            </SidebarItemGroup>
        </SidebarItems>
    </Sidebar>
  )
}

export default DashSidbar