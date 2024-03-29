import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import Menu from "./menu"

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <h1>
          <MenuTitle to="/">Aaron + Amanda</MenuTitle>
        </h1>
        <Menu />
      </StyledHeader>
    )
  }
}

const StyledHeader = styled.header`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  height: 64px;
  overflow: hidden;
  align-items: center;
  background-color: rgba(110, 139, 133, 0.93);

  h1 {
    margin: 0px;
    text-align: left;
  }
`

const menuLinkStyle = css`
  color: #0d120b;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
`

const MenuTitle = styled(props => <Link {...props} />)`
  ${menuLinkStyle}
  font-style: italic;
  text-align: center;
  font-size: 2.5rem;
  color: #ffffff;
  font-family: "Cookie", cursive;
`

export default Header
