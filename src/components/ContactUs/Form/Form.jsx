// import React, { useState } from "react";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./form.scss"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import postRequest from "../../../lib/postRequest"
// import dataFormatter from "../../../lib/dataFormatter"

// import { StyledSubmitButton } from "../../Elements/Elements"
import { StyledButton } from "../../Elements/Elements"

// // import { Link } from "gatsby"

const ContactForm = () => {

  const [state, handleSubmit] = useForm("mknkpwak");
  if (state.succeeded) {
      return <p>Obrigado pelo contato!</p>;
  }

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     // companyName: "",
//     emailAddress: "",
//     message: "",
//   })
//   const [message, setMessage] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [boolean, setBoolean] = useState(null)

//   const handleSubmit = async e => {
//     e.preventDefault()

//     setIsLoading(true)
    
//     const res = await postRequest(
//       // "/.netlify/functions/post",
//       dataFormatter(data)
//     ).then(res => res)

//     if (res.fetch) {
//       setData({
//         ...data,
//         firstName: "",
//         lastName: "",
//         // companyName: "",
//         emailAddress: "",
//         message: "",
//       })
//       setBoolean(true)
//       setIsLoading(false)
//       setMessage("Mensagem enviada com sucesso.")
//     } else if (!res.fetch) {
//       setBoolean(false)
//       setIsLoading(false)
//       setMessage(res.message)
//     }
//   }

//   const handleChange = e => {
//     setData({ ...data, [e.currentTarget.id]: e.target.value })
//   }

  return (
    // <form className="mt-5" onSubmit={handleSubmit}>
    <form name="contact" className="mt-5" onSubmit={handleSubmit}>
    {/* <form name="contact" className="mt-5" onSubmit={handleSubmit} action="https://formspree.io/f/" method="post"> */}
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <Row>
          <Col>
            <Form.Control
              placeholder="Nome"
              required
              size="lg"
              id="firstName"
              name="firstName"
            //   onChange={handleChange}
            //   value={data.firstName || ""}
            // value={firstName || ""}
            />
        <ValidationError 
        prefix="FirstName" 
        field="firstName"
        errors={state.errors}
      />
          </Col>
          <Col>
            <Form.Control
              placeholder="Sobrenome"
              required
              size="lg"
              id="lastName"
              name="lastName"
            //   onChange={handleChange}
            //   value={data.lastName || ""}
            // value={lastName || ""}
            />
        <ValidationError 
        prefix="LastName" 
        field="lastName"
        errors={state.errors}
      />
          </Col>
        </Row>
      </Form.Group>
      <Row className="mt-3">
        <Col>
          <Form.Label>Área de Interesse</Form.Label>
          <Form.Control
            placeholder="Área de interesse"
            required
            size="lg"
            id="companyName"
            name="area"
            // onChange={handleChange}
            // value={data.companyName || ""}
          />
        <ValidationError 
        prefix="InterestArea" 
        field="interestArea"
        errors={state.errors}
      />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label htmlFor="_replyto">Email
          </Form.Label>
          <Form.Control
            placeholder="Endereço de email"
            name="_replyto"
            // name="email"
            // type="email"
            required
            size="lg"
            id="emailAdress"
            // onChange={handleChange}
            // value={data.emailAddress || ""}
            // value={emailAddress || ""}
          />

        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label >Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="Mensagem"
            id="message"
            name="message"
            // onChange={handleChange}
            // value={data.message || ""}
            // value={message || ""}
          />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-left">
        {/* <StyledButton>Associe-se</StyledButton> */}
        <StyledButton type="submit" disabled={state.submitting}>
        Enviar
        </StyledButton>
          {/* <StyledSubmitButton type="submit" 
        //   isLoading={isLoading} 
        //   handleClick={handleSubmit}
        disabled={state.submitting}
          >
            Enviar
          </StyledSubmitButton> */}
          {/* <p className={`${boolean ? "text-success" : "text-danger"}`}> */}
            {/* {message} */}
          {/* </p> */}
        </Col>
      </Row>
    </form>
  )
}

export default ContactForm



