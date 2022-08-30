import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Image from "../../../Image"
import "./row2.scss"
export const Row2 = ({ object }) => {
  return (
    <div className="how-row2 pt-5">
      <Container>
        <Row className="justify-content-md-center">
        {/* <Col sm="auto" />
          <Col lg={6} md={12}>
            <div className="how-row2__image">
              <Image filename={object.image} alt="collaborate" />
            </div>
          </Col> */}

          {object.title2 ? (
            <Col
             lg={12}
            //   lg={4}
              md={12}
              className="text-left d-flex flex-column justify-content-around how-row2__text-box"
            >
              <ul className="mb-5">
                <li>
                  <h2 className="text-custom-text fw-bold ">
                    {object.title1}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.description1}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description1a}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description1b}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description1c}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description1d}
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <h2 className="text-custom-text fw-bold ">
                    {object.title2}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.description2}
                  </p>
                </li>
              </ul>
              <ul>
              <h2 className="pt-5 text-custom-text fw-bold ">
                    {object.architectText}
                  </h2>
                <li>
                  <h2 className="pt-5 text-custom-text fw-bold ">
                    {object.title3}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.description3}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description4}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description5}
                  </p>
                </li>
                <li>
                  <h2 className="pt-5 text-custom-text fw-bold ">
                    {object.title4}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.description6}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description7}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description8}
                  </p>
                </li>
                <li>
                <h2 className="pt-5 text-custom-text fw-bold ">
                    {object.title5}
                  </h2>
                  <h3 className="pt-5 text-custom-text fw-bold ">
                    {object.subtitle5a}
                  </h3>
                  <p className="pt-3 how-row1__description">
                    {object.description7}
                  </p>
                  <p className="pt-3 how-row1__description">
                    {object.description8}
                  </p>
                  <h3 className="pt-5 text-custom-text fw-bold ">
                    {object.subtitle5b}
                  </h3>
                  <p className="pt-3 how-row1__description">
                    {object.description9}
                  </p>
                </li>
              </ul>
              {/* <ul className="how-row2__list-2">
                <li>
                  <h2 className="text-custom-text fw-bold ">
                    {object.title2}
                  </h2>
                  <p className="pt-3 how-row1__description">
                    {object.discription2}
                  </p>
                </li>
              </ul> */}
            </Col>
          ) : (
            <Col
            lg={12}
            //   lg={4}
              md={12}
              className="text-left d-flex align-items-center how-row2__text-box"
            >
              <div>
                <h2 className="text-custom-text fw-bold ">
                  {object.title}
                </h2>
                <p className="pt-3 how-row2__description">
                  {object.description}
                </p>
              </div>
            </Col>
          )}

          {/* <Col sm="auto" />
          <Col lg={6} md={12}>
            <div className="how-row2__image">
              <Image filename={object.image} alt="collaborate" />
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default Row2
