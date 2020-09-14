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

        <video width="750" height="500" controls>
          <source
            src="https://aaron-and-amanda.s3.amazonaws.com/video/Aaron+and+Amanda+Wedding+Video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </Layout>
  )
}

export default Video
