import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const TimeEvent = ({ title, desc, date }) => (
  <EventContainer>
    <EventDate>{date}</EventDate>
    <EventTitle>{title}</EventTitle>
    {date && <EventDesc>{desc}</EventDesc>}
  </EventContainer>
)

const EventContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20vh;
  grid-column: 1 / 3;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;

  :nth-child(4n) {
    grid-column: 2 / -1;
  }
`
const EventTitle = styled.h1`
  font-size: 1.75rem;
`
const EventDesc = styled.p``
const EventDate = styled.p``

TimeEvent.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  date: PropTypes.string.isRequired,
}

export default TimeEvent
