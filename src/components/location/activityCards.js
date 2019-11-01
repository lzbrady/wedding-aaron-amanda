import React from "react"
import styled from "styled-components"

import ActivityCard from "./activityCard"
import InfoCard from "../infoCard"

import commonStyles from "../../styles/common.module.css"

const ActivityCards = () => (
  <GuestAccomodationsWrapper>
    <OptionsTitle className={commonStyles.pageInnerTitle}>
      Activities
    </OptionsTitle>
    <OptionsWrapper>
      <ActivityCard
        title="Outdoors"
        link="https://www.visitgalena.org/things-to-do/outdoor-recreation/"
        icon="outdoors"
      />
      <ActivityCard
        title="Shopping"
        link="https://www.visitgalena.org/things-to-do/shopping/"
        icon="bags"
      />
      <ActivityCard
        title="Dining"
        link="https://www.visitgalena.org/things-to-do/cuisine/"
        icon="dining"
      />
    </OptionsWrapper>
    <SeeAllButton
      href="https://www.visitgalena.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      See All
    </SeeAllButton>
  </GuestAccomodationsWrapper>
)

const GuestAccomodationsWrapper = styled.div`
  margin-top: 120px;
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const OptionsTitle = styled.h3`
  margin-top: 40px;
`

const GuestAccomodationContainer = styled.div`
  border: 1px solid black;
`
const AddressLabel = styled.p`
  margin-bottom: 0px;
`

const SeeAllButton = styled.a`
  display: block;
  background: #96bdc4;
  padding: 7px;
  width: 175px;
  text-decoration: none;
  border-radius: 13px;
  margin: 5px auto;
  transition: all 100ms linear;
  border: none;
  text-decoration: none;
  font-size: 20px;
  color: white;

  :hover {
    cursor: pointer;
    box-shadow: 0 2px 4px #787878;
  }
`

export default ActivityCards
