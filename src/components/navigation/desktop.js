import * as React from "react"
import { useState } from "react";
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { Link } from "gatsby"
import Bio from "../bio";
import {GrGatsbyjs} from "react-icons/gr"
import {FaRssSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa"

// Active Links
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "font-medium tracking-wide text-red-900 transition-colors duration-200 hover:text-red-900 hover:underline mx-1" } : {className: "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900 hover:underline mx-1"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const DesktopNav = () => {
  const {siteUrl, social} = useSiteMetadata();

  const [textCopied, setTextCopied ] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(`${siteUrl}/rss.xml`)
    setTextCopied(!textCopied)
  }
  return (
          <div className="h-screen overflow-y-auto flex flex-col gap-10 py-8">

              <Bio/>

              <div className="flex flex-col py-4 items-center">
                <ExactNavLink to="/">Articles</ExactNavLink>
                <ExactNavLink to="/about">About</ExactNavLink>
                <ExactNavLink to="/contact">Contact</ExactNavLink>
                <ExactNavLink to="/schedule-consultation">Schedule Consultation</ExactNavLink>
              </div>

              <div className="py-4 flex flex-col items-center">
                <h2>Follow Me</h2>
                <div className="flex flex-row">
                  <a href={social.linkedin} target="_blank" className="text-slate-800 hover:text-red-900 m-1"><FaLinkedin size={28}/></a>
                  <a href={social.twitter} target="_blank" className="text-slate-800 hover:text-red-900 m-1"><FaTwitterSquare size={28}/></a>
                  <button onClick={copy} className="text-slate-800 hover:text-red-900 m-1"><FaRssSquare size={28}/></button>
                  <div className={textCopied === true ? "absolute p-8 bottom-4 right-4 bg-slate-800 text-white animate-fade z-40" : "hidden"}>
                    <p>RSS Feed Copied to Clipboard</p>
                    <p className="absolute right-2 top-1 hover:cursor-pointer" onClick={copy}>X</p>
                  </div>
                </div>
              </div>

            <div className="py-4 flex flex-col items-center">
              <div className="text-center">
                <ExactNavLink to="/privacy-policy">Privacy Policy</ExactNavLink>
                <ExactNavLink to="/disclaimer">Disclaimer</ExactNavLink>
              
                <div className="mt-1">
                  © {new Date().getFullYear()}, <a href="https://www.gatsbyjs.com" target="_blank">Built with <GrGatsbyjs className="inline"/></a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DesktopNav
