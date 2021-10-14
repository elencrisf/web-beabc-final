import React from "react"
import "./successStories.scss"
// import { Link } from "gatsby"
// import { StyledButton } from "../../Elements/Elements"

const Youtube = () => {
  return (
    // <div className="content wrap py-5">
      <div className="home__successStories__youtube">
      <iframe
        title="videoPlaceholder"
        width="720"
        height="405"
        // src="https://www.youtube.com/embed/PCukxLNVC1k?controls=0"
        src="https://www.youtube.com/embed/y2Ky3Wo37AY?controls=0"
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* <img alt="" src={youtube} /> */}
    {/* </div> */}
      
    {/* <Youtube className="home__successStories__youtube"/> */}
        {/* <div className="home__successStories__description p-5">
            <h1 className="font-weight-bold">
              Em construção
            </h1>
          <div className="my-3"> */}
            {/* <Link to="aboutUs">
              <StyledButton outline={true}>
                Read more about what we do
              </StyledButton>
            </Link> */}
          {/* </div>
        </div> */}
      </div>
      // </div>
  )
}

export default Youtube