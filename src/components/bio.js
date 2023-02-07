import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Bio = () => {
  const {author} = useSiteMetadata();

  return (
    <div className="flex flex-wrap justify-center items-center text-center">
      <div class="w-44 p-4">
        <StaticImage class="rounded-full" src="https://res.cloudinary.com/wnhollington/image/upload/c_thumb,g_face,r_max/v1663896646/Neal_Hollington_8b6ae1c8d6.jpg" alt={author.name} />
      </div>
      <h1>{author.name}</h1>
      <p className="">{author.summary}</p>
    </div>
  )
}

export default Bio
