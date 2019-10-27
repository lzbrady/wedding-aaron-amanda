import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Clock from "../../svgs/clock.svg"
import House from "../../svgs/house.svg"
import Info from "../../svgs/info.svg"
import Location from "../../svgs/location.svg"

const ActivityCard = ({ children, site, icon }) => (
  <CardContainer>
    <a href="https://www.visitgalena.org/things-to-do/outdoor-recreation/">
      <Card>{getCardIcon({ icon })}</Card>
    </a>
  </CardContainer>
)

function getCardIcon({ icon }) {
  switch (icon) {
    case "clock":
      return <Clock style={{ marginBottom: "25px" }} />
    case "house":
      return <House />
    case "info":
      return <Info />
    case "location":
      return <Location />
    default:
      return <Info />
  }
}

const CardContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 100%;
  background: silver;
  transition: all 300ms ease-in-out;
  width: 150px;
  height: 150px;
  margin: 25px;
  position: relative;

  :hover {
    box-shadow: 0 0 15px #dedede;
  }
`

const CardChildren = styled.div`
  color: #808080;
`

const Card = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  text-align: center;
`

ActivityCard.propTypes = {
  children: PropTypes.node.isRequired,
  site: PropTypes.string,
  icon: PropTypes.string,
}

ActivityCard.defaultProps = {
  icon: "",
}

export default ActivityCard
