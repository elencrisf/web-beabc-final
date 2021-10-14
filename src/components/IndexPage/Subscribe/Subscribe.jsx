// import React, { useState } from "react"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
// import postRequest from "../../../lib/postRequest"
// import { StyledSubmitButton } from "../../Elements/Elements"
import { StyledButton } from "../../Elements/Elements"
import "./subscribe.scss"

const Subscribe = () => {

  const [state, handleSubmit] = useForm("xvodvopv");
  if (state.succeeded) {
      return <p className="contactNews">Obrigado pelo contato!</p>;
  }
  // const [address, setAddress] = useState("")

  // const [message, setMessage] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [boolean, setBoolean] = useState(null)

  // const handleSubmit = async e => {
  //   e.preventDefault()

  //   const data = {
  //     properties: [
  //       {
  //         name: "email",
  //         value: address,
  //         subtype: "any",
  //       },
  //     ],
  //   }

  //   setIsLoading(true)
  //   const res = await postRequest("/.netlify/functions/post", data).then(
  //     res => res
  //   )

  //   if (res.fetch) {
  //     setAddress("")
  //     setBoolean(true)
  //     setIsLoading(false)
  //     setMessage("Inscrição criada com sucesso.")
  //   } else if (!res.fetch) {
  //     setBoolean(false)
  //     setIsLoading(false)
  //     setMessage(res.message)
  //   }
  // }

  // const handleChange = e => {
  //   setAddress(e.target.value)
  // }
  return (
    <div className="home__subscribe py-5 bg-custom-darkBlue" >
    {/* <div className="home__subscribe py-5 bg-custom-lightOrange"> */}
      <div className="wrap">
        <Container className="home__subscribe__wrap">
        <form name="news" className="mt-5" onSubmit={handleSubmit}>
        {/* <form name="news" className="mt-5" onSubmit={handleSubmit} action="https://formspree.io/f/" method="post"> */}
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="home__subscribe__text">
                <label htmlFor="_replyto">
                  Cadastre seu email e receba notícias de eventos.
                </label>
              </div>
            </Col>
            <Col md={6} className="align-self-center">
              <div className="d-flex home__subscribe__container">
                <Form.Control
                  type="email"
                  placeholder="Digite seu email"
                  className="home__subscribe__form mr-3"
                  required
                  size="lg"
                  id="emailAddress"
                  name="_replyto"
                  // onChange={handleChange}
                  // value={address || ""}
                />
                  <ValidationError 
                  prefix="email" 
                  field="email"
                  errors={state.errors}
                />
                <StyledButton type="submit" disabled={state.submitting}>
                Enviar
                </StyledButton>
                {/* <StyledSubmitButton type="submit" disabled={state.submitting}
                  // isLoading={isLoading}
                  // handleClick={handleSubmit}
                >
                  Enviar
                </StyledSubmitButton> */}
              </div>
              {/* <p
                className={`home__subscribe__message text-center ${
                  boolean ? "text-success" : "text-danger"
                }`}
              >
                {message}
              </p> */}
            </Col>
          </Row>
          </form>
        </Container>
      </div>
    </div>
  )
}

export default Subscribe

