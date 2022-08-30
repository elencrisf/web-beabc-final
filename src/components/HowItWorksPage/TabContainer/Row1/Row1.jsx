import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"
// import Image from "../../../Image"
import "./row1.scss"
export const Row1 = ({ object }) => {
  
  // const imageRow = object.image

  return (
    <div className="how-row1">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={5} md={12}>
            <div className="how-row1__image">
              {/* <Image filename={object.image} alt="collaborate" /> */}
              <StaticImage src="../../../../images/engineerRow1Data.jpg" alt="engineerRow1" />
              {/* <StaticImage src={imageRow} alt="collaborate" /> */}
            </div>
          </Col>
          <Col sm="auto" />
          <Col
            lg={6}
            md={12}
            className="text-left d-flex align-items-center how-row1__text-box"
          >           
            <div>
              <h2 className="text-custom-text fw-bold ">
                {object.title1}
              </h2>
              <p className="pt-3 how-row1__description">{object.description1}</p>
              <p className="pt-3 how-row1__description">{object.description1a}</p>
              <p className="pt-3 how-row1__description">{object.description1b}</p>
              <p className="pt-3 how-row1__description">{object.description1c}</p>
              <p className="pt-3 how-row1__description">{object.description1d}</p>
              <h2 className="pt-5 text-custom-text fw-bold ">
                {object.title2}
              </h2>
              <p className="pt-3 how-row1__description">{object.description2}</p>
              <p className="pt-3 how-row1__description">{object.description2a}</p>
  
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Row1
