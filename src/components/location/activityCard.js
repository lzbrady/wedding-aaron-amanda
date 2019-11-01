import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Outdoors from "../../svgs/outdoors.svg"
import Bags from "../../svgs/bags.svg"
import Info from "../../svgs/info.svg"
import Dining from "../../svgs/dining.svg"

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
      return <Outdoors />
    case "bags":
      return <Bags />
    case "dining":
      return <Dining />
    default:
      return <Info />
  }
}

const CardContainer = styled(props => <a {...props} />)`
  border: 1px solid #eee;
  border-radius: 100%;
  width: 175px;
  height: 175px;
  transition: all 300ms ease-in-out;
  margin: 25px;
  position: relative;
  text-decoration: none;

  :hover {
    box-shadow: 0 0 15px rgba(151, 190, 197, 0.58);
  }
`

const Card = styled.div`
  text-align: center;
`

const CardChildren = styled.div`
  color: #808080;
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
