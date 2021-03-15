import React from "react"
import styled from "styled-components"

import ActivityCard from "./activityCard"

import commonStyles from "../../styles/common.module.css"

const ActivityCards = () => (
  <GuestAccomodationsWrapper>
    <OptionsTitle className={commonStyles.pageInnerTitle}>
      Activities
    </OptionsTitle>
    <OptionsWrapper>
      <ActivityCard
        title="Outdoors"
        link="https://www.visitgalena.org/Things-To-Do/Outdoor-Activity"
        icon="outdoors"
      />
      <ActivityCard
        title="Shopping"
        link="https://www.visitgalena.org/things-to-do/shopping"
        icon="bags"
      />
      <ActivityCard
        title="Dining"
        link="https://www.visitgalena.org/Food-and-Drink/Food-and-Drink-Venues"
        icon="dining"
      />
      <ActivityCard
        title="Drinks"
        link="https://www.visitgalena.org/Food-and-Drink/Wine-Beer-Spirits"
        icon="drinks"
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

const SeeAllButton = styled.a`
  display: block;
  background: #96bdc4;
  padding: 7px;
  width: 175px;
  text-decoration: none;
  border-radius: 13px;
  margin: 20px auto 0px;
  transition: all 100ms linear;
  border: none;
  text-decoration: none;
  font-size: 20px;
  color: white;
  box-shadow: 0px 2px 4px rgba(81, 124, 132, 0.8);

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px rgba(151, 190, 197, 0.4);
    background-color: #7eb6bf;
  }
`

export default ActivityCards
