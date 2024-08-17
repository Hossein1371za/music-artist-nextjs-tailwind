import { useContext } from "react";
import { NavContext } from "@/context/NavContext";

import { RiCloseLine } from "react-icons/ri";
const NavMobile = () => {
  const value = useContext(NavContext);
  const [openMenu, setOpenMenu] = value.openMenu;
  return (
    <div
      className={`${
        openMenu ? "right-0" : "-right-full"
      } xl:hidden fixed bg-primary w-full top-0 z-20 bottom-0 transition-all duration-500`}
    >
      <div onClick={()=>setOpenMenu(false)} className="absolute right-6 top-8 z-10 text-[40px]">
        <RiCloseLine/>
      </div>
    </div>
  );
};

export default NavMobile;
