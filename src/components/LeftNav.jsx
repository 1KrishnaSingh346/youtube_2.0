import React, { useContext, useEffect } from "react"
import {useNavigate} from "react-router-dom"

import LeftNavMenuItems from "./LeftNavMenuItems"
import { categories } from "../utils/constants"
import { Context } from "../context/contextApi"
 const LeftNav = () => {

  const {selectCategories, setSelectCategories, mobileMenu } = useContext(Context)

  const Navigate = useNavigate();
  const clickHandler = (name, type) =>
  {
    switch(type)
    {
      case "category":
        return setSelectCategories(name);
      case "home":
      return setSelectCategories(name);
      case "menu":
      return false;
    }
  }
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black fixed md:relative
      z-10   md:translate-x-0 transition-all ${ mobileMenu ? "translate-x-0" : "translate-x-[-240px]"}`}>
      <div className="flex px-5 flex-col">
          {categories?.map((item) =>
          {
              return (
                // React.fragment hm issilye use karte hai kyu do sibling divs ko react bina kisi parent div ke allow nahi karta isse html mei koi changes nahi aate sirf react error na show kare issiliye use karte hai
                <React.Fragment key={item.name}>
                  <LeftNavMenuItems 
                      text = {item.type === "home" ? "Home": item.name}
                      icon = {item.icon}
                      action = {() => {
                        clickHandler(item.name, item.type)
                        Navigate("/");
                      }}
                      className = {`${selectCategories === item.name ? "bg-white/[0.15]":""}`}
                  />
                  {item.divider &&(
                    <hr className="my-5 border-white/[0.2]"/>
                  )}
                </React.Fragment>

              );
          })}
          <hr className="my-5 border-white/[0.2]"/>
          <div className="text-white/[0.5] text-[12px]">
            Clone by : K.S</div>
      </div>
    </div>
  )
}

export default LeftNav
