import * as React from "react"

import { Link } from "gatsby"
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
        <nav className="md:hidden navbar navbar-expand-lg shadow-md p-4 bg-white relative flex items-center w-full justify-between">
          <Link to="/" className="font-semibold text-lg">W. Neal Hollington</Link>
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
