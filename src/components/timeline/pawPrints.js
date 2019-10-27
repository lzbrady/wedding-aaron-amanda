import React from "react"
import styled from "styled-components"

import Paw from "../../svgs/paw-print.svg"

const PawContainer = styled.div`
  margin-top: 30px;
  :nth-child(4n-1) {
    transform: rotateY(180deg);
  }
`

const PawPrints = () => (
  <PawContainer>
    <StyledPaw />
    <StyledPaw />
    <StyledPaw />
    <StyledPaw />
    <StyledPaw />
    <StyledPaw />
    <StyledPaw />
  </PawContainer>
)

const StyledPaw = styled(props => <Paw {...props} />)`
  display: block;

  :nth-child(1) {
    transform: rotate(110deg);
    margin-left: 5%;
  }
  :nth-child(2) {
    transform: rotate(120deg);
    margin-left: 28%;
    // margin-top: -38px;
  }
  :nth-child(3) {
    transform: rotate(130deg);
    margin-left: 46%;
    // margin-top: -5px;
  }
  :nth-child(4) {
    transform: rotate(148deg);
    margin-left: 50%;
    margin-top: 25px;
  }
  :nth-child(5) {
    transform: rotate(165deg);
    margin-left: 63%;
    margin-top: 19px;
  }
  :nth-child(6) {
    transform: rotate(172deg);
    margin-left: 53%;
    margin-top: 30px;
  }
  :nth-child(7) {
    transform: rotate(180deg);
    margin-left: 65%;
    margin-top: 30px;
  }
  :nth-child(8) {
    transform: rotate(110deg);
    margin-left: 5%;
  }
`

export default PawPrints
