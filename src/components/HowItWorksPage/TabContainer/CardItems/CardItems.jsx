import React from "react"
import "./cardItems.scss"
import Card from "react-bootstrap/Card"
// // import CardDeck from "react-bootstrap-card"
// import CardDeck from "react-bootstrap/Card"

export const CardItems = ({ array, green }) => {
  const cards = array.map((item, index) => (
    <Card key={item.title}>
      <Card.Body>
        <Card.Title className="how-tabs__card-items__title">
          {item.title}
        </Card.Title>
        {/* <Card.Img src={item.icon} className="w-50 p-3" /> */}
        <Card.Text className="how-tabs__card-items__discription">
          <span><p className="mb-3">{item.description}</p>
          <p className="mb-3">{item.description2}</p>
          <p  className="mb-3">{item.description3}</p>
          <p  className="mb-3">{item.description4}</p></span>
        </Card.Text>
      </Card.Body>
      {/* <span
        className={`how-tabs__card-items__number ${green && "bg-custom-green"}`}
      >
        {index + 1}
      </span> */}
    </Card>
  ))
  return (
    <div className="how-tabs__card-items pb-5">
      <div>{cards}</div>
    </div>
  )
}

export default CardItems
