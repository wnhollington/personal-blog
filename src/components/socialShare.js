import * as React from "react"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton
  } from 'react-share';

import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaEnvelope
} from "react-icons/fa"

const SocialShare = ({ url, title, description}) => (
    <div className="xl:absolute xl:flex xl:flex-col xl:right-11">
        <FacebookShareButton url={url} quote={description} className="mx-1 md:my-1">
            <div className="rounded bg-[#3b5998] hover:bg-[#3b5998]/90 p-1 xl:p-2"><FaFacebookF size={24} className="text-white"/></div>
        </FacebookShareButton>

        <TwitterShareButton url={url} title={description} className="mx-1 md:my-1">
            <div className="rounded bg-[#1da1f2] hover:bg-[#1da1f2]/90 p-1 xl:p-2"><FaTwitter size={24} className= "text-white"/></div>
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} summary={description} className="mx-1 md:my-1">
            <div className="rounded bg-[#0077b5] hover:bg-[#0077b5]/90 p-1 xl:p-2"><FaLinkedinIn size={24} className="text-white"/></div>
        </LinkedinShareButton>

        <EmailShareButton subject={title} body={url} className="mx-1 md:my-1">
            <div className="rounded bg-gray-500 hover:bg-gray-500/90 p-1 xl:p-2"><FaEnvelope size={24} className="text-white"/></div>
        </EmailShareButton>
    </div>
)
  
export default SocialShare