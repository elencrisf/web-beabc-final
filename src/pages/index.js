import React from "react"

/* ------------------------------- COMPONENTS ------------------------------- */

import SEO from "../components/seo"
import AboutUs from "../components/IndexPage/AboutUs/AboutUs"
import HowItWorks from "../components/IndexPage/HowItWorks/HowItWorks"
import SuccessStories from "../components/IndexPage/SuccessStories/SuccessStories"
import Events from "../components/IndexPage/Events/Events"
import Subscribe from "../components/IndexPage/Subscribe/Subscribe"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <AboutUs />
    <SuccessStories />
    <Events />
    <HowItWorks />
    <Subscribe />
  </>
)

export default IndexPage
