import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/faq/question"

import commonStyles from "../styles/common.module.css"

const Faq = () => {
  return (
    <React.Fragment>
      <StaticQuery
        query={graphql`
          query {
            desktop: file(relativePath: { eq: "bg/faq-bg.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }

            allFaqJson {
              nodes {
                question
                answer
              }
            }
          }
        `}
        render={data => {
          const imageData = data.desktop.childImageSharp.fluid
          const questions = data.allFaqJson.nodes

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
                <SEO title="FAQ" />
                <div className={commonStyles.fadedContainer}>
                  <h1 className={commonStyles.pageTitle}>FAQ</h1>
                  {questions.map((question, index) => (
                    <Question
                      key={question.question}
                      index={index + 1}
                      question={question.question}
                      answer={question.answer}
                    />
                  ))}
                </div>
              </Layout>
            </BackgroundImage>
          )
        }}
      />
    </React.Fragment>
  )
}

const ExternalButton = styled.button`
  padding: 10px 20px;
  background: #96bdc4;
  border-radius: 5px;
  transition: all 100ms linear;
  border: none;

  a {
    color: white;
    text-decoration: none;
  }

  :hover {
    box-shadow: 0 2px 4px #787878;
    cursor: pointer;
  }
`

export default Faq
