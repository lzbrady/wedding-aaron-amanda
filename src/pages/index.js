import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled, { css } from "styled-components"

import AccentWall from "../components/accentWall"
import Countdown from "../components/countdown"
import InfoCard from "../components/infoCard"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WeddingParty from "../components/wedding-party/weddingParty"

import commonStyles from "../styles/common.module.css"

const IndexPage = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "bg/home-bg.jpg" }) {
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
            }}
          >
            <Layout constrainWidth={false}>
              <SEO title="Home" />
              <ContentContainer>
                <BlockContainer>
                  <InfoBlock>
                    <Countdown />
                  </InfoBlock>
                </BlockContainer>
                <AccentWall imageNum={2} text="Wedding Information" />
                <BlockContainer>
                  <InfoCard title="When" icon="clock">
                    <p>Sept. 6th, 2020</p>
                    <p>Ceremony is at 4:30pm</p>
                  </InfoCard>

                  <InfoCard title="Where" icon="location">
                    <p>Ceremony and Reception will be located at</p>
                    <a
                      href="https://goo.gl/maps/ub71XvWkyK65v1Zb9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={commonStyles.link}
                    >
                      Ashton Hill Farm Galena 500 Wild Indigo Lane, Galena IL
                      61036
                    </a>
                  </InfoCard>
                </BlockContainer>
                <WeddingParty />
              </ContentContainer>
            </Layout>
          </BackgroundImage>
        )
      }}
    />
  </React.Fragment>
)

const InfoBlock = styled.div`
  text-align: center;
`

const BlockContainer = styled.div`
  text-align: center;
  margin: 0px auto 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 960px;
`

const Title = styled.h1`
  font-weight: normal;
  font-size: 3rem;
  color: #040e18;
  font-family: "Cookie", cursive;

  ${props =>
    props.light &&
    css`
      color: white;
    `}
`

const SubTitle = styled.h3`
  font-weight: normal;
  margin: 5px auto;
  text-align: center;

  ${props =>
    props.light &&
    css`
      color: #d3d3d3;
    `}
`

const ContentContainer = styled.div`
  margin-top: 55vh;
  width: 100%;
`

export default IndexPage
