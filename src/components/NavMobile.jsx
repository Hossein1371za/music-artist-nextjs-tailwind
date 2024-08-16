import { useContext } from "react"
import { NavContext } from "@/context/NavContext"

const NavMobile = () => {
  const value = useContext(NavContext)
  const [openMenu,setOpenMenu]= value.openMenu
  return (
    <div className="xl:hidden">NavMobile</div>
  )
}

export default NavMobile