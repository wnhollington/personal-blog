import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query metadata {
                site {
                    siteMetadata {
                        title
                        siteUrl
                        description
                        author {
                            name
                            summary
                        }
                        social {
                            linkedin
                            twitter
                        }
                        talksAbout
                    }
                }
            }
        `
    ) 
    return site.siteMetadata
}