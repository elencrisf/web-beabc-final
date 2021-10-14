// import React from "react"
// import "./aboutUs.scss"
// // import Image from "../Image"
// import Img from "gatsby-image"
// // import { StyledButton } from "../Elements/Elements"
// // import { Link } from "gatsby"
// import { StaticQuery, graphql } from "gatsby"

// // import Banner1 from "./aboutUs_banner1"
// // import Banner2 from "./aboutUs_banner2"


// const AboutUs1 = ({ className, children }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         file(relativePath: { eq: "IMG_0622.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp_noBase64
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.file.childImageSharp.fluid
//       return (
//         <Img Tag="section" className={className} fluid={imageData}>
//           {children}
//         </Img>
//       )
//     }}
//   />
// )



// export default AboutUs1






// const AboutUs = () => {

  // const data = useStaticQuery(graphql`
  //   {
  //     allContentfulTeamMembers(sort: { fields: rank, order: ASC }) {
  //       edges {
  //         node {
  //           image {
  //             fluid(maxWidth: 120) {
  //               ...GatsbyContentfulFluid_withWebp_noBase64
  //             }
  //           }
  //           name
  //           position
  //           rank
  //         }
  //       }
  //     }
  //     contentfulImpactStats {
  //       title
  //       socialEntrepreneursMobilized
  //       businessesFunded
  //       impactInvestors
  //       totalFundsCollected
  //     }
  //   }
  // `)

  // const teamMembers = data.allContentfulTeamMembers.edges
  // const impactStats = data.contentfulImpactStats

//   return (
//     <div className="aboutUs">
//       <div className="aboutUs__banner">
//         <Banner1 className="aboutUs__banner__bgc1" />
//       </div>
//       <div className="wrap mx-auto my-5 ">
//         <p className="h1 font-weight-bolder">About Us</p>
//         <p className="inner-wrap">
//           We want to help you.
//         </p>
//         <p className="inner-wrap mt-3">
//           We help people.
//         </p>
//         <br />
//       </div>
//       <div className="wrap mx-auto my-5">
//         <p className="h1 font-weight-bolder">What We Do</p>
//         <p className="inner-wrap">
//           We help people.
//           <br /> We give support, we give support.
//         </p>
//         <div>
//           <div className="container pt-3 aboutUs__icons">
//             <div className="row justify-content-lg-between inner-wrap justify-content-md-center justify-content-center">
//               <div className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="aboutUs__icon">
//                   <Image filename={"aboutUs_icon1.png"} alt="icon1" />
//                 </div>
//                 <p className="h4">Embrace</p>
//               </div>
//               <div className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="aboutUs__icon">
//                   <Image filename={"aboutUs_icon2.png"} alt="icon2" />
//                 </div>
//                 <p className="h4">Learning</p>
//               </div>
//               <div className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="aboutUs__icon">
//                   <Image filename={"aboutUs_icon3.png"} alt="icon3" />
//                 </div>
//                 <p className="h4">Determined</p>
//               </div>
//               <div className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="aboutUs__icon">
//                   <Image filename={"aboutUs_icon4.png"} alt="icon4" />
//                 </div>
//                 <p className="h4">Build</p>
//               </div>
//               <div className="col-lg-2 col-md-4 col-sm-6">
//                 <div className="aboutUs__icon">
//                   <Image filename={"aboutUs_icon5.png"} alt="icon5" />
//                 </div>
//                 <p className="h4">Keep</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="aboutUs__banner">
//         <Banner2 className="aboutUs__banner__bgc2">
//           <div className="wrap mx-auto">
//             <p className="h1 font-weight-bolder">
//               We believe, we believe.
//             </p>
//             <div className="row wrap justify-content-around mt-5">
//               <div className="col-md-3 col-sm-6 aboutUs__banner__item">
//                 <p className="display-4 font-weight-bolder">Entrepreneurs
//                   {/* {impactStats.socialEntrepreneursMobilized} */}
//                 </p>
//                 <p className="h3">Entrepreneurs</p>
//               </div>
//               <div className="col-md-3 col-sm-6 aboutUs__banner__item">
//                 <p className="display-4 font-weight-bolder">
//                   Business
//                   {/* {impactStats.businessesFunded} */}
//                 </p>
//                 <p className="h3">Business</p>
//               </div>
//               <div className="col-md-3 col-sm-6 aboutUs__banner__item">
//                 <p className="display-4 font-weight-bolder">
//                   Investors
//                   {/* {impactStats.impactInvestors} */}
//                 </p>
//                 <p className="h3">Inverstors</p>
//               </div>
//               <div className="col-md-3 col-sm-6 aboutUs__banner__item">
//                 <p className="display-4 font-weight-bolder">
//                 $ million
//                   {/* ${impactStats.totalFundsCollected} dollars */}
//                 </p>
//                 <p className="h3">Total funds</p>
//               </div>
//             </div>
//           </div>
//         </Banner2>
//       </div>

//       <div className="wrap mx-auto mt-5 aboutUs__members">
//         <p className="h1 font-weight-bolder">Our Team</p>
//         <p className="inner-wrap">
//           What we do, what we do, what we do.
//         </p>
//         <div className="container mt-5 inner-wrap">
//           <div className="row justify-content-around">
//             {/* {teamMembers.map(({ node }, index) => {
//               const { image, name, position } = node */}
//               return (
//                 <div className="col-md-3 col-sm-6">
//                 {/* <div className="col-md-3 col-sm-6" key={index}> */}
//                   <Img
//                     // fluid={image.fluid}
//                     loading="auto"
//                     alt="team1"
//                     className="aboutUs__image"
//                   />

//                   <div className="aboutUs__label">
//                     <span className="aboutUs__label__name">Name</span>
//                     {/* <span className="aboutUs__label__name">{name}</span> |{" "}
//                     {position} */}
//                   </div>
//                 </div>
//               )
//             {/* })} */}


//             {/* {teamMembers.map(({ node }, index) => {
//               const { image, name, position } = node
//               return (
//                 <div className="col-md-3 col-sm-6" key={index}>
//                   <Img
//                     fluid={image.fluid}
//                     loading="auto"
//                     alt="team1"
//                     className="aboutUs__image"
//                   />

//                   <div className="aboutUs__label">
//                     <span className="aboutUs__label__name">{name}</span> |{" "}
//                     {position}
//                   </div>
//                 </div>
//               )
//             })} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AboutUs


