import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import GalleryFull from "../components/gallery/galleryFull"
import Layout from "../components/layout"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Gallery = () => (
  <React.Fragment>
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "bg/gallery-bg.jpg" }) {
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
              <SEO title="Page two" />
              <div className={commonStyles.fadedContainer}>
                <h1 className={commonStyles.pageTitle}>Our Gallery</h1>
                <GalleryFull />
              </div>
            </Layout>
          </BackgroundImage>
        )
      }}
    />
  </React.Fragment>
)

export default Gallery
