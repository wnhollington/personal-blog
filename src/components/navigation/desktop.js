import * as React from "react"
import { useSiteMetadata } from '../../hooks/use-site-metadata'
import { Link } from "gatsby"
import Bio from "../bio";
import {AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"
import {GrGatsbyjs} from "react-icons/gr"


const DesktopNav = () => {
  const {social} = useSiteMetadata();
  return (
          <>

              <Bio/>

              <div className="flex flex-col py-4 items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/">Articles</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/schedule-consultation">Schedule Consultation</Link>
              </div>

              <div className="py-4 flex flex-col items-center">
                <h2>Follow Me</h2>
                <div className="flex flex-row">
                  <a href={social.linkedin} target="_blank"><AiFillLinkedin size={28}/></a>
                  <a href={social.twitter} target="_blank"><AiFillTwitterSquare size={28}/></a>
                </div>
              </div>

            <div className="absolute bottom-0 text-center mx-4">
     
              <Link to="/" className="m-1">Privacy Policy</Link>
              <Link to="/" className="m-1">Disclaimer</Link>
            
              <div>
                © {new Date().getFullYear()}, <a href="https://www.gatsbyjs.com" target="_blank">Built with <GrGatsbyjs className="inline"/></a>
              </div>
              
            </div>
          </>
  )
}

export default DesktopNav
