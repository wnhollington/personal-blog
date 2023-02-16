import * as React from "react"
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { Link } from "gatsby"
import Bio from "../bio";
import {AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"
import {GrGatsbyjs} from "react-icons/gr"

// Active Links
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "font-medium tracking-wide text-red-900 transition-colors duration-200 hover:text-red-900 hover:underline mx-1" } : {className: "font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-red-900 hover:underline mx-1"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const DesktopNav = () => {
  const {social} = useSiteMetadata();
  return (
          <div className="navigation flex flex-col items-center gap-10">

              <Bio/>

              <div className="flex flex-col py-4 items-center">
                <ExactNavLink to="/">Home</ExactNavLink>
                <ExactNavLink to="/about">About</ExactNavLink>
                <ExactNavLink to="/blog">Articles</ExactNavLink>
                <ExactNavLink to="/contact">Contact</ExactNavLink>
                <ExactNavLink to="/schedule-consultation">Schedule Consultation</ExactNavLink>
              </div>

              <div className="py-4 flex flex-col items-center">
                <h2>Follow Me</h2>
                <div className="flex flex-row">
                  <a href={social.linkedin} target="_blank" className="hover:text-red-900"><AiFillLinkedin size={28}/></a>
                  <a href={social.twitter} target="_blank" className="hover:text-red-900"><AiFillTwitterSquare size={28}/></a>
                </div>
              </div>

            <div className="py-4 flex flex-col items-center">
              <div className="absolute bottom-3 text-center">
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
