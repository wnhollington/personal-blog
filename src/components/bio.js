import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Bio = () => {
  const {author, talksAbout} = useSiteMetadata();

  return (
    <div className="flex flex-col text-center">
      <div class="w-44 p-4 mx-auto">
        <StaticImage class="rounded-full" src="https://res.cloudinary.com/wnhollington/image/upload/c_thumb,g_face,r_max/v1663896646/Neal_Hollington_8b6ae1c8d6.jpg" alt={author.name} />
      </div>
      <h1 className="font-bold text-lg">{author.name}</h1>
      <p className="font-semibold">{author.summary}</p>
      <div>
        <span>Writes about </span>
        {talksAbout.map(element => {
          return <p className="inline">#{element} </p>
        })
        }
      </div>
    </div>
  )
}

export default Bio
