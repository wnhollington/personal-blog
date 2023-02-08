import * as React from "react"

import {GrClose} from "react-icons/gr"
import {RxHamburgerMenu} from "react-icons/rx"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import DesktopNav from "./desktop";


const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }

  return (
        <nav className="navbar navbar-expand-lg shadow-md p-4 bg-white relative flex items-center w-full justify-between">
          <h1>W. Neal Hollington</h1>
          
          <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='left'
          >
            <DesktopNav />
          </Drawer>
          
          <button onClick={toggleDrawer}>
            {isOpen ? <GrClose/> : <RxHamburgerMenu/>}
          </button>
        </nav>
  )
}

export default MobileNav
