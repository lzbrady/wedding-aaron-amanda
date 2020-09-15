import React from "react"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Video = () => {
  return (
    <Layout>
      <SEO title="Video" />
      <div>
        <h1 className={commonStyles.pageTitle}>Our Wedding Video</h1>

        <ReactPlayer
          url="https://www.youtube.com/watch?v=1RfiO0_PxOc&feature=youtu.be"
          controls
          width="100%"
          style={{ margin: "auto", maxWidth: "640px" }}
        />
      </div>
    </Layout>
  )
}

export default Video
