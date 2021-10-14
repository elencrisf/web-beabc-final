import React from "react"
import "./aboutUs.scss"
import Image from "../Image"
// import Img from "gatsby-image"
// import { StyledButton } from "../Elements/Elements"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Banner1 from "./aboutUs_banner1"
import Banner2 from "./aboutUs_banner2"



// import * as React from 'react'
// import { graphql } from 'gatsby'
// import { GatsbyImage } from "gatsby-plugin-image"

// const HomePage = ({data}) => {
//   return (
//     <div>
//       {data.allFile.edges.node.map((item, index) => {
//         return <div key={index}>
//           <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt="" />
//        </div>

//        })}

//     </div>
//   )
// }

// export const query = graphql`
//   query HomePageQuery {
//       allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//         edges {
//           node {
//             childImageSharp {
//               gatsbyImageData(layout: FIXED)
//             }
//           }
//         }
//      }
//   }
// `

// export default HomePage



// const AboutUs = ({data}) => (
// const AboutUs = ({ className, children }) => (
  const AboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "IMG_0622.jpg" }) {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    
     render={data => {
       // Set ImageData.
      //  const imageData = data.file.childImageSharp.fluid
      // const imageData = data.allFile.edges.node.childImageSharp
       return (
      //   <div>
      //   {data.allFile.edges.node.map((item, index) => {
      //     return <div key={index}>
      //       <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt="" />
      //    </div>
  
      //    })}
  
      // </div>
        <div className="aboutUs">
          {/* <Img Tag="section" className={className} fluid={imageData}>
           {children}
          </Img> */}
          <div className="aboutUs__banner">
                   <Banner1 className="aboutUs__banner__bgc1" />
          </div>
          <div className="wrap mx-auto my-5 ">
                  <p className="h1 font-weight-bolder">Quem somos</p>
                  <p className="inner-wrap">
                  Fundada em 2021, somos uma organização sem fins lucrativos de brasileiros Engenheiros e Arquitetos, registrados e não registrados
                  com EGBC (Engineers & Geoscientists British Columbia) e AIBC (Architectural Institute of British Columbia) que residem em British
                  Columbia, Canadá.
                  </p>
                  <br />
                </div>
          <div className="wrap mx-auto my-5 ">
              <p className="h1 font-weight-bolder">Nossa Visão</p>
              <p className="inner-wrap">
              Oferecer suporte, inspiração e informação para os engenheiros e arquitetos brasileiros
              que queiram (re)construir suas carreiras em British Columbia, Canada.
              </p>
              <br />
          </div>
          <div className="wrap mx-auto my-5">
                  <p className="h1 font-weight-bolder">Nossa Missão</p>
                  <p className="inner-wrap">
                  Unir e integrar os arquitetos e engenheiros brasileiros à indústria canadense em British
                  Columbia.
                  </p>
          </div>
                  {/* <div>
                <div className="container pt-3 aboutUs__icons">
                 <div className="row justify-content-lg-between inner-wrap justify-content-md-center justify-content-center">
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon1.png"} alt="icon1" />
                     </div>
                     <p className="h4">Embrace</p>
                    </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className="aboutUs__icon">
                      <Img filename={"aboutUs_icon2.png"} alt="icon2" />
                    </div>
                    <p className="h4">Learning</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon3.png"} alt="icon3" />
                     </div>
                     <p className="h4">Learning</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon4.png"} alt="icon4" />
                     </div>
                     <p className="h4">Relationships</p>
                   </div>
                   <div className="col-lg-2 col-md-4 col-sm-6">
                     <div className="aboutUs__icon">
                       <Img filename={"aboutUs_icon5.png"} alt="icon5" />
                     </div>
                     <p className="h4">Together</p>
                   </div>
                 </div>
                </div>
              </div> */}
            <div className="wrap mx-auto my-5">
              <div className="card mb-3" style={{maxWidth:"540px;"}}>
  <div className="row no-gutters">
    {/* <div className="col-md-4">
      <img src="..." className="card-img" alt="..."></img>
    </div> */}
    <div className="col-md-12">
      <div className="card-body wrap mb-5">
        <p className="h1 font-weight-bold card-title m-5">Propósitos BEABC</p>
            <p className="mb-3">
            Representar engenheiros e arquitetos brasileiros na Colúmbia Britânica e aumentar suas
            contribuições para o sucesso da profissão de engenheiro na Colúmbia Britânica, Canadá.
            Valorizar, fortalecer e integrar os profissionais brasileiros de engenharia e arquitetura na
            Columbia Britânica.
            </p>
            <p className="mb-3">
            Ajudar a estabelecer contatos com outras organizações técnicas e profissionais, como
            Engenheiros e Geocientistas da Colúmbia Britânica (EGBC) e Instituto de Arquitetura da
            Colúmbia Britânica (AIBC) fornecer outros serviços para seus membros, como:
            </p>
            <p className="mb-3">
            &#9679; Criar meios de articulação entre os membros para se conhecerem, partilharem as suas
            informações e ideias profissionais e discutirem assuntos técnicos de interesse mútuo;
            </p>
            <p className="mb-3">
            &#9679; Coordenar apresentações técnicas relacionadas com a engenharia e arquitetura, e outras
            palestras de interesse geral para os membros e o público em geral;
            </p>
            <p className="mb-3">
            &#9679; Coordenar eventos sociais por ano para criar um ambiente para os membros e suas famílias
            se socializarem e desfrutarem dos seus momentos de lazer juntos;
            </p>
            <p className="mb-3">
            &#9679; Auxiliar os engenheiros e arquitetos que são novos na Columbia Britânica na adaptação ao
            seu novo ambiente, fornecendo-lhes as informações necessárias sobre as leis canadenses e
            provinciais relativas à profissão de engenheiro e arquiteto, apresentando-os à cultura
            canadense no local de trabalho e auxiliando-os na procura de emprego; e
            </p>
            <p className="mb-3">
            &#9679; Prestar assistência à comunidade brasileira e aos estudantes brasileiros que frequentam
            programas de engenharia e arquitetura em universidades da Colúmbia Britânica para encontrar
            seus caminhos para sua futura vida profissional.
            </p>
            <p className="mb-3">
            &#9679; A BEABC é contrária a quaisquer formas de preconceitos ou discriminações, não admitindo
            controvérsias de raça, natureza religiosa, cor, gênero, ou político-partidárias, em suas
            atividades, dependências ou em seu quadro social.
            </p>
        <p className="card-text"><small className="text-muted">Regulamento Sociedade BEABC</small></p>
      </div>
    </div>
  </div>
</div>
            </div>
          <div className="aboutUs__banner">
            <Banner2 className="aboutUs__banner__bgc2">
              <div className="wrap mx-auto">
                <p className="h1 font-weight-bolder">
                Nossos Valores
                </p>
                <br />
                <div className="aboutUs__banner__bgc2__bgc2text">
                <p className="h1 font-weight">
                &#9679; União: Não somos concorrentes, torcemos pelo seu sucesso.
                </p>
                <p className="h1 font-weight">
                &#9679; Conexão: Ninguém está sozinho - Queremos ajudá-lo a manter o otimismo autêntico.
                </p>
                <p className="h1 font-weight">
                &#9679; Valorização: Fazemos a diferença com nosso profissionalismo e alta qualidade.
                </p>
                <p className="h1 font-weight">
                &#9679; Entusiasmo: Paixão por fazer o melhor.
                </p>
                </div>


                {/* <div className="row wrap justify-content-around mt-5">
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">Social
              </p>
              <p className="h3">Social</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              Business
              </p>
              <p className="h3">Business</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              Founders
              </p>
              <p className="h3">Founders</p>
            </div>
            <div className="col-md-3 col-sm-6 aboutUs__banner__item">
              <p className="display-4 font-weight-bolder">
              $ 
              </p>
              <p className="h3">total funds collected</p>
            </div>
          </div> */}
              </div>
            </Banner2>
          </div>

          <div className="wrap mx-auto mt-5 aboutUs__members">
          <p className="h1 font-weight-bolder">Nosso Time</p>
          <p className="inner-wrap">
          Formado por engenheiros e arquitetos brasileiros com interesse em colaborar com orientação sobre os processos de EGBC (Engineers
          & Geocientists British Columbia) e AIBC (Architectural Institute of British Columbia).
          </p>
          <div className="container m-5 inner-wrap">
           <div className="row justify-content-around">
           <div className="col-md-3 col-sm-6">
                    <Image filename={"Alexandra.jpeg"} alt="Alexandra" />
                  </div>
                 <div className="col-md-3 col-sm-6">
                    <Image filename={"Brenan.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Daniel.jpeg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Elen.jpeg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Erin.jpg"} alt="Alexandra" />
                  </div>
                 <div className="col-md-3 col-sm-6">
                    <Image filename={"Fabiano.jpeg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Helena.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Julliana.jpg"} alt="Alexandra" />
                  </div>
                 <div className="col-md-3 col-sm-6">
                    <Image filename={"Kalin.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Katiussa.jpeg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Lillen.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Luis.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Rafael.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Thalita.jpg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Thiago.jpeg"} alt="Alexandra" />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <Image filename={"Yegor.jpg"} alt="Alexandra" />
                  </div>




                  {/* <div className="col-md-3 col-sm-6"> */}
                    {/* <Img Tag="section" className={className} fluid={imageData}>
                    {children}
                    </Img> */}
                    {/* <Image filename={"08.jpg"} alt="alexandra" />
                    <div className="aboutUs__label"> */}
                     {/* <span className="aboutUs__label__name">Name</span> */}
                     {/* <span className="aboutUs__label__name">Alexandra Rhod</span> |{" "} */}
                     {/* <span className="aboutUs__label__name">{name}</span> |{" "} */}
                     {/* {position} */}
                     {/* Engenheira Civil
                   </div>
                  </div> */}
            </div>
          </div>
          </div>

       {/* <div className="wrap mx-auto mt-5 aboutUs__members">
         <p className="h1 font-weight-bolder">Our Team</p>
         <p className="inner-wrap">
           We bring a wealth of experience from social enterprise, start-ups,
           organizations, and non-profit sectors. Meet the team who set our
           global direction, goals and strategies.
         </p>
         <div className="container mt-5 inner-wrap">
           <div className="row justify-content-around">
             {/* {teamMembers.map(({ node }, index) => {
               const { image, name, position } = node */}
               {/* return (
                 <div className="col-md-3 col-sm-6">
                 <div className="col-md-3 col-sm-6" key={index}>
                   <Img
                     // fluid={image.fluid}
                     loading="auto"
                     alt="team1"
                     className="aboutUs__image"
                   />

                   <div className="aboutUs__label">
                     <span className="aboutUs__label__name">Name</span>
                     <span className="aboutUs__label__name">{name}</span> |{" "}
                     {position}
                   </div>
                 </div>
               ) */}
             {/* })} */}


             {/* {teamMembers.map(({ node }, index) => {
               const { image, name, position } = node
               return (
                 <div className="col-md-3 col-sm-6" key={index}>
                   <Img
                     fluid={image.fluid}
                     loading="auto"
                     alt="team1"
                     className="aboutUs__image"
                   />

                   <div className="aboutUs__label">
                     <span className="aboutUs__label__name">{name}</span> |{" "}
                     {position}
                   </div>
                 </div>
               )
             })} */}
           {/* </div>
         </div>
       </div> */} 


        </div>
       )
     }}
   />
)



export default AboutUs
