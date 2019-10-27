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
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
      <ActivityCard />
    </OptionsWrapper>
    <a
      href="https://www.visitgalena.org/"
      target="_blank"
      rel="noopener noreferrer"
      className={commonStyles.link}
      style={{ fontSize: "20px" }}
    >
      See All
    </a>
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
export default ActivityCards
