import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import MenuIcon from "../../svgs/menuIcon.svg"
class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <MenuContainer>
        <MenuButton onClick={() => this.setState({ open: !this.state.open })}>
          {!this.state.open && <MenuOpen />}
          {this.state.open && <MenuClose>Close</MenuClose>}
        </MenuButton>
        <MenuItems open={this.state.open ? 1 : 0}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/location/">Location</MenuLink>
          <MenuLink to="/registry/">Registry</MenuLink>
          <MenuLink to="/faq/">FAQ</MenuLink>
          <MenuLink to="/gallery/">Gallery</MenuLink>
          <MenuLink to="/video/">Video</MenuLink>
          <MenuLink to="/covid/">COVID-19</MenuLink>
        </MenuItems>
      </MenuContainer>
    )
  }
}

const MenuContainer = styled.div``

const MenuButton = styled.button`
  position: fixed;
  right: 2px;
  top: 8px;
  background-color: transparent;
  border: none;
  color: #b5c2c4;
  font-size: 1.25rem;
  border-radius: 100%;
  font-variant-caps: petite-caps;
  z-index: 200;

  @media (min-width: 980px) {
    display: none;
  }
`

const MenuOpen = styled(props => <MenuIcon {...props} />)`
  margin-bottom: 0px;
  border-radius: 100%;
  transition: all 200ms linear;

  :hover {
    cursor: pointer;
    background-color: #96bdc4;
  }
`

const MenuClose = styled.p`
  color: white;
  position: absolute;
  top: 3px;
  right: 16px;
  border: none;
  border-radius: 100%;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  transition: all 200ms linear;

  :hover {
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.6;
  }
`

const MenuItems = styled.div`
  @media (max-width: 980px) {
    position: fixed;
    background-color: rgb(110, 139, 133);
    padding: calc(7.5vh + 35px) 0 2px;
    height: 100vh;
    width: 100%;
    border-right: none;
    z-index: 100;
    transition: all 200ms linear;
    top: ${props => (props.open ? "0%" : "-100%")};
    left: 0;
    overflow-y: scroll;
  }
`

const menuLinkStyle = css`
  color: white;
  font-size: 1rem;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  transition: all 100ms linear;

  :hover {
    background: #96bdc4;
    cursor: pointer;
    border-radius: 9px;
    border: none;
  }

  @media (max-width: 980px) {
    color: black;
    background-color: white;
    border: 1px solid rgb(110, 139, 133);

    :hover {
      border-radius: 0px;
      border: 1px solid rgb(110, 139, 133);
    }
  }
`

const MenuLink = styled(props => <Link {...props} />)`
  ${menuLinkStyle}

  @media (max-width: 980px) {
    display: block !important;
  }
`

export default Menu
