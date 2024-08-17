"use client";
import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavContextProvider = (props) => {
    const [openMenu,setOpenMenu] = useState(false)
    const value ={
        openMenu:[openMenu,setOpenMenu]
    }
  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  );
};

export default NavContextProvider;
