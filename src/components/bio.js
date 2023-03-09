import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Bio = () => {
  const {author, talksAbout} = useSiteMetadata();

  return (
    <div className="flex flex-col text-center">
      <StaticImage 
        className="mx-auto border-2 rounded-full border-primary-900 mb-2"
        imgClassName="rounded-full"
        height={150}
        width={150}
        placeholder="blurred"
        src="../images/profile.jpg" 
        alt={author.name} 
      />
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
