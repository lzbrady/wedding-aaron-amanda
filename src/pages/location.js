import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import LocationCards from "../components/location/locationCards"
import ActivityCards from "../components/location/activityCards"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Location = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          location: file(relativePath: { eq: "bg/accent1-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          accomodations: file(
            relativePath: { eq: "bg/location-accomodations-bg.jpg" }
          ) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}
      render={data => {
        const imageData = data.location.childImageSharp.fluid
        const imageTwoData = data.accomodations.childImageSharp.fluid

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
              <SEO title="Location" />
              <div className={commonStyles.fadedContainer}>
                <h1 className={commonStyles.pageTitle}>Location</h1>
                <p style={{ marginBottom: "0px" }}>
                  The ceremony and reception are located at
                </p>
                <a
                  href="https://goo.gl/maps/ub71XvWkyK65v1Zb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonStyles.link}
                >
                  Ashton Hill Farm Galena 500 Wild Indigo Lane, Galena IL 61036
                </a>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d12259.764163861855!2d-86.2666363!3d39.8083143!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x87e2cf4b926ce6af%3A0x7fc4bbbc6c66253c!2sAshton%20Hill%20Farm%20Galena%2C%20500%20Wild%20Indigo%20Lane%2C%20Galena%2C%20IL%2061036!3m2!1d42.4101004!2d-90.40775909999999!5e0!3m2!1sen!2sus!4v1568852727264!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0, maxWidth: "100%", marginTop: "40px" }}
                  allowFullScreen=""
                ></iframe>
                <div className={commonStyles.fullWidth}>
                  <BackgroundImage
                    Tag="section"
                    fluid={imageTwoData}
                    backgroundColor={`#040e18`}
                    style={{
                      height: "50vh",
                      width: "100%",
                      opacity: "0.6",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundAttachment: "fixed",
                    }}
                  >
                    <p className={commonStyles.textOverlay}>
                      Guest Accomodations
                    </p>
                  </BackgroundImage>
                </div>
                <LocationCards />
                <ActivityCards />
              </div>
            </Layout>
          </BackgroundImage>
        )
      }}
    />
  </React.Fragment>
)

export default Location
