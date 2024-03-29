import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import Header from "./header/header"
import AnnouncementBanner from "./AnnouncementBanner"
import "./layout.css"

const Layout = ({ children, constrainWidth }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const maxWidth = constrainWidth ? 960 : "initial"
  const sidePadding = constrainWidth ? "1.0875rem" : "0rem"

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Link to="/covid/">
        <AnnouncementBanner
          isLink
          message="Please view our COVID policies and procedures >"
        />
      </Link>

      <div
        style={{
          margin: `0 auto`,
          padding: `0px ${sidePadding} 0rem`,
          paddingTop: "20vh",
          maxWidth: maxWidth,
        }}
      >
        <main>{children}</main>
        <StyledFooter>
          <FooterItem>Thank you for joining us</FooterItem>

          <MenuItems>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/location/">Location</MenuLink>
            <MenuLink to="/registry/">Registry</MenuLink>
            <MenuLink to="/faq/">FAQ</MenuLink>
            <MenuLink to="/gallery/">Gallery</MenuLink>
            <MenuLink to="/video/">Video</MenuLink>
            <MenuLink to="/covid/">COVID-19</MenuLink>
          </MenuItems>

          <FooterItem style={{ fontSize: "12px" }}>
            © {new Date().getFullYear()}, Created with &#9829; by{" "}
            <FooterLink href="https://pgmediasolutions.com">
              Pretty Good Media
            </FooterLink>
          </FooterItem>
        </StyledFooter>
      </div>
    </>
  )
}

const StyledFooter = styled.footer`
  background-color: rgb(110, 139, 133);
  color: #ffffff;
  text-align: center;
  padding: 10px;
  position: absolute;
  left: 0;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  margin-top: 100px;
`

const FooterItem = styled.p`
  :nth-child(1) {
    font-size: 2rem;
    font-style: italic;
    margin-bottom: 20px;
    font-family: "Cookie", cursive;
  }
`

const FooterLink = styled.a`
  color: #ffffff;

  :hover {
    color: #cccccc;
  }
`

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0px 48px 0px;
`

const MenuLink = styled(props => <Link {...props} />)`
  color: white;
  font-size: 0.75rem;
  font-weight: normal;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  transition: all 100ms linear;

  :hover {
    color: #cccccc;
    border-bottom: 1px solid #cccccc;
    cursor: pointer;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  constrainWidth: PropTypes.bool,
}

Layout.defaultProps = {
  constrainWidth: true,
}

export default Layout
