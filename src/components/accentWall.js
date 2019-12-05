import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import commonStyles from "../styles/common.module.css"

const AccentWall = props => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          accent1: file(relativePath: { eq: "bg/accent1-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          accent2: file(relativePath: { eq: "bg/accent2-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          accent3: file(relativePath: { eq: "bg/accent2-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = (function() {
          switch (props.imageNum) {
            case 1:
              return data.accent1.childImageSharp.fluid
            case 2:
              return data.accent2.childImageSharp.fluid
            default:
              return data.accent3.childImageSharp.fluid
          }
        })()

        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{
              height: "50vh",
              width: "100%",
              opacity: "0.6",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment:
                window && window.innerWidth < 600 ? "scroll" : "fixed",
            }}
          >
            <p className={commonStyles.textOverlay}>{props.text}</p>
          </BackgroundImage>
        )
      }}
    />
  </React.Fragment>
)

AccentWall.propTypes = {
  imageNum: PropTypes.number,
  text: PropTypes.string,
}

AccentWall.defaultProps = {
  imageNum: 1,
}

export default AccentWall
