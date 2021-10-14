// import React from "react"
// import "./Header.scss"
// // import Image from "gatsby-image";
// import Beabc_logo from "../../../images/beabc_logo.png"

// import { Link } from "gatsby"
// // import { useStaticQuery, graphql } from "gatsby";
// // import Navbar from "react-bootstrap/Navbar"
// // import Nav from "react-bootstrap/Nav"

// // const Header = ({ path }) => {
// const Header = () => {

// //   const { logo } = useStaticQuery(graphql`
// //   query {
// //     logo: file(relativePath: { eq: "beabc_logo.png" }) {
// //       childImageSharp {
// //         fixed(width: 100, height: 100) {
// //           ...GatsbyImageSharpFixed
// //         }
// //       }
// //     }
// //   }
// // `)

//   return (
//     <header>
//     <div className="container" id="nav-container">
//       <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
//         <Link className="navbar-brand" href="index.html">
//         {/* <Image filename={"beabc_logo.png"} fixed={logo.childImageSharp.fixed} alt="logo" /><h2>BEABC</h2> */}
//         {/* <img
//         className="profile__left__name"
//         alt="larry-signature"
//         src={larrySign}
//       /> */}
//           {/* <img id="logo" src={Beabc_logo} width="100px" height="100px" alt="logo"/>BEABC */}
//         </Link>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
//           <div class="navbar-nav">
//             <Link className="nav-item nav-link" id="home-menu" href="#">Home</Link>
//             <Link className="nav-item nav-link" id="about-menu" href="#">A agência</Link>
//             {/* <a className="nav-item nav-link" id="services-menu" href="#">Serviços</a>
//             <a className="nav-item nav-link" id="team-menu" href="#">Time</a>
//             <a className="nav-item nav-link" id="portfolio-menu" href="#">Projetos</a>
//             <a className="nav-item nav-link" id="contact-menu" href="#">Contato</a> */}
//           </div>
//         </div>
//       </nav>
//     </div>
//   </header>



    // <header className="header">
    //   {/* <div className="wrap"> */}
    //   {/* <Navbar navbar-expand-lg fixed-top navbar-dark> */}
    //     <Navbar collapseOnSelect expand="lg" className="py-3">
    //       <Navbar.Brand as={Link} to="/">
    //         <div className="header__logo">           
    //               {/* <div className="header__logo__pic"> */}
    //                 <Image
    //                 filename={"beabc_logo.png"}
    //                 // fixed={logo.childImageSharp.fixed}
    //                 alt="logo" />
    //                 {/* <div className="header__logo__name">
    //                 <h2>BEABC</h2>
    //                 <h2>Brazilian Engineers and Architects in British Columbia</h2>
    //               </div> */}
    //               {/* </div> */}

    //         </div>
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto"></Nav>
    //         <Nav>
    //           <Nav.Link
    //             as={Link}
    //             to="/aboutUs"
    //             eventKey={2}
    //             className={`header__nav-link ${
    //               path === "/aboutUs/" ? "header__nav-link-isActive" : ""
    //             }`}
    //           >
    //             Sobre Nós
    //           </Nav.Link>
    //           <Nav.Link
    //             as={Link}
    //             to="/howItWorks"
    //             eventKey={2}
    //             className={`header__nav-link ${
    //               path === "/howItWorks/" ? "header__nav-link-isActive" : ""
    //             }`}
    //           >
    //             Eng/Arq
    //           </Nav.Link>

    //           <Nav.Link
    //             as={Link}
    //             to="/successStories"
    //             eventKey={2}
    //             className={`header__nav-link ${
    //               path === "/successStories/" ? "header__nav-link-isActive" : ""
    //             }`}
    //           >
    //             Eventos
    //           </Nav.Link>
    //           <Nav.Link
    //             as={Link}
    //             to="/contactUs"
    //             eventKey={2}
    //             className={`header__nav-link ${
    //               path === "/contactUs/" ? "header__nav-link-isActive" : ""
    //             }`}
    //           >
    //             Contato
    //           </Nav.Link>
    //           <Nav.Link
    //             as={Link}
    //             to="/contactUs"
    //             eventKey={2}
    //             className={`header__nav-link ${
    //               path === "/contactUs/" ? "header__nav-link-isActive" : ""
    //             }`}
    //           >
    //             Associe-se
    //           </Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   {/* </div> */}
    // </header>
//   )
// }

// export default Header
