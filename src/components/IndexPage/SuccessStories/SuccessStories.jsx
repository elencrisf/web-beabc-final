import React from "react"
import "./successStories.scss"
// import Youtube from "./Youtube"
import { Link } from "gatsby"
import { StyledButton } from "../../Elements/Elements"
import { StaticImage } from "gatsby-plugin-image"
// import ImgLogo from "../../../images/logo_beabcFinal.png"

const SuccessStories = () => {

  return (
    <div>
    {/* <Youtube /> */}
        <div className="home__successStories__description p-5">
          {/* <div className="card mb-3" style={{maxWidth:"540px;"}}> */}
          <div className="card wrap mb-3">
          <div className="row no-gutters">
            <div className="col-md-8">
            <div className="card-body wrap mx-auto my-5 ">
              <p className="h1 card-title fw-bold inner-wrap mb-3">Sobre BEABC</p>
            <p className="card-text inner-wrap mb-3">         
            "A iniciativa de formar uma organização de engenheiros e arquitetos Brasileiros criando
            a BEABC partiu no momento em que eu participava de um programa subsidiado pelo 
            governo da Columbia Britânica que oferece suporte aos profissionais imigrantes. 
            </p>
            <p className="card-text inner-wrap mb-3"> 
            Após ingressar em um grupo de WhatsApp onde havia na época 110 profissionais brasileiros 
            de engenharia e arquitetura, surgiu a idea de fortalecer o networking, oferecerendo 
            ajuda e informação sobre a nossa indústria.
            </p>
            <p className="card-text inner-wrap mb-3">
            Reunimos os que gostaram da sugestão e formamos um time de trabalho com ideias similares 
            e com um coração disposto a ajudar.
            </p>
            <p className="card-text inner-wrap mb-3">
            Nos últimos 6 meses, trabalhamos juntos para desenvolver uma boa fundação e criarmos a BEABC 
            com o propósito de representar, fortalecer e integrar os profissionais brasileiros de engenharia 
            e arquitetura na Columbia Britânica, CA."
            </p>
            <p className="card-text inner wrap"><small className="text-muted">
            Lillen Vater, BEng Environmental/ Co founder/ Ex-President, Agosto 2021
            </small></p>

          <div className="my-3 inner wrap">
            <Link to="aboutUs">
              {/* <StyledButton outline={true}> */}
              <StyledButton>
                Saiba mais sobre nós
              </StyledButton>
            </Link>
          </div>
          </div> 
          </div>
            <div className="col-md-4">
              {/* <img src={ImgLogo} className="card-img" alt="logo_beabc"></img> */}
              <StaticImage src="../../../images/logo_beabcFinal.png" className="card-img" alt="logo_beabc" />
            </div>
            </div>       
        </div>
        </div>
      </div>
  )
}

export default SuccessStories