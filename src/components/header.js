import * as React from "react"


import MobileNav from "./navigation/mobile"
import DesktopNav from "./navigation/desktop"

const Header= () => {

  return (
    <header>
      {/* Mobile Menu */}
      <div className="flex flex-row justify-between md:hidden">
        <MobileNav/>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <DesktopNav/>
      </div>
    </header>
  )
}

export default Header
