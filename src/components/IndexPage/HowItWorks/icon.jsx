import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


const Icon = (props) => {

    const { image01, image02, image04, image03 } = useStaticQuery(graphql`{
  image01: file(relativePath: {eq: "7.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 150
        height: 150
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  image02: file(relativePath: {eq: "9.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 150
        height: 150
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  image04: file(relativePath: {eq: "9a.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 150
        height: 150
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  image03: file(relativePath: {eq: "8.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 150
        height: 150
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
}
`)

    return <>
    {(() => {
        switch (props.name) {
            case 'image01':
                return <GatsbyImage image={image01.childImageSharp.gatsbyImageData} alt="Image01" />;
            case 'image02':
                return <GatsbyImage image={image02.childImageSharp.gatsbyImageData} alt="Image02" />;
            case 'image04':
                return <GatsbyImage image={image04.childImageSharp.gatsbyImageData} alt="Image04" />;    
            case 'image03':
                return <GatsbyImage image={image03.childImageSharp.gatsbyImageData} alt="Image03" />;    
            default:
                return null;
        }
    })()}
    
    </>;
};

export default Icon;