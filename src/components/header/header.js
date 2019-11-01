import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import Menu from "./menu"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bgColor: "rgba(255, 255, 255, 0)",
      shadowColor: "rgba(0, 0, 0, 0)",
    }

    this.scrollListener = this.scrollListener.bind(this)
  }

  scrollListener() {
    if (window.scrollY > 20) {
      this.setState({
        bgColor: "rgba(255, 255, 255, 1)",
        shadowColor: "rgba(0, 0, 0, 0.1)",
      })
    } else {
      this.setState({
        bgColor: "rgba(255, 255, 255, 0)",
        shadowColor: "rgba(0, 0, 0, 0)",
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener)
  }

  render() {
    return (
      <StyledHeader
        style={{
          backgroundColor: "rgba(110, 139, 133, 0.93)",
          boxShadow: `${this.state.shadowColor} 0px 4px 8px 0px`,
        }}
      >
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
  /* height: 15vh; */
  align-items: center;

  h1 {
    margin: 0px;
    text-align: left;
  }

  div {
    text-align: right;
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
