import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Banner1 = ({ className, children }) => (
  <StaticQuery
    query={graphql`{
      file(relativePath: { eq: "aboutBanner1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
`}
    render={data => {
      // Set ImageData.
      //   file(relativePath: {eq: "aboutBanner1.jpg"}) {
//     childImageSharp {
//       gatsbyImageData(quality: 90, placeholder: NONE, layout: FULL_WIDTH)
//     }
//   }
// }
      const imageData = data.file.childImageSharp.fluid
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Banner1
