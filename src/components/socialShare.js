import * as React from "react"
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
  } from 'react-share';

import {
    FaFacebook,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa"

const SocialShare = ({ url, title, description}) => (
    <div>
        <FacebookShareButton url={url} quote={description}>
            <FaFacebook size={28} />
        </FacebookShareButton>

        <LinkedinShareButton url={url} title={title} summary={description}>
            <FaLinkedinIn size={28} />
        </LinkedinShareButton>

        <TwitterShareButton url={url} title={description}>
            <FaTwitter size={28} />
        </TwitterShareButton>
    </div>
)
  
export default SocialShare