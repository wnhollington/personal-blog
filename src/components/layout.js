import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="md:h-screen md:flex">
      <Header />
      <main className="md:flex-1 md:flex overflow-hidden">
        <div className="flex-1 overflow-y-scroll m-2 p-2">{children}</div>
      </main>
    </div>
  )
}

export default Layout
