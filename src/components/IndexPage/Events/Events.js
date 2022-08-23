import React from "react"
import "./events.scss"
import Image from "../../Image"
import { events } from "../../../../website/events"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
// import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StyledButton } from "../../Elements/Elements"
import { Card } from "react-bootstrap"

const Events = () => {
  return (
    <div className="event wrap">
      <Container className="mx-auto event__container">
        <div className="event__title mb-5">
        <h1 className="text-center mb-5 font-weight-bold">
          Eventos
        </h1>
        </div>
        <div className="event__card-items">
        {/* <Row className="justify-content-around"> */}
        <Row className="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
          {events.map((item, index) => {
            const { title, description, thumbnail, date} = item
            return (
              <Col key={index} md={1} className="col">
                <Card>
                {/* <Link to="/successStories"> */}
                <div className="event__card-items__image">
                  <Image filename={thumbnail} />
                </div>
                {/* </Link> */}
                <Card.Body>
                <Link to="/successStories">
                <div className="event__card-items__description">
                  <h2 className="event__card-items__title font-weight-bold">{title}</h2>
                  <p className="event__card-items__text">{description}</p>
                  <p className="event__card-items__text">{date}</p>
                </div>
                </Link>
                </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
        </div>
      </Container>

      <div className="text-center pt-5 pb-3">
        <Link to="/successStories">
          {/* <StyledButton outline={true}>Eventos</StyledButton> */}
          <StyledButton>Saiba mais sobre Eventos</StyledButton>
        </Link>
      </div>
    </div>
  )
}

export default Events