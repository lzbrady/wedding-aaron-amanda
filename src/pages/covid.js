import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import commonStyles from "../styles/common.module.css"

const Covid = () => {
  return (
    <Layout>
      <SEO title="COVID Policy" />
      <div>
        <h1 className={commonStyles.pageTitle}>
          COVID-19 Policies and Procedures
        </h1>
      </div>
    </Layout>
  )
}

export default Covid
