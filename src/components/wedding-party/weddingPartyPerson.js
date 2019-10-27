import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import commonStyles from "../../styles/common.module.css"

const Person = styled.div`
  width: 100%;
  vertical-align: top;
  text-align: center;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
`

const PersonInfo = styled.div`
  vertical-align: top;
  margin-top: 17px;
  width: 100%;
  text-align: start;
  display: flex;
  justify-content: space-between;

  p {
    display: inline-block;
    margin: 0px;
  }
`

const PersonName = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #161616;
`

const PersonTitle = styled.p`
  color: grey;
  padding-left: 5px;
`

const WeddingPartyPerson = ({ name, title, desc, imgSrc }) => (
  <Person>
    <PersonInfo>
      <PersonName className={commonStyles.accentText}>{name}</PersonName>
      <PersonTitle>{title}</PersonTitle>
    </PersonInfo>
  </Person>
)

WeddingPartyPerson.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default WeddingPartyPerson
