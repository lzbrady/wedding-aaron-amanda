import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Outdoors from "../../svgs/outdoors.svg"
import Bags from "../../svgs/bags.svg"
import Info from "../../svgs/info.svg"
import Dining from "../../svgs/dining.svg"
import Drinks from "../../svgs/drinks.svg"

import commonStyles from "../../styles/common.module.css"

const ActivityCard = ({ title, link, icon }) => (
  <CardContainer href={link} target="_blank" rel="noopener noreferrer">
    <CardTitle className={commonStyles.accentText}>{title}</CardTitle>
    <Card>{getCardIcon({ icon })}</Card>
  </CardContainer>
)

function getCardIcon({ icon }) {
  switch (icon) {
    case "outdoors":
      return <Outdoors width={75} height={75} />
    case "bags":
      return <Bags width={90} height={90} />
    case "dining":
      return <Dining width={95} height={95} />
    case "drinks":
      return <Drinks width={80} height={80} />
    default:
      return <Info />
  }
}

const CardContainer = styled(props => <a {...props} />)`
  border: 1px solid #eee;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  transition: all 100ms ease-in-out;
  margin: 10px;
  position: relative;
  text-decoration: none;
  box-shadow: 0px 2px 4px rgba(151, 190, 197, 0.4);

  :hover {
    box-shadow: 0px 0px 2px rgba(151, 190, 197, 0.4);
    background-color: rgba(151, 190, 197, 0.1);
  }
`

const Card = styled.div`
  text-align: center;
`

const CardTitle = styled.p`
  color: #6e8b85;
  text-decoration: none;
  margin: 15px auto 0px;
  font-size: 24px;
  font-weight: lighter;
`

ActivityCard.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
}

ActivityCard.defaultProps = {
  icon: "",
}

export default ActivityCard
