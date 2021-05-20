import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Covid = () => {
  return (
    <Layout>
      <SEO title="COVID Policy" />
      <div>
        <h1 className={commonStyles.pageTitle}>
          COVID-19 Policies and Procedures
        </h1>

        <p>
          Hello! We are finally at a point where we feel it is safe to celebrate
          with everyone as long as we take necessary precautions. Below are
          guidelines and recommendations for our wedding:
        </p>

        <Header>COVID Guidelines:</Header>
        <List>
          <ListItem>
            You must be wearing a proper mask correctly at all times during the
            wedding ceremony and reception unless you are actively eating or
            drinking.
          </ListItem>
          <ListItem>
            Please utilize the bathroom and hand sanitation stations to increase
            cleanliness.{" "}
          </ListItem>
          <ListItem>
            If you are feeling ill, have tested positive for COVID in the past
            14 days, are awaiting COVID test results, or have come in contact
            with some who has tested positive, please do not attend. If you are
            unsure if you are ill, we recommend the Abbott BinaxNOW COVID-19
            Antigen Self Test that can be found at any drugstore. This test
            takes 15 minutes to get results and is reasonably priced.
          </ListItem>
          <ListItem>
            As you travel to Galena, please follow CDC recommendations about
            masking, social distancing, and travelling.
          </ListItem>
          <ListItem>
            If 3-7 days after the wedding you develop COVID symptoms, please get
            tested and reach out to the bride and groom if you test positive.
            Your privacy will be respected but contact tracing is extremely
            important.{" "}
          </ListItem>
          <ListItem>
            Because you will be seeing people not in your circle, please
            continue to social distance when greeting others not in your
            household through the duration of the wedding.{" "}
          </ListItem>
        </List>

        <Header>COVID Recommendations:</Header>
        <List>
          <ListItem>
            We HIGHLY suggest you are fully vaccinated at least 2 weeks prior to
            our wedding not only to protect yourself, but also others. Due to
            the nature of a wedding, there will be high risk individuals and
            people who are unable to get vaccinated in attendance. If you need
            help navigating vaccine administration, please contact the bride or
            groom. We would be happy to help you!
          </ListItem>
          <ListItem>
            If you are able, quarantining prior to the event is recommended.
            This will be difficult due to many guests traveling so whatever you
            can do is appreciated!
          </ListItem>
          <ListItem>
            If you ever feel uncomfortable during our event, there is a large
            outdoor area that is easier to social distance. Please utilize that
            area as needed.
          </ListItem>
        </List>

        <p>
          For any additional information, please review our FAQs. If you are
          unable to follow any of our guidelines during our wedding, you are
          kindly asked to RSVP no. If during the wedding any guidelines are
          violated, you will be asked to leave. For any additional COVID
          information, please visit the CDC website and/or your local health
          department website. We want to ensure everyone is able to safely
          celebrate with us and can’t wait to see everyone!!
        </p>
      </div>
    </Layout>
  )
}

const Header = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 48px;
`

const List = styled.ul`
  margin-bottom: 48px;
`

const ListItem = styled.li``

export default Covid
