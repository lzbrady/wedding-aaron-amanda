import React from "react"
import styled from "styled-components"

export default function AnnouncementBanner({ isHtml, message }) {
  return (
    <Banner>
      {isHtml ? (
        <BannerMessage dangerouslySetInnerHTML={{ __html: message }} />
      ) : (
        <BannerMessage>{message}</BannerMessage>
      )}
    </Banner>
  )
}

const Banner = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #df9db6;
  padding: 10px;
  text-align: center;

  :hover {
    background-color: #cc7898;
  }
`

const BannerMessage = styled.p`
  margin: 0px;
  color: black;
  text-decoration: underline;
`
