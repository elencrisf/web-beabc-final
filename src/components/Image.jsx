// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image";


// export default ({ filename, alt }) => (
//   <StaticQuery
//     query={graphql`{
//   images: allFile {
//     edges {
//       node {
//         relativePath
//         name
//         childImageSharp {
//           gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// }
// `}
//     render={data => {

//       const image = data.images.edges.find(n => {
//         return n.node.relativePath.includes(filename)
//       })

//       if (!image) return

//       const imageSizes = image.node.childImageSharp.gatsbyImageData
//       return <GatsbyImage sizes={imageSizes} alt={alt} />;
//     }}
//   />
// )
