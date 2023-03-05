import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Bio = () => {
  const {author, talksAbout} = useSiteMetadata();

  return (
    <div className="flex flex-col text-center">
      <div class="p-4 mx-auto">
        <StaticImage 
          class="rounded-full" 
          height={150}
          width={150}
          placeholder="blurred"
          src="../images/profile.jpg" 
          alt={author.name} 
        />
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
