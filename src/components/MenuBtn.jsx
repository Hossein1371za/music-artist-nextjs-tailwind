import { useContext } from "react";
import { NavContext } from "@/context/NavContext";


const MenuBtn = () => {
  const value = useContext(NavContext);
  const [openMenu, setOpenMenu] = value.openMenu;
  return (
    <div onClick={()=>setOpenMenu(true)} className="xl:hidden flex flex-col gap-y-2 cursor-pointer group">
        <div className="w-7 h-[2px] bg-white transition-all"></div>
        <div className="w-4 group-hover:w-7 transition-all h-[2px] bg-white"></div>
        <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  )
}

export default MenuBtn