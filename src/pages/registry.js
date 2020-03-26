import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled, { css } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Registry = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "bg/accent3-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{
              height: "70vh",
              width: "100%",
              opacity: "0.6",
            }}
          >
            <Layout>
              <SEO title="Registry" />
              <div className={commonStyles.fadedContainer}>
                <h1 className={commonStyles.pageTitle}>Our Registry</h1>
                <p>
                  We know for some of you this is a bit of a hike, and want to
                  assure you that your presence at our wedding is the best gift
                  you could give us.
                </p>
                <p>
                  For those of you who feel so inclined, we have registered with{" "}
                  <a
                    href="https://www.myregistry.com/giftlist/aaron-and-amanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonStyles.link}
                  >
                    My Registry
                  </a>
                </p>
                <ExternalButton>
                  <a
                    href="https://www.myregistry.com/giftlist/aaron-and-amanda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check out our registry
                  </a>
                </ExternalButton>
              </div>
            </Layout>
          </BackgroundImage>
        )
      }}
    />
  </React.Fragment>
)

const ExternalButton = styled.button`
  padding: 10px 20px;
  background: #96bdc4;
  border-radius: 5px;
  transition: all 100ms linear;
  border: none;
  box-shadow: 0px 2px 4px rgba(81, 124, 132, 0.8);

  a {
    color: white;
    text-decoration: none;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px rgba(151, 190, 197, 0.4);
    background-color: #7eb6bf;
  }
`

export default Registry
