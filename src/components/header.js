import * as React from "react"


import MobileNav from "./navigation/mobile"
import DesktopNav from "./navigation/desktop"

const Header= () => {

  return (
    <header className="md:bg-white shadow-lg md:w-72">
      <MobileNav/>
      <div className="hidden md:block">
        <DesktopNav/>
      </div>
    </header>
  )
}

export default Header
