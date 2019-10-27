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
          {this.state.open && <MenuClose>X</MenuClose>}
        </MenuButton>
        <MenuItems open={this.state.open ? 1 : 0}>
          <MenuLink dark to="/location/">
            Location
          </MenuLink>
          <MenuLink dark to="/registry/">
            Registry
          </MenuLink>
          <MenuLink dark to="/gallery/">
            Gallery
          </MenuLink>
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

  @media (min-width: 768px) {
    display: none;
  }
`

const MenuOpen = styled(props => <MenuIcon {...props} />)`
  margin-bottom: 0px;
  background-color: white;
  border-radius: 100%;
  transition: all 200ms linear;

  :hover {
    cursor: pointer;
    background-color: #efd3d7;
  }
`

const MenuClose = styled.p`
  color: black;
  position: absolute;
  top: 3px;
  right: 6px;
  background: white;
  border: none;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 100%;
  width: 43px;
  height: 43px;
  text-align: center;
  line-height: 41px;
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 100;
  transition: all 200ms linear;

  :hover {
    cursor: pointer;
    background: #efd3d7;
  }
`

const MenuItems = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    background-color: #efd3d7;
    top: 0;
    padding-top: calc(7.5vh + 35px);
    height: 100vh;
    width: 30%;
    min-width: 200px;
    border-right: none;
    z-index: 100;
    transition: all 200ms linear;
    right: ${props => (props.open ? "0%" : "-100%")};
  }
`

const menuLinkStyle = css`
  color: white;
  background-color: #6f8c86;
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
  @media (max-width: 768px) {
    color: black;
    background-color: white;
    border: 1px solid #efd3d7;
  }
`

const MenuLink = styled(props => <Link {...props} />)`
  ${menuLinkStyle}

  @media (max-width: 768px) {
    display: block !important;
  }
`

export default Menu
