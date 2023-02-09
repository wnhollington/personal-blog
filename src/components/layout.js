import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="md:h-screen md:flex">
      <div className="md:bg-white shadow-lg md:w-72">
        <Header />
      </div>
      <main className="md:flex-1 md:flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll">{children}</div>
      </main>
    </div>
  )
}

export default Layout
