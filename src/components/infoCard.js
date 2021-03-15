import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Clock from "../svgs/clock.svg"
import House from "../svgs/house.svg"
import Info from "../svgs/info.svg"
import Location from "../svgs/location.svg"

import commonStyles from "../styles/common.module.css"

const InfoCard = ({ children, title, site, phone, icon }) => (
  <CardContainer>
    <Card>
      {getCardIcon({ icon })}
      <p className={commonStyles.accentText} style={{ fontSize: "20px" }}>
        {title}
      </p>
      <CardChildren>{children}</CardChildren>
    </Card>
    <CardFooter>
      {phone && (
        <CardFooterContent href={"tel:" + phone}>Call</CardFooterContent>
      )}
      {site && (
        <CardFooterContent
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </CardFooterContent>
      )}
    </CardFooter>
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
  transition: all 300ms ease-in-out;
  width: 31%;
  margin: 20px 1%;
  min-width: 275px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-content: space-between;
`

const Card = styled.div`
  padding: 50px 20px 20px;
  text-align: center;
  width: 100%;
`

const CardFooter = styled.div`
  width: 100%;
`

const CardFooterContent = styled.a`
  display: block;
  background: #96bdc4;
  padding: 7px;
  text-decoration: none;
  border-radius: 5px;
  margin: 10px;
  color: white;
  transition: all 100ms linear;
  box-shadow: 0px 2px 4px rgba(81, 124, 132, 0.8);

  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px rgba(151, 190, 197, 0.4);
    background-color: #7eb6bf;
  }
`

const CardChildren = styled.div`
  color: #808080;
`

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  site: PropTypes.string,
  phone: PropTypes.string,
  icon: PropTypes.string,
}

InfoCard.defaultProps = {
  icon: "",
}

export default InfoCard
