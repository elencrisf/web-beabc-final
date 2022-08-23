import React from "react"
import "./Header.scss"
import Img from "gatsby-image";
// import Image from "../../Image"

// import { Link } from "gatsby"
// import { LanguageSelector } from 'gatsby-plugin-translate'
import { TranslateLink } from 'gatsby-plugin-translate'
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Dropdown from 'react-bootstrap/Dropdown'

const Header = ({ path }) => {
// const Header = () => {

  const { logo } = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "logo_beabcC.png" }) {
      childImageSharp {
        fixed(width: 500, height: 108) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <header className="header">
      {/* <div className="wrap"> */}
      {/* <Navbar navbar-expand-lg fixed-top navbar-dark> */}
        <Navbar collapseOnSelect expand="lg" className="py-1">
          <Navbar.Brand as={TranslateLink} to="/">
            <div className="header__logo">           
                    <Img
                    filename={"logo_beabcC.png"}
                    fixed={logo.childImageSharp.fixed}
                    alt="logo" />

            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link
                as={TranslateLink}
                to="/aboutUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/aboutUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Sobre Nós
              </Nav.Link>
              <Nav.Link
                as={TranslateLink}
                to="/howItWorks"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/howItWorks/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Eng/Arq
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Eng/Arq
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#bcRegister"                   
                    as={TranslateLink}
                  to="/howItWorks"
                  eventKey={2}>
                    Registro BC</Dropdown.Item>
                    <Dropdown.Item href="#workOrient">Orientação Profissional</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </Nav.Link>

              <Nav.Link
                as={TranslateLink}
                to="/successStories"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/successStories/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Eventos
              </Nav.Link>
              <Nav.Link
                as={TranslateLink}
                to="/contactUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/contactUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Contato
              </Nav.Link>
              <>
              {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Language
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#englishlang">
                    <LanguageSelector sourceLanguage={true} 
                    as={TranslateLink}
                    to="/howItWorks"
                    // eventKey={2}
                    >English</LanguageSelector></Dropdown.Item>
                    <Dropdown.Item href="#portugueslang">
                    <LanguageSelector language="pt"
                    as={TranslateLink}
                    to="/successStories"
                    >Português</LanguageSelector></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}


              </>
              {/* <Nav.Link
                as={Link}
                to="/contactUs"
                eventKey={2}
                className={`header__nav-link ${
                  path === "/contactUs/" ? "header__nav-link-isActive" : ""
                }`}
              >
                Associe-se
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {/* </div> */}
    </header>
  )
}

export default Header
